export async function share(data: ShareData, fallback: (d: ShareData) => any) {
  const canShare = navigator?.canShare?.(data);
  return await (canShare ? navigator.share(data) : fallback(data));
}

export async function fileFromUrl(url: string) {
  const res = await fetch(url);
  const contentType = res.headers.get("Content-Type") ?? "image/jpeg";
  const filename =
    res.headers.get("Content-Disposition")?.split("=").at(-1) ?? "image.jpg";
  return new File([await res.blob()], filename, {
    type: contentType,
    lastModified: new Date().getTime(),
  });
}

export const download = (url: string) => window.location.assign(url);

export const copy = async (elem: HTMLInputElement) => {
  elem.select();
  elem.setSelectionRange(0, 99999);
  return await navigator.clipboard.writeText(elem.value);
};
