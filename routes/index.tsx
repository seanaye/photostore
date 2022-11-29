import { Head } from "$fresh/runtime.ts";
import { AboutSean } from "../components/AboutSean.tsx";
import { DefaultLayout } from "../components/DefaultLayout.tsx";
import { githubUrl, linkedinUrl, twitterUrl } from "../utils/socialUrls.ts";
import { Handlers, type PageProps } from "$fresh/server.ts";
import { Cookies } from "./_middleware.ts";

const avatarImg = "/avatar.jpeg";
const emoji = `🇨🇦`;
const description = `Hi! My name is Sean Aye, I'm a ${emoji} software engineer working on the future of document drafting and reviewing. In my free time I enjoy taking photos, making music, and travelling.`;

export const handler: Handlers<Cookies, Cookies> = {
  GET(_, ctx) {
    return ctx.render(ctx.state);
  },
};

export default function Home(props: PageProps<Cookies>) {
  return (
    <DefaultLayout url={props.url} cookies={props.data.cookies} render>
      <div class="w-full min-h-screen flex justify-center items-center pointer-events-none">
        <AboutSean
          class="pointer-events-auto"
          {...{ avatarImg, twitterUrl, githubUrl, linkedinUrl, description }}
        />
      </div>
    </DefaultLayout>
  );
}
