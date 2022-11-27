import { Handlers } from "$fresh/server.ts";
import { prisma } from "../../utils/prisma.ts";
import * as zip from "https://deno.land/x/zipjs@v2.6.57/index.js";
import { getUrlEnding, presignGetObject } from "../../utils/s3.ts";


const archiveName = "download";



async function createFileEntry(u: string) {
  console.log(u);
  const filename = getUrlEnding(u);
  return {
    res: await fetch(presignGetObject(filename)),
    filename,
  };
}

export const handler: Handlers = {
  async GET(_req, ctx) {
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
