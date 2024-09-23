import {
  Flex,
  Box,
  Text,
  Icon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dashboard() {
  // const whiteColor = "#FFFFFF";
  // const grayColor = "#A0AEC0";
  // const darkColor = "#2D3748";
  // const greenColor = "#4FD1C5";
  return (
    <Layout>
      <Flex
        width="100%"
        minW="700px"
        zIndex={1}
        right={0}
        flexDir="column"
      >
        <Flex
          flex="1"
          width="100%"
          padding="24px"
          minH={"350px"}
          gap={"24px"}
          flexDir={"column"}
        >
          <Flex>
            <Header
              theme="dark"
              page="Billing"
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
