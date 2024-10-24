import { Flex, Text, Icon } from '@chakra-ui/react';
import { Transaction, transactionList } from './transaction';
import { IoArrowDown } from 'react-icons/io5';
import { FaExclamation } from 'react-icons/fa6';
import { IoArrowUp } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RED_COLOR, DARK_COLOR, GRAY_COLOR, GREEN_COLOR } from '@constants/colors';

export default function Transactions() {
  return (
    <Flex flex={1} paddingX={'21px'} paddingY={'25px'} flexDir={'column'} gap={'18px'}>
      <Flex w={'100%'} justifyContent={'space-between'}>
        <Text fontWeight={700} fontSize={'18px'} color={DARK_COLOR}>
          Your Transactions
        </Text>
        <Flex justifyContent={'center'} gap={'6px'}>
          <Icon as={FaRegCalendarAlt} w={'15px'} h={'15px'}></Icon>
          <Text fontSize={'14px'} fontWeight={700} color={GRAY_COLOR}>
            {selectedDate}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir={'column'} gap={'24px'}>
        {transactionList.map(({ company, time, value, status }: Transaction, index: number) => (
          <Flex key={index} justifyContent={'center'} alignItems={'center'} gap={'14px'}>
            <Flex
              w={'35px'}
              h={'35px'}
              justifyContent={'center'}
              alignItems={'center'}
              border={`1px solid ${
                status === 'pending' ? GRAY_COLOR : status === 'minus' ? RED_COLOR : GREEN_COLOR
              }`}
              borderRadius={'50%'}
            >
              <Icon
                as={
                  status === 'pending'
                    ? FaExclamation
                    : status === 'minus'
                    ? IoArrowDown
                    : IoArrowUp
                }
                color={
                  status === 'pending' ? GRAY_COLOR : status === 'minus' ? RED_COLOR : GREEN_COLOR
                }
              ></Icon>
            </Flex>
            <Flex flexDir={'column'} flex={1} gap={'4.5px'}>
              <Text fontSize={'14px'} fontWeight={'700'} color={DARK_COLOR}>
                {company}
              </Text>
              <Text fontSize={'14px'} fontWeight={'700'} color={GRAY_COLOR}>
                {time}
              </Text>
            </Flex>
            <Flex h={'100%'} alignItems={'center'}>
              <Text
                color={
                  status === 'pending' ? DARK_COLOR : status === 'minus' ? RED_COLOR : GREEN_COLOR
                }
                fontWeight={700}
                fontSize={'14px'}
              >
                {status === 'pending'
                  ? 'Pending'
                  : status === 'minus'
                  ? `-$${value}`
                  : `+$${value}`}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

const selectedDate = '23 - 30 March 2020';
