import { Metadata } from 'next';

import { BorrowPage } from '@/modules/borrow/page';

export const metadata: Metadata = {
  title: 'Borrow Crypto - Best Interest Rates | Compound',

  description:
    'Borrow Crypto Instantly Against Your Assets Without Selling. Competitive Rates and Secure Transactions on Compound - Leading Crypto Borrowing Platform.',
};

export default async function Borrow() {
  return <BorrowPage />;
}
