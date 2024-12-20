import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';

function CompoundLogo({ networkName }: { networkName?: string }) {
  return (
    <Box
      display='flex'
      alignItems='center'
      gap={2}
    >
      {networkName ? (
        <Image
          width={24}
          height={24}
          loading='lazy'
          src={`/tokenNetwork/${networkName}.svg`}
          alt={networkName}
        />
      ) : (
        <Image
          width={24}
          height={24}
          src='/logo.svg'
          alt='logo'
        />
      )}

      <Text>{networkName ? networkName : 'Compound'}</Text>
    </Box>
  );
}

export default CompoundLogo;
