export async function GenerateKeyPair() {
  let keyPair = await crypto.subtle.generateKey(
    {
      name: "X25519",
    },
    true,
    ["deriveKey"],
  ) as CryptoKeyPair;

  const publicKey = await crypto.subtle.exportKey("raw", keyPair.publicKey);
  const privateKey = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

  return { keyPair, publicKey, privateKey };
}

export function bufferToBase64(buffer: ArrayBuffer): string {
  return btoa(String.fromCharCode(... new Uint8Array(buffer)));
}