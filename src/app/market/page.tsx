import { Metadata } from 'next';

import { MarketPage } from '@/modules/market/page';

export const metadata: Metadata = {
  title: 'DeFi Market Analytics - Earn With Your Crypto Assets | Compound',

  description:
    'DeFi Market Insights on Compound. Lending rates, Borrowing Trends and DeFi Analytics in Real-Time on the Leading Crypto Lending and Borrowing Platform.',
};

export default async function Market() {
  return <MarketPage />;
}
