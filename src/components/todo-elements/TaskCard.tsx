import React, { useState } from "react";
import { Flex, Box, Text, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Todo } from "../../state/todo/TodoSlice";
import {
  useDeleteTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
} from "../../state/posts/todosApiSlice";
import Tag from "./Tag";
import { allTags, TaskTag } from "../../types/todoTypes/Tag";
import UpdateTaskModal from "./UpdateTaskModal";
export default function TaskCard({ text, tags, type, date, id }: Todo) {
  const [isTaskMenuVisible, setIsTaskMenuVidible] = useState(false);
  const [deleteTodoMutation, {}] = useDeleteTodoMutation();
  const { data: todo } = useGetTodoQuery(id);

  const grayColor = "#A0AEC0";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [updateTodoMutation, {}] = useUpdateTodoMutation();

  if (todo) {
    return (
      <Flex
        _hover={{ bg: "#fafafa" }}
        cursor={"pointer"}
        onClick={onOpen}
        h={"200px"}
        w={"100%"}
        borderRadius={"10px"}
        border={`2px solid ${grayColor}`}
        flexDir={"column"}
        position={"relative"}
      >
        <UpdateTaskModal
          id={todo.id}
          todo={todo}
          onClose={onClose}
          isOpen={isOpen}
        />
        <Flex
          position={"absolute"}
          width={"180px"}
          zIndex={1000} // Add zIndex to bring the container above other elements
          h={"130px"}
          shadow={"md"}
          bg={"white"}
          border={`2px solid ${grayColor}`}
          right={"20px"}
          top={"40px"}
          borderRadius={"10px"}
          flexDir={"column"}
          display={isTaskMenuVisible ? "" : "none"}
          p="10px"
          justifyContent={"space-between"}
        >
          <Flex
            border={`2px solid ${grayColor}`}
            borderRadius={"10px"}
            flex={1}
            p={"6px"}
            cursor={"pointer"}
            onClick={(event) => {
              event.stopPropagation(); // Prevents triggering the card's onClick

              updateTodoMutation({
                id,
                type: {
                  value: `${
                    type?.value === "Planned"
                      ? "Upcoming"
                      : type?.value === "Upcoming"
                      ? "Planned"
                      : "Planned"
                  }`,
                },
              });
            }}
          >
            <Text
              fontWeight={700}
              fontSize={"12px"}
            >
              {type?.value === "Planned"
                ? "Move to Upcoming tab"
                : type?.value === "Upcoming"
                ? "Move to Planned tab"
                : "Move to Planned tab"}
            </Text>
          </Flex>
          <Flex
            border={`2px solid ${grayColor}`}
            borderRadius={"10px"}
            p={"6px"}
            flex={1}
            cursor={"pointer"}
            onClick={(event) => {
              event.stopPropagation(); // Prevents triggering the card's onClick

              updateTodoMutation({
                id,
                type: {
                  value: `${
                    type?.value === "Planned"
                      ? "Completed"
                      : type?.value === "Upcoming"
                      ? "Completed"
                      : "Upcoming"
                  }`,
                },
              });
            }}
          >
            <Text
              fontWeight={700}
              fontSize={"12px"}
            >
              {type?.value === "Planned"
                ? "Move to Completed tab"
                : type?.value === "Upcoming"
                ? "Move to Completed tab"
                : "Move to Upcoming tab"}
            </Text>
          </Flex>
          <Flex
            border={`2px solid ${grayColor}`}
            borderRadius={"10px"}
            p={"6px"}
            flex={1}
            cursor={"pointer"}
            onClick={(event) => {
              event.stopPropagation(); // Prevents triggering the card's onClick

              deleteTodoMutation(id);
            }}
          >
            <Text
              fontWeight={700}
              fontSize={"12px"}
            >
              Delete
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          padding={"18px"}
        >
          {/* Category tags*/}
          <Flex
            h={"28px"}
            w={"60%"}
            gap={"8px"}
          >
            {tags.map((tagId: number) => {
              // Find the corresponding tag from allTags
              const matchedTag = allTags.find((tag) => tag.id === tagId);

              // Render the component with the matched tag if found
              return matchedTag ? (
                <Tag
                  id={matchedTag.id}
                  key={tagId}
                  title={matchedTag.title}
                  color={matchedTag.color}
                  bg={matchedTag.bg}
                />
              ) : null;
            })}
          </Flex>
          <Box
            cursor={"pointer"}
            onClick={(event) => {
              event.stopPropagation(); // Prevents triggering the card's onClick

              setIsTaskMenuVidible(!isTaskMenuVisible);
            }}
          >
            <Icon
              as={HiOutlineDotsHorizontal}
              color={grayColor}
              w={"20px"}
              h={"20px"}
            ></Icon>
          </Box>
        </Flex>

        <Flex
          paddingX={"18px"}
          flexDir={"column"}
          gap={"20px"}
          flex={1}
          position={"relative"}
        >
          <Text
            fontWeight={"700"}
            fontSize={"24px"}
            height={"26px"}
          >
            {text}
          </Text>
          <Flex
            flex={1}
            alignItems={"center"}
            gap={"6px"}
            position={"absolute"}
            bottom={"10px"}
          >
            <Icon
              as={FaRegCalendarAlt}
              color={grayColor}
            ></Icon>
            <Text
              mt={"6px"}
              fontWeight={"700"}
              fontSize={"16px"}
              color={grayColor}
            >
              {date}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  } else {
    return <Text>undefined</Text>;
  }
}
