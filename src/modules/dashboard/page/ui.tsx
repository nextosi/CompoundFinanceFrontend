'use client';

import dynamic from 'next/dynamic';
import { Grid, Text } from '@chakra-ui/react';

import { DashboardSwitcher } from '@/shared/ui/dashboard-switcher';
import { Page } from '@/widgets/page/ui';

const Metrics = dynamic(() => import('@/modules/dashboard/metrics/metrics'), {
  ssr: false,
});

const Dashboard = dynamic(() => import('@/modules/dashboard'), {
  ssr: false,
});

const DashboardPage = () => {
  return (
    <Page flex={1}>
      <Grid
        gridTemplateColumns='1fr'
        justifyContent={{ base: 'center', md: 'flex-start' }}
        m='30px 0'
        gap='16px'
      >
        <Text
          display={{ base: 'block', lg: 'none' }}
          size='large28500150'
          mb='14px'
        >
          Dashboard
        </Text>

        <Metrics />

        <DashboardSwitcher />

        <Dashboard />
      </Grid>
    </Page>
  );
};

export { DashboardPage };
