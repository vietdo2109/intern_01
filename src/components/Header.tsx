import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
    >
      <Flex
        flexDir="column"
        color={"#FFFFFF"}
      >
        <Text>Page / Profile</Text>
        <Text fontWeight={700}>Profile</Text>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap="18px"
        w="335px"
      >
        <InputGroup w="199px">
          <InputLeftElement pointerEvents="none">
            <Icon
              as={FaSearch}
              w="12px"
              h="12px"
              color="#2D3748"
            ></Icon>
          </InputLeftElement>
          <Input
            bg="#FFFFFF"
            type="text"
            fontSize="12px"
            placeholder="Type here..."
            borderRadius="15px"
            h="39.5px"
          />
        </InputGroup>
        <Link to={"/login"}>
          <Flex
            alignItems="center"
            gap="5px"
            width="58px"
            h="16px"
          >
            <Icon
              color={"#FFFFFF"}
              w="12px"
              h="12px"
              as={FaUser}
            ></Icon>
            <Text
              fontSize="12px"
              fontWeight={700}
              color={"#FFFFFF"}
              mt="3px"
            >
              Sign in
            </Text>
          </Flex>
        </Link>

        <Icon
          color={"#FFFFFF"}
          w="12px"
          h="12px"
          as={IoMdSettings}
        ></Icon>
        <Icon
          color={"#FFFFFF"}
          w="12px"
          h="12px"
          as={FaBell}
        ></Icon>
      </Flex>
    </Flex>
  );
}
