import { Flex, Box, Text, Button, Icon } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import TaskCard from '../taskCard';
import { ModalType } from '../../../types/todoTypes/modal';
import { useDispatch } from 'react-redux';
import { switchModalType } from '../../../state/modal/modalTypeSlice';
import { useGetTodosQuery } from '../../../state/todos/todosApiSlice';
import { Todo } from '../../../state/todo/todoSlice';
import { FC } from 'react';
import {
  blueDotColor,
  greenDotColor,
  greenColor,
  orangeDotColor,
  grayColor,
} from '../../../constants/colors';

type MainCardProps = {
  type: 'Planned' | 'Upcoming' | 'Completed';
  modalProps: ModalType;
};

export const MainCard: FC<MainCardProps> = ({ type, modalProps }) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(switchModalType(type));
    modalProps.onOpen();
  };

  let taskCount = 0;
  const { data: todos } = useGetTodosQuery({});
  if (todos) {
    for (const todo of todos) {
      if (todo.type?.value === type) {
        taskCount++;
      }
    }
  }

  return (
    <Flex
      borderRadius="15px"
      bg={'white'}
      minH={'300px'}
      flex={1}
      flexDir={'column'}
      gap={'20px'}
      p={'20px'}
    >
      <Flex justifyContent={'space-between'}>
        <Flex gap={'10px'}>
          <Box
            mt={'3px'}
            borderRadius={'50%'}
            w={'10px'}
            h={'10px'}
            bg={
              type === 'Planned'
                ? orangeDotColor
                : type === 'Upcoming'
                ? blueDotColor
                : greenDotColor
            }
          ></Box>
          <Text fontWeight={700} fontSize={'14px'} textAlign={'center'}>
            {type}
          </Text>
        </Flex>

        <Text color={grayColor} fontWeight={700} fontSize={'14px'}>
          {taskCount} {type === 'Completed' ? 'completed' : 'open'} tasks
        </Text>
      </Flex>

      <Button
        width={'100%'}
        h={'50px'}
        bg={greenColor}
        _hover={{ bg: 'teal' }}
        display={'flex'}
        alignItems="center"
        gap={'10px'}
        onClick={handleToggleModal}
      >
        <Icon as={FaPlus} color={'white'}></Icon>
        <Text mt={'5px'} color={'white'}>
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
          ),
      )}
    </Flex>
  );
};
