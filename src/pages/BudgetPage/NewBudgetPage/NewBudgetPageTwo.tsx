import { Box, Button, Grid, GridItem, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { FaArrowRightLong, FaMinus, FaPlus } from 'react-icons/fa6';
import { useState, ChangeEvent } from 'react';
import SelectComponent from '../../../components/SelectComponent';
import { useDispatch, useSelector } from 'react-redux';
import { rmExpense, setExpense } from '../../../redux/action/expenseAction';
import { v4 as uuidv4 } from 'uuid';
import { AppDispatch, RootState } from '../../../redux/store';
import { IBudget } from '../../../redux/reducer/BudgetReducer';
import { IExpense } from '../../../redux/reducer/expenseReducer';
import { Iexpensedata } from '../../../data';
import { useNavigate } from 'react-router-dom';

function NewBudgetPageTwo() {
  const [val, setVal] = useState('');
  const [grp, setGrp] = useState<Iexpensedata | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { budget } = useSelector((state: RootState) => state.budgetList);
  const { expenses } = useSelector((state: RootState) => state.expList);
  const list = budget?.budget?.filter((b: IBudget) => b.budget_month === budget.monthIndex);
  const list_id = list && list.length > 0 ? list[0].budget_id : -1;
  const navigate = useNavigate();
  const toast = useToast();
  const disabled = val.replace(',', '').trim().length < 1;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = Number(inputValue).toLocaleString('en-US');
    setVal(formattedValue);
  };
  const handleAdd = () => {
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
    const arrH = budget;
    const id = uuidv4();
    const totalMntBgt =
      arrH && arrH.budget.filter((b: IBudget) => b.budget_id === budget.currentBudget);
    const percentage = (+val.replace(',', '') / totalMntBgt[0].budget_amount) * 100;

    dispatch(
      setExpense({
        expense_id: id,
        expense_budget_id: budget.currentBudget,
        expense_amount: +val.replace(',', ''),
        expense_percentage: percentage,
        expense_group: grp,
      })
    );
  };

  const handleGrp = (grp: Iexpensedata) => {
    setGrp(grp);
  };

  const handleNext = () => {
    if (!expenses) {
      return toast({
        title: 'Form error',
        description: 'Budget List cannot be empty',
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    }
    navigate('/');
  };
  return (
    <Box position={'relative'} h={'80vh'}>
      <Heading mt={'20px'} mb={'16px'} fontSize={'28px'} color={'#001233'}>
        Create new budget
      </Heading>
      <Text mb={'24px'} color={'#707480'}>
        How much would you like to spend on each category this month?
      </Text>
      <Box bg={'white'} py={'10px'} mb={'30px'} maxW={'240px'}>
        <SelectComponent setGrp={handleGrp} />
      </Box>
      <Box maxW={'240px'}>
        <Input variant="flushed" value={val} placeholder="Amount (in ₦)" onChange={handleChange} />
      </Box>
      <Box display={'flex'} mt={'20px'} justifyContent={'end'}>
        <Box
          _hover={{
            transform: 'scale(1.1)',
          }}
          w="48px"
          h={'48px'}
          transition={'transform 0.3s linear'}
          cursor={'pointer'}
          rounded={'full'}
          bg={'#cadef2'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          onClick={handleAdd}
        >
          <FaPlus color={'#0466C8'} size={20} />
        </Box>
      </Box>
      <Box mt={10} overflowY={'auto'} h={'150'}>
        {expenses &&
          expenses
            .filter(
              (e: IExpense) =>
                e.expense_budget_id === list_id || e.expense_budget_id === budget.currentBudget
            )
            .map((exp: IExpense) => {
              return (
                <Grid
                  alignItems={'center'}
                  templateColumns="repeat(7, 1fr)"
                  mb={'6'}
                  key={exp.expense_id}
                >
                  <GridItem ml={2} colSpan={1}>
                    {exp.expense_group?.icon}
                  </GridItem>
                  <GridItem w={'full'} colStart={0} fontSize={14} whiteSpace={'nowrap'} colSpan={2}>
                    {exp.expense_group?.name}
                  </GridItem>
                  <GridItem fontSize={14} colSpan={2}>
                    ₦{exp.expense_amount}
                  </GridItem>
                  <GridItem fontSize={14} colSpan={1}>
                    {Math.round(exp.expense_percentage)}%
                  </GridItem>

                  <GridItem
                    colSpan={1}
                    onClick={() => dispatch(rmExpense(exp.expense_id))}
                    bg={'#707480'}
                    w={'30px'}
                    h={'30px'}
                    rounded={'full'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    cursor={'pointer'}
                    transition={'transform 0.3s linear'}
                    _hover={{
                      transform: 'scale(1.1)',
                    }}
                  >
                    <FaMinus size={20} />
                  </GridItem>
                </Grid>
              );
            })}
      </Box>

      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        w={'full'}
        position={'absolute'}
        bottom={'-40px'}
      >
        <Button
          _hover={{
            transform: 'scale(1.05)',
            cursor: 'pointer',
          }}
          as={'a'}
          color={'#0466C8'}
          bg={'transparent'}
          rightIcon={<FaArrowRightLong style={{ marginTop: 4 }} size={20} color={'#0466C8'} />}
          onClick={handleNext}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}

export default NewBudgetPageTwo;
