interface Props {
  photos: Array<{
    previewUrl: string;
    id: number;
    desc?: string;
  }>;
}
export function PhotoGrid(props: Props) {
  return (
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-10">
      {props.photos.map((p) => (
        <>
          <a
            href={`/photo/${p.id}`}
            class="flex justify-center items-center"
            style={{ aspectRatio: "4/3" }}
          >
            <img src={p.previewUrl} alt={p.desc} />
          </a>
          <a
            href={`/photo/${p.id}`}
            class="flex justify-center items-center"
            style={{ aspectRatio: "4/3" }}
          >
            <img src={p.previewUrl} alt={p.desc} />
          </a>
          <a
            href={`/photo/${p.id}`}
            class="flex justify-center items-center"
            style={{ aspectRatio: "4/3" }}
          >
            <img src={p.previewUrl} alt={p.desc} />
          </a>
        </>
      ))}
    </div>
  );
}
