import { Flex, Box, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Dashboard() {
  const whiteColor = "#FFFFFF";
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
          justify="center"
          padding="24px"
          minH={"350px"}
          gap={"24px"}
          flexDir={"column"}
        >
          <Flex>
            <Header theme="dark" />
          </Flex>

          <Flex
            w={"100%"}
            h={"436px"}
            gap={"24px"}
          >
            <Flex
              flex={1}
              gap={"24px"}
              height={"100%"}
              flexDir={"column"}
            >
              <Flex
                h={"241px"}
                gap={"24px"}
              >
                <Flex
                  flex={1}
                  bg={whiteColor}
                  borderRadius="15px"
                >
                  black card
                </Flex>
                <Flex
                  h={"240px"}
                  w={"240px"}
                  bg={whiteColor}
                  borderRadius="15px"
                >
                  salary
                </Flex>
                <Flex
                  h={"240px"}
                  w={"240px"}
                  bg={whiteColor}
                  borderRadius="15px"
                >
                  paypal
                </Flex>
              </Flex>
              <Flex
                bg={whiteColor}
                borderRadius="15px"
                flex={1}
              >
                payment method
              </Flex>
            </Flex>
            <Flex
              w={"35%"}
              bg={whiteColor}
              borderRadius="15px"
              height={"100%"}
            >
              invoices
            </Flex>
          </Flex>

          <Flex
            w={"100%"}
            h={"538.5px"}
            gap={"24px"}
          >
            <Flex
              w={"60%"}
              bg={whiteColor}
              borderRadius="15px"
              height={"100%"}
            >
              Billing Information
            </Flex>
            <Flex
              flex={1}
              bg={whiteColor}
              borderRadius="15px"
            >
              Your Transactions
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
