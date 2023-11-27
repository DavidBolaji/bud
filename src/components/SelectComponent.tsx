import { Box, Flex, FormControl, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react';
import { Iexpensedata, expenseCategory } from '../data';
import { Icons } from '../assets';
import React, { ChangeEvent } from 'react';
const getIconForCategory = (category: string) => {
  switch (category) {
    case 'Savings':
      return (
        <Flex
          w={'24px'}
          h={'24px'}
          rounded={'full'}
          bg={'#038A3933'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Icons.SavingIcon style={{ transform: 'scale(1.5)' }} />
        </Flex>
      );
    case 'Food and drinks':
      return <Icons.FoodIcon style={{ transform: 'scale(1.5)' }} />;
    case 'Events':
      return <Icons.NoteIcon style={{ transform: 'scale(1.5)' }} />;
    case 'Calls':
      return <Icons.CallIcon style={{ transform: 'scale(1.5)' }} />;
    case 'Car':
      return (
        <Flex
          w={'24px'}
          h={'24px'}
          rounded={'full'}
          bg={'#038A3933'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Icons.CarIcon style={{ transform: 'scale(1.5)' }} />
        </Flex>
      );
    case 'Internet':
      return <Icons.SettingIcon style={{ transform: 'scale(1.5)' }} />;
    default:
      return null;
  }
};

function SelectComponent({ setGrp }: { setGrp: (data: Iexpensedata) => void }) {
  const [active, setActive] = React.useState<null | string>(null);
  const [icon, setIcon] = React.useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    if (active) {
      setIcon(getIconForCategory(active));
    }
  }, [active]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setActive(e.target.value);
      setGrp(expenseCategory.filter((exp: Iexpensedata) => exp.name === e.target.value)[0]);
    } else {
      setActive('empty');
    }
  };
  return (
    <Box py={'3px'} boxShadow={'md'}>
      <FormControl>
        <InputGroup>
          <InputLeftAddon pointerEvents="none" children={icon} bg={'transparent'} border={'none'} />
          <Select
            fontWeight={'600'}
            fontSize={'14px'}
            variant="unstyled"
            mt={'6px'}
            placeholder="Select Expense Category"
            onChange={handleChange}
          >
            {expenseCategory.map((expense: Iexpensedata) => (
              <option key={expense.id} value={expense.name}>
                {expense.name}
              </option>
            ))}
          </Select>
        </InputGroup>
      </FormControl>
    </Box>
  );
}

export default SelectComponent;
