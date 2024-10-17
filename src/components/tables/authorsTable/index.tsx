import { Flex, Box, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Author, authorList } from './authors';
import {
  whiteColor,
  grayColor,
  darkColor,
  grayTextColor,
  onlineStatusColor,
  offlinestatusColor,
} from '@constants/colors';

export default function AuthorsTable() {
  return (
    <TableContainer w={'100%'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize={'10px'} fontWeight={700} color={grayColor}>
              AUTHOR
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={grayColor}>
              FUNCTION
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={grayColor} textAlign={'center'}>
              STATUS
            </Th>
            <Th textAlign={'center'} fontSize={'10px'} fontWeight={700} color={grayColor}>
              EMPLOYED
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {authorList.map(
            (
              { profileImg, username, email, func1, func2, status, employedDate }: Author,
              index: number,
            ) => (
              <Tr key={index}>
                <Td>
                  <Flex alignItems={'center'} gap={'15px'}>
                    <Box
                      w={'40px'}
                      h={'40px'}
                      bgImage={profileImg}
                      bgPosition={'center'}
                      bgSize={'cover'}
                      borderRadius={'12px'}
                    ></Box>
                    <Flex flexDirection={'column'} justifyContent={'center'}>
                      <Text fontSize={'14px'} fontWeight={700} color={darkColor}>
                        {username}
                      </Text>
                      <Text fontSize={'14px'} fontWeight={700} color={grayTextColor}>
                        {email}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex flexDirection={'column'}>
                    <Text fontSize={'14px'} fontWeight={700} color={darkColor}>
                      {func1}
                    </Text>
                    <Text fontSize={'14px'} fontWeight={700} color={grayTextColor}>
                      {func2}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex justifyContent={'center'}>
                    <Flex
                      width={'65px'}
                      h={'25px'}
                      borderRadius={'8px'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      bg={status === 'Online' ? onlineStatusColor : offlinestatusColor}
                    >
                      <Text
                        textAlign={'center'}
                        fontWeight={700}
                        fontSize={'14px'}
                        color={whiteColor}
                      >
                        {status}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Text textAlign={'center'} fontWeight={700} fontSize={'14px'} color={darkColor}>
                    {employedDate}
                  </Text>
                </Td>
                <Td>
                  <Text color={grayTextColor} fontSize={'12px'} fontWeight={700} cursor={'pointer'}>
                    edit
                  </Text>
                </Td>
              </Tr>
            ),
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
