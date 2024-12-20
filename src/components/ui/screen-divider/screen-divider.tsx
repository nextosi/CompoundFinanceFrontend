import Image, { StaticImageData } from 'next/image';
import { Box } from '@chakra-ui/react';

import _stepIcon from '@/public/step.png';

const stepIcon = _stepIcon as StaticImageData;
function ScreenDivider() {
  return (
    <Box
      marginTop='24px'
      marginBottom='24px'
      marginLeft='auto'
      marginRight='auto'
    >
      <Image
        src={stepIcon.src}
        alt={'|'}
        width={stepIcon.width}
        height={stepIcon.height}
      />
    </Box>
  );
}

export default ScreenDivider;
