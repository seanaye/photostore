
import { PrismaClient } from "../generated/client/deno/edge.ts"
import { config } from "https://deno.land/std/dotenv/mod.ts"

const envVars = await config()

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATA_PROXY_URL
    }
  }
})
export { Prisma } from "../generated/client/deno/edge.ts"

