import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Oder, oders } from './order';
import { whiteColor, darkColor, grayColor } from '../../../constants/colors';

export default function OrdersOverview() {
  return (
    <Flex
      w={'30%'}
      bg={whiteColor}
      borderRadius={'15px'}
      flexDirection={'column'}
      paddingX={'21px'}
      paddingY={'28px'}
    >
      <Flex flexDir={'column'}>
        <Text fontWeight={700} fontSize={'18px'} color={darkColor}>
          Oders overview
        </Text>
        <Flex gap={'5px'}>
          <Text fontSize={'14px'} fontWeight={700} color={'green'}>
            (+30%)
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={grayColor}>
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
                <Text fontWeight={700} fontSize={'14px'} color={darkColor}>
                  {title}
                </Text>
                <Text fontWeight={700} fontSize={'12px'} color={grayColor}>
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
