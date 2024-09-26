import { Flex, Button, Text, Icon } from "@chakra-ui/react";
import { Invoice, InvoicesData } from "./Invoice";
import { IoDocumentText } from "react-icons/io5";

export default function Invoices() {
  const greenColor = "#4FD1C5";

  const darkColor = "#2D3748";
  const grayColor = "#A0AEC0";

  return (
    <Flex
      flexDir={"column"}
      gap={"24.5px"}
      p={"24.5px"}
      flex={1}
    >
      <Flex
        w={"100%"}
        flex={1}
        justifyContent={"space-between"}
      >
        <Text
          color={darkColor}
          fontSize="18px"
          fontWeight={700}
        >
          Invoices
        </Text>
        <Button
          w={"110.5px"}
          h={"35px"}
          bg={"#FFFFFF"}
          py={"5px"}
          justifySelf={"flex-end"}
          colorScheme="teal"
          variant="outline"
          borderRadius="12px"
          border="2px solid #4FD1C5"
        >
          <Text
            color={greenColor}
            fontSize="10px"
            fontWeight={700}
            textAlign={"center"}
          >
            VIEW ALL
          </Text>
        </Button>
      </Flex>
      {InvoicesData.map(({ date, id, cost }: Invoice) => (
        <Flex
          w={"100%"}
          key={id}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex
            flexDir={"column"}
            flex={1}
            gap={"5px"}
          >
            <Text
              color={darkColor}
              fontSize="14px"
              fontWeight={700}
            >
              {date}
            </Text>
            <Text
              color={grayColor}
              fontSize="12px"
              fontWeight={700}
            >
              {id}
            </Text>
          </Flex>
          <Flex
            gap={"16px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={grayColor}
              fontSize="12px"
              fontWeight={700}
            >
              ${cost}
            </Text>
            <Flex
              alignItems={"center"}
              gap={"2px"}
              justifyContent={"center"}
            >
              <Icon
                as={IoDocumentText}
                color={darkColor}
                mb={"4px"}
              ></Icon>
              <Text
                color={darkColor}
                fontSize="10px"
                fontWeight={700}
              >
                PDF
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
