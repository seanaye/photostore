import { Handlers } from "$fresh/server.ts";
import { PaymentIntent } from "https://esm.sh/v98/@stripe/stripe-js@1.44.1/types/index.d.ts";
import { sendEMailTemplate } from "../../../utils/mailgun.ts";
import { prisma } from "../../../utils/prisma.ts";
import { stripe, crpytoProvider } from "../../../utils/stripe.ts";

const webhookSecret = Deno.env.get("WEBHOOK_SECRET");

export const handler: Handlers = {
  async POST(req, ctx) {
    console.log(req.headers);
    const sig = req.headers.get("stripe-signature");
    console.log({ sig });
    if (sig == null || !webhookSecret) {
      console.log("Empty stripe signature");
      return new Response(`Empty stripe-signature`, {
        status: 400,
      });
    }
    let event: ReturnType<typeof stripe["webhooks"]["constructEvent"]>;

    try {
      const text = await req.text();
      event = await stripe.webhooks.constructEventAsync(
        text,
        sig,
        webhookSecret,
        undefined,
        crpytoProvider
      );
    } catch (e) {
      console.error(e);
      return new Response(`Webhook Error: ${e.message}`, {
        status: 400,
      });
    }

    // get the payment intent object if it exists
    if (event.type.includes("payment_intent")) {
      const paymentIntent = event.data.object as PaymentIntent;
      console.log(paymentIntent);
      new BroadcastChannel(paymentIntent.id).postMessage(paymentIntent.status);
    }

    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as PaymentIntent & {
          metadata: { cart: string };
        };

        if (!paymentIntent.receipt_email) {
          return new Response(`No email sent in body`, {
            status: 400,
          });
        }
        const { cartIdentifier } = await createCartIdentifier(
          JSON.parse(paymentIntent.metadata.cart),
          paymentIntent.receipt_email
        );
        await sendEMailTemplate({
          to: [paymentIntent.receipt_email],
          text: "download",
          link: new URL(`/api/download/${cartIdentifier}`, req.url).toString(),
          subject: "Photo Receipt",
        });
      }
    }
    return new Response("ok");
  },
};

function genRandHex(len: number): string {
  const arr = crypto.getRandomValues(new Uint8Array(len));
  return arr.reduce((acc, cur) => acc + ("0" + cur.toString(16)).slice(-2), "");
}

async function createCartIdentifier(cart: number[], email: string) {
  const cartIdentifier = genRandHex(12);
  return await prisma.cart.create({
    select: {
      cartIdentifier: true,
    },
    data: {
      email: {
        connectOrCreate: {
          where: {
            email,
          },
          create: {
            email,
          },
        },
      },
      cartIdentifier,
      purchases: {
        createMany: {
          data: cart.map((p) => ({ photoId: p })),
        },
      },
    },
  });
}
