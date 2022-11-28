import { useRef } from "preact/hooks";
import { signal } from "@preact/signals";
import { copy, share } from "../utils/share.ts";

interface Props {
  url: string;
  title: string;
  text: string;
  class?: string;
}

const copied = signal(false);

function fallback(elem: HTMLInputElement) {
  copy(elem).then(() => {
    (copied.value = true),
      setTimeout(() => {
        copied.value = false;
      }, 3000);
  });
}

function Content() {
  return (
    <>
      <span class="px-2">Share Link</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
        />
      </svg>
    </>
  );
}

export default function ShareButton(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <button
        class={`${
          props.class ?? ""
        } relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
        onClick={() => {
          share(props, () => inputRef.current && fallback(inputRef.current));
        }}
      >
        {copied.value ? <span class="px-2">Copied !</span> : <Content />}
      </button>
      <input ref={inputRef} class="hidden" value={props.url} type="text" />
    </>
  );
}
