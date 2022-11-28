import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { signal, computed } from "@preact/signals";
import { JSX } from "preact";
import type {
  loadStripe,
  StripeElements,
} from "https://esm.sh/@stripe/stripe-js@1.44.1";
import { useEffect, useRef } from "preact/hooks";

const validate = z.string().email();
const email = signal("");
const validEmail = computed(() => validate.safeParse(email.value).success);
function EmailInput() {
  return (
    <div class="">
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
          autofocus
          class={`${
            validEmail.value
              ? "focus:border-green-300 focus:outline-green-300 focus:ring-green-300"
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
      } transition-all duration-300 overflow-hidden`}
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
  console.log({ props })
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
          <div ref={paymentElementRef}></div>
        </Transition>
        {/* <Transition> */}
        {/* </Transition> */}
        {/* <div class="col-span-full"> */}
        {/*   <label */}
        {/*     for="name-on-card" */}
        {/*     class="block text-sm font-medium text-gray-700" */}
        {/*   > */}
        {/*     Name on card */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       id="name-on-card" */}
        {/*       name="name-on-card" */}
        {/*       autocomplete="cc-name" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-full"> */}
        {/*   <label */}
        {/*     for="card-number" */}
        {/*     class="block text-sm font-medium text-gray-700" */}
        {/*   > */}
        {/*     Card number */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       id="card-number" */}
        {/*       name="card-number" */}
        {/*       autocomplete="cc-number" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-8 sm:col-span-9"> */}
        {/*   <label */}
        {/*     for="expiration-date" */}
        {/*     class="block text-sm font-medium text-gray-700" */}
        {/*   > */}
        {/*     Expiration date (MM/YY) */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       name="expiration-date" */}
        {/*       id="expiration-date" */}
        {/*       autocomplete="cc-exp" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-4 sm:col-span-3"> */}
        {/*   <label for="cvc" class="block text-sm font-medium text-gray-700"> */}
        {/*     CVC */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       name="cvc" */}
        {/*       id="cvc" */}
        {/*       autocomplete="csc" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-full"> */}
        {/*   <label for="address" class="block text-sm font-medium text-gray-700"> */}
        {/*     Address */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       id="address" */}
        {/*       name="address" */}
        {/*       autocomplete="street-address" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-full sm:col-span-4"> */}
        {/*   <label for="city" class="block text-sm font-medium text-gray-700"> */}
        {/*     City */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       id="city" */}
        {/*       name="city" */}
        {/*       autocomplete="address-level2" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-full sm:col-span-4"> */}
        {/*   <label for="region" class="block text-sm font-medium text-gray-700"> */}
        {/*     State / Province */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       id="region" */}
        {/*       name="region" */}
        {/*       autocomplete="address-level1" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        {/* <div class="col-span-full sm:col-span-4"> */}
        {/*   <label */}
        {/*     for="postal-code" */}
        {/*     class="block text-sm font-medium text-gray-700" */}
        {/*   > */}
        {/*     Postal code */}
        {/*   </label> */}
        {/*   <div class="mt-1"> */}
        {/*     <input */}
        {/*       type="text" */}
        {/*       id="postal-code" */}
        {/*       name="postal-code" */}
        {/*       autocomplete="postal-code" */}
        {/*       class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}
      </div>

      {/* <div class="mt-6 flex space-x-2"> */}
      {/*   <div class="flex h-5 items-center"> */}
      {/*     <input */}
      {/*       id="same-as-shipping" */}
      {/*       name="same-as-shipping" */}
      {/*       type="checkbox" */}
      {/*       checked */}
      {/*       class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <label for="same-as-shipping" class="text-sm font-medium text-gray-900"> */}
      {/*     Billing address is the same as shipping address */}
      {/*   </label> */}
      {/* </div> */}

      <Transition>
        <>
          <button
            type="submit"
            class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Pay {props.amount}
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
