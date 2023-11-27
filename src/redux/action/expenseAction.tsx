import { REMOVE_EXPENSE, SET_EXPENSE } from '../constants/constants';
import { IExpense } from '../reducer/expenseReducer';
import { AppDispatch } from '../store';

export const setExpense = (data: IExpense) => async (dispatch: AppDispatch, getState: any) => {
  console.log(data);
  try {
    dispatch({
      type: SET_EXPENSE,
      payload: data,
    });
    localStorage.setItem('exp', JSON.stringify(getState().expList.expenses));
  } catch (error: any) {
    console.log(error.message);
  }
};
export const rmExpense = (id: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: REMOVE_EXPENSE,
    payload: id,
  });
};
