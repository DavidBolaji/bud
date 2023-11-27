import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { budgetReducer } from './reducer/BudgetReducer';
import { expenseReducer } from './reducer/expenseReducer';

const initialState = {};

const middlewares = [thunk];
const reducer = combineReducers({
  budgetList: budgetReducer,
  expList: expenseReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
