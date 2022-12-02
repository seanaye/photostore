import { EmailInput } from "../components/EmailInput.tsx";
import { signal, useComputed, useSignal } from "@preact/signals";
import { createEmailStore } from "../store/email.ts";
import { Transition } from "../components/Transition.tsx";

const loading = signal(false);
const { email, validEmail } = createEmailStore();

export interface CalDate {
  year: number;
  month: number;
  day: number;
}

const pickingDate = signal(false);
export default function Subscribe(props: { initDate: CalDate }) {
  const date = useSignal(props.initDate);
  const dateStr = useComputed(() => `${date.value.year}-${date.value.month}-${date.value.day}`)
  return (
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Photos from{" "}
          {dateStr.value}
        </h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>Get notifified when your photos are done being processed</p>
        </div>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Looking for photos from another day?{" "}
            <button onClick={() => (pickingDate.value = true)}>
              Change date
            </button>
          </p>
        </div>
        <form class="mt-5 sm:flex sm:items-start sm:flex-col">
          <Transition show={pickingDate}>
            <div class={`w-full sm:max-w-xs`}>
              <label for="date" class="sr-only">
                Date
              </label>
              <input type="date" value={dateStr.value} />
            </div>
          </Transition>
          <div class="w-full sm:max-w-xs">
            <label for="email" class="sr-only">
              Email
            </label>
            <EmailInput
              readonly={loading}
              email={email}
              validEmail={validEmail}
            />
          </div>
          <button
            type="submit"
            class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
