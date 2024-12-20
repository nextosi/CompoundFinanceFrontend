'use client';

import dynamic from 'next/dynamic';

import { Page } from '@/widgets/page/ui';

const ChartLend = dynamic(() => import('@/modules/lend/chart/chart'), {
  ssr: false,
});

const TableMarket = dynamic(() => import('@/modules/lend/table/tableMarket'), {
  ssr: false,
});

const LendPage = () => {
  return (
    <Page>
      <ChartLend title='Lend' />

      <TableMarket />
    </Page>
  );
};

export { LendPage };
