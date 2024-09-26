import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

export default function BottomItem({
  title,
  content,
  icon,
  rate,
}: {
  title: string;
  content: string;
  icon: IconType;
  rate: number;
}) {
  const whiteColor = "#FFFFFF";
  const grayColor = "#A0AEC0";
  const darkColor = "#2D3748";
  const greenColor = "#4FD1C5";
  return (
    <Flex
      flexDir={"column"}
      gap={"6px"}
      width={"15%"}
    >
      <Flex
        gap={"10px"}
        alignItems={"center"}
      >
        <Flex
          w={"25px"}
          h={"25px"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={greenColor}
          borderRadius={"6px"}
        >
          <Icon
            as={icon}
            w={"12.5px"}
            h={"12.5px"}
            color={whiteColor}
          ></Icon>
        </Flex>
        <Text
          fontSize={"12px"}
          fontWeight={700}
          color={grayColor}
        >
          {title}
        </Text>
      </Flex>
      <Text
        fontSize={"18px"}
        fontWeight={700}
        color={darkColor}
      >
        {content}
      </Text>
      <Box
        w={"100%"}
        h={"3px"}
        bg={"#E2E8F0"}
      >
        <Flex
          h={"100%"}
          w={`${rate}%`}
          bg={greenColor}
        ></Flex>
      </Box>
    </Flex>
  );
}
