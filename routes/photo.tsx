import { PageProps } from "$fresh/server.ts";
import { DefaultLayout } from "../components/DefaultLayout.tsx";

export default function Home(props: PageProps) {
  return (
    <DefaultLayout url={props.url} render={false}>
      <div>helllo world</div>
    </DefaultLayout>
  );
}
