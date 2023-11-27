import { Box, Heading, Text } from '@chakra-ui/react';
import { FaNairaSign } from 'react-icons/fa6';
import CreateBudgetComponent from '../../components/CreateBudgetComponent';

import TabComponent from '../../components/TabComponent';

function BudgetPage() {
  return (
    <>
      <Heading color={'#001233'} mb={'28px'} mt={'20px'}>
        Budget
      </Heading>
      <Box display={'flex'} gap={'20px'} alignItems={'center'}>
        <Box
          bg={'#cadef2'}
          rounded={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          w={'30px'}
          h={'30px'}
        >
          <FaNairaSign color={'#0466C8'} />
        </Box>
        <Box>
          <Text color={'#707480'}>Monthly Budget</Text>
        </Box>
      </Box>
      <CreateBudgetComponent />
      <TabComponent />
    </>
  );
}

export default BudgetPage;
