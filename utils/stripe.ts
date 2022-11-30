import { config } from "https://deno.land/std@0.166.0/dotenv/mod.ts";
import Stripe from "https://esm.sh/stripe@11.1.0"


export const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"), {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

