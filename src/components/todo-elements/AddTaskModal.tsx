import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { allTags } from "../../types/todoTypes/Tag";
import { useForm } from "react-hook-form";
import { Todo } from "../../state/todo/TodoSlice";
// import { addTask } from "../../state/todo/TodoSlice";
import {
  useGetTodosQuery,
  useCreateTodosMutation,
} from "../../state/posts/todosApiSlice";

export default function AddTaskModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const modalTypeValue = useSelector(
    (state: RootState) => state.modalType.value
  );
  // const todos = useSelector((state: RootState) => state.todos);
  const [createTodoMutation, {}] = useCreateTodosMutation();

  function nextTodoId(todos: Todo[]) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<Omit<Todo, "id" | "type">>({
    defaultValues: {
      text: "",
      date: "",
      tags: [],
    },
  });

  const { data: todos = [] } = useGetTodosQuery({});

  // const dispatch = useDispatch();

  const type = { value: modalTypeValue };

  const onSubmit: SubmitHandler<Omit<Todo, "id" | "type">> = (
    data: Omit<Todo, "id" | "type">
  ) => {
    const newId = nextTodoId(todos);

    console.log(data);
    console.log(newId);
    console.log(type);

    console.log(todos);
    const numericTags = data?.tags?.map((tag) => Number(tag));
    const newTask: Todo = { ...data, tags: numericTags, id: newId, type: type };
    // dispatch(addTask(newTask));
    createTodoMutation(newTask);
    onClose();
  };

  const onError = (errors: any) => {
    console.log("Form errors:", errors);
  };

  const handleReset = () => {
    reset({
      text: "",
      date: "",
      tags: [],
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      {" "}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add {modalTypeValue} Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justifyContent={"space-between"}
              gap={"20px"}
            >
              <Flex
                flexDir={"column"}
                pt={"10px"}
                gap={"30px"}
                justifyContent={"center"}
                h={"100%"}
              >
                <Text
                  fontWeight={700}
                  fontSize={"18px"}
                >
                  Task:
                </Text>
                <Text
                  fontWeight={700}
                  fontSize={"18px"}
                >
                  Due date:
                </Text>
                <Text
                  fontWeight={700}
                  fontSize={"18px"}
                >
                  Tags:
                </Text>
              </Flex>
              <Flex
                flexDir={"column"}
                gap={"20px"}
                flex={1}
              >
                <Input
                  type="text"
                  maxLength={30}
                  placeholder={"Type here..."}
                  {...register("text", { required: false, maxLength: 30 })}
                  _placeholder={{ fontSize: "14px" }}
                ></Input>

                <Input
                  type="text"
                  placeholder={"14 Jan, 8:00 PM 6 Aug, ..."}
                  _placeholder={{ fontSize: "14px" }}
                  {...register("date", { required: false, maxLength: 30 })}
                ></Input>

                {allTags.map((tag) => (
                  <label
                    style={{ display: "flex", gap: "5px" }}
                    htmlFor="field-rain"
                    key={tag.id}
                  >
                    <input
                      style={{ width: "16px", marginBottom: "5px" }}
                      type="checkbox"
                      value={tag.id}
                      {...register("tags", {
                        setValueAs: (value) => Number(value),
                      })}
                      id={tag.title}
                    />
                    <Text
                      fontWeight={700}
                      color={tag.color}
                    >
                      {tag.title}
                    </Text>
                  </label>
                ))}
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              onClick={onClose}
            >
              close
            </Button>
            <Button
              colorScheme="blue"
              type="submit"
            >
              Add task
            </Button>
            {/* <DevTool control={control} /> */}
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
