import { JSX } from "preact";
import { Signal } from "@preact/signals";

export function Transition(props: {
  children: JSX.Element;
  show: Signal<boolean>;
}) {
  return (
    <div
      class={`${
        props.show.value ? "max-h-screen" : "max-h-0"
      } transition-all duration-300 overflow-hidden w-72`}
    >
      {props.children}
    </div>
  );
}
