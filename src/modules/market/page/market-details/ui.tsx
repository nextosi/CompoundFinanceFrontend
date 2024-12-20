'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Grid, Show } from '@chakra-ui/react';

import MarketRates from '@/modules/market/details/market-rates/market-rates';
import { DesktopTable, MobileTable } from '@/modules/market/details/specific-market';
import TokenInfo from '@/modules/market/details/token-info/token-info';
import ScanLink from '@/modules/market/scanLink/scanLink';
import { Page } from '@/widgets/page/ui';

const TopSection = dynamic(
  () => import('@/modules/market/details/details-top-section/details-top-section'),
  {
    ssr: false,
  }
);

const MarketDetailsPage = () => {
  return (
    <Page>
      <Grid
        gap={{ base: '1.5rem', lg: '1rem' }}
        m={{
          base: '1rem 0 3rem',
          lg: '1rem 0 7.5rem',
        }}
      >
        <Box>
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
            href='/market'
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
        </Box>

        <TopSection />

        <TokenInfo />

        <MarketRates />

        <Show breakpoint='(min-width: 1250px)'>
          <DesktopTable />
        </Show>

        <Show breakpoint='(max-width: 1250px)'>
          <Grid
            gridTemplateColumns='1fr'
            rowGap='10px'
          >
            <MobileTable />
          </Grid>
        </Show>

        <ScanLink />
      </Grid>
    </Page>
  );
};

export { MarketDetailsPage };
