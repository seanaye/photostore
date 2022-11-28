import { computed, signal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

function safeParse<T>(s: string | null | undefined, def: T) {
  if (!s) return def;
  try {
    return JSON.parse(s) as T;
  } catch {
    return def;
  }
}

function setCookie(
  name: string,
  value: string,
  options: {
    expires?: Date | string;
    path?: string;
    secure?: boolean;
    samesite?: boolean;
  } = {}
) {
  options = {
    path: "/",
    // add other defaults here if necessary
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}`;

  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;
    const optionValue = options[optionKey as keyof typeof options];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function createStore(initVal: Array<number>) {
  const _cart = signal(new Set(initVal));
  const cart = computed(() => [..._cart.value]);

  function set(update: Set<number>) {
    _cart.value = update;
    if (IS_BROWSER) {
      const val = JSON.stringify(cart.peek());
      setCookie("cart", `${val}`);
    }
  }

  function add(id: number) {
    const cur = _cart.value;
    const curLen = cur.size;
    const next = new Set([...cur, id]);
    if (next.size !== curLen) {
      set(next);
    }
  }

  function remove(id: number) {
    const cur = _cart.value;
    const curLen = cur.size;
    cur.delete(id);
    if (cur.size !== curLen) {
      set(new Set([...cur]));
    }
  }

  return {
    cart,
    add,
    remove,
  };
}

export function getCartJson(cookies: Record<string, string>) {
  const strVal = decodeURIComponent(cookies["cart"] ?? "");
  return safeParse(strVal, [] as number[]);
}

let store: ReturnType<typeof createStore> | null = null;
export function getCart(cookieObj: Record<string, string>) {
  console.log("get cart");
  if (store) {
    return store;
  }
  store = createStore(getCartJson(cookieObj));
  return store;
}
