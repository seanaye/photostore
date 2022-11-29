import { prisma } from "../../utils/prisma.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { getUrlEnding, presignUrl } from "../../utils/s3.ts";
import { DefaultLayout } from "../../components/DefaultLayout.tsx";
import AddOrRemoveCart from "../../islands/AddOrRemoveToCart.tsx";
import DownloadButton from "../../islands/Download.tsx";
import ShareButton from "../../islands/ShareButton.tsx";
import FullscreenImg from "../../islands/FullscreenImg.tsx";
import { Cookies } from "../_middleware.ts";

interface Image {
  previewUrl: string;
  filename: string;
  id: number;
  price: number;
  cookies: Record<string, string>;
}

const n = z.preprocess(Number, z.number().gt(0));

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
      ...ctx.state,
    });
  },
};
export default function Photo(props: PageProps<Image & Cookies>) {
  const url = `/api/preview/${props.data.id}`;
  return (
    <DefaultLayout render={false} url={props.url} cookies={props.data.cookies}>
      <div class="w-full min-h-screen flex justify-center items-center">
        <div class="px-8 flex flex-col w-full">
          <div
            style={{ aspectRatio: "4/3" }}
            class="flex justify-center items-center"
          >
            <FullscreenImg src={url} class="w-full flex-grow cursor-pointer" />
          </div>
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
    </DefaultLayout>
  );
}
