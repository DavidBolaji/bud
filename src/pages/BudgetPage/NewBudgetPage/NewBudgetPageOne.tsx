import { Box, Button, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useState, ChangeEvent, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setBudget, setCurrentBudget } from '../../../redux/action/budgetAction';
import { v4 as uuidv4 } from 'uuid';
import { IBudget } from '../../../redux/reducer/BudgetReducer';

function NewBudgetPageOne({ SW, render }: { SW: any; render: () => void }) {
  const [val, setVal] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const toast = useToast();
  const { budget } = useSelector((state: RootState) => state.budgetList);
  const disabled = val.replace(',', '').trim().length < 1;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = Number(inputValue).toLocaleString('en-US');
    setVal(formattedValue);
  };
  const handleNext = () => {
    if (disabled) {
      return toast({
        title: 'Form error',
        description: 'Amount Field cannot be empty',
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    }
    const id = uuidv4();
    dispatch(setCurrentBudget(id));
    dispatch(
      setBudget({
        budget_id: id,
        budget_amount: +val.replace(',', ''),
        budget_year: '2023',
        budget_month: budget.monthIndex!,
      })
    );

    SW.nextStep();
    render();
  };
  useEffect(() => {
    const h = budget?.budget?.filter((e: IBudget) => e.budget_month === budget.monthIndex);
    if (h && h.length > 0) {
      const inputValue = String(h[0].budget_amount).replace(/[^0-9]/g, '');
      const formattedValue = Number(inputValue).toLocaleString('en-US');
      setVal(formattedValue);
    }
  }, []);

  return (
    <Box position={'relative'} h={'80vh'}>
      <Heading mt={'20px'} mb={'16px'} fontSize={'28px'} color={'#001233'}>
        Create new budget
      </Heading>
      <Text mb={'24px'} color={'#707480'}>
        How much would you like to budget for this month?
      </Text>
      <Box maxW={'240px'}>
        <Input variant="flushed" value={val} placeholder="Amount (in ₦)" onChange={handleChange} />
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        w={'full'}
        position={'absolute'}
        bottom={0}
      >
        <Button
          as={'a'}
          _hover={{
            transform: 'scale(1.05)',
          }}
          bg={'transparent'}
          color={'#67A2DC'}
          cursor={'pointer'}
        >
          Create from spending pattern
        </Button>
        <Button
          _hover={{
            transform: 'scale(1.05)',
          }}
          as={'a'}
          color={'#0466C8'}
          disabled={disabled}
          bg={'transparent'}
          cursor={disabled ? 'not-allowed' : 'pointer'}
          rightIcon={<FaArrowRightLong style={{ marginTop: 4 }} size={20} color={'#0466C8'} />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default NewBudgetPageOne;
