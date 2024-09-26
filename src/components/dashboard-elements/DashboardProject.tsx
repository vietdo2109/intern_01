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
} from "@chakra-ui/react";
import { ProjectD, projectDList } from "./ProjectD";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

function formatBudget(budget: number): string {
  return budget.toLocaleString("en-US", {});
}

export default function DashboardProject() {
  const rateColor = "#E2E8F0";
  const whiteColor = "#FFFFFF";
  const grayColor = "#A0AEC0";
  const darkColor = "#2D3748";
  const greenColor = "#4FD1C5";
  return (
    <Flex
      w={"70%"}
      bg={whiteColor}
      borderRadius={"15px"}
      flexDirection={"column"}
      paddingX={"21px"}
      paddingY={"28px"}
    >
      <Flex flexDir={"column"}>
        <Flex
          w={"100%"}
          justifyContent={"space-between"}
        >
          <Text
            fontWeight={700}
            fontSize={"18px"}
            color={darkColor}
          >
            Oders overview
          </Text>
          <Icon
            as={PiDotsThreeVerticalBold}
            w={"20px"}
            h={"20px"}
            color={grayColor}
            cursor={"pointer"}
          ></Icon>
        </Flex>

        <Flex
          gap={"5px"}
          alignItems={"center"}
        >
          <Icon
            as={FaCheckCircle}
            color={"#68D391"}
            width={"13px"}
            height={"13px"}
          ></Icon>
          <Text
            mt={"4px"}
            fontSize={"14px"}
            fontWeight={700}
            color={grayColor}
          >
            30 done
          </Text>
          <Text
            mt={"4px"}
            fontSize={"14px"}
            fontWeight={400}
            color={grayColor}
          >
            this month
          </Text>
        </Flex>
      </Flex>
      <TableContainer
        w={"100%"}
        mt={"30px"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th
                fontSize={"10px"}
                fontWeight={700}
                color={grayColor}
              >
                COMPANIES
              </Th>
              <Th
                fontSize={"10px"}
                fontWeight={700}
                color={grayColor}
                ml={"10px"}
              >
                MEMBER
              </Th>
              <Th
                fontSize={"10px"}
                fontWeight={700}
                color={grayColor}
              >
                BUDGET
              </Th>
              <Th
                textAlign={"left"}
                fontSize={"10px"}
                fontWeight={700}
                color={grayColor}
              >
                COMPLETION
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {projectDList.map(
              ({
                iconSVG,
                projectName,
                budget,
                member,
                completionRate,
              }: ProjectD) => (
                <Tr>
                  <Td>
                    <Flex
                      alignItems={"center"}
                      gap={"15px"}
                    >
                      <img
                        src={iconSVG}
                        alt="logo"
                      />
                      <Flex
                        flexDirection={"column"}
                        justifyContent={"center"}
                      >
                        <Text
                          fontSize={"14px"}
                          fontWeight={700}
                          color={darkColor}
                        >
                          {projectName}
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <AvatarGroup max={5}>
                      {member.map((mem) => (
                        <Avatar
                          src={mem}
                          ml={"2px"}
                          w={"20px"}
                          h={"20px"}
                        />
                      ))}
                    </AvatarGroup>
                  </Td>
                  <Td>
                    <Flex>
                      <Text
                        fontSize={"14px"}
                        fontWeight={700}
                        color={darkColor}
                      >
                        ${formatBudget(budget)}
                      </Text>
                    </Flex>
                  </Td>

                  <Td>
                    <Flex
                      flexDir={"column"}
                      width={"125px"}
                      justifyContent={"center"}
                    >
                      <Flex>
                        <Text
                          textAlign={"center"}
                          fontWeight={700}
                          fontSize={"14px"}
                          color={greenColor}
                        >
                          {completionRate}%
                        </Text>
                      </Flex>
                      <Flex
                        w={"100%"}
                        h={"3px"}
                        borderRadius={"1px"}
                        bg={rateColor}
                      >
                        <Box
                          w={`${completionRate}%`}
                          h={"100%"}
                          bg={greenColor}
                          borderRadius={"1px"}
                        ></Box>
                      </Flex>
                    </Flex>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
