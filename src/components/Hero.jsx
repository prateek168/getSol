import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { SendTokens } from '../services/SendTokens.jsx';
import { SignMessage } from '../services/SignMessage.jsx';
import { RequestAirdrop } from '../services/RequestAirdrop.jsx';
import { ShowSolBalance } from '../services/ShowSolBalance.jsx';

function Hero() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <div className="h-[calc(100vh-100px)] bg-gradient-to-b from-zinc-900 to-zinc-800 text-white px-4 py-6">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            {/* Wallet Buttons */}
            <div className="flex justify-center mb-6">
              <div className="flex gap-4">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
            </div>

            {/* Airdrop Container */}
            <div className="bg-white text-black rounded-md p-6 shadow-lg max-w-2xl mx-auto mb-6">
              <h2 className="text-xl font-semibold mb-4 text-center">🚀 Request Airdrop</h2>
              <RequestAirdrop />
            </div>
            {/* Show SOl Balance */}
            <div className="bg-white text-black rounded-md p-6 shadow-lg max-w-2xl mx-auto mb-6">
              <h2 className="text-xl font-semibold mb-4 text-center">💸 Show Balance </h2>
              <ShowSolBalance />
            </div>
            {/* Sign Message */}
            <div className="bg-white text-black rounded-md p-6 shadow-lg max-w-2xl mx-auto mb-6">
              <h2 className="text-xl font-semibold mb-4 text-center">🖊️ Sign a Message</h2>
              <SignMessage />
            </div>

            {/* Send Tokens */}
            <div className="bg-white text-black rounded-md p-6 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold mb-4 text-center">💸 Send a Transaction</h2>
              <SendTokens />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default Hero;
