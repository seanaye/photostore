import S from "https://esm.sh/stripe@11.1.0";
import type Stripe from "npm:stripe@11.1.0";

export const stripe: Stripe = new S(Deno.env.get("STRIPE_SECRET_KEY"), {
  apiVersion: "2022-11-15",
  httpClient: S.createFetchHttpClient(),
});

export const crpytoProvider: Stripe.CryptoProvider =
  S.createSubtleCryptoProvider();


export { Stripe }
