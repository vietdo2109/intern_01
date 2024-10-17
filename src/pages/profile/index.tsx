import { Flex, Box, Text, Icon } from '@chakra-ui/react';

import { Layout } from '@components/layout';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import PlatformSetting from '@components/profile/platformSetting/PlatformSetting';
import ProfileInfo from '@components/profile/profileInfo';
import Conversation from '@components/profile/conversations';
import Projects from '@components/profile/projects/projects';

import ProfileImg from '@assets/images/conversationAvtThree.png';
import profileBgImage from '@assets/images/profileBackground.png';

import { RiPencilFill } from 'react-icons/ri';
import { BsBoxFill } from 'react-icons/bs';
import { darkColor } from '@constants/colors';

export default function Profile() {
  return (
    <Layout>
      <Flex width="100%" minW="700px" zIndex={1} right={0} flexDir="column" paddingBottom={'20px'}>
        <Flex flex="1" justify="center" padding="24px" minH={'350px'}>
          <Box
            bgImage={profileBgImage}
            w="100%"
            h="100%"
            bgSize="cover"
            position="relative"
            borderRadius="15px"
            padding="23.5px"
          >
            <Header theme="light" page="Profile" />
            <Flex
              position="absolute"
              bgGradient="linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 100%, rgba(255, 255, 255, 0.8) 110.84%)"
              height="113px"
              width="96%"
              border="1.5px solid #FFFFFF"
              borderRadius="15px"
              bottom="-50px"
              left="0"
              right="0"
              marginInline="auto"
              alignItems="center"
              margin="0 auto"
              shadow="Base"
              padding="16.5px"
            >
              <Flex gap="22px" alignItems={'center'} flex={1}>
                <Box
                  w="80px"
                  h="80px"
                  bgImage={ProfileImg}
                  bgSize="cover"
                  bgRepeat={'no-repeat'}
                  borderRadius="12px"
                  position={'relative'}
                >
                  <Flex
                    bg={'#FFFFFF'}
                    shadow={'md'}
                    w={'26px'}
                    h={'26px'}
                    justifyContent="center"
                    alignItems={'center'}
                    borderRadius={'8px'}
                    position={'absolute'}
                    right={'-5px'}
                    bottom={'-5px'}
                  >
                    <Icon as={RiPencilFill} w={'12px'} h={'12px'} color={'#4FD1C5'}></Icon>
                  </Flex>
                </Box>
                <Flex flexDir="column" justifyContent="center" flex={1}>
                  <Text color={'#2D3748'} fontSize="18px" fontWeight={700}>
                    Esthera Jackson
                  </Text>
                  <Text color={'#718096'} fontWeight={400} fontSize={'14px'}>
                    esthera@simmmple.com
                  </Text>
                </Flex>
                <Flex
                  alignItems={'center'}
                  justifyContent={'center'}
                  gap={'7px'}
                  shadow={'md'}
                  h={'35px'}
                  w={'134px'}
                  borderRadius={'12px'}
                  bg={'#FFFFFF'}
                >
                  <Icon as={BsBoxFill} color={darkColor}></Icon>
                  <Text pt={'3px'} color={darkColor} fontSize={'10px'} fontWeight={700}>
                    OVERVIEW
                  </Text>
                </Flex>
                <Flex
                  alignItems={'center'}
                  justifyContent={'center'}
                  gap={'7px'}
                  h={'35px'}
                  w={'134px'}
                >
                  <Icon as={BsBoxFill} color={darkColor}></Icon>
                  <Text pt={'3px'} color={darkColor} fontSize={'10px'} fontWeight={700}>
                    TEAM
                  </Text>
                </Flex>
                <Flex
                  alignItems={'center'}
                  justifyContent={'center'}
                  gap={'7px'}
                  h={'35px'}
                  w={'134px'}
                >
                  <Icon as={BsBoxFill} color={darkColor}></Icon>
                  <Text pt={'3px'} color={darkColor} fontSize={'10px'} fontWeight={700}>
                    PROJECTS
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex mt={'30px'} padding="24px" gap="23.5px" maxH={'600px'}>
          <PlatformSetting />
          <ProfileInfo />
          <Conversation />
        </Flex>

        <Flex maxH={'700px'} height={'600px'} flexDir={'column'} paddingX="24px">
          <Projects />
          <Footer />
        </Flex>
      </Flex>
    </Layout>
  );
}
