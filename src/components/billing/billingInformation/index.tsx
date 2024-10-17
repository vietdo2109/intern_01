import { Flex, Text, Icon } from '@chakra-ui/react';
import { Bill, BillingInfomation } from './billingInfo';
import { RiPencilFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { darkColor, bgColor, grayColor, grayTextColor } from '../../../constants/colors';
export default function BillingInformation() {
  return (
    <Flex w={'100%'} p={'24px'} gap={'17.5px'} flexDir={'column'}>
      <Text fontWeight={700} fontSize={'18px'} color={darkColor}>
        Billing Information
      </Text>
      <Flex flexDir={'column'} gap={'24px'}>
        {BillingInfomation.map(({ user, companyName, email, vatNumber }: Bill, index: number) => (
          <Flex
            key={index}
            bg={bgColor}
            borderRadius={'12px'}
            padding={'26px'}
            justifyContent={'space-between'}
          >
            <Flex flexDir={'column'}>
              <Text mb={'8px'} fontWeight={700} fontSize={'14px'} color={grayTextColor}>
                {user}
              </Text>
              <Flex gap={'5px'}>
                <Text fontWeight={400} fontSize={'12px'} color={grayColor}>
                  Company Name:{' '}
                </Text>
                <Text fontWeight={700} fontSize={'12px'} color={grayTextColor}>
                  {companyName}
                </Text>
              </Flex>
              <Flex gap={'5px'}>
                <Text fontWeight={400} fontSize={'12px'} color={grayColor}>
                  {' '}
                  Email address:{' '}
                </Text>
                <Text fontWeight={700} fontSize={'12px'} color={grayTextColor}>
                  {email}
                </Text>
              </Flex>
              <Flex gap={'5px'}>
                <Text fontWeight={400} fontSize={'12px'} color={grayColor}>
                  VAT Number:{' '}
                </Text>
                {'  '}
                <Text fontWeight={700} fontSize={'12px'} color={grayTextColor}>
                  {vatNumber}
                </Text>
              </Flex>
            </Flex>
            <Flex gap={'21.5px'}>
              <Flex gap={'3.5px'} cursor={'pointer'}>
                <Icon as={MdDelete} w="15px" h={'15px'} color={'red'}></Icon>
                <Text color={'red'} fontWeight={700} fontSize={'10px'} mt={'3px'}>
                  DELETE
                </Text>
              </Flex>
              <Flex gap={'3.5px'} cursor={'pointer'}>
                <Icon as={RiPencilFill} w="15px" h={'15px'} color={darkColor}></Icon>
                <Text mt={'3px'} color={darkColor} fontWeight={700} fontSize={'10px'}>
                  EDIT
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
