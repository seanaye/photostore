import { JSX } from "preact/jsx-runtime";
import GameOfLifeCanvas from "../islands/GameOfLifeCanvas.tsx";
import { colours } from "../utils/colors.ts";
import { Header } from "./Header.tsx";



export function GameOfLifeLayout(props: {
  children: JSX.Element;
  url: URL;
  cookies: Record<string, string>;
}) {
  return (
    <>
      <Header {...props} />
      <div
        class="w-screen h-screen absolute top-0 left-0 right-0"
      >
        <GameOfLifeCanvas colors={colours} />

        {/* <div class="flex justify-center items-center flex-grow w-full"> */}
        {/*   <div class="w-full flex justify-center"> */}
        {/*     <div class="z-10 w-full">{props.children}</div> */}
        {/*   </div> */}
        {/*     <div class="absolute inset-0 z-0"> */}
        {/*     </div> */}
        {/* </div> */}
      </div>
      <div class="min-w-screen min-h-screen absolute top-0 left-0 right-0 pointer-events-none">
        {props.children}
      </div>
    </>
  );
}

export function PlainLayout(props: {
  children: JSX.Element;
  url: URL;
  cookies: Record<string, string>;
}) {
  return (
    <>
      <Header {...props} style={{backgroundColor: colours[0] }} />
      {props.children}
    </>
  )
}
