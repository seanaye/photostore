import { Handlers } from "$fresh/server.ts";
import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { prisma } from "../../../utils/prisma.ts";
import { getUrlEnding, presignUrl } from "../../../utils/s3.ts";

const n = z.preprocess(Number, z.number().gt(0));

export const handler: Handlers = {
  async GET(_, ctx) {
    const id = n.safeParse(ctx.params.id);
    if (!id.success) {
      return ctx.renderNotFound();
    }
    const img = await prisma.photo.findUnique({
      where: {
        id: id.data,
      },
      select: {
        previewUrl: true,
      },
    });

    if (!img) {
      return ctx.renderNotFound();
    }

    const filename = getUrlEnding(img.previewUrl);
    const res = await fetch(presignUrl(img.previewUrl));
    return new Response(res.body, {
      headers: {
        "Content-Type": res.headers.get("Content-Type") ?? "image/png",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  },
};
