import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Oder, oders } from './order';
import { WHITE_COLOR, DARK_COLOR, GRAY_COLOR } from '@constants/colors';

export default function OrdersOverview() {
  return (
    <Flex
      w={'30%'}
      bg={WHITE_COLOR}
      borderRadius={'15px'}
      flexDirection={'column'}
      paddingX={'21px'}
      paddingY={'28px'}
    >
      <Flex flexDir={'column'}>
        <Text fontWeight={700} fontSize={'18px'} color={DARK_COLOR}>
          Oders overview
        </Text>
        <Flex gap={'5px'}>
          <Text fontSize={'14px'} fontWeight={700} color={'green'}>
            (+30%)
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={GRAY_COLOR}>
            this month
          </Text>
        </Flex>
        <Flex gap={'5px'} flexDirection={'column'} pt={'30px'}>
          {oders.map(({ icon, title, time, color }: Oder, index) => (
            <Flex gap={'19px'} key={index}>
              <Flex w={'16px'} flexDir={'column'} gap={'6.5px'} alignItems={'center'}>
                {typeof icon === 'string' ? (
                  <img width={'16px'} height={'16px'} src={icon} alt="logo" />
                ) : (
                  <Icon as={icon} w={'16px'} h={'16px'} color={color}></Icon>
                )}
                <Box width={'2px'} h={'37px'} bg={'#E2E8F0'}></Box>
              </Flex>
              <Flex flexDir={'column'} gap={'4.5px'}>
                <Text fontWeight={700} fontSize={'14px'} color={DARK_COLOR}>
                  {title}
                </Text>
                <Text fontWeight={700} fontSize={'12px'} color={GRAY_COLOR}>
                  {time}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
