import { computed, signal } from "@preact/signals";
import { getCookies } from "https://deno.land/std@0.166.0/http/cookie.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

function safeParse<T>(s: string | null | undefined, def: T) {
  if (!s) return def;
  try {
    return JSON.parse(s) as T;
  } catch {
    return def;
  }
}

// returns the cookie with the given name,
// or undefined if not found
function getCookie(name: string) {
  if (!IS_BROWSER) return;
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
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
      console.log(val);
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

let store: ReturnType<typeof createStore> | null = null;
export function getCart(cookieObj: Record<string, string>) {
  if (store) {
    return store;
  }
  const strVal = decodeURIComponent(cookieObj["cart"] ?? "");
  store = createStore(safeParse(strVal, []));
  return store;
}
