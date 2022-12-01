import { ApiFactory } from "https://deno.land/x/aws_api@v0.7.0/client/mod.ts";
import { S3 } from "https://deno.land/x/aws_api@v0.7.0/services/s3/mod.ts";
import { getSignedUrl } from "https://raw.githubusercontent.com/mashaal/aws_s3_presign/mashaal-patch-1/mod.ts";

const configData = {
  endpoint: "https://nyc3.digitaloceanspaces.com",
  accessKeyId: Deno.env.get("SPACES_KEY") ?? "",
  awsSecretKey: Deno.env.get("SPACES_SECRET") ?? "",
  region: "us-east-1",
};

const s3 = new ApiFactory({
  fixedEndpoint: configData.endpoint,
  region: configData.region,
  credentials: {
    awsAccessKeyId: configData.accessKeyId,
    awsSecretKey: configData.awsSecretKey,
  },
}).makeNew(S3);

const bucket = "photostore";

export function presignGetObject(key: string) {
  const url = new URL(
    getSignedUrl({
      accessKeyId: configData.accessKeyId,
      secretAccessKey: configData.awsSecretKey,
      region: configData.region,
      endpoint: new URL(configData.endpoint).hostname,
      bucketName: bucket,
      objectPath: `/${key}`,
    })
  );
  // sign the actual url then replace with cdn
  url.hostname = url.hostname.replace(
    "nyc3.digitaloceanspaces.com",
    "nyc3.cdn.digitaloceanspaces.com"
  );
  return url.toString();
}

export const getUrlEnding = (u: string) =>
  new URL(u).pathname.split("/").at(-1) ?? "photo.png";

export function presignUrl(url: string) {
  return presignGetObject(getUrlEnding(url));
}
