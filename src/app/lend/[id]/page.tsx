import React from 'react';

import { LendDetailsPage } from '@/modules/lend/page/page-details';
import { NetworksNames, contractsConfig } from '@/shared/web3/chainConfig';
import { DEFAULT_CHAIN_ID } from '@/shared/web3/wagmiConfig';

interface PageProps {
  params: {
    id: string;
  };
}

interface StaticParam {
  id: string;
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const paths: StaticParam[] = [];

  // Generate paths for each network and its tokens
  Object.entries(contractsConfig.token).forEach(([chainId, tokens]) => {
    Object.keys(tokens).forEach((asset) => {
      paths.push({
        id: `${asset.toLowerCase()}-${NetworksNames[Number(chainId)].toLowerCase()}`,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const [asset, chainId] = params.id.split('-');

  const tokenName = asset.toUpperCase();

  const chainName = (
    NetworksNames[Number(chainId)] || NetworksNames[DEFAULT_CHAIN_ID]
  ).toUpperCase();

  return {
    title: `${tokenName} Lending - ${tokenName} on ${chainName} Lending | Compound`,

    description: `Best ${tokenName} Lending Rates. Earn Interest on Your ${tokenName} on ${chainName} Continuously. No Lockups, Secure Transactions. User-Friendly Interface.`,
  };
}

export default function LendId() {
  return <LendDetailsPage />;
}
