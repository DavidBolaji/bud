import { Flex } from '@chakra-ui/react';
import { Icons } from '../assets';

export type Iexpensedata = { id: string; name: string; icon: React.ReactNode };
export const expenseCategory: Iexpensedata[] = [
  {
    id: 'savings',
    name: 'Savings',
    icon: (
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
    ),
  },
  {
    id: 'food and drinks',
    name: 'Food and drinks',
    icon: <Icons.FoodIcon style={{ transform: 'scale(1.5)', marginRight: 10 }} />,
  },
  {
    id: 'events',
    name: 'Events',
    icon: <Icons.NoteIcon style={{ transform: 'scale(1.5)', marginRight: 10 }} />,
  },
  {
    id: 'calls',
    name: 'Calls',
    icon: <Icons.CallIcon style={{ transform: 'scale(1.5)', marginRight: 10 }} />,
  },
  {
    id: 'car',
    name: 'Car',
    icon: (
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
    ),
  },
  {
    id: 'internet',
    name: 'Internet',
    icon: <Icons.SettingIcon />,
  },
];
