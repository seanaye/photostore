import { S3 } from "https://deno.land/x/aws_api@v0.7.0/services/s3/mod.ts";
import { getSignedUrl } from "https://raw.githubusercontent.com/mashaal/aws_s3_presign/mashaal-patch-1/mod.ts";
import { ApiFactory } from "https://deno.land/x/aws_api@v0.7.0/client/mod.ts";
import { config } from "https://deno.land/std@0.166.0/dotenv/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { prisma } from "../../utils/prisma.ts";
import * as zip from "https://deno.land/x/zipjs@v2.6.57/index.js";

const envVars = await config();

const configData = {
  endpoint: "https://nyc3.digitaloceanspaces.com",
  accessKeyId: envVars.SPACES_KEY,
  awsSecretKey: envVars.SPACES_SECRET,
  region: "us-east-1",
};

const archiveName = "download";

const s3 = new ApiFactory({
  fixedEndpoint: configData.endpoint,
  region: configData.region,
  credentials: {
    awsAccessKeyId: configData.accessKeyId,
    awsSecretKey: configData.awsSecretKey,
  },
}).makeNew(S3);

function presignGetObject(bucket: string, key: string) {
  return getSignedUrl({
    accessKeyId: configData.accessKeyId,
    secretAccessKey: configData.awsSecretKey,
    region: configData.region,
    endpoint: new URL(configData.endpoint).hostname,
    bucketName: bucket,
    objectPath: `/${key}`,
  });
}

const getUrlEnding = (u: string) =>
  new URL(u).pathname.split("/").at(-1) ?? "photo.png";

async function createFileEntry(u: string) {
  console.log(u);
  const filename = getUrlEnding(u);
  return {
    res: await fetch(presignGetObject("photostore", filename)),
    filename,
  };
}

export const handler: Handlers = {
  async GET(req, ctx) {
    try {
      const cart = await prisma.cart.findFirstOrThrow({
        where: {
          cartIdentifier: {
            equals: decodeURIComponent(ctx.params.id),
          },
        },
        select: {
          purchases: {
            select: {
              photo: {
                select: {
                  fullUrl: true,
                  rawUrl: true,
                },
              },
            },
          },
        },
      });

      const responses = await Promise.all(
        cart.purchases.flatMap((p) => {
          return [
            createFileEntry(p.photo.rawUrl),
            createFileEntry(p.photo.fullUrl),
          ];
        })
      );

      const zipFileStream = new TransformStream();
      const zipWriter = new zip.ZipWriter(zipFileStream.writable, {
        bufferedWrite: true,
      });

      const response = new Response(zipFileStream.readable, {
        headers: {
          "Content-Type": "application/zip",
          "Content-Disposition": `attachment; filename="${archiveName}.zip"`,
        },
      });

      Promise.all(
        responses.map(async (data) => {
          if (!data.res.body || !data.res.ok)
            throw new Error(await data.res.text());
          return zipWriter
            .add(`${archiveName}/${data.filename}`, data.res.body)
            .catch((e: Error) => {
              if (e.message !== zip.ERR_DUPLICATED_NAME) {
                throw e;
              }
            });
        })
      );
      zipWriter.close();
      return response;
    } catch (e) {
      console.log(e);
      return ctx.renderNotFound();
    }
  },
};
