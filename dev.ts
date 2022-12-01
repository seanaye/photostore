#!/usr/bin/env -S deno run -A --watch=static/,routes/

import "./dotenv.ts"
import dev from "$fresh/dev.ts";
import { config } from "https://deno.land/std@0.166.0/dotenv/mod.ts";

console.log({ env: await config({ export: true }) });

await dev(import.meta.url, "./main.ts");
