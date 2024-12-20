'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Grid } from '@chakra-ui/react';

import MarketRates from '@/modules/lend/market-rates/market-rates';
import TokenInfo from '@/modules/lend/token-info/token-info';
import { Page } from '@/widgets/page/ui';

const LendingTopSection = dynamic(
  () => import('@/modules/lend/lending-top-section/lending-top-section'),
  {
    ssr: false,
  }
);

const LendingCalculator = dynamic(
  () => import('@/modules/lend/lending-calculator/lending-calculator'),
  {
    ssr: false,
  }
);

const LendDetailsPage = () => {
  return (
    <Page>
      <Grid
        gap='1rem'
        m={{
          base: '1rem 0 3rem',
          lg: '1rem 0 7.5rem',
        }}
      >
        <Link
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1E1C24',
            width: '109px',
            height: '37px',
            gap: '8px',
            borderRadius: '100px',
          }}
          href='/lend'
        >
          <Image
            width={16}
            height={16}
            style={{
              flexShrink: 0,
              transform: 'rotate(280deg)',
            }}
            src='/chevron.svg'
            alt='chevron'
          />
          Markets
        </Link>

        <LendingTopSection />

        <TokenInfo />

        <LendingCalculator />

        <MarketRates />
      </Grid>
    </Page>
  );
};

export { LendDetailsPage };
