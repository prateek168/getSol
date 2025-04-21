import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect, useState } from "react";

export function ShowSolBalance() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                const bal = await connection.getBalance(publicKey);
                setBalance(bal / LAMPORTS_PER_SOL);
            }
        };
        fetchBalance();
    }, [publicKey, connection]);

    return (
            <div className="flex items-center justify-center gap-2">
                <h2 className="text-xl font-semibold mb-2">📊 SOL Balance</h2>
            {publicKey ? (
                <p className="text-xl mb-1   font-mono">
                    {balance !== null ? `${balance.toFixed(4)} SOL` : 'Loading...'}
                </p>
            ) : (
                <p className="text-red-500 mb-1">Connect your wallet to view balance.</p>
            )}  
            </div>
    );
}
