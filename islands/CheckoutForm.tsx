import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { signal, computed } from "@preact/signals";
import { JSX } from "preact";
import type {
  loadStripe,
  StripeElements,
} from "https://esm.sh/@stripe/stripe-js@1.44.1";
import { useEffect, useRef } from "preact/hooks";
import { LoadingSpinner } from "../components/LoadingSpinner.tsx";
import { formatCentsToCad } from "../utils/format.ts";

const validate = z.string().email();
const email = signal("");
const validEmail = computed(() => validate.safeParse(email.value).success);
function EmailInput() {
  return (
    <div class="px-2">
      <label
        for="email-address"
        class="block text-sm font-medium text-gray-700"
      >
        Email address
      </label>
      <div class="mt-1">
        <input
          type="email"
          id="email-address"
          name="email-address"
          autocomplete="email"
          value={email.value}
          onInput={(e) => {
            email.value = e.currentTarget.value;
          }}
          readonly={processing.value}
          autofocus
          class={`${
            validEmail.value
              ? "border-green-300 focus:border-green-300 focus:outline-green-300 focus:ring-green-300"
              : "border-red-300 outline-red-300 ring-red-300"
          } block w-full rounded-md shadow-sm sm:text-sm`}
        />
      </div>
    </div>
  );
}

function Transition(props: { children: JSX.Element }) {
  return (
    <div
      class={`${
        validEmail.value ? "max-h-screen" : "max-h-0"
      } transition-all duration-300 overflow-hidden w-72`}
    >
      {props.children}
    </div>
  );
}

const stripe = signal<null | Awaited<ReturnType<typeof loadStripe>>>(null);
const elementsSignal = signal<null | StripeElements>(null);
const processing = signal(false);
const errorMessage = signal("");
const done = () => (processing.value = false);
async function onSubmit(
  e: JSX.TargetedEvent<HTMLFormElement, Event>,
  url: string
) {
  e.preventDefault();
  processing.value = true;
  const s = stripe.peek();
  const elems = elementsSignal.peek();
  if (!s || !elems) return done();

  const { error } = await s.confirmPayment({
    elements: elems,
    confirmParams: {
      receipt_email: email.value,
      return_url: url,
    },
  });

  if (error.type === "card_error" || error.type === "validation_error") {
    errorMessage.value = error.message ?? "";
  } else {
    errorMessage.value = "An unexpected error occurred";
  }
  return done();
}

export default function CheckoutForm(props: {
  clientSecret: string;
  stripePubKey: string;
  amount: number;
  url: string;
}) {
  console.log({ props });
  const paymentElementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (stripe.peek()) return;
    import("https://esm.sh/@stripe/stripe-js@1.44.1")
      .then(({ loadStripe }) => loadStripe(props.stripePubKey))
      .then((s) => {
        if (!s || !paymentElementRef.current) return;
        stripe.value = s;
        const elements = s.elements({
          appearance: { theme: "stripe" },
          clientSecret: props.clientSecret,
        });
        elements.create("payment").mount(paymentElementRef.current);
        elementsSignal.value = elements;
      });
  }, []);

  return (
    <form onSubmit={(e) => onSubmit(e, props.url)}>
      <div class="flex flex-col gap-4">
        <EmailInput />
        <Transition>
          <div class="p-2" ref={paymentElementRef}></div>
        </Transition>
      </div>
      <Transition>
        <>
          <button
            type="submit"
            class="mt-6 h-12 w-full inline-flex justify-center items-center gap-4 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Pay{" "}
            {formatCentsToCad(props.amount)}
            {processing.value && (
              <div class="h-8 w-8">
                <LoadingSpinner />
              </div>
            )}
          </button>

          <p class="mt-6 flex justify-center text-sm font-medium text-gray-500">
            <svg
              class="mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clip-rule="evenodd"
              />
            </svg>
            Payments handled by Stripe
          </p>
        </>
      </Transition>
    </form>
  );
}
