import { Handlers, PageProps } from "$fresh/server.ts";
import { GameOfLifeLayout } from "../components/Layout.tsx";
import SubscribeForm from "../islands/SubscribeForm.tsx";
import { Cookies } from "./_middleware.ts";

function getTime() {
  const torontoTimeStr = new Date().toLocaleString("en-US", {
    timeZone: "America/Toronto",
  });
  return torontoTimeStr;
}

type State = { s: "Form"; initDate: string } | { s: "Complete" };

export const handler: Handlers<State & Cookies, Cookies> = {
  async GET(req, ctx) {
    return ctx.render({ s: "Form", initDate: getTime(), ...ctx.state });
  },
  // async POST(req, ctx) {

  // }
};

function Content(props: PageProps<State>) {
  if (props.data.s === "Form") {
    return <SubscribeForm initDate={props.data.initDate} />;
  }
  return null;
}

export default function Subscribe(props: PageProps<State & Cookies>) {
  return (
    <GameOfLifeLayout url={props.url} cookies={props.data.cookies}>
      <div class="w-full min-h-screen flex justify-center items-center">
        <div class="bg-gray-200 px-12 py-6 rounded pointer-events-auto">
          <Content {...props} />
        </div>
      </div>
    </GameOfLifeLayout>
  );
}
