import { Icon } from '@chakra-ui/react';

export const Example = (props: any) => (
  <Icon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      cx='12'
      cy='12'
      r='11'
      stroke={props?.stroke || 'white'}
      strokeWidth='2'
    />
  </Icon>
);
