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
import { grayColor, darkColor, greenColor, rateColor } from '../../../constants/colors';

export default function ProjectsTable() {
  return (
    <TableContainer w={'100%'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize={'10px'} fontWeight={700} color={grayColor}>
              COMPANIES
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={grayColor}>
              BUDGET
            </Th>
            <Th fontSize={'10px'} fontWeight={700} color={grayColor} textAlign={'center'}>
              STATUS
            </Th>
            <Th textAlign={'left'} fontSize={'10px'} fontWeight={700} color={grayColor}>
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
                      <Text fontSize={'14px'} fontWeight={700} color={darkColor}>
                        {projectName}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>
                  <Flex>
                    <Text fontSize={'14px'} fontWeight={700} color={darkColor}>
                      ${formatBudget(budget)}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex justifyContent={'center'}>
                    <Flex>
                      <Text fontSize={'14px'} fontWeight={700} color={darkColor}>
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
                        color={greenColor}
                      >
                        {completionRate}%
                      </Text>
                    </Flex>
                    <Flex w={'100%'} h={'3px'} borderRadius={'1px'} bg={rateColor}>
                      <Box
                        w={`${completionRate}%`}
                        h={'100%'}
                        bg={greenColor}
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
