'use client';

import dynamic from 'next/dynamic';

import { Page } from '@/widgets/page/ui';

const Chart = dynamic(() => import('@/modules/market/chart'), {
  ssr: false,
});

const TableMarket = dynamic(() => import('@/modules/market/table/tableMarket'), {
  ssr: false,
});

const MarketPage = () => {
  return (
    <Page>
      <Chart title='Markets' />

      <TableMarket />
    </Page>
  );
};

export { MarketPage };
