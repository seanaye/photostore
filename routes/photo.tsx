import { Handlers, PageProps } from "$fresh/server.ts";
import { DefaultLayout } from "../components/DefaultLayout.tsx";
import { PhotoGrid } from "../components/PhotoGrid.tsx";
import { prisma } from "../utils/prisma.ts";
import { presignUrl } from "../utils/s3.ts";

interface Loaded {
  images: Array<{
    previewUrl: string;
    id: number;
  }>;
}

const defaultAlbumId = 1;

export const handler: Handlers<Loaded> = {
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
      images: album.photos.map(({ photo: { previewUrl, id } }) => ({
        previewUrl: presignUrl(previewUrl),
        id,
      })),
    });
  },
};

export default function Home(props: PageProps<Loaded>) {
  return (
    <DefaultLayout url={props.url} render={false}>
      <div class="w-full px-12 md:px-3 lg:px-6">
        <PhotoGrid photos={props.data.images} />
      </div>
    </DefaultLayout>
  );
}
