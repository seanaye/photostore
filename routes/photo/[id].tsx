import { prisma } from "../../utils/prisma.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { getUrlEnding, presignUrl } from "../../utils/s3.ts";
import AddOrRemoveCart from "../../islands/AddOrRemoveToCart.tsx";
import DownloadButton from "../../islands/Download.tsx";
import ShareButton from "../../islands/ShareButton.tsx";
import FullscreenImg from "../../islands/FullscreenImg.tsx";
import { Cookies } from "../_middleware.ts";
import { PlainLayout } from "../../components/Layout.tsx";

interface Image {
  previewUrl: string;
  filename: string;
  id: number;
  price: number;
  width: number;
  height: number;
  cookies: Record<string, string>;
}

const n = z.preprocess(Number, z.number().gt(0));


function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const handler: Handlers<Image & Cookies, Cookies> = {
  async GET(_, ctx) {
    const id = n.safeParse(ctx.params.id);
    if (!id.success) {
      return ctx.renderNotFound();
    }
    const res = await prisma.photo.findUnique({
      where: {
        id: id.data,
      },
      select: {
        previewUrl: true,
        price: true,
        id: true,
      },
    });

    if (!res) {
      return ctx.renderNotFound();
    }
    return ctx.render({
      ...res,
      previewUrl: presignUrl(res.previewUrl),
      filename: getUrlEnding(res.previewUrl),
      height: getRandom(100,500),
      width: getRandom(100, 500),
      ...ctx.state,
    });
  },
};
export default function Photo(props: PageProps<Image & Cookies>) {
  const url = `/api/preview/${props.data.id}`;
  return (
    <PlainLayout url={props.url} cookies={props.data.cookies}>
      <div class="w-full h-screen flex justify-center items-center">
        <div class="pointer-events-auto">
          <div class="mx-auto max-w-screen md:max-w-4xl sm:px-6">
            <div class="h-96" >
              <FullscreenImg
                src={url}
                class="h-full cursor-pointer"
                style={{ aspectRatio: `${props.data.width}/${props.data.height}`}}
              />
            </div>
          </div>
          <div class="mx-auto max-w-screen md:max-w-4xl sm:px-6">
            <div class="flex flex-row justify-end">
              <span class="isolate inline-flex rounded-md shadow-sm">
                <DownloadButton
                  url={url}
                  title="Preview Image"
                  text="from seanaye.ca"
                  class="rounded-l-md"
                />
                <ShareButton
                  url={props.url.toString()}
                  title="Sean's Gallery"
                  text="Free preview or buy"
                  class="-ml-px"
                />
                <AddOrRemoveCart
                  cookies={props.data.cookies}
                  id={props.data.id}
                  class="rounded-r-md -ml-px"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </PlainLayout>
  );
}
