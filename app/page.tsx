"use client";
import { useState } from "react";
import { bufferToBase64, GenerateKeyPair } from "./utils/crypto";

export default function Home() {
  const [privateKey, setPrivateKey] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPrivate, setShowPrivate] = useState(false);

  async function getKeyPair() {
    setLoading(true);
    setShowPrivate(false); // reset when new keys are generated

    const { publicKey, privateKey } = await GenerateKeyPair();
    const base64PublicKey = bufferToBase64(publicKey);
    const base64PrivateKey = bufferToBase64(privateKey);

    setPublicKey(base64PublicKey);
    setPrivateKey(base64PrivateKey);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center px-4">
      
      {/* HEADER */}
      <div className="mt-16 text-center max-w-xl">
        <h1 className="text-4xl font-extrabold mb-3">
          🔐 KeyGen
        </h1>
        <p className="text-gray-300">
          Click below to generate a secure X25519 public/private key pair
          directly in your browser.
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="mt-10 bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-2xl border border-gray-700">
        
        <div className="flex justify-center">
          <button
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={getKeyPair}
          >
            {loading ? "Generating Keys..." : "Generate Key Pair"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Your keys are generated locally — nothing is sent to any server.
        </p>

        {/* PUBLIC KEY */}
        {publicKey && (
          <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700">
            <h2 className="text-lg font-bold text-green-400">Public Key</h2>
            <p className="break-all text-sm mt-2 font-mono">{publicKey}</p>
          </div>
        )}

        {/* PRIVATE KEY (HIDDEN BY DEFAULT) */}
        {privateKey && (
          <div className="mt-4 bg-gray-900 p-4 rounded-xl border border-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-red-400">Private Key</h2>
              <button
                onClick={() => setShowPrivate(!showPrivate)}
                className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
              >
                {showPrivate ? "Hide Private Key" : "Show Private Key"}
              </button>
            </div>

            {showPrivate && (
              <>
                <p className="break-all text-sm mt-2 font-mono">
                  {privateKey}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  ⚠️ Keep this secret. Anyone with this key can impersonate you.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
