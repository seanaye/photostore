import { Handlers } from "$fresh/server.ts";
import { getCartJson } from "../../store/cart.ts";
import { prisma } from "../../utils/prisma.ts";
import { Cookies } from "../_middleware.ts";

async function getCartData(ids: number[]) {
  if (ids.length === 0) return []
  return await prisma.photo.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    select: {
      price: true,
      id: true,
    },
  });
}

export type CartData = Awaited<ReturnType<typeof getCartData>>;

export const handler: Handlers<never, Cookies> = {
  async GET(_, ctx) {
    const res = await getCartData(getCartJson(ctx.state.cookies));

    return new Response(JSON.stringify(res), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
