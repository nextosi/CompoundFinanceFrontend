import { DeepPartial, extendTheme, theme, ThemeOverride } from '@chakra-ui/react';

import { colors } from '@/lib/chakra-ui/colors';
import * as components from '@/lib/chakra-ui/overrides';

const themeConfig: DeepPartial<ThemeOverride> = {
  colors,
  styles: {
    global: () => ({
      html: { height: '100%' },
      body: {
        height: '100%',
        backgroundColor: '#1E1E1E',
        color: 'brand.white',
      },
    }),
  },
  components: { ...theme.components, ...components },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
};

export const mainTheme = extendTheme(themeConfig);
