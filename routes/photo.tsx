import { Handlers, PageProps } from "$fresh/server.ts";
import { DefaultLayout } from "../components/DefaultLayout.tsx";
import { PhotoGrid } from "../components/PhotoGrid.tsx";
import { prisma } from "../utils/prisma.ts";
import { presignUrl } from "../utils/s3.ts";
import { Cookies } from "./_middleware.ts";

interface Loaded {
  images: Array<{
    previewUrl: string;
    id: number;
  }>;
}

const defaultAlbumId = 1;

export const handler: Handlers<Loaded & Cookies, Cookies> = {
  async GET(_, ctx) {
    const album = await prisma.album.findUnique({
      where: {
        id: defaultAlbumId,
      },
      select: {
        photos: {
          select: {
            photo: {
              select: {
                previewUrl: true,
                id: true,
              },
            },
          },
        },
      },
    });
    if (!album) {
      return ctx.renderNotFound();
    }

    return ctx.render({
      ...ctx.state,
      images: album.photos.map(({ photo: { previewUrl, id } }) => ({
        previewUrl: presignUrl(previewUrl),
        id,
      })),
    });
  },
};

export default function Home(props: PageProps<Loaded & Cookies>) {
  return (
    <DefaultLayout url={props.url} render={false} cookies={props.data.cookies}>
      <div class="w-full min-h-screen flex justify-center items-center">
        <div class="w-full px-12 md:px-3 lg:px-6 pointer-events-auto">
          <PhotoGrid photos={props.data.images} />
        </div>
      </div>
    </DefaultLayout>
  );
}
