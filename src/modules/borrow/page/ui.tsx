'use client';

import dynamic from 'next/dynamic';

import { Page } from '@/widgets/page/ui';

const ChartBorrow = dynamic(() => import('@/modules/borrow/chart/chart'), {
  ssr: false,
});

const TableMarket = dynamic(() => import('@/modules/borrow/table/tableMarket'), {
  ssr: false,
});

const BorrowPage = () => {
  return (
    <Page>
      <ChartBorrow title='Borrow' />

      <TableMarket />
    </Page>
  );
};

export { BorrowPage };
