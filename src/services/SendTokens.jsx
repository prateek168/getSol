import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import React from "react";

export function SendTokens() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendTokens() {
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;

        if (!wallet.publicKey) {
            alert("❌ Wallet not connected!");
            return;
        }

        if (!to || !amount) {
            alert("❌ Please enter both recipient and amount.");
            return;
        }

        try {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new PublicKey(to),
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            );

            await wallet.sendTransaction(transaction, connection);
            alert(`✅ Sent ${amount} SOL to ${to}`);
        } catch (err) {
            alert("❌ Transaction failed: " + err.message);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
                id="to"
                type="text"
                placeholder="Recipient Address"
                className="px-4 py-2 rounded bg-gray-100 text-black border border-gray-300 w-64"
            />
            <input
                id="amount"
                type="number"
                placeholder="Amount (SOL)"
                className="px-4 py-2 rounded bg-gray-100 text-black border border-gray-300 w-40"
            />
            <button
                onClick={sendTokens}
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
                Send
            </button>
        </div>
    );
}
