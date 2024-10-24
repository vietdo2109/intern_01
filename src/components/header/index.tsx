import { Flex, InputGroup, InputLeftElement, Input, Text, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaBell as notificationIcon } from 'react-icons/fa';
import { IoMdSettings as settingIcon } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { GRAY_TEXT_COLOR, WHITE_COLOR } from '@constants/colors';
type HeaderProps = {
  theme: 'dark' | 'light';
  page: string;
};

export const Header: FC<HeaderProps> = ({ theme, page }) => {
  const themeColor = theme === 'dark' ? { GRAY_TEXT_COLOR } : { WHITE_COLOR };
  return (
    <Flex width="100%" justifyContent="space-between" height={'40px'} >
      <Flex flexDir="column" color={themeColor}>
        <Text>Page / {page}</Text>
        <Text fontWeight={700}>{page}</Text>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between" gap="18px" w="335px">
        <InputGroup w="199px">
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} w="12px" h="12px" color="#2D3748"></Icon>
          </InputLeftElement>
          <Input
            bg="#FFFFFF"
            type="text"
            fontSize="12px"
            placeholder="Type here..."
            borderRadius="15px"
            h="39.5px"
          />
        </InputGroup>
        <Link to={'/login'}>
          <Flex alignItems="center" gap="5px" width="58px" h="16px">
            <Icon color={themeColor} w="12px" h="12px" as={FaUser}></Icon>
            <Text fontSize="12px" fontWeight={700} color={themeColor} mt="3px">
              Sign in
            </Text>
          </Flex>
        </Link>

        <Icon color={themeColor} w="12px" h="12px" as={settingIcon} cursor={'pointer'}></Icon>
        <Icon color={themeColor} w="12px" h="12px" as={notificationIcon} cursor={'pointer'}></Icon>
      </Flex>
    </Flex>
  );
};
