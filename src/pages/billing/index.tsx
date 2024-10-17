import {
  Flex,
  Box,
  Text,
  Icon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react';

import { Layout } from '../../components/layout';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import Invoices from '../../components/billing/invoice';
import BillingInformation from '../../components/billing/billingInformation';
import Transactions from '../../components/billing/transaction';

import bgCard from '../../assets/images/billingCardBg.png';
import cardLogo from '../../assets/svgs/masterCardGrayLogo.svg';
import masterCardSVG from '../../assets/svgs/masterCardLogo.svg';
import visaSVG from '../../assets/svgs/visaLogo.svg';

import { IoWallet } from 'react-icons/io5';
import { FaPaypal } from 'react-icons/fa6';
import { RiPencilFill } from 'react-icons/ri';

import { whiteColor, grayColor, darkColor } from '../../constants/colors';

export default function Billing() {
  return (
    <Layout>
      <Flex width="100%" minW="700px" zIndex={1} right={0} flexDir="column">
        <Flex
          flex="1"
          width="100%"
          justify="center"
          padding="24px"
          minH={'350px'}
          gap={'24px'}
          flexDir={'column'}
        >
          <Flex>
            <Header theme="dark" page="Billing" />
          </Flex>

          <Flex w={'100%'} h={'436px'} gap={'24px'}>
            <Flex flex={1} gap={'24px'} height={'100%'} flexDir={'column'}>
              <Flex h={'241px'} gap={'24px'}>
                <Flex flex={1} bg={whiteColor} borderRadius="15px" overflow="hidden">
                  <Box
                    bgImage={bgCard}
                    w="100%"
                    h="100%"
                    bgSize="cover"
                    display="flex"
                    padding={'22px'}
                  >
                    <Flex width="100%" paddingX={'8px'} flexDir={'column'} p="10px">
                      <Flex width="100%" justifyContent="space-between" flex={1}>
                        <Text color={'#FFFFFF'} fontSize="18px" fontWeight={700}>
                          Purity UI
                        </Text>
                        <Box>
                          <img src={cardLogo} alt="card logo" />
                        </Box>
                      </Flex>

                      <Flex flexDir="column" gap={'13px'}>
                        <Text color={'#FFFFFF'} fontSize="24px" fontWeight={700}>
                          7812 2139 0823 XXXX
                        </Text>

                        <Flex gap={'33px'}>
                          <Flex flexDir="column">
                            <Text color={'#FFFFFF'} fontSize="10px" fontWeight={400}>
                              VALID THRU
                            </Text>
                            <Text color={'#FFFFFF'} fontSize="14px" fontWeight={700}>
                              05/24
                            </Text>
                          </Flex>

                          <Flex flexDir="column">
                            <Text color={'#FFFFFF'} fontSize="10px" fontWeight={400}>
                              CVV
                            </Text>
                            <Text color={'#FFFFFF'} fontSize="14px" fontWeight={700}>
                              09X
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  h={'240px'}
                  w={'240px'}
                  bg={whiteColor}
                  borderRadius="15px"
                  flexDir={'column'}
                  p={'30px 0 25.5px 0'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'22px'}
                >
                  <Flex p={'19px'} borderRadius={'12px'} bg={'#4FD1C5'} w={'64px'}>
                    <Icon as={IoWallet} w={'26px'} h={'26px'} color={'#FFFFFF'}></Icon>
                  </Flex>
                  <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'8px'}
                  >
                    <Text color={darkColor} fontSize={'18px'} fontWeight={700}>
                      Salary
                    </Text>
                    <Text color={grayColor} fontSize={'12px'} fontWeight={700}>
                      Belong Interactive
                    </Text>
                    <Box
                      h="2px"
                      w="100%"
                      bgGradient="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)"
                    ></Box>
                    <Text color={darkColor} fontSize={'18px'} fontWeight={700}>
                      +$2000
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  h={'240px'}
                  w={'240px'}
                  bg={whiteColor}
                  borderRadius="15px"
                  flexDir={'column'}
                  p={'30px 0 25.5px 0'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  gap={'22px'}
                >
                  <Flex p={'19px'} borderRadius={'12px'} bg={'#4FD1C5'} w={'64px'}>
                    <Icon as={FaPaypal} w={'26px'} h={'26px'} color={'#FFFFFF'}></Icon>
                  </Flex>
                  <Flex
                    flexDir={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'8px'}
                  >
                    <Text color={darkColor} fontSize={'18px'} fontWeight={700}>
                      Paypal
                    </Text>
                    <Text color={grayColor} fontSize={'12px'} fontWeight={700}>
                      Freelance Payment
                    </Text>
                    <Box
                      h="2px"
                      w="100%"
                      bgGradient="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)"
                    ></Box>
                    <Text color={darkColor} fontSize={'18px'} fontWeight={700}>
                      $455.00
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex bg={whiteColor} borderRadius="15px" flex={1} p={'24px'} flexDir={'column'}>
                <Flex w={'100%'} flex={1} justifyContent={'space-between'}>
                  <Text color={darkColor} fontSize={'14px'} fontWeight={700}>
                    Payment Method
                  </Text>
                  <Button
                    bgGradient="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                    w={'134.5px'}
                    h={'35px'}
                    borderRadius={'12px'}
                    colorScheme={darkColor}
                  >
                    <Text textAlign={'center'} fontSize={'10px'} fontWeight={700} color={'#FFFFFF'}>
                      ADD A NEW CARD
                    </Text>
                  </Button>
                </Flex>
                <Flex flex={1} gap={'24.5px'}>
                  <InputGroup
                    flex={1}
                    borderRadius={'15px'}
                    display={'flex'}
                    gap={'20px'}
                    border={'1px solid #E2E8F0'}
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      height={'100%'}
                      width={'50px'}
                      marginRight={'20px'}
                    >
                      <img src={masterCardSVG} alt="mastercard icon" />
                    </InputLeftElement>
                    <Input
                      paddingLeft={'50px'}
                      placeholder="7812 2139 0823 XXXX"
                      borderRadius={'15px'}
                      fontSize={'14px'}
                      fontWeight={400}
                      height={'65px'}
                      border={'none'}
                      paddingX={'50px'}
                    />
                    <InputRightElement
                      pointerEvents="none"
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      height={'100%'}
                      width={'50px'}
                    >
                      <Icon as={RiPencilFill} color={darkColor} w={'12p'} h={'12px'}></Icon>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup
                    flex={1}
                    borderRadius={'15px'}
                    display={'flex'}
                    gap={'20px'}
                    border={'1px solid #E2E8F0'}
                  >
                    <InputLeftElement
                      pointerEvents="none"
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      height={'100%'}
                      width={'50px'}
                      marginRight={'20px'}
                    >
                      <img src={visaSVG} alt="mastercard icon" />
                    </InputLeftElement>
                    <Input
                      paddingLeft={'50px'}
                      placeholder="7812 2139 0823 XXXX"
                      borderRadius={'15px'}
                      fontSize={'14px'}
                      fontWeight={400}
                      height={'65px'}
                      border={'none'}
                      paddingX={'50px'}
                    />
                    <InputRightElement
                      pointerEvents="none"
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      height={'100%'}
                      width={'50px'}
                    >
                      <Icon as={RiPencilFill} color={darkColor} w={'12p'} h={'12px'}></Icon>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex w={'35%'} bg={whiteColor} borderRadius="15px" height={'100%'}>
              <Invoices />
            </Flex>
          </Flex>

          <Flex w={'100%'} gap={'24px'}>
            <Flex w={'60%'} bg={whiteColor} borderRadius="15px" height={'100%'}>
              <BillingInformation />
            </Flex>
            <Flex flex={1} bg={whiteColor} borderRadius="15px">
              <Transactions />
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </Layout>
  );
}
