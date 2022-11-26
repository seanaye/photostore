import { Head } from "$fresh/runtime.ts";
import { AboutSean } from "../components/AboutSean.tsx";
import { DefaultLayout } from "../components/DefaultLayout.tsx";
import { githubUrl, linkedinUrl, twitterUrl } from "../utils/socialUrls.ts";
import { type PageProps } from "$fresh/server.ts"

const avatarImg = "/avatar.jpeg";
const emoji = `🇨🇦`;
const description = `Hi! My name is Sean Aye, I'm a ${emoji} software engineer working on the future of document drafting and reviewing. In my free time I enjoy taking photos, making music, and travelling.`;

export default function Home(props: PageProps) {
  return (
    <DefaultLayout url={props.url} render>
      <AboutSean
        {...{ avatarImg, twitterUrl, githubUrl, linkedinUrl, description }}
      />
    </DefaultLayout>
  );
}
