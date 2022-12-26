import { Handlers, PageProps } from "$fresh/server.ts";
import { PlainLayout } from "../components/Layout.tsx";
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
    <PlainLayout url={props.url} cookies={props.data.cookies}>
      <PhotoGrid photos={props.data.images} />
    </PlainLayout>
  );
}
