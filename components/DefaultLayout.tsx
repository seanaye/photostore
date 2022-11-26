import { JSX } from "preact/jsx-runtime";
import GameOfLifeCanvas from "../islands/GameOfLifeCanvas.tsx";
import { githubUrl, linkedinUrl, twitterUrl } from "../utils/socialUrls.ts";
import { GithubIcon } from "./GithubIcon.tsx";
import { Header } from "./Header.tsx";
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

export function DefaultLayout(props: {
  children: JSX.Element;
  url: URL;
  render: boolean;
}) {
  return (
    <div class="w-screen h-screen absolute">
      <div class="flex justify-center items-center absolute inset-0">
        {props.render ? (
          <GameOfLifeCanvas colors={colours} />
        ) : (
          <div
            class="absolute w-screen h-screen top-0 left-0"
            style={{ "background-color": colours[0] }}
          />
        )}
        {props.children}
      </div>
      <Header class="justify-between h-16 items-center px-6">
        <>
          <div class="flex flex-row justify-self-start bg-gray-200 shadow-lg shadow-gray-900 rounded-lg gap-8 px-4 py-2">
            <a
              href="/"
              class={props.url.pathname === "/" ? "font-bold" : iconStyle}
            >
              Home
            </a>
            <a
              href="/photo"
              class={
                props.url.pathname.startsWith("/photo")
                  ? "font-bold"
                  : iconStyle
              }
            >
              Photography
            </a>
          </div>
          <div class="flex flex-row bg-gray-200 shadow-lg shadow-gray-900 rounded-lg gap-4 px-4 py-2">
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
        </>
      </Header>
    </div>
  );
}
