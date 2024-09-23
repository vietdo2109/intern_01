import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import Layout from "../components/Layout";
import profileBgImage from "../assets/images/ProfileBackground.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlatformSetting from "../components/profile-elements/PlatformSetting";
import ProfileInfo from "../components/profile-elements/ProfileInfo";
import Conversation from "../components/profile-elements/Conversation";
import Projects from "../components/profile-elements/Projects";
import ProfileImg from "../assets/images/Credits to Unsplash.com three.png";

import { BsBoxFill } from "react-icons/bs";

export default function Profile() {
  const darkColor = "#2D3748";
  return (
    <Layout>
      <Flex
        width="100%"
        minW="700px"
        zIndex={1}
        right={0}
        flexDir="column"
        paddingBottom={"20px"}
      >
        <Flex
          flex="1"
          justify="center"
          padding="24px"
          minH={"350px"}
        >
          <Box
            bgImage={profileBgImage}
            w="100%"
            h="100%"
            bgSize="cover"
            position="relative"
            borderRadius="15px"
            padding="23.5px"
          >
            <Header
              theme="light"
              page="Profile"
            />
            <Flex
              position="absolute"
              bgGradient="linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 100%, rgba(255, 255, 255, 0.8) 110.84%)"
              height="113px"
              width="96%"
              border="1.5px solid #FFFFFF"
              borderRadius="15px"
              bottom="-50px"
              left="0"
              right="0"
              marginInline="auto"
              alignItems="center"
              margin="0 auto"
              shadow="Base"
              padding="16.5px"
            >
              <Flex
                gap="22px"
                alignItems={"center"}
                flex={1}
              >
                <Box
                  w="80px"
                  h="80px"
                  bgImage={ProfileImg}
                  bgSize="cover"
                  bgRepeat={"no-repeat"}
                  borderRadius="12px"
                ></Box>
                <Flex
                  flexDir="column"
                  justifyContent="center"
                  flex={1}
                >
                  <Text
                    color={"#2D3748"}
                    fontSize="18px"
                    fontWeight={700}
                  >
                    Esthera Jackson
                  </Text>
                  <Text
                    color={"#718096"}
                    fontWeight={400}
                    fontSize={"14px"}
                  >
                    esthera@simmmple.com
                  </Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"7px"}
                  shadow={"md"}
                  h={"35px"}
                  w={"134px"}
                  borderRadius={"12px"}
                  bg={"#FFFFFF"}
                >
                  <Icon
                    as={BsBoxFill}
                    color={darkColor}
                  ></Icon>
                  <Text
                    pt={"3px"}
                    color={darkColor}
                    fontSize={"10px"}
                    fontWeight={700}
                  >
                    OVERVIEW
                  </Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"7px"}
                  h={"35px"}
                  w={"134px"}
                >
                  <Icon
                    as={BsBoxFill}
                    color={darkColor}
                  ></Icon>
                  <Text
                    pt={"3px"}
                    color={darkColor}
                    fontSize={"10px"}
                    fontWeight={700}
                  >
                    TEAM
                  </Text>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"7px"}
                  h={"35px"}
                  w={"134px"}
                >
                  <Icon
                    as={BsBoxFill}
                    color={darkColor}
                  ></Icon>
                  <Text
                    pt={"3px"}
                    color={darkColor}
                    fontSize={"10px"}
                    fontWeight={700}
                  >
                    PROJECTS
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex
          mt={"30px"}
          padding="24px"
          gap="23.5px"
          maxH={"600px"}
        >
          <PlatformSetting />
          <ProfileInfo />
          <Conversation />
        </Flex>

        <Flex
          maxH={"700px"}
          height={"600px"}
          flexDir={"column"}
          paddingX="24px"
        >
          <Projects />
          <Footer />
        </Flex>
      </Flex>
    </Layout>
  );
}
