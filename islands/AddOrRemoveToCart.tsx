import { getCart } from "../store/cart.ts";

export default function AddOrRemoveCart(props: {
  cookies: Record<string, string>;
  id: number;
}) {
  const store = getCart(props.cookies);
  const alreadyIn = store.cart.value.includes(props.id);
  return (
    <button
      type="button"
      class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      onClick={() => (alreadyIn ? store.remove(props.id) : store.add(props.id))}
    >
      {alreadyIn ? "Remove from cart" : "Add to cart"}
    </button>
  );
}
