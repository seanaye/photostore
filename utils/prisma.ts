import { PrismaClient } from "../generated/client/deno/edge.ts";

const url = Deno.env.get("DATA_PROXY_URL");
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url,
    },
  },
});
export { Prisma } from "../generated/client/deno/edge.ts";
