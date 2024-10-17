import { TaskTag } from '../../../types/todoTypes/tag';
import { Flex, Text } from '@chakra-ui/react';
export default function Tag({ title, color, bg }: TaskTag) {
  return (
    <Flex bg={bg} justifyContent={'center'} alignItems={'center'} p={'8px'} borderRadius={'3px'}>
      <Text fontSize={'12px'} fontWeight={900} color={color}>
        {title}
      </Text>
    </Flex>
  );
}
