import { JSX } from "preact/jsx-runtime";
import { useEffect, useRef } from "preact/hooks";

export default function FullscreenImg(
  props: Pick<JSX.HTMLAttributes<HTMLInputElement>, "src" | "class">
) {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!imgRef.current) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        document.exitFullscreen();
      }
    };
    addEventListener("keydown", handler);
    return () => {
      removeEventListener("keydown", handler);
    };
  });
  return (
    <img
      {...props}
      ref={imgRef}
      onClick={(e) => {
        e.currentTarget.requestFullscreen();
      }}
    />
  );
}
