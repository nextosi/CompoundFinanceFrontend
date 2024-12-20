import { Box, Button, Container, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';

import { CompoundLogo } from '@/components/ui/compound-logo';

function Header() {
  return (
    <Box
      borderBottom={{ md: 'none', base: '1px solid #4B4A51' }}
      zIndex={1}
      position='sticky'
      top={0}
      bg='#1E1E1E'
      padding='16px'
      as='header'
    >
      <Container
        alignItems='center'
        display='flex'
        justifyContent='space-between'
        maxW={1200}
      >
        <CompoundLogo />

        <Tabs
          display={{ base: 'none', md: 'block' }}
          position='relative'
          variant='unstyled'
        >
          <TabList
            bg='brand.whiteAlpha.50'
            padding='8px 10px'
            borderRadius={40}
            zIndex={1}
            position='relative'
          >
            <Tab letterSpacing='2%'>Home</Tab>
            <Tab letterSpacing='2%'>Markets</Tab>
            <Tab letterSpacing='2%'>Governance</Tab>
            <Tab letterSpacing='2%'>Docs</Tab>
          </TabList>

          <TabIndicator
            zIndex={0}
            borderRadius={40}
            top='8px'
            bottom='8px'
            height='auto'
            bg='brand.whiteAlpha.200'
          />
        </Tabs>

        <Button>Go to App</Button>
      </Container>
    </Box>
  );
}

export default Header;
