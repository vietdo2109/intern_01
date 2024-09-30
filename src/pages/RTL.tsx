import { Flex, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import BasicForm from "../components/forms/BasicForm";

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
          padding="24px"
          gap={"24px"}
          flexDir={"column"}
        >
          <Box>
            <BasicForm />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
