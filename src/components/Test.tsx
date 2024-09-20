import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Switch,
  Link,
} from "@chakra-ui/react";
import WhiteLogo from "../assets/logos/logo-creative-tim-white.svg";
import BlackLogo from "../assets/logos/logo-creative-tim-black.svg";
import { BsBoxFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { FaCircleUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import BgSignUp from "../assets/images/BgSignUp.png";
import "./Test.css";

export default function Test() {
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const iconBg = "#2D3748";
  return (
    <Flex
      as="nav"
      p={"10px"}
      w={"100%"}
      justifyContent={"center"}
      h={"100vh"}
    >
      <Flex
        w={"100%"}
        alignItems="center"
        borderRadius={"15px"}
        height={"50%"}
        p="30px"
        pt="40px"
        position={"relative"}
        flexDirection={"column"}
      >
        <Box
          position="absolute"
          minH={{ base: "70vh", md: "50vh" }}
          w={{ md: "calc(100vw - 50px)" }}
          borderRadius={{ md: "15px" }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="-10px"
          bgImage={BgSignUp}
          bgSize="cover"
          mx={{ md: "auto" }}
          mt={{ md: "14px" }}
        ></Box>

        <Flex
          justifyContent="space-around"
          minW="800px"
          width="60%"
          height="35px"
        >
          <HStack
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
              color={"#FFFFFF"}
              fontSize="14px"
              className="title"
            >
              PURITY UI DASHBOARD
            </Text>
          </HStack>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={"30px"}
            flex={1}
          >
            <Flex
              alignItems={"center"}
              className="nav-container"
            >
              <Link
                display="flex"
                alignItems={"center"}
                gap={"4px"}
                className="nav-container"
              >
                <Icon
                  w="11px"
                  h="11px"
                  as={BsBoxFill}
                  color={"#FFFFFF"}
                />
                <Box h="11px">
                  <Text
                    fontSize={"10px"}
                    fontWeight={700}
                    color={"#FFFFFF"}
                  >
                    DASHBOARD
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              display="flex"
              alignItems={"center"}
              className="nav-container"
            >
              <Link
                display="flex"
                alignItems={"center"}
                gap="4px"
              >
                <Icon
                  w="11px"
                  h="11px"
                  color={"#FFFFFF"}
                  as={FaUser}
                />
                <Box h="11px">
                  <Text
                    fontSize={"10px"}
                    fontWeight={700}
                    color={"#FFFFFF"}
                  >
                    PROFILE
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              alignItems={"center"}
              gap={"4px"}
            >
              <Link
                display="flex"
                alignItems={"center"}
                gap={"4px"}
              >
                <Icon
                  w="11px"
                  h="11px"
                  color={"#FFFFFF"}
                  as={FaCircleUser}
                />
                <Box h="11px">
                  <Text
                    fontSize={"10px"}
                    fontWeight={700}
                    color={"#FFFFFF"}
                  >
                    SIGN UP
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              alignItems={"center"}
              gap={"4px"}
              className="nav-container"
            >
              <Link
                display="flex"
                alignItems={"center"}
                gap={"4px"}
                textDecorationLine="none"
                textDecor="none"
              >
                <Icon
                  w="11px"
                  h="11px"
                  color={"#FFFFFF"}
                  as={FaKey}
                />
                <Box h="11px">
                  <Text
                    fontSize={"10px"}
                    fontWeight={700}
                    color={"#FFFFFF"}
                  >
                    SIGN IN
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Flex>
          <Button
            w={"150px"}
            h={"35px"}
            p={"0 8px 0 8px"}
            borderRadius={"35.5px"}
            bg={"#FFFFFF"}
          >
            <Text
              fontSize={"10px"}
              fontWeight={700}
              color={"black"}
            >
              Free Download
            </Text>
          </Button>
        </Flex>

        <Flex
          justifyContent="center"
          mt="60px"
          flexDir={"column"}
          w="333px"
          alignItems="center"
          gap="10px"
        >
          <Box>
            <Text
              fontSize="32px"
              fontWeight="700"
              color="white"
            >
              Welcome!
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="14px"
              fontWeight="400"
              color="white"
              textAlign="center"
            >
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </Box>
        </Flex>

        {/* card */}
        <Flex
          mt="60px"
          alignItems="center"
          justifyContent="center"
          mb="60px"
          minHeight="715px"
          minWidth="400px"
          width="450px"
          borderRadius="15px"
          bg="#FFFFFF"
          boxShadow="lg"
          flexDirection="column"
        >
          {/* card header */}
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontFamily={"Helvetica"}
              fontWeight="700"
              fontSize="18px"
              color="#2D3748"
            >
              Register with
            </Text>
            <Flex
              minW="255px"
              gap="15px"
              p="25px"
            >
              <Flex
                w="75px"
                h="75px"
                justifyContent="center"
                alignItems="center"
                border="1px solid #E2E8F0"
                borderRadius="15px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(110%)", bg: "#4FD1C5" }}
              >
                <Link>
                  <Icon
                    w="26px"
                    h="26px"
                    color={iconBg}
                    mt="5px"
                    as={FaFacebook}
                  ></Icon>
                </Link>
              </Flex>
              <Flex
                w="75px"
                h="75px"
                justifyContent="center"
                alignItems="center"
                border="1px solid #E2E8F0"
                borderRadius="15px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(110%)", bg: "#4FD1C5" }}
              >
                <Link>
                  <Icon
                    w="31px"
                    h="31px"
                    color={iconBg}
                    as={FaApple}
                  ></Icon>
                </Link>
              </Flex>
              <Flex
                w="75px"
                h="75px"
                justifyContent="center"
                alignItems="center"
                border="1px solid #E2E8F0"
                borderRadius="15px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ filter: "brightness(110%)", bg: "#4FD1C5" }}
              >
                <Link href="#">
                  <Icon
                    w="24px"
                    h="24px"
                    mt="5px"
                    color={iconBg}
                    as={FaGoogle}
                  ></Icon>
                </Link>
              </Flex>
            </Flex>
            <Text
              fontSize="18px"
              fontWeight={700}
              color="#A0AEC0"
            >
              or
            </Text>
          </Flex>

          {/* inputs container */}
          <Flex
            flexDir={"column"}
            gap="26px"
            mt="10px"
          >
            <Box>
              <Text
                fontSize="14px"
                color={iconBg}
                ml="5px"
              >
                Name
              </Text>
              <Input
                width="350px"
                height="50px"
                border="1px solid #E2E8F0"
                borderRadius="15px"
                mt="4px"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Your full name"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                p="0 20px 0 20px"
                size="sm"
              />
            </Box>
            <Box>
              <Text
                fontSize="14px"
                color={iconBg}
                ml="5px"
              >
                Email
              </Text>
              <Input
                width="350px"
                height="50px"
                border="1px solid #E2E8F0"
                borderRadius="15px"
                mt="4px"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email address"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Box>
            <Box>
              <Text
                fontSize="14px"
                color={iconBg}
                ml="5px"
              >
                Password
              </Text>
              <Input
                width="350px"
                height="50px"
                border="1px solid #E2E8F0"
                borderRadius="15px"
                mt="4px"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Your password"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Box>
            <FormControl
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Switch
                id="rememer-me-switch"
                colorScheme="teal"
              />
              <FormLabel
                htmlFor="rememer-me-switch"
                mb="0"
                fontSize="12px"
                color="#2D3748"
              >
                Remember me
              </FormLabel>
            </FormControl>

            <Button
              bg="#4FD1C5"
              size="lg"
              borderRadius="12px"
              mt="14px"
            >
              <Text
                color="#FFFFFF"
                fontSize="10px"
                fontWeight={"800"}
              >
                SIGN UP
              </Text>
            </Button>
          </Flex>
          <Text
            color="#A0AEC0"
            fontSize="14px"
            fontWeight="700"
            mt="20px"
          >
            Already have an account?{" "}
            <Link
              color="#4FD1C5"
              cursor="pointer"
              textDecor="none"
            >
              Sign in
            </Link>
          </Text>
        </Flex>

        {/* Footer */}
        <Flex
          w="80%"
          minW="1050px"
          justifyContent={"space-between"}
          height="60px"
          color="#A0AEC0"
          paddingBottom="20px"
          mt="50px"
          gap="70px"
        >
          <Box flex="1">
            <Text>
              © 2021, Made with ❤️ by{" "}
              <Link
                color="#4FD1C5"
                fontWeight="700"
                href="https://www.creative-tim.com/"
              >
                Creative Tim
              </Link>{" "}
              &{" "}
              <Link
                color="#4FD1C5"
                fontWeight="700"
                href="https://simmmple.com/"
              >
                Simmmple
              </Link>{" "}
              for a better web
            </Text>
          </Box>

          <Box>
            <Link href="https://www.creative-tim.com/">
              <Text>Creative Tim</Text>
            </Link>
          </Box>
          <Box>
            <Link href="https://simmmple.com/">
              <Text>Simmmple</Text>
            </Link>
          </Box>
          <Box>
            <Link href="https://www.creative-tim.com/blog">
              <Text>Blog</Text>
            </Link>
          </Box>
          <Box>
            <Link href="https://www.creative-tim.com/license">
              <Text>License</Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
