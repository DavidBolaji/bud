import { Box, Image, Text } from '@chakra-ui/react';
import { Images } from '../assets';

function EmptyComponent() {
  return (
    <>
      <Box
        display={'flex'}
        mt={'50px'}
        position={'relative'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          <Image
            src={Images.CircleImage}
            alt="circlee"
            boxSize="200px"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box position={'absolute'} transform={'translateY(-50%)'} top={'40%'}>
          <Text fontSize="100px" color={'#B8CBDF'}>
            ?
          </Text>
        </Box>
        <Box position={'absolute'} transform={'translateY(0%)'} top={'50%'}>
          <Image src={Images.SemiCircleImage} alt="circlee" objectFit="cover" borderRadius="md" />
        </Box>
      </Box>
      <Text
        color={'#707480'}
        textAlign={'center'}
        mt={'10px'}
        margin={'30px auto 0px'}
        maxW={{ base: '190px', md: 'full' }}
      >
        You haven’t created a budget for this month yet
      </Text>
    </>
  );
}

export default EmptyComponent;
