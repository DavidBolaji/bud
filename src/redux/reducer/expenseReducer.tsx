import { Iexpensedata } from '../../data';
import { REMOVE_EXPENSE, SET_EXPENSE } from '../constants/constants';

export interface IExpense {
  expense_id: string;
  expense_budget_id: string;
  expense_amount: number;
  expense_percentage: number;
  expense_group: Iexpensedata | null;
}
export interface IExpenseUser {
  expenses: IExpense[] | [];
}

type State = IExpenseUser;

const initialState: State = {
  expenses: [],
};

export const expenseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EXPENSE:
      console.log(state);
      return {
        expenses: [...state.expenses, action.payload],
      };
    case REMOVE_EXPENSE:
      const newExpenses = state.expenses.filter((exp) => exp.expense_id !== action.payload);
      return {
        expenses: newExpenses,
      };
    default:
      return state;
  }
};
