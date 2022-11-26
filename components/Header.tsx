import { JSX } from "preact/jsx-runtime";

export function Header(props: {
  children?: JSX.Element;
  class: string;
}) {
  return (
    <div class={`flex flex-row gap-4 relative w-full ${props.class}`}>
      {props.children}
    </div>
  )
}
