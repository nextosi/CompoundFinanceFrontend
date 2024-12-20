import React from 'react';

import { LendDetailsPage } from '@/modules/lend/page/page-details';
import { NetworksNames } from '@/shared/web3/chainConfig';
import { DEFAULT_CHAIN_ID } from '@/shared/web3/wagmiConfig';

interface PageProps {
  params: {
    id: string;
  };
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
