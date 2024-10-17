import { Box, Flex, Text } from '@chakra-ui/react';
import { conversations } from './conversationData';
import { ConversationContent } from './conversationData';
import { darkColor, grayColor } from '../../../constants/colors';

export default function Conversation() {
  return (
    <Box flex={1} bg={'#FFFFFF'} borderRadius={'15px'} shadow="xs" px="21px" py="28px">
      <Flex flexDir="column" gap="19px">
        <Text maxH={'700px'} fontSize="18ox" fontWeight="700" color={darkColor}>
          Conversations
        </Text>

        {conversations.map(({ imgSrc, username, content }: ConversationContent, index: number) => (
          <Flex key={index} gap="16px" alignItems="center">
            <Box w="50px" h="50px" bgImage={imgSrc} borderRadius="12px"></Box>
            <Flex flexDir="column" paddingTop="5px">
              <Text fontSize="14px" fontWeight={700} color={darkColor}>
                {username}
              </Text>
              <Text fontSize="14px" fontWeight={400} color={grayColor}>
                {content}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
