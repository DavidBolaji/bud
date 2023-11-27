import {
  CircularProgress,
  CircularProgressLabel,
  Box,
  Center,
  Text,
  Heading,
} from '@chakra-ui/react';
import CategoryComponent from './CategoryComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { IBudget } from '../redux/reducer/BudgetReducer';
import { convertToCur } from './CreateBudgetComponent';
import { IExpense } from '../redux/reducer/expenseReducer';
import React, { useState } from 'react';

const ProductProgress = ({ progress, color }: { progress: number; color: string }) => {
  return (
    <Box position="relative">
      <Box w={300} h={300} rounded={'full'} position={'relative'}>
        <CircularProgress
          value={0}
          color={color}
          size="300px"
          thickness="4px"
          trackColor="blue.100"
          transform={'translate(-17px,-17px)'}
        ></CircularProgress>
        <Box pos={'absolute'} top={0}>
          <CircularProgress
            value={progress}
            color={color}
            size="265px"
            thickness="4px"
            trackColor="transparent"
            capIsRound
          >
            <CircularProgressLabel fontWeight={700} fontSize="36px" color={'#0466C8'}>
              {progress}%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    </Box>
  );
};

const CircularProgressBar2 = () => {
  const { budget } = useSelector((state: RootState) => state.budgetList);
  const { expenses } = useSelector((state: RootState) => state.expList);
  const list = budget?.budget?.filter((b: IBudget) => b.budget_month === budget.monthIndex);
  const list_id = list && list.length > 0 ? list[0]?.budget_id : -1;
  const list_amount = list && list.length > 0 ? list[0]?.budget_amount : -1;

  const [, setCount] = useState(0)

  React.useEffect(() => {
    setCount(prev => prev + 1);
  }, [budget.monthIndex])
 
  const cumPerc = expenses &&
  expenses
    .filter(
      (e: IExpense) =>
        e.expense_budget_id === list_id || e.expense_budget_id === budget.currentBudget
    ).reduce(
      (acc: number, cur: IExpense) => {
        return acc += cur.expense_percentage
      }, 0)
  const cumAmt = expenses &&
  expenses
    .filter(
      (e: IExpense) =>
        e.expense_budget_id === list_id || e.expense_budget_id === budget.currentBudget
    ).reduce(
      (acc: number, cur: IExpense) => {
        return acc += cur.expense_amount
      }, 0)

      const products = [{ label: 'Product 1', progress: cumPerc, color: '#0466C8' }];
  return (
    <Box pb={'100px'}>
      <Center>
        <Box textAlign="center">
          {products.map((product, index) => (
            <ProductProgress key={index} progress={product.progress} color={product.color} />
          ))}
        </Box>
      </Center>
      <Text textAlign={'center'} fontSize={'14px'} mb={'10px'} color={'#707480'}>
        Amount spent so far
      </Text>
      <Box textAlign={'center'} color={'#707480'} mb={'33px'}>
        <Text as={'span'} fontSize={'16px'} color={'#0466C8'}>
          ₦{convertToCur(cumAmt)}
        </Text>
        /
        <Text as={'span'} fontSize={'16px'} color={'#67A2DC'}>
          ₦{convertToCur(list_amount)}
        </Text>
      </Box>
      <Box>
        <Heading color={'#001233'} fontSize={'21px'} fontWeight={700}>
          Category Breakdown
        </Heading>
      </Box>
      <Box mt="24px">
        <CategoryComponent />
      </Box>
    </Box>
  );
};

export default CircularProgressBar2;
