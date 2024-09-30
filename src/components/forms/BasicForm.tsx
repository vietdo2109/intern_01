import {
  Flex,
  Text,
  Switch,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import ErrorMess from "./ErrorMess";
import { SignUpJoiSchema } from "../../schemas";
import { joiResolver } from "@hookform/resolvers/joi";

import BasicButton from "./BasicButton";
interface SubmitData {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
  social: {
    facebook: string;
    linkedIn: string;
  };
  age: number;
  dob: Date;
  phoneNums: string[];
  phNums: {
    pNumber: string;
  }[];
}

export default function BasicForm() {
  const [isEmailExisted, setIsEmailExisted] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitSuccessful,
      isSubmitting,
      isSubmitted,
    },
    watch,
    reset,
    trigger,
    getValues,
    setValue,
  } = useForm<SubmitData>({
    resolver: joiResolver(SignUpJoiSchema),
    defaultValues: {
      username: "viet",
      email: "",
      password: "Butchi00.",
      repeat_password: "Butchi00.",
      social: {
        facebook: "facebook",
        linkedIn: "facebook",
      },
      age: 18,
      dob: new Date(),
      phoneNums: ["122334455667", "122334455667"],
      phNums: [
        {
          pNumber: "122334455667",
        },
      ],
    },
    mode: "onSubmit",
  });

  const checkExistedEmail = async (value: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?email=${value}`
    );
    const fetchData = await response.json();
    console.log(fetchData);

    return fetchData.length === 0 ? false : true;
  };

  useEffect(() => {
    console.log("submit successfully: " + isSubmitSuccessful);
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  const { fields, append, remove } = useFieldArray({
    name: "phNums",
    control: control,
  });

  const onSubmit = async (data: SubmitData) => {
    const check = await checkExistedEmail(data.email);
    console.log("check: " + check);
    setIsEmailExisted(() => check);
    console.log("state: " + isEmailExisted);
    if (check) {
      console.log("email existed, cannot submit");
    } else {
      console.log(data);
      console.log("submited successfully: " + isSubmitSuccessful);
    }
  };

  const onError = (errors: any) => {
    console.log("Form errors:", errors);
  };

  const handleGetValues = () => {
    // console.log("Get Value: ", getValues(["dob", "social.facebook"]));
  };

  const handleSetValues = () => {
    setValue("username", "");
  };
  return (
    <Box width={"360px"}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Flex
          flexDir={"column"}
          gap={"24px"}
        >
          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Username
              </Text>
              <Input
                border={errors.username ? "1px solid red" : "1px solid #E2E8F0"}
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("username")}
                type="text"
                placeholder="Your username"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            <ErrorMess error={errors.username?.message}></ErrorMess>
          </Flex>
          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Email
              </Text>
              <Input
                width="350px"
                height="50px"
                border={
                  errors.email || isEmailExisted
                    ? "1px solid red"
                    : "1px solid #E2E8F0"
                }
                borderRadius="15px"
                mt="4px"
                type="email"
                {...register("email")}
                placeholder="Your email address"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            {errors.email?.message ? (
              <ErrorMess error={errors.email?.message}></ErrorMess>
            ) : isEmailExisted ? (
              <ErrorMess error={"email already existed"}></ErrorMess>
            ) : (
              <></>
            )}
          </Flex>
          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Password
              </Text>
              <Input
                border={errors.password ? "1px solid red" : "1px solid #E2E8F0"}
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("password")}
                type="password"
                placeholder="Your password"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            <ErrorMess error={errors.password?.message}></ErrorMess>
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Re-enter your password
              </Text>
              <Input
                border={
                  errors.repeat_password ? "1px solid red" : "1px solid #E2E8F0"
                }
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("repeat_password", {
                  required: "required",
                })}
                type="text"
                placeholder="Your facebook"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            <ErrorMess error={errors.repeat_password?.message}></ErrorMess>
          </Flex>
          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Facebook
              </Text>
              <Input
                border={
                  errors.social?.facebook
                    ? "1px solid red"
                    : "1px solid #E2E8F0"
                }
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("social.facebook", {
                  required: true,
                })}
                type="text"
                placeholder="Your facebook"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            <ErrorMess error={errors.social?.facebook?.message}></ErrorMess>
          </Flex>
          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Linked in
              </Text>
              <Input
                border={
                  errors.social?.linkedIn
                    ? "1px solid red"
                    : "1px solid #E2E8F0"
                }
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("social.linkedIn", {
                  required: true,
                })}
                type="text"
                placeholder="Your linkedIn"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            {errors.social?.linkedIn && (
              <ErrorMess error={errors.social?.linkedIn.message} />
            )}
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Age
              </Text>
              <Input
                border={errors.age ? "1px solid red" : "1px solid #E2E8F0"}
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("age", {
                  required: true,
                })}
                type="number"
                placeholder="Your age"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            {errors.social?.linkedIn && (
              <ErrorMess error={errors.age?.message} />
            )}
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Date of birth
              </Text>
              <Input
                border={errors.dob ? "1px solid red" : "1px solid #E2E8F0"}
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("dob", {
                  required: true,
                })}
                type="date"
                placeholder="Your date of birth"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            {errors.social?.linkedIn && (
              <ErrorMess error={errors.dob?.message} />
            )}
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Primary phone number
              </Text>
              <Input
                border={
                  errors.phoneNums?.[0] ? "1px solid red" : "1px solid #E2E8F0"
                }
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("phoneNums.0", {
                  required: true,
                })}
                type="number"
                placeholder="your phone number"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            <ErrorMess error={errors.phoneNums?.[0]?.message}></ErrorMess>
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Secondary phone number
              </Text>
              <Input
                border={
                  errors.phoneNums?.[1] ? "1px solid red" : "1px solid #E2E8F0"
                }
                width="350px"
                height="50px"
                borderRadius="15px"
                mt="4px"
                {...register("phoneNums.1", {
                  required: true,
                })}
                type="number"
                placeholder="your phone number"
                _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                size="sm"
                p="0 20px 0 20px"
              />
            </Flex>
            <ErrorMess error={errors.phoneNums?.[1]?.message}></ErrorMess>
          </Flex>

          <Flex
            flexDir={"column"}
            gap={"5px"}
          >
            <Flex flexDir={"column"}>
              <Text
                fontSize="14px"
                ml="5px"
              >
                Additional phone number
              </Text>
              <Flex
                flexDir={"column"}
                gap={"8px"}
              >
                {fields.map((field, index) => (
                  <Flex
                    key={field.id}
                    justifyContent={"center"}
                    align={"center"}
                    gap={"10px"}
                  >
                    <Input
                      border={
                        errors.phNums?.[index]?.pNumber
                          ? "1px solid red"
                          : "1px solid #E2E8F0"
                      }
                      width="350px"
                      height="50px"
                      borderRadius="15px"
                      {...register(`phNums.${index}.pNumber`, {
                        required: true,
                        disabled: watch("phoneNums.1") === "",
                      })}
                      type="number"
                      placeholder="your phone number"
                      _placeholder={{ fontSize: "14px", color: "#A0AEC0" }}
                      size="sm"
                      p="0 20px 0 20px"
                    />
                    <ErrorMess
                      error={errors.phNums?.[index]?.pNumber?.message}
                    ></ErrorMess>
                    {index > 0 && (
                      <Button
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}
                        bg="#4FD1C5"
                        size="lg"
                        borderRadius="12px"
                        width={"10%"}
                        minH="45px"
                      >
                        -
                      </Button>
                    )}
                  </Flex>
                ))}
                <Button
                  type="button"
                  onClick={() => {
                    append({ pNumber: "" });
                  }}
                  bg="#4FD1C5"
                  size="lg"
                  borderRadius="12px"
                  mt="14px"
                  width={"100%"}
                  minH="45px"
                >
                  <Text
                    color="#FFFFFF"
                    fontSize="15px"
                    fontWeight={"800"}
                  >
                    Add another phone number
                  </Text>{" "}
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <FormControl
            display="flex"
            alignItems="center"
            gap="10px"
          >
            <Switch
              id="rememer-me-switch"
              colorScheme="teal"
            />
            <FormLabel
              htmlFor="rememer-me-switch"
              mb="0"
              fontSize="12px"
              color="#2D3748"
            >
              Remember me
            </FormLabel>
          </FormControl>
          <BasicButton disabled={!isDirty || !isValid || isSubmitting}>
            <Text
              color="#FFFFFF"
              fontSize="10px"
              fontWeight={"800"}
            >
              SIGN IN
            </Text>
          </BasicButton>
          <button
            style={{
              backgroundColor: "#4FD1C5",
              borderRadius: "12px",
              marginTop: "14px",
              width: "100%",
              minWidth: "45px",
              height: "40px",
            }}
            type="submit"
            onClick={handleSetValues}
          >
            <Text
              color="#FFFFFF"
              fontSize="10px"
              fontWeight={"800"}
            >
              Get values
            </Text>
          </button>

          <button
            style={{
              backgroundColor: "#4FD1C5",
              borderRadius: "12px",
              marginTop: "14px",
              width: "100%",
              minWidth: "45px",
              height: "40px",
            }}
            type="submit"
            onClick={handleSetValues}
          >
            <Text
              color="#FFFFFF"
              fontSize="10px"
              fontWeight={"800"}
            >
              Set values
            </Text>
          </button>
          <button
            style={{
              backgroundColor: "#4FD1C5",
              borderRadius: "12px",
              marginTop: "14px",
              width: "100%",
              minWidth: "45px",
              height: "40px",
            }}
            onClick={() => trigger()}
          >
            <Text
              color="#FFFFFF"
              fontSize="10px"
              fontWeight={"800"}
            >
              Validate
            </Text>
          </button>
        </Flex>
      </form>
      <DevTool control={control} />
    </Box>
  );
}
