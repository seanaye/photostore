import { JSX } from "preact/jsx-runtime";
import CartDropdown from "../islands/CartDropdown.tsx";
import GameOfLifeCanvas from "../islands/GameOfLifeCanvas.tsx";
import { githubUrl, linkedinUrl, twitterUrl } from "../utils/socialUrls.ts";
import { GithubIcon } from "./GithubIcon.tsx";
import { LinkedinIcon } from "./LinkedinIcon.tsx";
import { TwitterIcon } from "./TwitterIcon.tsx";

const colours = [
  "#282728",
  "#292929",
  "#2B2B2B",
  "#2C2D2D",
  "#2E2F2F",
  "#2F3131",
  "#313333",
  "#323535",
  "#343837",
  "#353A39",
  "#373C3A",
  "#383E3C",
  "#3A403E",
  "#3C4240",
  "#3D4442",
  "#3F4744",
  "#404946",
  "#424B48",
  "#434D4A",
  "#454F4C",
  "#46514D",
  "#48534F",
  "#495551",
  "#4B5853",
  "#4D5A55",
  "#4E5C57",
  "#505E59",
  "#51605B",
  "#53625D",
  "#54645F",
  "#566760",
  "#576962",
  "#596B64",
  "#5A6D66",
  "#5C6F68",
  "#5D716A",
  "#5F736C",
  "#61766E",
  "#627870",
  "#647A72",
  "#657C73",
  "#677E75",
  "#688077",
  "#6A8279",
  "#6B847B",
  "#6D877D",
  "#6E897F",
  "#708B81",
  "#728D83",
  "#738F85",
  "#759186",
  "#769388",
  "#78968A",
  "#79988C",
  "#7B9A8E",
  "#7C9C90",
  "#7E9E92",
  "#7FA094",
  "#81A296",
  "#83A598",
];
const iconStyle =
  "text-gray-700 hover:text-blue-500 transition-all duration-300";

const matchHref = (active: boolean) =>
  active ? "font-bold pointer-events-none" : iconStyle;

export function DefaultLayout(props: {
  children: JSX.Element;
  url: URL;
  render: boolean;
  cookies: Record<string, string>;
}) {
  return (
    <>
      <div class="grid grid-cols-3 gap-4 relative w-full justify-between h-16 items-center px-6 sticky top-0 left-0 right-0 z-20">
        <div class="flex justify-start">
          <div class="flex flex-row flex-shrink bg-gray-200 shadow-lg shadow-gray-900 rounded-lg gap-8 px-4 py-2">
            <a href="/" class={matchHref(props.url.pathname === "/")}>
              Home
            </a>
            <a
              href="/photo"
              class={matchHref(props.url.pathname.startsWith("/photo"))}
            >
              Photography
            </a>
          </div>
        </div>
        <div class="flex justify-center">
          <CartDropdown cookies={props.cookies} />
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
      <div
        class="min-w-screen min-h-screen flex flex-col absolute top-0 left-0 right-0 z-10"
        style={{ backgroundColor: colours[0] }}
      >
        <div class="flex justify-center items-center flex-grow w-full">
          <div class="w-full flex justify-center">
            <div class="z-10">{props.children}</div>
          </div>
          {props.render && (
            <div class="absolute inset-0 z-0">
              <GameOfLifeCanvas colors={colours} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
