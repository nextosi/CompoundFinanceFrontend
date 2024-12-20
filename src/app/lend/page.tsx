import { Metadata } from 'next';

import { LendPage } from '@/modules/lend/page';

export const metadata: Metadata = {
  title: 'Crypto Lending | Compound',
  description:
    'Best Crypto Lending APY: Leverage Your Crypto Holdings For Maximum Potential. Secure and Tailored For Both Crypto Enthusiasts and Seasoned Investors.',
};

export default async function Lend() {
  return <LendPage />;
}
