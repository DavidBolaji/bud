import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoot from './pages/AppRoot';
import HomePage from './pages/HomePage/HomePage';
import BudgetPage from './pages/BudgetPage/BudgetPage';
import NewBudgetPage from './pages/BudgetPage/NewBudgetPage/NewBudgetPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    children: [
      {
        path: 'budget',
        element: <BudgetPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/create',
    element: <NewBudgetPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
