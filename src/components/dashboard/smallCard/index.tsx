import { Flex, Text, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { whiteColor, grayColor, darkColor, greenColor, redColor } from '@constants/colors';
import { FC } from 'react';

type SmallCardProps = {
  title: string;
  stat: string;
  rate: number;
  icon: IconType;
  plus: boolean;
};

export const SmallCard: FC<SmallCardProps> = ({ title, stat, rate, icon, plus }) => {
  return (
    <Flex
      flex={1}
      h={'80px'}
      borderRadius={'15px'}
      bg={whiteColor}
      justifyContent={'space-between'}
      alignItems={'center'}
      padding={'18px'}
    >
      <Flex flexDir={'column'}>
        <Text fontSize={'12px'} fontWeight={'700'} color={grayColor}>
          {title}
        </Text>
        <Flex gap={'5px'}>
          <Flex flexDir={'column'} justifyContent={'flex-end'}>
            <Text fontSize={'18px'} fontWeight={'700'} color={darkColor}>
              {stat}
            </Text>
          </Flex>
          <Flex flexDir={'column'} justifyContent={'center'}>
            <Text fontSize={'14px'} fontWeight={700} color={plus === true ? greenColor : redColor}>
              {`${plus ? '+' : '-'}`}
              {rate}%
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={'45px'}
        h={'45px'}
        justifyContent={'center'}
        alignItems={'center'}
        bg={greenColor}
        borderRadius={'12px'}
      >
        <Icon as={icon} w={'22.5px'} h={'22.5px'} color={whiteColor}></Icon>
      </Flex>
    </Flex>
  );
};
