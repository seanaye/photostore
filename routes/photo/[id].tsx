import { prisma } from "../../utils/prisma.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { getUrlEnding, presignUrl } from "../../utils/s3.ts";
import { DefaultLayout } from "../../components/DefaultLayout.tsx";
import { getCookies } from "https://deno.land/std@0.166.0/http/cookie.ts";
import AddOrRemoveCart from "../../islands/AddOrRemoveToCart.tsx";

interface Image {
  previewUrl: string;
  filename: string;
  id: number;
  price: number;
  cookies: Record<string, string>;
}

const n = z.preprocess(Number, z.number().gt(0));

export const handler: Handlers<Image> = {
  async GET(req, ctx) {
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
      cookies: getCookies(req.headers),
    });
  },
};
export default function Photo(props: PageProps<Image>) {
  return (
    <DefaultLayout render={false} url={props.url}>
      <div class="px-8 flex flex-col w-full">
        <div
          style={{ aspectRatio: "4/3" }}
          class="flex justify-center items-center"
        >
          <img src={`/api/preview/${props.data.id}`} class="w-full flex-grow" />
        </div>
        <div class="flex flex-row justify-end">
          <span class="isolate inline-flex rounded-md shadow-sm">
            <a
              class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              href={`/api/preview/${props.data.id}`}
            >
              <span class="px-2">Download Preview</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
            <AddOrRemoveCart cookies={props.data.cookies} id={props.data.id} />
            <button
              type="button"
              class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              Days
            </button>
          </span>
        </div>
      </div>
    </DefaultLayout>
  );
}
