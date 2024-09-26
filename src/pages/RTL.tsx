import { Flex, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
export default function RTL() {
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
          h={"100vh"}
          padding="24px"
          gap={"24px"}
          flexDir={"column"}
        >
          <Box h={"100vh"}></Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
