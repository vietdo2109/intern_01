import { Flex, Box, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainCard from "../components/todo-elements/MainCard";
import { useDisclosure } from "@chakra-ui/react";
import AddTaskModal from "../components/todo-elements/AddTaskModal";

export default function TodoList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Flex
        width="100%"
        minW="700px"
        zIndex={1}
        right={0}
        flexDir="column"
      >
        <AddTaskModal
          isOpen={isOpen}
          onClose={onClose}
        />
        <Flex
          flex="1"
          width="100%"
          padding="24px"
          gap={"24px"}
          minH={"100vh"}
          flexDirection={"column"}
        >
          {/*  Header  */}
          <Flex w={"100%"}>
            <Header
              theme="dark"
              page="To-do List"
            />
          </Flex>

          {/*  Main Content  */}
          <Flex
            width={"100%"}
            gap={"24px"}
            alignItems={"flex-start"}
          >
            <MainCard
              type="Planned"
              modalProps={{ isOpen, onOpen, onClose }}
            />
            <MainCard
              type="Upcoming"
              modalProps={{ isOpen, onOpen, onClose }}
            />
            <MainCard
              type="Completed"
              modalProps={{ isOpen, onOpen, onClose }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}