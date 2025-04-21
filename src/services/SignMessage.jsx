import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React, { useState } from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [signatureResult, setSignatureResult] = useState("");

    async function onClick() {
        try {
            if (!publicKey) throw new Error('Wallet not connected!');
            if (!signMessage) throw new Error('Wallet does not support message signing!');

            const message = document.getElementById("message").value;
            if (!message) {
                alert("Please enter a message.");
                return;
            }

            const encodedMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodedMessage);

            const isValid = ed25519.verify(signature, encodedMessage, publicKey.toBytes());
            if (!isValid) throw new Error('Message signature invalid!');

            const sigEncoded = bs58.encode(signature);
            setSignatureResult(sigEncoded);
        } catch (error) {
            alert("❌ " + error.message);
        }
    }

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input
                    id="message"
                    type="text"
                    placeholder="Enter a message"
                    className="px-4 py-2 rounded bg-gray-100 text-black border border-gray-300 focus:outline-none w-64"
                />
                <button
                    onClick={onClick}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                >
                    Sign Message
                </button>
            </div>
            {signatureResult && (
                <div className="text-sm break-all text-center bg-gray-900 text-white p-3 rounded max-w-xl">
                    ✅ Signature: {signatureResult}
                </div>
            )}
        </div>
    );
};
