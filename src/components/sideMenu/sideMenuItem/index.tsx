import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { SideMenuItem } from './sideMenuItems';
import { NavLink } from 'react-router-dom';
import { GREEN_COLOR, DARK_COLOR, WHITE_COLOR } from '@constants/colors';
import { FC } from 'react';

export const MenuItem: FC<SideMenuItem> = ({ title, icon, url }) => {
  return (
    <NavLink
      key={title}
      style={{
        width: '100%',
      }}
      to={url}
    >
      {({ isActive }) => (
        <Flex w="100%" flexDir="column">
          <Box
            display="flex"
            alignItems={'center'}
            w="100%"
            gap={'12px'}
            padding="12px"
            borderRadius="15px"
            className="nav-container"
            bg={isActive ? WHITE_COLOR : ''}
          >
            <Box
              display="flex"
              h="30px"
              w="30px"
              alignItems={'center'}
              justifyContent={'center'}
              bg={isActive ? GREEN_COLOR : WHITE_COLOR}
              borderRadius="12px"
            >
              <Icon w="15px" h="15px" as={icon} color={isActive ? WHITE_COLOR : GREEN_COLOR} />
            </Box>

            <Box h="11px">
              <Text fontSize={'12px'} fontWeight={700} color={DARK_COLOR}>
                {title}
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </NavLink>
  );
};
