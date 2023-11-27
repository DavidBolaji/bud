import { useState, useEffect } from 'react';
import StepWizard, { StepWizardProps } from 'react-step-wizard';
import NewBudgetPageOne from './NewBudgetPageOne';
import NewBudgetPageTwo from './NewBudgetPageTwo';
import { Box, Flex } from '@chakra-ui/react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function NewBudgetPage() {
  const [SW, setSW] = useState<StepWizardProps | any>(null);
  const [cur, setCur] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCur(SW?.currentStep);
  }, [count]);

  const navigate = useNavigate();
  return (
    <Box
      as={'div'}
      position={'relative'}
      w={'full'}
      height={'100vh'}
      paddingTop={'env(safe-area-inset-top)'}
    >
      <Box width={'100vw'} paddingX={{ base: 8, md: 100 }}>
        <Flex alignItems={'center'} mt={'20px'} justifyContent={'space-between'}>
          <Box
            transition={'transform 0.3s linear'}
            cursor={'pointer'}
            w={'40px'}
            height={'40px'}
            _hover={{
              bg: '#ededed',
              transform: 'scale(1.1)',
            }}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            rounded={'full'}
            onClick={() => {
              if (SW?.currentStep - 1 < 1) {
                navigate(-1);
              } else {
                SW.previousStep();
                setCount((prev) => prev - 1);
              }
            }}
          >
            <FaArrowLeftLong color={'#001233'} size={20} />
          </Box>
          <Box>
            {cur ? cur : 1}/{SW?.totalSteps}
          </Box>
        </Flex>
        <StepWizard initialStep={0} instance={setSW} className="-mt-10">
          <NewBudgetPageOne SW={SW} render={() => setCount((prev) => prev + 1)} />
          <NewBudgetPageTwo />
        </StepWizard>
      </Box>
    </Box>
  );
}

export default NewBudgetPage;
