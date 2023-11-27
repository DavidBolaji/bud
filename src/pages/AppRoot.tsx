import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import { Box, Text } from '@chakra-ui/react';
import { Icons } from '../assets';

interface IMenu {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
}

const item = {
  py: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s linear',
};

const navHolder = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  placeItems: 'center',
  gap: '10px',
  margin: '0 auto',
};

function AppRoot() {
  const loc = useLocation();
  const navigate = useNavigate();

  const menu: IMenu[] = [
    {
      id: '/',
      name: 'Home',
      icon: <Icons.HomeIcon fill={loc.pathname === '/' ? '#0466C8' : '#707480'} />,
      path: '/',
    },
    {
      id: 'reports',
      name: 'Reports',
      icon: <Icons.ReportIcon fill={loc.pathname === '/report' ? '#0466C8' : '#707480'} />,
      path: '/',
    },
    {
      id: 'chat',
      name: 'Chat',
      icon: (
        <Icons.ChatIcon
          fill={loc.pathname === '/chat' ? '#0466C8' : '#707480'}
          height="20"
          style={{ transform: 'scale(2)' }}
        />
      ),
      path: '/',
    },
    {
      id: 'budget',
      name: 'Budget',
      icon: <Icons.BarIcon fill={loc.pathname === '/budget' ? '#0466C8' : '#707480'} />,
      path: '/',
    },
    {
      id: 'profile',
      name: 'Profile',
      icon: <Icons.ProfileIcon fill={loc.pathname === '/profile' ? '#0466C8' : '#707480'} />,
      path: '/',
    },
  ];
  return (
    <Box
      as={'div'}
      position={'relative'}
      w={'full'}
      height={'100vh'}
      paddingTop={'env(safe-area-inset-top)'}
    >
      <Box width={'100vw'} paddingX={{ base: 8, md: 100 }}>
        <Outlet />
      </Box>
      <FooterNav>
        <Box sx={navHolder} w={'100%'}>
          {menu.map((m: IMenu) => (
            <Box
              _hover={{
                transform: 'scale(1.1)',
              }}
              key={m.id}
              sx={item}
              w={'full'}
              
              onClick={m.name === 'Home' || m.name === 'Budget' ? () => navigate(m.id): () => console.log('null')}
            >
              <div>{m.icon}</div>
              <Text color={'#707480'} size={'12px'} mt={'5px'}>
                {' '}
                {m.name}
              </Text>
            </Box>
          ))}
        </Box>
      </FooterNav>
    </Box>
  );
}

export default AppRoot;
