interface LinkData {
  emailId: number;
  cartId: number;
}

const name = "AES-GCM";

async function getKey() {
  return await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(Deno.env.get("ENCRYPT_KEY")),
    { name },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptLink(linkData: LinkData) {
  const json = JSON.stringify(linkData);
  const bytes = new TextEncoder().encode(json);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const res = await crypto.subtle.encrypt(
    {
      name,
      iv,
    },
    await getKey(),
    bytes
  );

  return {
    s: btoa(String.fromCharCode(...new Uint8Array(res))),
    iv: btoa(String.fromCharCode(...iv)),
  };
}

export async function decryptLink(encrypted: string, ivStr: string) {
  const b64 = Uint8Array.from(atob(encrypted), (c) => c.charCodeAt(0));
  const iv = Uint8Array.from(atob(ivStr), (c) => c.charCodeAt(0));
  const res = await crypto.subtle.decrypt(
    {
      name,
      iv,
    },
    await getKey(),
    b64
  );
  const json = new TextDecoder().decode(res);
  return JSON.parse(json) as LinkData;
}
