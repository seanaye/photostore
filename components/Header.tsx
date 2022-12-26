import { JSX } from "preact/jsx-runtime";
import CartDropdown from "../islands/CartDropdown.tsx";
import { githubUrl, linkedinUrl, twitterUrl } from "../utils/socialUrls.ts";
import { GithubIcon } from "./GithubIcon.tsx";
import { LinkedinIcon } from "./LinkedinIcon.tsx";
import { TwitterIcon } from "./TwitterIcon.tsx";

const iconStyle =
  "text-gray-700 hover:text-blue-500 transition-all duration-300";

const matchHref = (active: boolean) =>
  active ? "font-bold pointer-events-none" : iconStyle;

export function Header(props: { url: URL; cookies: Record<string, string>; class?: string; style?: JSX.HTMLAttributes<HTMLDivElement>["style"] }) {
  return (
    <div class={`grid grid-cols-3 gap-4 relative w-full justify-between h-16 items-center px-6 sticky top-0 left-0 right-0 z-20 ${props.class ?? ""}`} style={props.style}>
      <div class="flex justify-start">
        {/* <div class="flex flex-row flex-shrink bg-gray-200 shadow-lg shadow-gray-900 rounded-lg gap-8 px-4 py-2"> */}
        {/*   <a href="/" class={matchHref(props.url.pathname === "/")}> */}
        {/*     Home */}
        {/*   </a> */}
          {/* <a */}
          {/*   href="/photo" */}
          {/*   class={matchHref(props.url.pathname.startsWith("/photo"))} */}
          {/* > */}
          {/*   Photography */}
          {/* </a> */}
        {/* </div> */}
      </div>
      <div class="flex justify-center">
        {props.url.pathname !== "/checkout" && (
          <CartDropdown cookies={props.cookies} url={props.url} />
        )}
      </div>
      <div class="flex justify-end">
        <div class="flex flex-row flex-shrink bg-gray-200 shadow-lg shadow-gray-900 rounded-lg gap-4 px-4 py-2">
          <a href={githubUrl} target="_blank">
            <GithubIcon class={iconStyle} />
          </a>
          <a href={twitterUrl} target="_blank">
            <TwitterIcon class={iconStyle} />
          </a>
          <a href={linkedinUrl} target="_blank">
            <LinkedinIcon class={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}
