import {
  Flex,
  Box,
  Text,
  Icon,
  AvatarGroup,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { Project, projectList } from './projectData';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';
import { GRAY_COLOR, DARK_COLOR, GREEN_COLOR, WHITE_COLOR, RATE_COLOR } from '@constants/colors';

export default function DashboardProject() {
  return (
    <Flex
      w={'70%'}
      bg={WHITE_COLOR}
      borderRadius={'15px'}
      flexDirection={'column'}
      paddingX={'21px'}
      paddingY={'28px'}
    >
      <Flex flexDir={'column'}>
        <Flex w={'100%'} justifyContent={'space-between'}>
          <Text fontWeight={700} fontSize={'18px'} color={DARK_COLOR}>
            Oders overview
          </Text>
          <Icon
            as={PiDotsThreeVerticalBold}
            w={'20px'}
            h={'20px'}
            color={GRAY_COLOR}
            cursor={'pointer'}
          ></Icon>
        </Flex>

        <Flex gap={'5px'} alignItems={'center'}>
          <Icon as={FaCheckCircle} color={'#68D391'} width={'13px'} height={'13px'}></Icon>
          <Text mt={'4px'} fontSize={'14px'} fontWeight={700} color={GRAY_COLOR}>
            30 done
          </Text>
          <Text mt={'4px'} fontSize={'14px'} fontWeight={400} color={GRAY_COLOR}>
            this month
          </Text>
        </Flex>
      </Flex>
      <TableContainer w={'100%'} mt={'30px'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
                COMPANIES
              </Th>
              <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR} ml={'10px'}>
                MEMBER
              </Th>
              <Th fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
                BUDGET
              </Th>
              <Th textAlign={'left'} fontSize={'10px'} fontWeight={700} color={GRAY_COLOR}>
                COMPLETION
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {projectList.map(
              ({ iconSVG, projectName, budget, member, completionRate }: Project, index) => (
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
                  <Td display={'flex'} alignItems={'center'}>
                    <AvatarGroup max={5}>
                      {member.map((mem, index) => (
                        <Avatar key={index} src={mem} ml={'2px'} w={'20px'} h={'20px'} />
                      ))}
                    </AvatarGroup>
                  </Td>
                  <Td>
                    <Flex>
                      <Text fontSize={'14px'} fontWeight={700} color={DARK_COLOR}>
                        ${formatBudget(budget)}
                      </Text>
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
                </Tr>
              ),
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

function formatBudget(budget: number): string {
  return budget.toLocaleString('en-US', {});
}
