import { Head } from "$fresh/runtime.ts";
interface Props {
  photos: Array<{
    previewUrl: string;
    id: number;
    desc?: string;
  }>;
}

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Photo = Props["photos"][number] & { width: number; height: number };
function getFakeData(d: Props["photos"][number]) {
  const out: Photo[] = [];
  for (let i = 0; i < 25; i += 1) {
    out.push({
      ...d,
      width: getRandom(100, 500),
      height: getRandom(100, 500),
    });
  }
  return out;
}

const styles = `
.columns-1 {
  columns: 1;
}


@media (min-width: 768px) {
  .md\\:columns-2 {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  .lg\\:columns-3 {
    columns: 3;
  }
}

@media (min-width: 1280px) {
  .xl\\:columns-4 {
    columns: 4;
  }
}

@media (min-width: 1536px) {
  .\\32xl\\:columns-6 {
    columns: 6;
  }
}
`;

export function PhotoGrid(props: Props) {
  const d = getFakeData(props.photos[0]);
  return (
    // twind plugin doesnt support taliwind v3
    <>
      <Head>
        <style>{styles}</style>
      </Head>
      <div class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-6">
        {d.map((p) => (
          <a href={`/photo/${p.id}`} class="flex my-4">
            <img
              src={p.previewUrl}
              alt={p.desc}
              class="object-cover w-full"
              style={{ height: p.height }}
            />
          </a>
        ))}
      </div>
    </>
  );
}
