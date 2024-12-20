import React, { memo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Box, Flex, Grid, IconButton, Text, Tooltip } from '@chakra-ui/react';

import BorrowButton from '@/modules/market/borrow-button/borrow-button';
import { DirectionType } from '@/modules/market/table/tableMarket';
import { SortIconDown, SortIconUp } from '@/shared/chakra-ui/icons';
import { formatNumber } from '@/shared/lib/utils';
import { Each } from '@/shared/ui/each';
import { FallbackImage } from '@/shared/ui/fallback-image';
import { Cell, Row, Table, TableBody, TableHeader } from '@/shared/ui/table';
import { View } from '@/shared/ui/view';
import { NetworksNames } from '@/shared/web3/config';
import { TableData } from '@/shared/web3/types';
import { useStore } from '@/store';

const HEADER_TABLE: { title: string; sortId?: keyof TableData; tooltipText?: string }[] = [
  {
    title: 'Market',
  },
  {
    title: 'Network',
    sortId: 'chainId',
  },
  {
    title: 'Net Borrow APR',
    sortId: 'netBorrowAPY',
    tooltipText: 'Current borrow APR minus added rewards',
  },
  {
    title: 'Total Borrowed',
    sortId: 'totalBorrowed',
    tooltipText: 'Amount of assets borrowed',
  },
  {
    title: 'Accepted Collateral',
    sortId: 'configuratorData',
    tooltipText: 'Assets available to borrow against',
  },
  {
    title: '',
  },
];

interface DesktopProps {
  requestSort: (key: keyof TableData, direction?: DirectionType) => void;

  sortConfig: {
    key: keyof TableData;
    direction: DirectionType;
  } | null;

  sortedData: TableData[];

  onBorrowClick?: () => void;
}

const DesktopTable = memo(
  ({ requestSort, sortConfig, sortedData, onBorrowClick }: DesktopProps) => {
    const router = useRouter();

    const { setSelectedMarketData } = useStore();

    const onGoBorrowPage = (market: TableData) => {
      setSelectedMarketData(market);

      router.push(
        `/borrow/${market.asset.toLowerCase()}-${NetworksNames[market.chainId].toLowerCase()}`,
        { scroll: true }
      );
    };

    return (
      <Table>
        <TableHeader>
          <Flex w='100%'>
            <Each
              data={HEADER_TABLE}
              render={(data, index) => (
                <Cell key={index}>
                  <Grid
                    gridTemplateColumns='max-content 10px'
                    alignItems='center'
                    cursor='pointer'
                    onClick={() => requestSort(data.sortId || 'netEarnAPY')}
                  >
                    <Tooltip
                      label={data.tooltipText}
                      bg='brand.400'
                      color='brand.300'
                      placement='top'
                      maxW='185px'
                      textAlign='center'
                      borderRadius='0.25rem'
                      hasArrow
                    >
                      <Text
                        textAlign='left'
                        size='small12400120'
                        userSelect='none'
                      >
                        {data.title}
                      </Text>
                    </Tooltip>

                    <View.Condition if={!!data.sortId}>
                      <Grid
                        ml='5px'
                        gridTemplateColumns='1fr'
                        rowGap='2px'
                        w='10px'
                      >
                        <IconButton
                          aria-label='Sort by Asset'
                          icon={
                            <SortIconUp
                              color={
                                sortConfig?.key === data.sortId &&
                                sortConfig?.direction !== 'ascending'
                                  ? '#fff'
                                  : '#696C77'
                              }
                            />
                          }
                          variant='ghost'
                        />

                        <IconButton
                          aria-label='Sort by Asset'
                          icon={
                            <SortIconDown
                              color={
                                sortConfig?.key === data.sortId &&
                                sortConfig?.direction === 'ascending'
                                  ? '#fff'
                                  : '#696C77'
                              }
                            />
                          }
                          variant='ghost'
                        />
                      </Grid>
                    </View.Condition>
                  </Grid>
                </Cell>
              )}
            />
          </Flex>
        </TableHeader>

        <TableBody>
          <Grid
            w='100%'
            gap='0.5rem'
          >
            <Each
              data={sortedData || []}
              render={(row, index) => (
                <Row
                  key={`${row.asset}_${row.chainId}`}
                  cursor='pointer'
                  onClick={() => onGoBorrowPage(row)}
                >
                  <Cell>
                    <Flex
                      alignItems='center'
                      columnGap='8px'
                    >
                      <Image
                        width={24}
                        height={24}
                        src={`/collaterals/${row.asset}.svg`}
                        alt={row.asset}
                      />

                      <Text
                        fontSize='16px'
                        size='small14120500'
                      >
                        {row.asset}
                      </Text>
                    </Flex>
                  </Cell>

                  <Cell>
                    <Flex
                      alignItems='center'
                      columnGap='8px'
                    >
                      <Image
                        width={24}
                        height={24}
                        src={`/markets/${NetworksNames[row.chainId].toLowerCase()}.svg`}
                        alt={row.asset}
                      />

                      <Text
                        fontSize='16px'
                        size='small14120500'
                      >
                        {NetworksNames[row.chainId]}
                      </Text>
                    </Flex>
                  </Cell>

                  <Cell>
                    <Text
                      textAlign='start'
                      fontSize='16px'
                      size='small14120500'
                    >
                      {row.netBorrowAPY.toFixed(2)}%
                    </Text>
                  </Cell>

                  <Cell>
                    <Text
                      textAlign='start'
                      fontSize='16px'
                      size='small14120500'
                    >
                      ${formatNumber(row.totalBorrowed)}
                    </Text>
                  </Cell>

                  <Cell>
                    <Flex
                      justifyContent='flex-start'
                      alignItems='center'
                      columnGap='4px'
                    >
                      <Text
                        fontSize='16px'
                        size='small14120500'
                      >
                        {row.configuratorData.length}
                      </Text>
                      <Flex>
                        <Each
                          data={row.configuratorData}
                          render={(collateral, index) => {
                            const styles = index > 0 ? { marginLeft: '-.25rem' } : {};
                            return (
                              <FallbackImage
                                width={16}
                                height={16}
                                src={`/collaterals/${collateral.symbol}.svg`}
                                alt={'collaterals'}
                                style={styles}
                              />
                            );
                          }}
                        />
                      </Flex>
                    </Flex>
                  </Cell>

                  <Cell textAlign='center'>
                    <BorrowButton
                      _groupHover={{ bg: 'brand.750' }}
                      marketData={row}
                      textButton='Borrow'
                      onClick={onBorrowClick}
                    />
                  </Cell>

                  <Tooltip
                    key={`Utilization__${index}`}
                    label={`Utilization ${Math.floor(row.utility)}%`}
                    bg='brand.1100'
                    color='brand.50'
                    placement='bottom'
                    marginTop='-45px'
                    left='-50px'
                  >
                    <Box
                      w='calc(100% - 16px)'
                      h='10px'
                      bottom='0'
                      position='absolute'
                      _hover={{
                        div: {
                          h: '2px',
                        },
                      }}
                    >
                      <Box
                        w={`calc(${Math.floor(row.utility)}% - 16px)`}
                        h='1px'
                        cursor='pointer'
                        bottom='-1px'
                        left='0.5rem'
                        position='absolute'
                        bgColor='brand.100'
                        backgroundRepeat='no-repeat'
                      />
                    </Box>
                  </Tooltip>
                </Row>
              )}
            />
          </Grid>
        </TableBody>
      </Table>
    );
  }
);

export { DesktopTable };
