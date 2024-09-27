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
import { useForm } from "react-hook-form";
import React from "react";
import { DevTool } from "@hookform/devtools";
import ErrorMess from "./ErrorMess";
import { SignUpJoiSchema } from "../../schemas";
import { joiResolver } from "@hookform/resolvers/joi";

export default function BasicForm() {
  const form = useForm<SubmitData>({
    resolver: joiResolver(SignUpJoiSchema),
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  interface SubmitData {
    username: string;
    email: string;
    password: string;
  }
  const onSubmit = (data: SubmitData) => {
    console.log(data);
  };
  return (
    <Box width={"360px"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
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
                border={"1px solid #E2E8F0"}
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
                border={"1px solid #E2E8F0"}
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
            <ErrorMess error={errors.email?.message}></ErrorMess>
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
                border={"1px solid #E2E8F0"}
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
          <Button
            bg="#4FD1C5"
            size="lg"
            borderRadius="12px"
            mt="14px"
            width={"100%"}
            minH="45px"
            type="submit"
          >
            <Text
              color="#FFFFFF"
              fontSize="10px"
              fontWeight={"800"}
            >
              SIGN IN
            </Text>
          </Button>
        </Flex>
      </form>
      <DevTool control={control} />
    </Box>
  );
}
