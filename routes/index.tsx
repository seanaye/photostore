import { Head } from "$fresh/runtime.ts";
import { AboutSean } from "../components/AboutSean.tsx";
import { DefaultLayout } from "../components/DefaultLayout.tsx";

const twitterUrl = `https://twitter.com/seanay3`;
const githubUrl = `https://github.com/seanaye`;
const linkedinUrl = `https://www.linkedin.com/in/sean-aye-5a1036114/`;
const avatarImg = "/avatar.png";
const emoji = `🇨🇦`;
const description = `Hi! My name is Sean Aye, I'm a ${emoji} software engineer working on the future of document drafting and reviewing. In my free time I enjoy taking photos, making music, and travelling.`;

export default function Home() {
  return (
    <DefaultLayout>
      <AboutSean
        {...{ avatarImg, twitterUrl, githubUrl, linkedinUrl, description }}
      />
    </DefaultLayout>
  );
}
