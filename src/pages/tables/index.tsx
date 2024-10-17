import { Flex, Text } from '@chakra-ui/react';
import { Layout } from '@components/layout';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import AuthorsTable from '@components/tables/authorsTable';
import ProjectsTable from '@components/tables/projects';

import { darkColor } from '@constants/colors';

export default function Tables() {
  return (
    <Layout>
      <Flex width="100%" minW="700px" zIndex={1} right={0} flexDir="column">
        <Flex flex="1" width="100%" padding="24px" minH={'350px'} gap={'24px'} flexDir={'column'}>
          <Flex flexDir={'column'}>
            <Header theme="dark" page="Tables" />
          </Flex>
          <Flex
            paddingX={'21px'}
            paddingY={'28px'}
            flexDir={'column'}
            w={'100%'}
            bg={'#FFFFFF'}
            borderRadius={'15px'}
            gap={'23.5px'}
          >
            <Flex>
              <Text fontSize={'18px'} fontWeight={700} color={darkColor}>
                Authors table
              </Text>
            </Flex>
            <Flex>
              <AuthorsTable />
            </Flex>
          </Flex>
          <Flex
            paddingX={'21px'}
            paddingY={'28px'}
            flexDir={'column'}
            w={'100%'}
            bg={'#FFFFFF'}
            borderRadius={'15px'}
            gap={'23.5px'}
          >
            <Flex>
              <Text fontSize={'18px'} fontWeight={700} color={darkColor}>
                Projects
              </Text>
            </Flex>
            <Flex>
              <ProjectsTable />
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </Layout>
  );
}
