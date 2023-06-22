import { PageProps } from "$fresh/server.ts";

export default function Photo(props: PageProps) {
  const { id } = props.params;
  return (
    <div class="flex w-full justify-center items-center">
      <img src={`https://whole-bee-67.deno.dev/${id}`} />
    </div>
  );
}
