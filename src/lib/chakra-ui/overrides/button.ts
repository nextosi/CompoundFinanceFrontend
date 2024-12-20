import { defineStyle, defineStyleConfig, SystemStyleObject } from '@chakra-ui/react';

const primary: SystemStyleObject = {
  bgColor: 'brand.100',
  _hover: {
    bgColor: 'brand.primaryAlpha.800',
  },
  _active: {
    bgColor: 'brand.primaryAlpha.900',
  },
  _disabled: {
    color: 'brand.300',
    borderColor: 'brand.300',
    bgColor: 'brand.150',
    cursor: 'not-allowed',
    opacity: 1,
  },
};

const medium = defineStyle({
  fontSize: '16px',
  letterSpacing: '2%',
  padding: '9px 20px',
  fontWeight: 500,
});

const secondary: SystemStyleObject = {
  color: 'brand.white',
  backdropFilter: 'blur(5px)',
  bgColor: 'brand.whiteAlpha.300',
  _hover: {
    bgColor: 'brand.whiteAlpha.400',
  },
  _active: {
    bgColor: 'brand.whiteAlpha.500',
  },
  _disabled: {
    color: 'brand.gray',
    borderColor: 'brand.whiteAlpha.200',
    bgColor: 'brand.whiteAlpha.200',
    cursor: 'not-allowed',
    opacity: 1,
  },
};

const unstyled: SystemStyleObject = {
  bacColor: 'none',
  border: 'none',
};

const collapseButtons: SystemStyleObject = {
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: '0',
  borderColor: 'rgba(255,255,255,0.08)',
  p: '16px 24px',
};

const walletButtons: SystemStyleObject = {
  p: '16px',
  borderRadius: '8px',
  border: '1px solid ',
  borderColor: 'rgba(255,255,255,0.15)',
  bg: 'rgba(255,255,255,0.08)',
  _hover: {
    bg: 'rgba(255,255,255,0.15)',
  },
  _active: {},
  _disabled: {},
};

const maxButtons: SystemStyleObject = {
  w: '64px',
  p: '9px 20px',
  borderRadius: '100px',
  border: 'none',
  backdropFilter: 'blur(5px)',
  bg: 'rgba(255,255,255,0.15)',
  fontSize: '12px',
  lineHeight: '140%',
  fontWeight: 500,
  letterSpacing: '0.02em',
  color: '#fff',
  _hover: {
    bg: 'rgba(255,255,255,0.5)',
  },
  _active: {},
  _disabled: {},
};

export const Button = defineStyleConfig({
  baseStyle: {
    color: 'brand.black',
    fontWeight: 400,
    lineHeight: 'normal',
    borderRadius: '100px',
    border: '1px solid',
    borderColor: 'transparent',
    fontSize: '14px',
    fontFamily: 'var(--font-proximaNova)',
  },
  sizes: {
    medium,
  },
  variants: {
    primary,
    secondary,

    unstyled,
    collapseButtons,
    maxButtons,
    walletButtons,
  },
  defaultProps: {
    variant: 'primary',
    size: 'medium',
  },
});
