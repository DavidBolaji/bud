import { Box, Text } from '@chakra-ui/react';
import { FaPen, FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { IBudget } from '../redux/reducer/BudgetReducer';

export const convertToCur = (amount: number) => {
  if (amount) {
    const inputValue = String(amount).replace(/[^0-9]/g, '');
    const formattedValue = Number(inputValue).toLocaleString('en-US');
    return formattedValue;
  }
};

function CreateBudgetComponent() {
  const navigate = useNavigate();
  const { budget } = useSelector((state: RootState) => state.budgetList);
  const list = budget?.budget?.filter((b: IBudget) => b.budget_month === budget.monthIndex);

  return (
    <Box
      h={'51px'}
      bg={'#fff'}
      w={'full'}
      boxShadow={'md'}
      cursor={'pointer'}
      rounded={'10px'}
      mt={'20px'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={'20px'}
    >
      {list?.length > 0 ? (
        <Text fontSize={24} fontWeight={700} color={'#001233'}>
          ₦{convertToCur(list[0].budget_amount)}
        </Text>
      ) : (
        <Text color={'#001233'}>Create a budget</Text>
      )}
      <Box
        bg={'#CADDF1'}
        w={'30px'}
        h={'30px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        rounded={'full'}
        transition={'transform 0.3s linear'}
        _hover={{
          transform: 'scale(1.2)',
        }}
        onClick={() => navigate('/create')}
      >
        {list?.length > 0 ? (
          <FaPen size={14} color={'#0466C8'} />
        ) : (
          <FaPlus size={20} color={'#0466C8'} />
        )}
      </Box>
    </Box>
  );
}

export default CreateBudgetComponent;
