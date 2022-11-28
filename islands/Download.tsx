import { download, fileFromUrl, share } from "../utils/share.ts";

export default function DownloadButton(props: {
  url: string;
  title: string;
  text: string;
  class?: string;
}) {
  return (
    <button
      class={`${
        props.class ?? ""
      } relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
      onClick={async () => {
        const files = [await fileFromUrl(props.url)];
        await share(
          {
            files,
            title: props.title,
            text: props.text,
          },
          () => Promise.resolve(download(props.url))
        );
      }}
    >
      <span class="px-2">Download Preview</span>
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
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </button>
  );
}
