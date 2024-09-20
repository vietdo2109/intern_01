import { Box, HStack, Flex, Icon, Text, Button } from "@chakra-ui/react";

import { FaCircleUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import WhiteLogo from "../assets/logos/logo-creative-tim-white.svg";
import BlackLogo from "../assets/logos/logo-creative-tim-black.svg";

import { Link } from "react-router-dom";
export default function TopNavBar({
  shadow,
  logoColor,
  textColor,
  bgColor,
  btnColor,
  btnTextColor,
}: {
  shadow: boolean;
  logoColor: string;
  textColor: string;
  bgColor: string;
  btnColor: string;
  btnTextColor: string;
}) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      minW="800px"
      width="60%"
      height="70px"
      bg={bgColor}
      padding="20px"
      borderRadius="15px"
      shadow={shadow === true ? "md" : "none"}
    >
      <HStack
        justifyItems={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        <img
          src={logoColor === "black" ? BlackLogo : WhiteLogo}
          alt="logo"
        />
        <Text
          fontWeight="700"
          color={textColor}
          fontSize="14px"
          className="title"
        >
          PURITY UI DASHBOARD
        </Text>
      </HStack>
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"30px"}
      >
        <Flex
          alignItems={"center"}
          className="nav-container"
        >
          <Link to="#">
            <Box
              display="flex"
              alignItems={"center"}
              gap={"4px"}
              className="nav-container"
            >
              <Icon
                w="11px"
                h="11px"
                as={BsBoxFill}
                color={textColor}
              />
              <Box h="11px">
                <Text
                  fontSize={"10px"}
                  fontWeight={700}
                  color={textColor}
                >
                  DASHBOARD
                </Text>
              </Box>
            </Box>
          </Link>
        </Flex>
        <Flex
          display="flex"
          alignItems={"center"}
          className="nav-container"
        >
          <Link to="/profile">
            <Box
              display="flex"
              alignItems={"center"}
              gap="4px"
            >
              <Icon
                w="11px"
                h="11px"
                color={textColor}
                as={FaUser}
              />
              <Box h="11px">
                <Text
                  fontSize={"10px"}
                  fontWeight={700}
                  color={textColor}
                >
                  PROFILE
                </Text>
              </Box>
            </Box>
          </Link>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={"4px"}
        >
          <Link to="/signup">
            <Box
              display="flex"
              alignItems={"center"}
              gap="4px"
            >
              <Icon
                w="11px"
                h="11px"
                color={textColor}
                as={FaCircleUser}
              />
              <Box h="11px">
                <Text
                  fontSize={"10px"}
                  fontWeight={700}
                  color={textColor}
                >
                  SIGN UP
                </Text>
              </Box>
            </Box>
          </Link>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={"4px"}
          className="nav-container"
        >
          <Link to="/login">
            <Box
              display="flex"
              alignItems={"center"}
              gap={"4px"}
            >
              <Icon
                w="11px"
                h="11px"
                color={textColor}
                as={FaKey}
              />
              <Box h="11px">
                <Text
                  fontSize={"10px"}
                  fontWeight={700}
                  color={textColor}
                >
                  SIGN IN
                </Text>
              </Box>
            </Box>
          </Link>
        </Flex>
      </Flex>
      <Button
        w={"150px"}
        h={"35px"}
        p={"0 8px 0 8px"}
        borderRadius={"35.5px"}
        bg={btnColor}
        bgGradient={btnColor}
        colorScheme={btnColor}
      >
        <Text
          fontSize={"10px"}
          fontWeight={700}
          color={btnTextColor}
        >
          Free Download
        </Text>
      </Button>
    </Flex>
  );
}
