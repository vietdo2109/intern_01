import { Box, Button, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import BlackLogo from '../../assets/logos/faviconBlack.svg';
import { SideMenuItem } from './sideMenuItem/sideMenuItems';
import { sideMenuItems } from './sideMenuItem/sideMenuItems';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { MenuItem } from './sideMenuItem';
import { Link } from 'react-router-dom';
import SidebarHelpBg from '../../assets/images/sidebarHelpImage.png';
import { greenColor, darkColor, whiteColor, bgColor } from '../../constants/colors';

export default function SideMenu() {
  return (
    <Box h="100vh" bg={bgColor} w="280px" position="fixed" float="left" zIndex="1">
      <Flex padding="40px" flexDir="column" justifyContent="center" alignItems="center">
        <Link to={'/dashboard'}>
          <HStack
            height="21px"
            justifyItems={'center'}
            alignItems={'center'}
            gap={'10px'}
            cursor={'pointer'}
          >
            <img src={BlackLogo} alt="logo" />
            <Text fontWeight="700" color="#2D3748" fontSize="14px" className="title">
              PURITY UI DASHBOARD
            </Text>
          </HStack>
        </Link>

        <Box
          mt="30px"
          h="2px"
          w="100%"
          bgGradient="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)"
          mb="22.5px"
        ></Box>
        {sideMenuItems.map((item: SideMenuItem, index: number) => {
          if (item.title === 'Profile') {
            return (
              <Box key={index} width="100%">
                <Box width="100%" padding="12px">
                  <Text
                    color={darkColor}
                    fontSize="12px"
                    fontWeight="700"
                    mt="20px"
                    textAlign="left"
                  >
                    ACCOUNT PAGES
                  </Text>
                </Box>

                <MenuItem title={item.title} icon={item.icon} url={item.url} />
              </Box>
            );
          } else {
            return <MenuItem key={index} title={item.title} icon={item.icon} url={item.url} />;
          }
        })}

        <Box
          mt="40px"
          bgImage={SidebarHelpBg}
          w="100%"
          h="169px"
          borderRadius="15px"
          display="flex"
          p="16px"
          flexDir="column"
        >
          <Box
            display="flex"
            h="35px"
            w="35px"
            alignItems={'center'}
            justifyContent={'center'}
            bg={whiteColor}
            borderRadius="12px"
          >
            <Icon w="18px" h="18px" as={BsFillQuestionCircleFill} color={greenColor} />
          </Box>
          <Text fontSize="14px" fontWeight="700" mt="20px" color={whiteColor}>
            Need help?
          </Text>
          <Text fontSize="12px" fontWeight="400" color={whiteColor}>
            Please check our docs
          </Text>
          <Button mt="8.5px" colorScheme="white" bg={whiteColor} borderRadius="12px">
            <Text textAlign="center" fontSize="10px" color={darkColor} fontWeight="700">
              DOCUMENTATION
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
