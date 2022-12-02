import { Handlers, PageProps } from "$fresh/server.ts";
import { DefaultLayout } from "../components/DefaultLayout.tsx";
import SubscribeForm, { CalDate } from "../islands/SubscribeForm.tsx";
import { Cookies } from "./_middleware.ts";

function getTime(): CalDate {
  const torontoTimeStr = new Date().toLocaleString("en-US", {
    timeZone: "America/Toronto",
  });
  const tt = new Date(torontoTimeStr);
  console.log(tt);
  return {
    year: tt.getFullYear(),
    month: tt.getMonth(),
    day: tt.getDate(),
  };
}

type State = { s: "Form"; initDate: CalDate } | { s: "Complete" };

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
    <DefaultLayout url={props.url} cookies={props.data.cookies} render>
      <Content {...props} />
    </DefaultLayout>
  );
}
