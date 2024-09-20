import { Flex, Box, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <Layout>
      <Flex
        width="100%"
        minW="700px"
        zIndex={1}
        right={0}
        flexDir="column"
      ></Flex>
    </Layout>
  );
}
