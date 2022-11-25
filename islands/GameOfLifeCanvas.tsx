import { instantiate } from "../static/rs_lib.generated.js"
interface Props {
  colors: string[]
}

export default function GameOfLifeCanvas(props: Props) {

  const [result] = useQuery(() => fetch(""))

  function setupUniverse() {
    const mod = modSig();
    if (!mod) return;
    setUniverse(DxUniverse.new(width(), height()));
    const ctx = canvasRef.getContext("2d");
    const ratio = devicePixelRatio()
    ctx.scale(ratio, ratio)

    function draw(ctx: CanvasRenderingContext2D) {
      const cur = universe();
      if (!cur) return;

      cur.tick();

      const cellsPtr = cur.cells();
      const cells = new Uint8Array(
        mod.memory.buffer,
        cellsPtr,
        width() * height()
      );


      for (let row = 0; row < height(); row += 1) {
        for (let col = 0; col < width(); col += 1) {
          const idx = row * width() + col;
          ctx.fillStyle = mapTo(cells[idx]);

          const x = col * pxPerCell + 1
          const y = row * pxPerCell + 1

          ctx.beginPath();
          // ctx.fillRect(
          //   col * pxPerCell + 1,
          //   row * pxPerCell + 1,
          //   pxPerCell,
          //   pxPerCell
          // );
          ctx.arc(x + halfPxPerCell, y + halfPxPerCell, halfPxPerCell, 0, fullCircle)
          ctx.fill()
        }
      }

      // ctx.stroke();
    }
}
