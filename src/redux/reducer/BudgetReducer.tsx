import {
  CLEAR_CURRENT_BUDGET,
  SET_BUDGET,
  SET_CURRENT_BUDGET,
  SET_MONTH,
} from '../constants/constants';

export interface IBudget {
  budget_id: string;
  budget_month: string | null;
  budget_year: string | null;
  budget_amount: number | null;
}
export interface IBudgetUser {
  budget: {
    currentBudget: null | string;
    monthIndex: null | string;
    budget: IBudget[] | [];
    yearIndex: string;
  };
}

type State = IBudgetUser;

const initialState: State = {
  budget: {
    currentBudget: null,
    monthIndex: 'last month',
    budget: [],
    yearIndex: '2023',
  },
};

export const budgetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BUDGET:
      const hld = state.budget.budget ? state.budget.budget : [];
      return {
        budget: {
          ...state.budget,
          budget: [...hld, action.payload],
        },
      };
    case SET_MONTH:
      console.log(state);
      console.log(action.payload);
      return {
        budget: {
          ...state.budget,
          monthIndex: action.payload,
        },
      };
    case SET_CURRENT_BUDGET:
      return {
        budget: {
          ...state.budget,
          currentBudget: action.payload,
        },
      };
    case CLEAR_CURRENT_BUDGET:
      return {
        budget: {
          ...state.budget,
          currentBudget: null,
        },
      };
    default:
      return state;
  }
};
