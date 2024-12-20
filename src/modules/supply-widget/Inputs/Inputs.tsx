import React, { useCallback, useEffect, useMemo } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { Button, Flex, FormLabel, Grid, Image, Input, Switch, Text } from '@chakra-ui/react';

import { useStore } from '@/modules/supply-widget/store';
import { useDebounce } from '@/shared/hooks/useDebounce';
import {
  formatCommaNumber,
  formatSliceTokenOrUSD,
  isValidNumericInput,
  removeCommas,
  trimToDecimals,
} from '@/shared/lib/utils';
import { View } from '@/shared/ui/view';

const Inputs = ({
  isDisabled,
  cantPayFee,
  estimatedGasPriceETH,
}: {
  isDisabled: boolean;
  cantPayFee: boolean;
  estimatedGasPriceETH: number;
}) => {
  const {
    inputValue,
    selectedMarketData,
    setTokenCount,
    currentTokenData,
    tokenName,
    isChecked,
    setIsNotEnough,
    setIsChecked,
    showStep,
    currentNetwork,
    setInputValue,
  } = useStore();

  const { address } = useAccount();

  const { data: userEthBalance, refetch: refetchUserEthBalance } = useBalance({
    chainId: currentNetwork,
    address: address,
    blockTag: 'latest',
  });

  const { data: tokenBalance, refetch: refetchTokenBalance } = useBalance({
    chainId: currentNetwork,
    address: address,
    token: currentTokenData.addressFrom,
    blockTag: 'latest',
  });

  const isWETH = currentTokenData.isNative;

  const balance = useMemo(
    () => (currentTokenData.isNative && isChecked ? userEthBalance : tokenBalance),
    [currentTokenData, isChecked, userEthBalance, tokenBalance]
  );

  const isBalanceAvailable = useMemo(
    () => !!balance?.value && balance.value > BigInt(0),
    [balance]
  );

  const isNotEnough = useMemo(
    () =>
      Number(removeCommas(inputValue)) > Number(balance?.formatted || 0) ||
      balance?.value === BigInt(0),
    [inputValue, balance]
  );

  const debounceInput = useDebounce(Number(inputValue));

  const balanceInUsd = useMemo(() => {
    const price = selectedMarketData?.price || 0;

    return Math.floor(Number(inputValue) * price * 100) / 100;
  }, [inputValue, selectedMarketData]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = removeCommas(e.target.value);

      if (!isNaN(Number(rawValue)) && isValidNumericInput(rawValue)) {
        setInputValue(trimToDecimals(rawValue, currentTokenData.decimals));
      }
    },
    [currentTokenData]
  );

  const onBlur = useCallback(() => {
    if (inputValue) {
      setInputValue(formatCommaNumber(removeCommas(inputValue), 8));
    }
  }, [inputValue]);

  const onFocus = useCallback(() => {
    if (inputValue) {
      setInputValue(removeCommas(inputValue));
    }
  }, [inputValue]);

  const onMaxClick = useCallback(() => {
    if (balance?.value) {
      if (isWETH && isChecked) {
        if (estimatedGasPriceETH >= Number(balance.formatted)) {
          setInputValue('0');
        } else {
          setInputValue(
            formatCommaNumber(
              (Number(balance.formatted) - estimatedGasPriceETH * 1.01).toString(),
              8
            )
          );
        }
      } else {
        setInputValue(formatCommaNumber(balance.formatted, 8));
      }
    }
  }, [balance, isWETH, isChecked, estimatedGasPriceETH]);

  useEffect(() => {
    refetchUserEthBalance();

    refetchTokenBalance();
  }, [showStep, refetchUserEthBalance, refetchTokenBalance]);

  useEffect(() => {
    setTokenCount(removeCommas(inputValue));
  }, [debounceInput, setTokenCount]);

  useEffect(() => {
    setIsNotEnough(isNotEnough);
  }, [isNotEnough, setIsNotEnough]);

  return (
    <Grid
      gridTemplateColumns='1fr'
      rowGap='8px'
      bgSize='200%'
      bgPosition='center'
      opacity={isDisabled ? 0.5 : 1}
    >
      <Flex
        flexDirection='column'
        p='16px'
        bg={isNotEnough || cantPayFee ? 'brand.1125' : 'rgba(255,255,255,0.08)'}
        border='1px solid'
        borderColor={isNotEnough || cantPayFee ? 'brand.1275' : 'transparent'}
        borderRadius='8px'
        gap='8px'
        position='relative'
        opacity={!isBalanceAvailable ? 0.5 : 1}
        _hover={{ borderColor: 'brand.50' }}
      >
        <Flex
          alignItems='center'
          justifyContent='space-between'
        >
          <Flex alignItems='center'>
            <Text size='small14500140'>You Lend</Text>
          </Flex>

          {isWETH && (
            <Flex alignItems='center'>
              <FormLabel
                htmlFor='userPosition'
                m='0 10px 0 0'
                whiteSpace='nowrap'
              >
                <Text size='small14500140'>Lend with WETH</Text>
              </FormLabel>

              <Switch
                id='userPosition'
                isChecked={!isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
            </Flex>
          )}
        </Flex>

        <Text
          w='fit-content'
          size='small14500120'
          color='brand.550'
        >
          Wallet Balance: {formatSliceTokenOrUSD((balance?.formatted || 0).toString(), 5)}
        </Text>

        <Flex justifyContent='space-between'>
          <Flex gap='8px'>
            <Image
              w='24px'
              h='24px'
              src={`/collaterals/${tokenName}.svg`}
              alt={tokenName}
            />

            <Input
              maxW='240px'
              border='0px'
              h='30px'
              bg='none'
              _focus={{ border: 'none', boxShadow: 'none' }}
              outline='none'
              fontSize={{ base: '20px', sm: '24px' }}
              lineHeight='110%'
              fontWeight='600'
              p='0'
              placeholder='0.00'
              value={inputValue}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              readOnly={isDisabled || !isBalanceAvailable}
            />
          </Flex>

          <Button
            variant='maxButtons'
            onClick={onMaxClick}
          >
            Max
          </Button>
        </Flex>

        <Text
          w='fit-content'
          size='small14500120'
          color='brand.550'
          ml='2rem'
        >
          {balanceInUsd} USD
        </Text>

        <View.Condition if={isNotEnough}>
          <Text
            color='#F5A18A'
            size='small14500140'
            gridArea='4/ span 2'
          >
            Not enough balance
          </Text>
        </View.Condition>

        <View.Condition if={Boolean(!isNotEnough && cantPayFee)}>
          <Text
            color='#F5A18A'
            size='small14500140'
            gridArea='4/ span 2'
          >
            Need more ETH to pay transaction fee
          </Text>
        </View.Condition>
      </Flex>

      {/*{!isBalance && (*/}
      {/*  <Text maxW="80%" m="0 auto" textAlign="center" size="medium16400140">*/}
      {/*    It seems you don’t have {tokenName}. You can exchange at*/}
      {/*    <Link href="#" color="#00D395" textDecoration="underline">*/}
      {/*      Across Exchange*/}
      {/*    </Link>*/}
      {/*  </Text>*/}
      {/*)}*/}
    </Grid>
  );
};

export default Inputs;
