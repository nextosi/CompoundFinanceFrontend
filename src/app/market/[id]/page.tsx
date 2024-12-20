import { MarketDetailsPage } from '@/modules/market/page/market-details';
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
    title: `${tokenName} on ${chainName} Market Insights | Compound`,

    description: `Explore ${tokenName} on ${chainName} Market Analytics on Compound Lending & Borrowing Platform. Monitor Lending Rates, Borrowing Statistics & Make Informed Decisions`,
  };
}

export default async function MarketId() {
  return <MarketDetailsPage />;
}
