import { Box, Flex, Text } from "@chakra-ui/react";
import { conversations } from "./conversations";
import { ConversationContent } from "./conversations";

export default function Conversation() {
  const darkColor = "#2D3748";
  const grayColor = "#718096";
  return (
    <Box
      flex={1}
      bg={"#FFFFFF"}
      borderRadius={"15px"}
      shadow="xs"
      px="21px"
      py="28px"
    >
      <Flex
        flexDir="column"
        gap="19px"
      >
        <Text
          maxH={"700px"}
          fontSize="18ox"
          fontWeight="700"
          color={darkColor}
        >
          Platform Settings
        </Text>

        {conversations.map(
          ({ imgSrc, username, content }: ConversationContent) => (
            <Flex
              gap="16px"
              alignItems="center"
            >
              <Box
                w="50px"
                h="50px"
                bgImage={imgSrc}
                borderRadius="12px"
              ></Box>
              <Flex
                flexDir="column"
                paddingTop="5px"
              >
                <Text
                  fontSize="14px"
                  fontWeight={700}
                  color={darkColor}
                >
                  {username}
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight={400}
                  color={grayColor}
                >
                  {content}
                </Text>
              </Flex>
            </Flex>
          )
        )}
      </Flex>
    </Box>
  );
}
