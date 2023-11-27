import {
  CLEAR_CURRENT_BUDGET,
  SET_BUDGET,
  SET_CURRENT_BUDGET,
  SET_MONTH,
} from '../constants/constants';
import { IBudget } from '../reducer/BudgetReducer';
import { AppDispatch } from '../store';

export const setBudget = (data: IBudget) => async (dispatch: AppDispatch, getState: any) => {
  try {
    dispatch({
      type: SET_BUDGET,
      payload: data,
    });
    localStorage.setItem('budget', JSON.stringify(getState().budgetList.budget));
  } catch (error: any) {
    console.log(error.message);
  }
};
export const setCurrentBudget = (id: string) => async (dispatch: AppDispatch) => {
  console.log(id);
  dispatch({
    type: SET_CURRENT_BUDGET,
    payload: id,
  });
};
export const rmCurrentBudget = (id: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: CLEAR_CURRENT_BUDGET,
    payload: id,
  });
};
export const setBudgetMonth = (mnt: string) => async (dispatch: AppDispatch) => {
  console.log(mnt);
  dispatch({
    type: SET_MONTH,
    payload: mnt,
  });
};
