const key = await crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"]
);
const exp = await crypto.subtle.exportKey("raw", key);
console.log(btoa(String.fromCharCode(...new Uint8Array(exp))));
