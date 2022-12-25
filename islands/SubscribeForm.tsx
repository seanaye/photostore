import { EmailInput } from "../components/EmailInput.tsx";
import { signal, useComputed, useSignal } from "@preact/signals";
import { createEmailStore } from "../store/email.ts";
import { Transition } from "../components/Transition.tsx";

const loading = signal(false);
const { email, validEmail } = createEmailStore();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const pickingDate = signal(false);
export default function Subscribe(props: { initDate: string }) {
  const date = useSignal(new Date(props.initDate));
  const day = useComputed(() => `0${date.value.getDate()}`.slice(-2));
  const dateStr = useComputed(
    () =>
      `${date.value.getFullYear()}-${date.value.getMonth() + 1}-${day.value}`
  );
  return (
    <>
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Photos from {months.at(date.value.getMonth())} {date.value.getDate()}
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
            <input
              type="date"
              value={dateStr.value}
              onChange={(e) => {
                const d = new Date();
                const [year, month, day] = e.currentTarget.value
                  .split("-")
                  .map((s) => parseInt(s));
                d.setFullYear(year, month - 1, day);
                date.value = d;
              }}
            />
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
          class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
        >
          Subscribe
        </button>
      </form>
    </>
  );
}
