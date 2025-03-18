import { BorrowDetailsPage } from '@/modules/borrow/page/page-details';
import { NetworksNames, contractsConfig } from '@/shared/web3/chainConfig';

interface StaticParam {
  id: string;
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const paths: StaticParam[] = [];
  // Generate paths for each network and its tokens
  Object.entries(contractsConfig.token).forEach(([chainId, tokens]) => {
    Object.keys(tokens).forEach((asset) => {
      paths.push({
        id: `${asset.toLowerCase()}-${NetworksNames[Number(chainId)].toLowerCase()}`,
      });
    });
  });
  return paths;
}

export default function BorrowId() {
  return <BorrowDetailsPage />;
}
