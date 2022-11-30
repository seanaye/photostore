
import { PrismaClient } from "../generated/client/deno/edge.ts"

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get("DATA_PROXY_URL")
    }
  }
})
export { Prisma } from "../generated/client/deno/edge.ts"

