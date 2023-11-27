import { Box, CircularProgress, Grid, GridItem } from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { IBudget } from '../redux/reducer/BudgetReducer';
import { IExpense } from '../redux/reducer/expenseReducer';
import { convertToCur } from './CreateBudgetComponent';

const hash: {[key: string]: string} = {
    'Savings': '#038A39',
    'Food and drinks': '#C89104',
    'Internet': '#0466C8',
    'Car': '#04A5C8',
    'Calls': '#C80462',
    'Events': '#5A04C8'
}

function CategoryComponent() {
  const { budget } = useSelector((state: RootState) => state.budgetList);
  const { expenses } = useSelector((state: RootState) => state.expList);
  const list = budget?.budget?.filter((b: IBudget) => b.budget_month === budget.monthIndex);
  const list_id = list && list.length > 0 ? list[0]?.budget_id : -1;
  return (
    <Box>
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
                    <Box pos={'relative'} transform={'translateY(25px)'} >
                    <CircularProgress
                        value={exp.expense_percentage}
                        position={'relative'}
                        color={hash[exp!.expense_group!.name as unknown as string]}
                        size={`${exp.expense_group?.name === 'Savings' || exp.expense_group?.name === 'Car' ? '40px': '35px'}`}
                        thickness="8px"
                        trackColor="transparent"
                        transform={'translate(-25px,-25px)'}
                    >
                    <Box pos={'absolute'} top={2} left={2} transform={`${exp.expense_group?.name === 'Savings' || exp.expense_group?.name === 'Car' ? 'scale(1.3)': ''}`}> {exp.expense_group?.icon}</Box>
                       
                    </CircularProgress>

                    </Box>
                </GridItem>
                <GridItem w={'full'} colStart={0} fontSize={14} whiteSpace={'nowrap'} colSpan={3}>
                  <Box color={'#001233'}>
                    {exp.expense_group?.name}
                    </Box>
                  <Box color={'#707480'}>
                  {Math.round(exp.expense_percentage)}%
                    </Box>
                </GridItem>
                <GridItem fontSize={14} colSpan={3}>
                <Box as={'span'} color={'#001233'}>
                ₦{convertToCur(exp.expense_amount)}
                    </Box>/
                  <Box as={'span'} color={'#707480'}>
                  ₦{convertToCur(list[0]?.budget_amount)}
                    </Box>
                </GridItem>
             
              </Grid>
            );
          })}
    </Box>
  );
}

export default CategoryComponent;
