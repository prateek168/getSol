import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

export function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        const amount = document.getElementById("amount").value;
        if (!wallet.publicKey) {
            alert("Wallet not connected");
            return;
        }

        try {
            await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
            alert(`✅ Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
        } catch (error) {
            console.error(error);
            alert("❌ Airdrop failed. Make sure you're on devnet and try again.");
        }
    }

    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
                id="amount"
                type="number"
                placeholder="Amount (SOL)"
                className="px-4 py-2 rounded bg-gray-100 text-black border border-gray-300 focus:outline-none"
            />
            <button
                onClick={requestAirdrop}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Request Airdrop
            </button>
        </div>
    );
}
