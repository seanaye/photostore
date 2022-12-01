import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { LoadingSpinner } from "../components/LoadingSpinner.tsx";
import { Stripe } from "../utils/stripe.ts";

interface Props {
  paymentIntentId: string;
  initState: string;
}

export default function CheckoutStatus(props: Props) {
  const status = useSignal(props.initState);
  const state = useSignal(0);

  useEffect(() => {
    const source = new EventSource(
      `/api/stripe/listen?${new URLSearchParams({
        payment_intent: props.paymentIntentId,
      }).toString()}`
    );
    const updateState = () => {
      state.value = source.readyState;
    };
    source.addEventListener("message", (e) => {
      const message = JSON.parse(e.data);
      const msgStatus: Stripe.PaymentIntent.Status = message.status;
      status.value = msgStatus;
      if (msgStatus === "succeeded" || msgStatus === "canceled") {
        source.close();
      }
    });
    source.addEventListener("message", updateState);
    source.addEventListener("error", updateState);
    source.addEventListener("open", updateState);

    return () => {
      source.close();
    };
  }, []);

  return (
    <div>
      {status.value}
      {state.value === 1 && <LoadingSpinner />}
    </div>
  );
}
