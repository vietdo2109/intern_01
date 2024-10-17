import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { barChartData } from './barChartData';
import { IoWallet } from 'react-icons/io5';
import { IoRocketSharp } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillTool } from 'react-icons/ai';
import { IconType } from 'react-icons';
import { FC } from 'react';
import { whiteColor, grayColor, darkColor, greenColor } from '../../../constants/colors';

export default function BarChart() {
  return (
    <Flex
      w={'40%'}
      h={'455px'}
      bg={whiteColor}
      borderRadius={'15px'}
      p={'16px'}
      flexDir={'column'}
      gap={'26px'}
    >
      <Flex
        w={'100%'}
        p={'30px'}
        borderRadius={'12px'}
        bgGradient={'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'}
        gap={'50px'}
        alignItems={'center'}
        h={'55%'}
      >
        <Flex flexDir={'column'} justifyContent={'space-between'} h={'100%'}>
          <Text fontSize={'10px'} fontWeight={'700'} color={whiteColor}>
            500
          </Text>
          <Text fontSize={'10px'} fontWeight={'700'} color={whiteColor}>
            400
          </Text>

          <Text fontSize={'10px'} fontWeight={'700'} color={whiteColor}>
            300
          </Text>

          <Text fontSize={'10px'} fontWeight={'700'} color={whiteColor}>
            200
          </Text>
          <Text fontSize={'10px'} fontWeight={'700'} color={whiteColor}>
            100
          </Text>
          <Text fontSize={'10px'} fontWeight={'700'} color={whiteColor}>
            0
          </Text>
        </Flex>
        <Flex flex={1} h={'100%'} justifyContent={'space-between'} alignItems={'flex-end'}>
          {barChartData.map((element, index) => (
            <Box
              key={index}
              h={`${element / 5}%`}
              width={'6px'}
              borderRadius={'15px'}
              bg={whiteColor}
            ></Box>
          ))}
        </Flex>
      </Flex>

      <Flex flexDir={'column'}>
        <Text fontWeight={700} fontSize={'18px'} color={darkColor}>
          Active Users
        </Text>
        <Flex gap={'5px'}>
          <Text fontSize={'14px'} fontWeight={700} color={'green'}>
            (+23)
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={grayColor}>
            than last week
          </Text>
        </Flex>
      </Flex>
      <Flex gap={'55px'} mt="10px">
        <BottomItem title="Users" content="32,984" icon={IoWallet} rate={60} />
        <BottomItem title="Clicks" content="2,42m" icon={IoRocketSharp} rate={80} />
        <BottomItem title="Sales" content="$2400" icon={FaShoppingCart} rate={40} />
        <BottomItem title="Items" content="320" icon={AiFillTool} rate={70} />
      </Flex>
    </Flex>
  );
}

type BottomItemProps = {
  title: string;
  content: string;
  icon: IconType;
  rate: number;
};

const BottomItem: FC<BottomItemProps> = ({ title, content, icon, rate }) => {
  return (
    <Flex flexDir={'column'} gap={'6px'} width={'15%'}>
      <Flex gap={'10px'} alignItems={'center'}>
        <Flex
          w={'25px'}
          h={'25px'}
          justifyContent={'center'}
          alignItems={'center'}
          bg={greenColor}
          borderRadius={'6px'}
        >
          <Icon as={icon} w={'12.5px'} h={'12.5px'} color={whiteColor}></Icon>
        </Flex>
        <Text fontSize={'12px'} fontWeight={700} color={grayColor}>
          {title}
        </Text>
      </Flex>
      <Text fontSize={'18px'} fontWeight={700} color={darkColor}>
        {content}
      </Text>
      <Box w={'100%'} h={'3px'} bg={'#E2E8F0'}>
        <Flex h={'100%'} w={`${rate}%`} bg={greenColor}></Flex>
      </Box>
    </Flex>
  );
};
