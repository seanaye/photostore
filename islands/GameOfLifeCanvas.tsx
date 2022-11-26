import { Cell, DxUniverse, get_memory, instantiate } from "../static/rs_lib.generated.js";
import { signal, useComputed } from "@preact/signals";
import { useMeasureWindow } from "../hooks/useMeasureWindow.ts";
import { useDevicePixelRatio } from "../hooks/useGetDevicePixelRatio.ts";
import {
  useCallback,
  useEffect,
  useRef,
} from "preact/hooks";
interface Props {
  colors: string[];
}

const pxPerCell = 16;
const halfPxPerCell = 6;
const fullCircle = 2 * Math.PI;
const msPerFrame = Math.floor((1 / 60) * 1000);

const mod = signal<null | Awaited<ReturnType<typeof instantiate>>>(null);
const universe = signal<DxUniverse | null>(null);

let timerId = 0;
let frameId = 0;

export default function GameOfLifeCanvas(props: Props) {
  const { width: fullWidth, height: fullHeight } = useMeasureWindow();
  const devicePixelRatio = useDevicePixelRatio();

  const width = useComputed(() => Math.floor(fullWidth.value / pxPerCell));
  const height = useComputed(() => Math.floor(fullHeight.value / pxPerCell));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mapTo = useCallback(
    (num: number) => {
      const cur = props.colors;
      return cur[Math.min(num, cur.length - 1)];
    },
    [props.colors]
  );

  const setupUniverse = useCallback(() => {
    const m = mod.value;
    const ctx = canvasRef.current?.getContext("2d");
    if (!m || !ctx) return;
    universe.value = DxUniverse.new(width.value, height.value);
    const ratio = devicePixelRatio.value;
    ctx.scale(ratio, ratio);

    function draw(ctx: CanvasRenderingContext2D) {
      const cur = universe.value;
      if (!cur || !m) return;

      cur.tick();

      const cellsPtr = cur.cells();
      const cells = new Uint8Array(
        get_memory().buffer,
        cellsPtr,
        width.value * height.value
      );

      for (let row = 0; row < height.value; row += 1) {
        for (let col = 0; col < width.value; col += 1) {
          const idx = row * width.value + col;
          ctx.fillStyle = mapTo(cells[idx]);

          const x = col * pxPerCell + 1;
          const y = row * pxPerCell + 1;

          ctx.beginPath();
          // ctx.fillRect(
          //   col * pxPerCell + 1,
          //   row * pxPerCell + 1,
          //   pxPerCell,
          //   pxPerCell
          // );
          ctx.arc(
            x + halfPxPerCell,
            y + halfPxPerCell,
            halfPxPerCell,
            0,
            fullCircle
          );
          ctx.fill();
        }
      }

      // ctx.stroke();
    }

    if (timerId) {
      clearInterval(timerId);
    }
    if (frameId) {
      cancelAnimationFrame(frameId);
    }

    function renderLoop() {
      if (!ctx) return;
      draw(ctx);
      timerId = setTimeout(() => {
        frameId = requestAnimationFrame(renderLoop);
      }, msPerFrame);
    }

    frameId = requestAnimationFrame(renderLoop);
  }, []);

  useEffect(() => {
    instantiate({ url: new URL("rs_lib_bg.wasm", location.origin )}).then((m) => {
      mod.value = m;
      setupUniverse();
    });
    return () => {
      const cur = universe.peek();
      if (cur) {
        cur.free();
      }
      if (timerId) {
        clearTimeout(timerId);
      }

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  });

  const onPointerMove = useCallback((event: PointerEvent) => {
    const cur = universe.value;
    if (!cur) return;

    const { offsetX, offsetY } = event;
    const w = Math.floor(offsetY / (pxPerCell * devicePixelRatio.value));
    const h = Math.floor(offsetX / (pxPerCell * devicePixelRatio.value));
    cur.set_cell(w, h, Cell.Alive);
  }, []);

  return (
    <>
      <div
        class="absolute w-screen h-screen top-0 left-0"
        style={{ "background-color": props.colors[0] }}
      />
      <canvas
        class="absolute w-screen h-screen top-0 left-0"
        width={fullWidth.value * devicePixelRatio.value}
        height={fullHeight.value * devicePixelRatio.value}
        ref={canvasRef}
        onPointerMove={onPointerMove}
      />
    </>
  );
}
