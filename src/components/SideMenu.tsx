import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import BlackLogo from "../assets/logos/logo-creative-tim-black.svg";
import { SideMenuItem } from "./SideMenuItems";
import { sideMenuItems } from "./SideMenuItems";
import { NavLink } from "react-router-dom";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";

import SidebarHelpBg from "../assets/images/SidebarHelpImage.png";

export default function SideMenu() {
  const greenColor = "#4FD1C5";
  const darkColor = "#2D3748";
  const whiteColor = "#FFFFFF";
  const grayColor = "#F8F9FA";
  return (
    <Box
      h="100vh"
      bg={grayColor}
      w="280px"
      position="fixed"
      float="left"
      zIndex="1"
    >
      <Flex
        padding="40px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <HStack
          height="21px"
          justifyItems={"center"}
          alignItems={"center"}
          gap={"10px"}
        >
          <img
            src={BlackLogo}
            alt="logo"
          />
          <Text
            fontWeight="700"
            color="#2D3748"
            fontSize="14px"
            className="title"
          >
            PURITY UI DASHBOARD
          </Text>
        </HStack>
        <Box
          mt="30px"
          h="2px"
          w="100%"
          bgGradient="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)"
          mb="22.5px"
        ></Box>
        {sideMenuItems.map((item: SideMenuItem) => {
          if (item.title === "Profile") {
            return (
              <>
                <Box
                  width="100%"
                  padding="12px"
                >
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

                <MenuItem
                  title={item.title}
                  icon={item.icon}
                  url={item.url}
                />
              </>
            );
          } else {
            return (
              <MenuItem
                title={item.title}
                icon={item.icon}
                url={item.url}
              />
            );
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
            alignItems={"center"}
            justifyContent={"center"}
            bg={whiteColor}
            borderRadius="12px"
          >
            <Icon
              w="18px"
              h="18px"
              as={BsFillQuestionCircleFill}
              color={greenColor}
            />
          </Box>
          <Text
            fontSize="14px"
            fontWeight="700"
            mt="20px"
            color={whiteColor}
          >
            Need help?
          </Text>
          <Text
            fontSize="12px"
            fontWeight="400"
            color={whiteColor}
          >
            Please check our docs
          </Text>
          <Button
            mt="8.5px"
            colorScheme="white"
            bg={whiteColor}
            borderRadius="12px"
          >
            <Text
              textAlign="center"
              fontSize="10px"
              color={darkColor}
              fontWeight="700"
            >
              DOCUMENTATION
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
