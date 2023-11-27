import { Box } from '@chakra-ui/react';

function FooterNav({ children }: { children: React.ReactNode }) {
  return (
    <Box position={'fixed'} bottom={0} bg={'white'} w={'full'} border={'1px solid #ededed'}>
      {children}
    </Box>
  );
}

export default FooterNav;
