import { fetchFromIPFS } from '@/utils/ipfs';

import { AllTransactionsType, AllUsersDataTypes, AprTransactionType, ChartDataINT } from './types';

export const getChartData = (): Promise<ChartDataINT> =>
  fetchFromIPFS('bafkreihc5f7c4q3dp7avt4x53j5x5d4uhx7zsm6ziowuwdqfjfkfusefii');

export const getAllTransactions = (): Promise<{
  updatedAt: Date;
  transactionsHistory: Record<string, AllTransactionsType[]>;
}> => fetchFromIPFS('QmZqpyDmSCdCxRjHPUYRNiSTnZ9QUJfRXjUvAR5pophHaC');

export const findUserIpfsHash = (): Promise<{
  [key: string]: string[];
}> => fetchFromIPFS('bafybeifsmv4cinepjiiofkx4otvn77ljqyb7djsmaeok6np6slhrb5xmky');

export const getUserData = (hash: string): Promise<AllUsersDataTypes> => fetchFromIPFS(hash);

export const getScrollAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreial3rbjom2bvtetngqanrvpx6w2zr2j2lyf3jw47cdhsvt4xs2444');

export const getPolygonAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreiacq3gdjslfpwkc3fiq7q446sesnfap74x2mmu5kmxkz5by2p4qhu');

export const getOptimismAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreiapaw6bktlwgnlwvox7zh3eiysnwlo4icn4zdh6bvdonjkestxzx4');

export const getMainnetAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreifz3m25aw6fip6i3y75cjhv7lyukpow6vv4nduoyxfxj7saspshkm');

export const getBaseAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreiahbik5c2apc5zpulm2nunspe6gyzwf7xiql3g462cq4ttm3akywe');

export const getArbitrumAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreian3waw7ndsrkh7oth32v25tiv5kqel4a2k22pkmfyfc5gmqsie3y');

export const getMantleAPR = (): Promise<{
  networkId: number;
  updatedAt: Date;
  markets: Record<string, AprTransactionType[]>;
}> => fetchFromIPFS('bafkreicdjvgtt5pj24byos3ca4qis4xtbbh7d76fccy5ubexpcvbnudyl4');
