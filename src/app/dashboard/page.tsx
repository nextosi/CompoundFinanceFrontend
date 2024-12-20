import { Metadata } from 'next';

import { DashboardPage } from '@/modules/dashboard/page';

export const metadata: Metadata = {
  title: 'Dashboard | Compound',

  description:
    'Access Your Dashboard on Compound to See Analytics and Track Your Lending and Borrowing Transactions.',
};

export default function Dashboard() {
  return <DashboardPage />;
}
