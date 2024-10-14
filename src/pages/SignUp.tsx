import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

import BgSignUp from "../assets/images/BgSignUp.png";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import { SignUpJoiSchema } from "../schemas";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import ErrorMess from "../components/forms/ErrorMess";

interface NewAccount {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewAccount>({
    resolver: joiResolver(SignUpJoiSchema),
  });

  const onSubmit = (data: NewAccount) => {
    console.log(data);
  };
  const iconBg = "#2D3748";
  return (
    <Flex
      as="nav"
      p={"10px"}
      w={"100%"}
      justifyContent={"center"}
      h={"100vh"}
      mb={"20px"}
    >
      <Flex
        w={"100%"}
        alignItems="center"
        borderRadius={"15px"}
        height={"50%"}
        p="30px"
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

        <TopNavBar
          shadow={false}
          logoColor="white"
          textColor="#FFFFFF"
          bgColor="none"
          btnColor="#FFFFFF"
          btnTextColor="#313860"
        />

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            mt="60px"
            alignItems="center"
            justifyContent="center"
            mb="60px"
            minHeight="915px"
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
                  <Link to={"/"}>
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
                  <Link to={"/"}>
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
                  <Link to={"/"}>
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
                  border={
                    errors.username ? "1px solid red" : "1px solid #E2E8F0"
                  }
                  borderRadius="15px"
                  mt="4px"
                  {...register("username")}
                  placeholder="Your full name"
                  _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                  p="0 20px 0 20px"
                  size="sm"
                />
                <ErrorMess error={errors.username?.message} />
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
                  border={errors.email ? "1px solid red" : "1px solid #E2E8F0"}
                  borderRadius="15px"
                  mt="4px"
                  {...register("email")}
                  placeholder="Your email address"
                  _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                  size="sm"
                  p="0 20px 0 20px"
                />
                <ErrorMess error={errors.email?.message} />
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
                  type="password"
                  width="350px"
                  height="50px"
                  border={
                    errors.password ? "1px solid red" : "1px solid #E2E8F0"
                  }
                  borderRadius="15px"
                  mt="4px"
                  {...register("password")}
                  placeholder="Your password"
                  _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                  size="sm"
                  p="0 20px 0 20px"
                />{" "}
                <ErrorMess error={errors.password?.message} />
              </Box>
              <Box>
                <Text
                  fontSize="14px"
                  color={iconBg}
                  ml="5px"
                >
                  Re-enter your password
                </Text>
                <Input
                  width="350px"
                  type="password"
                  height="50px"
                  border={
                    errors.repeat_password
                      ? "1px solid red"
                      : "1px solid #E2E8F0"
                  }
                  borderRadius="15px"
                  mt="4px"
                  {...register("repeat_password")}
                  placeholder="re-enter your password"
                  _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                  size="sm"
                  p="0 20px 0 20px"
                />{" "}
                <ErrorMess error={errors.repeat_password?.message} />
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
                type="submit"
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
            <Flex
              padding={"15px"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Text
                color="#A0AEC0"
                fontSize="14px"
                fontWeight="700"
              >
                Already have an account? {"  "}
              </Text>{" "}
              <Text
                color="#4FD1C5"
                cursor="pointer"
                textDecor="none"
                fontSize="14px"
                fontWeight="700"
              >
                <Link to={"/login"}> Sign in</Link>
              </Text>
            </Flex>
          </Flex>
        </form>
        <Box w={"60%"}>
          <Footer />
        </Box>
      </Flex>
    </Flex>
  );
}
