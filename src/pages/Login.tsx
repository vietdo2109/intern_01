import React from "react";
import {
  Box,
  Flex,
  Input,
  Text,
  Button,
  FormLabel,
  FormControl,
  Switch,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import signInImage from "../assets/images/signInImage.png";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const iconBg = "#2D3748";

  return (
    <Flex
      as="nav"
      w={"100%"}
      justifyContent={"center"}
      h={"100vh"}
    >
      <Box
        display={{ base: "none", md: "block" }}
        overflowX="hidden"
        h="80%"
        w="44vw"
        position="absolute"
        right="0px"
      >
        <Box
          bgImage={signInImage}
          w="100%"
          h="100%"
          bgSize="cover"
          bgPosition="50%"
          position="absolute"
          borderBottomLeftRadius="20px"
        ></Box>
      </Box>
      <Flex
        w={"100%"}
        alignItems="center"
        h="100%"
        p="30px"
        pt="40px"
        position={"relative"}
        flexDirection={"column"}
        justifyContent="space-between"
      >
        <TopNavBar
          logoColor="black"
          textColor="#2D3748"
          bgColor="linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)"
          btnColor="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          btnTextColor="#FFFFFF"
          shadow={true}
        />

        {/* inputs */}
        <Flex
          minW="800px"
          width="100%"
          justifyContent="center"
        >
          <Flex
            h="50vh"
            minH="400px"
            minW="800px"
            width="60%"
            justifySelf="left"
            justifyContent="left"
          >
            <Flex
              flexDir={"column"}
              gap="26px"
              mt="10px"
              justifyContent="space-between"
            >
              <Box>
                <Text
                  fontSize="32px"
                  fontWeight="700"
                  color="#4FD1C5"
                >
                  Welcome Back
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="700"
                  color="#A0AEC0"
                >
                  Enter your email and password to sign in
                </Text>
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
                minH="45px"
              >
                <Text
                  color="#FFFFFF"
                  fontSize="10px"
                  fontWeight={"800"}
                >
                  SIGN IN
                </Text>
              </Button>
              <Flex
                padding={"15px"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"3px"}
              >
                <Text
                  color="#A0AEC0"
                  fontSize="14px"
                  fontWeight="700"
                >
                  Don't have an account? {"  "}
                </Text>{" "}
                <Text
                  color="#4FD1C5"
                  cursor="pointer"
                  textDecor="none"
                  fontSize="14px"
                  fontWeight="700"
                >
                  <Link to={"/signup"}> Sign up </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box w={"60%"}>
          <Footer />
        </Box>
      </Flex>
    </Flex>
  );
}
