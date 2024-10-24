import {
  Flex,
  Box,
  Text,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { Project, projectList } from './projects';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { GRAY_COLOR, DARK_COLOR, GREEN_COLOR, RATE_COLOR } from '@constants/colors';

export default function ProjectsTable() {
  return (
    <TableContainer w={'100%'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
              COMPANIES
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
              BUDGET
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR} textAlign={'center'}>
              STATUS
            </Th>
            <Th textAlign={'left'} fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
              COMPLETION
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {projectList.map(
            ({ iconSVG, projectName, budget, status, completionRate }: Project, index) => (
              <Tr key={index}>
                <Td>
                  <Flex alignItems={'center'} gap={'15px'}>
                    <img src={iconSVG} alt="logo" />
                    <Flex flexDirection={'column'} justifyContent={'center'}>
                      <Text fontSize={'14px'} fontWeight={700} color={DARK_COLOR}>
                        {projectName}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex>
                    <Text fontSize={'14px'} fontWeight={700} color={DARK_COLOR}>
                      ${formatBudget(budget)}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex justifyContent={'center'}>
                    <Flex>
                      <Text fontSize={'14px'} fontWeight={700} color={DARK_COLOR}>
                        {status}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex flexDir={'column'} width={'125px'} justifyContent={'center'}>
                    <Flex>
                      <Text
                        textAlign={'center'}
                        fontWeight={700}
                        fontSize={'14px'}
                        color={GREEN_COLOR}
                      >
                        {completionRate}%
                      </Text>
                    </Flex>
                    <Flex w={'100%'} h={'3px'} borderRadius={'1px'} bg={RATE_COLOR}>
                      <Box
                        w={`${completionRate}%`}
                        h={'100%'}
                        bg={GREEN_COLOR}
                        borderRadius={'1px'}
                      ></Box>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex cursor="pointer">
                    <Icon as={PiDotsThreeVerticalBold}></Icon>
                  </Flex>
                </Td>
              </Tr>
            ),
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function formatBudget(budget: number): string {
  return budget.toLocaleString('en-US', {});
}
