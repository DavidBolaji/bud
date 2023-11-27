import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import EmptyComponent from './EmptyComponent';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setBudgetMonth } from '../redux/action/budgetAction';
import CircularProgressBar2 from './BudgetProgressComponent2';
import { IBudget } from '../redux/reducer/BudgetReducer';

const hash: { [key: number]: string } = {
  0: 'last month',
  1: 'this month',
};

function TabComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { budget } = useSelector((state: RootState) => state.budgetList);
  const list = budget?.budget?.filter((b: IBudget) => b.budget_month === budget.monthIndex);
  const list_id = list && list.length > 0 ? list[0]?.budget_id : -1;

  useEffect(() => {
    dispatch(setBudgetMonth(hash[tabIndex]));
  }, [tabIndex, dispatch]);

  return (
    <Box mt={'30px'}>
      <Tabs
        position="relative"
        variant="unstyled"
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab
            _selected={{
              color: '#707480',
              position: 'relative',
              borderBottom: '2px solid transparent',

              _before: {
                content: '""',
                position: 'absolute',
                transform: 'translateX(16px)',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(to right, #0466C8 40%, #FFFFFF 10%)',
              },
            }}
          >
            Last Month
          </Tab>
          <Tab
            _selected={{
              color: '#707480',
              position: 'relative',
              borderBottom: '2px solid transparent',

              _before: {
                content: '""',
                position: 'absolute',
                transform: 'translateX(16px)',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(to right, #0466C8 40%, #FFFFFF 10%)',
              },
            }}
          >
            This Month
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {tabIndex === 0 && list_id !== -1 ?
            <CircularProgressBar2 />:
            <EmptyComponent /> 
          }
          </TabPanel>
          <TabPanel> 
            {tabIndex === 1 && list_id !== -1 ?
             <CircularProgressBar2 />:
             <EmptyComponent /> 
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default TabComponent;
