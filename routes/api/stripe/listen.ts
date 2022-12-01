import { Handlers } from "$fresh/server.ts";
import { stripe } from "../../../utils/stripe.ts";

export const handler: Handlers = {
  async GET(req) {
    const clientSecret = new URL(req.url).searchParams.get(
      "payment_intent"
    );
    if (!clientSecret) {
      return new Response("No client secret sent", { status: 400 });
    }

    const channel = new BroadcastChannel(clientSecret);
    const paymentIntent = await stripe.paymentIntents.retrieve(clientSecret);
    const stream = new ReadableStream({
      start: (controller) => {
        controller.enqueue(
          `data: ${JSON.stringify({ status: paymentIntent.status })}\n\n`
        );
        
        channel.onmessage = (e) => {
          const body = `data: ${JSON.stringify({ status: e.data })}\n\n`;
          controller.enqueue(body);
        };
      },
      cancel: () => {
        channel.close();
      },
    });

    return new Response(stream.pipeThrough(new TextEncoderStream()), {
      headers: {
        "Content-Type": "text/event-stream",
      },
    });
  },
};
