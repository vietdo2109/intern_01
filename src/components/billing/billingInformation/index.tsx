import { Flex, Text, Icon } from '@chakra-ui/react';
import { Bill, billingInfomation } from './billingInfo';
import { RiPencilFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { DARK_COLOR, BG_COLOR, GRAY_COLOR, GRAY_TEXT_COLOR } from '@constants/colors';

export default function BillingInformation() {
  return (
    <Flex w={'100%'} p={'24px'} gap={'17.5px'} flexDir={'column'}>
      <Text fontWeight={700} fontSize={'18px'} color={DARK_COLOR}>
        Billing Information
      </Text>
      <Flex flexDir={'column'} gap={'24px'}>
        {billingInfomation.map(({ user, companyName, email, vatNumber }: Bill, index: number) => (
          <Flex
            key={index}
            bg={BG_COLOR}
            borderRadius={'12px'}
            padding={'26px'}
            justifyContent={'space-between'}
          >
            <Flex flexDir={'column'}>
              <Text mb={'8px'} fontWeight={700} fontSize={'14px'} color={GRAY_TEXT_COLOR}>
                {user}
              </Text>
              <Flex gap={'5px'}>
                <Text fontWeight={400} fontSize={'12px'} color={GRAY_COLOR}>
                  Company Name:{' '}
                </Text>
                <Text fontWeight={700} fontSize={'12px'} color={GRAY_TEXT_COLOR}>
                  {companyName}
                </Text>
              </Flex>
              <Flex gap={'5px'}>
                <Text fontWeight={400} fontSize={'12px'} color={GRAY_COLOR}>
                  {' '}
                  Email address:{' '}
                </Text>
                <Text fontWeight={700} fontSize={'12px'} color={GRAY_TEXT_COLOR}>
                  {email}
                </Text>
              </Flex>
              <Flex gap={'5px'}>
                <Text fontWeight={400} fontSize={'12px'} color={GRAY_COLOR}>
                  VAT Number:{' '}
                </Text>
                {'  '}
                <Text fontWeight={700} fontSize={'12px'} color={GRAY_TEXT_COLOR}>
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
                <Icon as={RiPencilFill} w="15px" h={'15px'} color={DARK_COLOR}></Icon>
                <Text mt={'3px'} color={DARK_COLOR} fontWeight={700} fontSize={'10px'}>
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
