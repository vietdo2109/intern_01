import { useEffect, useState } from 'react';
import { useFormContext, useFieldArray, useWatch, SubmitHandler } from 'react-hook-form';
import { defaultValues, Schema } from '@schemas/zodSchema';
import {
  useStates,
  useLanguages,
  useGenders,
  useSkills,
  useUsers,
  useUser,
} from '../services/queries';

import { useCreateUser, useEditUser } from '../services/mutations';
import { DevTool } from '@hookform/devtools';
import { Flex, Text, Box, Input, Button } from '@chakra-ui/react';
import RHFStateSelector from './RHFStateSelector';
import RHFToggleButtonGroup from './RHFToggleButtonGroup';
import RHFRadioGroup from './RHFRadioGroup';
import RHFSkillSelector from './RHFSkillSelector';
import RHFSlider from './RHFSlider';
import RHFSwitch from './RHFSwitch';

import { DARK_COLOR, GRAY_COLOR } from '@constants/colors';
export default function MediumForm() {
  const statesQuery = useStates();
  const languagestatesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();
  const usersQuery = useUsers();

  const [selectedUser, setSelectedUser] = useState(0);
  const {
    register,
    control,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
    unregister,
  } = useFormContext<Schema>();

  const onError = (errors: any) => {
    console.log('Form errors:', errors);
  };

  const createUserMutation = useCreateUser();
  const editUserMutation = useEditUser();

  const onSubmit: SubmitHandler<Schema> = (data) => {
    if (variant === 'create') {
      createUserMutation.mutate(data);
    } else {
      editUserMutation.mutate(data);
    }
  };

  const isTeacher = useWatch({ control: control, name: 'isTeacher' });
  const id = useWatch({ control: control, name: 'id' });
  const variant = useWatch({ control, name: 'variant' });

  let userQuery = useUser(id);

  const { fields, append, remove, replace } = useFieldArray<Schema>({
    name: 'students',
    control: control,
  });

  const handleReset = () => {
    reset(defaultValues);
  };

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
      unregister('students');
    }
  }, [isTeacher, replace, unregister]);

  useEffect(() => {
    if (userQuery.data) {
      console.log(userQuery.data);
      reset(userQuery.data);
    } else {
    }
  }, [reset, userQuery.data]);

  const handleUserCLick = (id: number) => {
    setValue('id', id);
    setSelectedUser(id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} style={{ display: 'flex', gap: '20px' }}>
      <Flex flexDir={'column'} gap={'5px'} alignItems={'center'} minH={'100vh'}>
        <Text fontWeight={700} fontSize={'14px'} color={GRAY_COLOR}>
          Users
        </Text>
        <Box>
          <Button
            onClick={() => {
              handleReset();
              setSelectedUser(0);
              setValue('variant', 'create');
            }}
            width={'100px'}
            bg={variant === 'create' ? DARK_COLOR : 'white'}
            border={`2px solid ${!(variant === 'create') ? DARK_COLOR : null}`}
          >
            <Text
              color={!(variant === 'create') ? DARK_COLOR : 'white'}
              textAlign={'center'}
              justifySelf={'center'}
              mt={'4px'}
            >
              New User
            </Text>
          </Button>
        </Box>
        {usersQuery.data?.map((user) => (
          <Box key={user.id}>
            <Button
              onClick={() => handleUserCLick(user.id)}
              width={'100px'}
              bg={user.id === selectedUser ? DARK_COLOR : 'white'}
              border={`2px solid ${!(user.id === selectedUser) ? DARK_COLOR : null}`}
            >
              <Text
                color={!(user.id === selectedUser) ? DARK_COLOR : 'white'}
                textAlign={'center'}
                justifySelf={'center'}
                mt={'4px'}
              >
                {user.label}
              </Text>
            </Button>
          </Box>
        ))}
      </Flex>
      <Flex flexDir={'column'} gap={'20px'}>
        <Flex flexDir={'column'} gap={'5px'} position={'relative'}>
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            borderRadius={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.name ? 'red' : DARK_COLOR} fontSize={'12px'}>
              Name
            </Text>
          </Box>
          <Input
            border={errors.name ? '1px solid red' : `1px solid ${DARK_COLOR}`}
            width="350px"
            height="50px"
            borderRadius="4px"
            mt="4px"
            {...register('name')}
            type="text"
            onFocus={(e) => {
              e.target.placeholder = '';
            }}
            onBlur={(e) => {
              e.target.placeholder = 'Enter your name';
            }}
            placeholder={'Enter your name'}
            _placeholder={{
              fontSize: '14px',
              color: errors.email ? '#E14949' : '#A0AEC0',
            }}
            size="sm"
            p="0 20px 0 20px"
          />
        </Flex>
        <Flex flexDir={'column'} gap={'5px'} position={'relative'}>
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.email ? 'red' : DARK_COLOR} fontSize={'12px'}>
              Email
            </Text>
          </Box>
          <Input
            border={errors.email ? '1px solid red' : `1px solid ${DARK_COLOR}`}
            width="350px"
            height="50px"
            borderRadius="4px"
            mt="4px"
            {...register('email')}
            onFocus={(e) => {
              e.target.placeholder = '';
            }}
            onBlur={(e) => {
              e.target.placeholder = 'Enter your email';
            }}
            type="text"
            placeholder="Enter your email"
            _placeholder={{
              fontSize: '14px',
              color: errors.email ? '#E14949' : '#A0AEC0',
            }}
            size="sm"
            p="0 20px 0 20px"
          />
          <Text sx={errorTextStyle}>{errors.email?.message}</Text>
        </Flex>

        <Flex
          flexDir={'column'}
          border={errors.states ? '1px solid red' : `1px solid ${DARK_COLOR}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={'20px'}
          pt={'20px'}
          gap={'5px'}
          position={'relative'}
        >
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.states ? 'red' : DARK_COLOR} fontSize={'12px'}>
              States
            </Text>
          </Box>
          <RHFStateSelector<Schema> name="states" options={statesQuery.data} />
          <Text sx={errorTextStyle}>{errors.states?.message}</Text>
        </Flex>

        <Flex
          flexDir={'column'}
          border={errors.languages ? '1px solid red' : `1px solid ${DARK_COLOR}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={'20px'}
          pt={'20px'}
          gap={'5px'}
          position={'relative'}
        >
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.languages ? 'red' : DARK_COLOR} fontSize={'12px'}>
              Language
            </Text>
          </Box>
          <RHFToggleButtonGroup<Schema> name="languages" options={languagestatesQuery.data} />
          <Text sx={errorTextStyle}>{errors.languages?.message}</Text>
        </Flex>

        <Flex
          flexDir={'column'}
          border={errors.gender ? '1px solid red' : `1px solid ${DARK_COLOR}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={'20px'}
          pt={'20px'}
          gap={'5px'}
          position={'relative'}
        >
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.gender ? 'red' : DARK_COLOR} fontSize={'12px'}>
              Gender
            </Text>
          </Box>
          <RHFRadioGroup<Schema> name="gender" options={gendersQuery.data} />
          <Text sx={errorTextStyle}>{errors.gender?.message}</Text>
        </Flex>

        <Flex
          flexDir={'column'}
          border={errors.skills ? '1px solid red' : `1px solid ${DARK_COLOR}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={'20px'}
          pt={'20px'}
          gap={'5px'}
          position={'relative'}
        >
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.skills ? 'red' : DARK_COLOR} fontSize={'12px'}>
              Skills
            </Text>
          </Box>
          <RHFSkillSelector<Schema> name="skills" options={skillsQuery.data} />
          <Text sx={errorTextStyle}>{errors.skills?.message}</Text>
        </Flex>

        <Flex flexDir={'column'} gap={'5px'} position={'relative'}>
          <Box
            bg={'#F8F9FA'}
            paddingX={'8px'}
            position={'absolute'}
            top={'-6px'}
            left={'10px'}
            zIndex={10}
          >
            <Text fontWeight={700} color={errors.dob ? 'red' : DARK_COLOR} fontSize={'12px'}>
              Date of birth
            </Text>
          </Box>

          <Input
            border={errors.dob ? '1px solid red' : `1px solid ${DARK_COLOR}`}
            width="350px"
            height="50px"
            borderRadius="4px"
            mt="4px"
            {...register('dob')}
            type="date"
            placeholder={'Date of birth'}
            _placeholder={{
              fontSize: '14px',
              color: errors.dob ? '#E14949' : '#A0AEC0',
            }}
            size="sm"
            p="0 20px 0 20px"
          />
          <Text sx={errorTextStyle}>{errors.dob?.message}</Text>
        </Flex>

        <Flex flexDir={'column'} gap={'20px'}>
          <Text fontWeight={700} color={errors.FEPeriod ? 'red' : DARK_COLOR} fontSize={'12px'}>
            Former Employment Period
          </Text>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Flex flexDir={'column'} gap={'5px'} position={'relative'}>
              <Box
                bg={'#F8F9FA'}
                paddingX={'8px'}
                position={'absolute'}
                top={'-6px'}
                left={'10px'}
                zIndex={10}
              >
                <Text
                  fontWeight={700}
                  color={errors.FEPeriod?.[0] ? 'red' : DARK_COLOR}
                  fontSize={'12px'}
                >
                  From
                </Text>
              </Box>

              <Input
                border={errors.FEPeriod?.[0] ? '1px solid red' : `1px solid ${DARK_COLOR}`}
                width="150px"
                height="50px"
                borderRadius="4px"
                mt="4px"
                {...register('FEPeriod.0')}
                type="date"
                size="sm"
                p="0 20px 0 20px"
              />
              <Text sx={errorTextStyle}>{errors.FEPeriod?.message}</Text>
            </Flex>
            <Text fontWeight={700} color={errors.FEPeriod ? 'red' : DARK_COLOR} fontSize={'12px'}>
              -
            </Text>
            <Flex flexDir={'column'} gap={'5px'} position={'relative'}>
              <Box
                bg={'#F8F9FA'}
                paddingX={'8px'}
                position={'absolute'}
                top={'-6px'}
                left={'10px'}
                zIndex={10}
              >
                <Text
                  fontWeight={700}
                  color={errors.FEPeriod?.[1] ? 'red' : DARK_COLOR}
                  fontSize={'12px'}
                >
                  To
                </Text>
              </Box>

              <Input
                border={errors.FEPeriod?.[1] ? '1px solid red' : `1px solid ${DARK_COLOR}`}
                width="150px"
                height="50px"
                borderRadius="4px"
                mt="4px"
                {...register('FEPeriod.1')}
                type="date"
                size="sm"
                p="0 20px 0 20px"
              />
              <Text sx={errorTextStyle}>{errors.FEPeriod?.message}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir={'column'} gap={'10px'}>
          <Text fontWeight={700} color={errors.salaryRange ? 'red' : DARK_COLOR} fontSize={'12px'}>
            Salary range
          </Text>
          <RHFSlider<Schema> name="salaryRange" label="salaryRange" />

          <Text sx={errorTextStyle}>{errors.salaryRange?.message}</Text>
        </Flex>

        <Flex gap={'10px'} alignItems={'center'} width={'350px'}>
          <Text
            fontWeight={700}
            color={errors.isTeacher ? 'red' : DARK_COLOR}
            fontSize={'12px'}
            width={'160px'}
          >
            Are you a teacher?
          </Text>
          <RHFSwitch<Schema> name="isTeacher" label="isTeacher" />
        </Flex>
        <Flex flexDir={'column'} gap={'20px'} width={'350px'}>
          {isTeacher && (
            <Flex flexDir={'column'} gap={'20px'} width="350px">
              {isTeacher &&
                fields.map((field, index) => (
                  <Flex key={field.id} flexDir={'column'} position={'relative'} width={'350px'}>
                    <Flex gap={'10px'}>
                      <Box
                        bg={'#F8F9FA'}
                        paddingX={'8px'}
                        position={'absolute'}
                        top={'-6px'}
                        left={'10px'}
                        zIndex={10}
                      >
                        <Text
                          fontWeight={700}
                          color={errors.students?.[index]?.name?.message ? 'red' : DARK_COLOR}
                          fontSize={'12px'}
                        >
                          Student name
                        </Text>
                      </Box>

                      <Input
                        width="350px"
                        height="50px"
                        borderRadius="4px"
                        mt="4px"
                        {...register(`students.${index}.name`, {
                          required: true,
                        })}
                        border={
                          errors.students?.[index]?.name ? '1px solid red' : '1px solid #E2E8F0'
                        }
                        type="text"
                        placeholder={'Enter student name'}
                        _placeholder={{
                          fontSize: '14px',
                          color: errors.dob ? '#E14949' : '#A0AEC0',
                        }}
                        size="sm"
                        p="0 20px 0 20px"
                      />
                      <Button
                        border={`1px solid ${DARK_COLOR}`}
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}
                        size="lg"
                        borderRadius="6px"
                        width={'10%'}
                        justifySelf={'flex-end'}
                        alignSelf={'flex-end'}
                      >
                        -
                      </Button>
                    </Flex>

                    <Text sx={errorTextStyle}>{errors.students?.[index]?.name?.message}</Text>
                  </Flex>
                ))}
            </Flex>
          )}
        </Flex>
        {isTeacher && (
          <Button
            onClick={() => {
              append({ name: '' });
            }}
          >
            ADD STUDENT
          </Button>
        )}
        <Button type="submit">{variant === 'create' ? 'New user' : 'Edit user'}</Button>
        <Button type="button" onClick={handleReset}>
          reset
        </Button>
        <DevTool control={control} />
      </Flex>
    </form>
  );
}

const errorTextStyle = {
  color: 'red',
  fontWeight: '400',
  fontSize: '10px',
};
