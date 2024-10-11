import { Flex, Box, Text, Button, Icon } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import TaskCard from "./TaskCard";
import { ModalType } from "../../types/todoTypes/Modal";
import { useDispatch } from "react-redux";
import { switchModalType } from "../../state/modal/ModalTypeSlice";
// import { useSelector } from "react-redux";
// import { RootState } from "../../state/store";
import { useGetTodosQuery } from "../../state/posts/todosApiSlice";
import { Todo } from "../../state/todo/TodoSlice";
export default function MainCard({
  type,
  modalProps,
}: {
  type: "Planned" | "Upcoming" | "Completed";
  modalProps: ModalType;
}) {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(switchModalType(type));
    modalProps.onOpen();
  };

  let taskCount = 0;

  // const todos = useSelector((state: RootState) => state.todos);

  const { data: todos } = useGetTodosQuery({});

  if (todos) {
    for (const todo of todos) {
      if (todo.type?.value === type) {
        taskCount++;
      }
    }
  }

  const blueColor = "#1D81EB";
  const orangeColor = "#F5A762";
  const greenColor = "#79EF84";
  const grayColor = "#A0AEC0";
  const lightGreenColor = "#4FD1C5";

  return (
    <Flex
      borderRadius="15px"
      bg={"white"}
      minH={"300px"}
      flex={1}
      flexDir={"column"}
      gap={"20px"}
      p={"20px"}
    >
      <Flex justifyContent={"space-between"}>
        <Flex gap={"10px"}>
          <Box
            mt={"3px"}
            borderRadius={"50%"}
            w={"10px"}
            h={"10px"}
            bg={
              type === "Planned"
                ? orangeColor
                : type === "Upcoming"
                ? blueColor
                : greenColor
            }
          ></Box>
          <Text
            fontWeight={700}
            fontSize={"14px"}
            textAlign={"center"}
          >
            {type}
          </Text>
        </Flex>

        <Text
          color={grayColor}
          fontWeight={700}
          fontSize={"14px"}
        >
          {taskCount} {type === "Completed" ? "completed" : "open"} tasks
        </Text>
      </Flex>

      <Button
        width={"100%"}
        h={"50px"}
        bg={lightGreenColor}
        _hover={{ bg: "teal" }}
        display={"flex"}
        alignItems="center"
        gap={"10px"}
        onClick={handleToggleModal}
      >
        <Icon
          as={FaPlus}
          color={"white"}
        ></Icon>
        <Text
          mt={"5px"}
          color={"white"}
        >
          Add task
        </Text>
      </Button>

      {todos?.map(
        (todo: Todo) =>
          todo.type?.value === type && (
            <TaskCard
              key={todo.id}
              text={todo.text}
              tags={todo.tags}
              type={todo.type}
              id={todo.id}
              date={todo.date}
            />
          )
      )}
    </Flex>
  );
}
