import { getCart } from "../store/cart.ts";
import { computePosition } from "https://esm.sh/@floating-ui/dom@1.0.7";
import { batch, effect, Signal, signal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { CartData } from "../routes/api/cart.ts";
import { LoadingSpinner } from "../components/LoadingSpinner.tsx";
import { formatCentsToCad } from "../utils/format.ts";

interface Props {
  cookies: Record<string, string>;
  url: URL
}

const xy = signal({ x: 0, y: 0 });
const open = signal(false);

const tooltipSelector = "dropdown";
const buttonSelector = "activator";

const fetching = signal(false);
const fullCart = signal<CartData>([]);
let controller = new AbortController();
function CartContent(props: { cart: Signal<number[]>; url: URL }) {
  useEffect(() => {
    return effect(() => {
      // just need to subscribe, the api parses the cookie
      props.cart.value;
      controller.abort();
      // prevent multiple fetches
      // abortController.abort();
      controller = new AbortController();
      fetching.value = true;

      const u = new URL(props.url).pathname = "/api/cart"

      fetch(u.toString(), {
        signal: controller.signal,
      })
        .then(
          (res) => res.json(),
          (e) => console.log(e)
        )
        .then((data: CartData) => {
          batch(() => {
            fetching.value = false;
            fullCart.value = data;
          });
        });
    });
  }, []);

  return (
    <div class="w-84">
      <h2 class="sr-only">Cart </h2>

      <form class="mx-auto max-w-2xl px-4">
        {fetching.value && <LoadingSpinner />}
        <ul role="list" class="divide-y divide-gray-200">
          {fullCart.value.map((i) => (
            <li class="py-6">
              <a href={`/photo/${i.id}`} class="flex items-center">
                <img
                  src={`/api/preview/${i.id}`}
                  alt="Image Preview"
                  class="h-16 w-16 flex-none rounded-md border border-gray-200"
                />
                <div class="ml-4 flex-auto">
                  <h3 class="font-medium text-gray-900">{formatCentsToCad(i.price)}</h3>
                  <p class="text-gray-500">
                    Includes full quality and RAW file
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <a
          type="submit"
          href={`/checkout`}
          class={`${
            props.cart.value.length === 0
              ? "pointer-events-none bg-gray-300"
              : "bg-indigo-600"
          } w-full rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50`}
        >
          Checkout
        </a>
      </form>
    </div>
  );
}

export default function CartDropdown(props: Props) {
  const cart = getCart(props.cookies);
  console.log({ cart })
  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!tooltipRef.current || !buttonRef.current) return;
    computePosition(buttonRef.current, tooltipRef.current, {
      placement: "bottom",
    }).then((data) => {
      xy.value = { x: data.x, y: data.y };
    });
    // re-run when loaded contents changes
  }, [fullCart.value]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if ((e.target as Element).closest(`#${buttonSelector}`)) return;
      if (!(e.target as Element).closest(`#${tooltipSelector}`)) {
        open.value = false;
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div
      class={`${
        cart.cart.value.length === 0 ? "opacity-0" : "opacity-100"
      } transition-all duration-300 flow-root text-sm lg:relative`}
    >
      <button
        type="button"
        class="group -m-2 flex items-center py-2 px-4 rounded-lg bg-gray-200"
        aria-expanded="false"
        onClick={() => (open.value = !open.peek())}
        ref={buttonRef}
        id={buttonSelector}
      >
        <svg
          class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart.cart.value.length}
        </span>
        <span class="sr-only">items in cart, view bag</span>
      </button>

      <div
        ref={tooltipRef}
        class={`${
          open.value ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300 absolute w-max mt-px bg-white py-6 shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5`}
        style={{ left: `${xy.value.x}px`, top: `${xy.value.y}px` }}
        id={tooltipSelector}
      >
        <CartContent cart={cart.cart} url={props.url} />
      </div>
    </div>
  );
}
