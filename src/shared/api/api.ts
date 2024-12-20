import axios from 'axios';

import { AllTransactionsType, AllUsersDataTypes, AprTransactionType, ChartDataINT } from './types';

export const getChartData = (): Promise<ChartDataINT> =>
  axios
    .get('/ipfs/?path=bafkreihc5f7c4q3dp7avt4x53j5x5d4uhx7zsm6ziowuwdqfjfkfusefii', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getAllTransactions = (): Promise<{
  updatedAt: Date;
  transactionsHistory: Record<string, AllTransactionsType[]>;
}> =>
  axios
    .get('/ipfs/?path=QmZqpyDmSCdCxRjHPUYRNiSTnZ9QUJfRXjUvAR5pophHaC', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const findUserIpfsHash = (): Promise<{
  [key: string]: string[];
}> =>
  axios
    .get('/ipfs/?path=bafybeifsmv4cinepjiiofkx4otvn77ljqyb7djsmaeok6np6slhrb5xmky', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getUserData = (hash: string): Promise<AllUsersDataTypes> =>
  axios
    .get(`/ipfs/?path=${hash}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getScrollAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreial3rbjom2bvtetngqanrvpx6w2zr2j2lyf3jw47cdhsvt4xs2444', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getPolygonAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreiacq3gdjslfpwkc3fiq7q446sesnfap74x2mmu5kmxkz5by2p4qhu', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getOptimismAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreiapaw6bktlwgnlwvox7zh3eiysnwlo4icn4zdh6bvdonjkestxzx4', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getMainnetAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreifz3m25aw6fip6i3y75cjhv7lyukpow6vv4nduoyxfxj7saspshkm', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getBaseAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreiahbik5c2apc5zpulm2nunspe6gyzwf7xiql3g462cq4ttm3akywe', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getArbitrumAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreian3waw7ndsrkh7oth32v25tiv5kqel4a2k22pkmfyfc5gmqsie3y', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);

export const getMantleAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> =>
  axios
    .get('/ipfs/?path=bafkreicdjvgtt5pj24byos3ca4qis4xtbbh7d76fccy5ubexpcvbnudyl4', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      timeout: 10000,
    })
    .then((r) => r.data);
