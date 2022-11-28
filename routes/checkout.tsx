import { Handlers, PageProps } from "$fresh/server.ts";
import { prisma } from "../utils/prisma.ts";
import CheckoutForm from "../islands/CheckoutForm.tsx";
import { Cookies } from "./_middleware.ts";
import { DefaultLayout } from "../components/DefaultLayout.tsx";
import { getCartJson } from "../store/cart.ts";
import { stripe } from "../utils/stripe.ts";
import { config } from "https://deno.land/std@0.166.0/dotenv/mod.ts";

const envVars = await config();
const stripePubKey = envVars.STRIPE_KEY;

type States =
  | { s: "CartEmpty" }
  | { s: "CartFull"; clientSecret: string; amount: number };

export const handler: Handlers<Cookies & States, Cookies> = {
  async GET(req, ctx) {
    const cartJs = getCartJson(ctx.state.cookies);
    if (cartJs.length === 0) {
      return ctx.render({ ...ctx.state, s: "CartEmpty" });
    }
    const res = await prisma.photo.findMany({
      where: {
        id: {
          in: cartJs,
        },
      },
      select: {
        price: true,
      },
    });

    // sum prices
    const amount = res.reduce((acc, cur) => acc + cur.price, 0);

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "cad",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    if (!intent.client_secret) {
      throw new Error("No client secret returned");
    }

    return ctx.render({
      ...ctx.state,
      s: "CartFull",
      clientSecret: intent.client_secret,
      amount,
    });
  },
};

function Content(props: PageProps<States & Cookies>) {
  if (props.data.s === "CartEmpty") {
    return (
      <span>
        Your cart is empty <a href="/photo">back to gallery</a>
      </span>
    );
  }
  return (
    <CheckoutForm
      clientSecret={props.data.clientSecret}
      stripePubKey={stripePubKey}
      amount={props.data.amount}
      url={props.url.toString()}
    />
  );
}

export default function Checkout(props: PageProps<States & Cookies>) {
  return (
    <DefaultLayout cookies={props.data.cookies} url={props.url} render>
      <div class="bg-gray-200 px-12 py-6 rounded">
        <h2 class="text-lg pb-4">Checkout</h2>
        <Content {...props} />
      </div>
    </DefaultLayout>
  );
}
