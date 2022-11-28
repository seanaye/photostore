import { config } from "https://deno.land/std@0.166.0/dotenv/mod.ts";
import Stripe from "npm:stripe@11.1.0"


const envVars = await config();
export const stripe = new Stripe(envVars.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

