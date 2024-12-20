import { createConfig, http } from 'wagmi';
import { Chain, mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, walletConnect } from '@wagmi/connectors';
import { injected } from '@wagmi/core';

import { WALLET_CONNECT_PROJECT_ID } from '@/shared/consts/constant';

export const supportedChains: readonly [Chain, ...Chain[]] = [sepolia, mainnet];

export const DEFAULT_CHAIN_ID = supportedChains[0].id;

export const supportedChainsId = supportedChains.map((chain) => chain.id);

const connectors =
  typeof window !== 'undefined'
    ? [
        injected({ target: 'metaMask' }),
        injected({
          target() {
            return {
              id: '',
              name: 'Okx Defi',
              provider: window?.okxwallet,
            };
          },
          shimDisconnect: true,
        }),
        walletConnect({
          projectId: WALLET_CONNECT_PROJECT_ID,
          qrModalOptions: {
            themeMode: 'dark',
            enableExplorer: true,
          },
        }),
        coinbaseWallet({
          appName: 'Need to change this',
          appLogoUrl: 'https://example.com/myLogoUrl.png',
        }),
      ]
    : [];

export const config: any = createConfig({
  chains: [mainnet, sepolia],
  connectors,
  multiInjectedProviderDiscovery: false,
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

declare global {
  interface Window {
    okxwallet: any;
  }
}
