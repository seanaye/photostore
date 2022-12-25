import { Signal } from "@preact/signals";

export function EmailInput(props: {
  readonly: Signal<boolean>;
  email: Signal<string>;
  validEmail: Signal<boolean>;
  class?: string
}) {
  return (
    <div class={props.class ?? ""}>
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
          value={props.email.value}
          onInput={(e) => {
            props.email.value = e.currentTarget.value;
          }}
          readonly={props.readonly.value}
          autofocus
          class={`${
            props.validEmail.value
              ? "border-green-300 focus:border-green-300 focus:outline-green-300 focus:ring-green-300"
              : "border-red-300 outline-red-300 ring-red-300"
          } block w-full rounded-md shadow-sm sm:text-sm`}
        />
      </div>
    </div>
  );
}
