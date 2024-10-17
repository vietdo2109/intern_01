import SideMenu from '../sideMenu';
import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box bg="#F8F9FA" display="flex">
      <SideMenu />
      <Box bg={'#F8F9FA'} w="300px"></Box>
      {children}
    </Box>
  );
};
