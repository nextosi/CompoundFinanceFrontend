import { Box, Container, Flex, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      borderTop='1px solid'
      borderColor='brand.borderGray'
      zIndex={1}
      top={0}
      bg='#1E1E1E'
      padding='40px 0'
      as='footer'
    >
      <Container
        padding='16px'
        flexFlow='wrap'
        color='brand.baseText'
        alignItems='center'
        display='flex'
        justifyContent='space-between'
        maxW={1200}
      >
        <Text>Copyright© 2024. Compound. All Right Reserved.</Text>
        <Flex
          columnGap='36px'
          flexFlow='wrap'
        >
          <Text>Terms of Service</Text>
          <Text>Privacy Policy</Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
