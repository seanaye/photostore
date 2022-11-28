import { getCookies } from "https://deno.land/std@0.166.0/http/cookie.ts"
import { MiddlewareHandlerContext } from "https://deno.land/x/fresh@1.1.2/server.ts"

export interface Cookies {
  cookies: Record<string, string>
  email: string
}

export async function handler(req: Request, ctx: MiddlewareHandlerContext<Cookies>) {
  ctx.state.cookies = getCookies(req.headers)
  return await ctx.next()
}
