import { Flex, Box, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Author, authorList } from './authors';
import {
  WHITE_COLOR,
  GRAY_COLOR,
  DARK_COLOR,
  GRAY_TEXT_COLOR,
  ONLINE_STATUS_COLOR,
  OFFLINE_STATUS_COLOR,
} from '@constants/colors';

export default function AuthorsTable() {
  return (
    <TableContainer w={'100%'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
              AUTHOR
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
              FUNCTION
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR} textAlign={'center'}>
              STATUS
            </Th>
            <Th textAlign={'center'} fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
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
                      <Text fontSize={'14px'} fontWeight={700} color={DARK_COLOR}>
                        {username}
                      </Text>
                      <Text fontSize={'14px'} fontWeight={700} color={GRAY_TEXT_COLOR}>
                        {email}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex flexDirection={'column'}>
                    <Text fontSize={'14px'} fontWeight={700} color={DARK_COLOR}>
                      {func1}
                    </Text>
                    <Text fontSize={'14px'} fontWeight={700} color={GRAY_TEXT_COLOR}>
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
                      bg={status === 'Online' ? ONLINE_STATUS_COLOR : OFFLINE_STATUS_COLOR}
                    >
                      <Text
                        textAlign={'center'}
                        fontWeight={700}
                        fontSize={'14px'}
                        color={WHITE_COLOR}
                      >
                        {status}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Text textAlign={'center'} fontWeight={700} fontSize={'14px'} color={DARK_COLOR}>
                    {employedDate}
                  </Text>
                </Td>
                <Td>
                  <Text
                    color={GRAY_TEXT_COLOR}
                    fontSize={'12px'}
                    fontWeight={700}
                    cursor={'pointer'}
                  >
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
