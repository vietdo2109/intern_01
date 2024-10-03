import React from "react";
import { useFormContext } from "react-hook-form";
import { Schema } from "../../schemas/ZodSchema";
import {
  useStates,
  useLanguages,
  useGenders,
  useSkills,
} from "../services/queries";
import { DevTool } from "@hookform/devtools";

import { Flex, Text, Box, Input, Button } from "@chakra-ui/react";
import RHFStateSelector from "./RHFStateSelector";
import RHFToggleButtonGroup from "./RHFToggleButtonGroup";
import RHFRadioGroup from "./RHFRadioGroup";
import RHFSkillSelector from "./RHFSkillSelector";
import RHFSlider from "./RHFSlider";
import RHFSwitch from "./RHFSwitch";
export default function MediumForm() {
  const darkColor = "#2D3748";

  const statesQuery = useStates();
  const languagestatesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useFormContext<Schema>();

  const errorTextStyle = {
    color: "red",
    fontWeight: "400",
    fontSize: "10px",
  };

  const onSubmit = (data: Schema) => {
    console.log("submitted");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        flexDir={"column"}
        gap={"20px"}
      >
        <Flex
          flexDir={"column"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.name ? "red" : darkColor}
              fontSize={"12px"}
            >
              Name
            </Text>
          </Box>

          <Input
            border={errors.name ? "1px solid red" : `1px solid ${darkColor}`}
            width="350px"
            height="50px"
            borderRadius="4px"
            mt="4px"
            {...register("name")}
            type="text"
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "Enter your name";
            }}
            placeholder={"Enter your name"}
            _placeholder={{
              fontSize: "14px",
              color: errors.email ? "#E14949" : "#A0AEC0",
            }}
            size="sm"
            p="0 20px 0 20px"
          />
          <Text sx={errorTextStyle}>{errors.name?.message}</Text>
        </Flex>
        <Flex
          flexDir={"column"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.email ? "red" : darkColor}
              fontSize={"12px"}
            >
              Email
            </Text>
          </Box>
          <Input
            border={errors.email ? "1px solid red" : `1px solid ${darkColor}`}
            width="350px"
            height="50px"
            borderRadius="4px"
            mt="4px"
            {...register("email")}
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "Enter your email";
            }}
            type="text"
            placeholder="Enter your email"
            _placeholder={{
              fontSize: "14px",
              color: errors.email ? "#E14949" : "#A0AEC0",
            }}
            size="sm"
            p="0 20px 0 20px"
          />
          <Text sx={errorTextStyle}>{errors.email?.message}</Text>
        </Flex>

        <Flex
          flexDir={"column"}
          border={errors.states ? "1px solid red" : `1px solid ${darkColor}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={"20px"}
          pt={"20px"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.name ? "red" : darkColor}
              fontSize={"12px"}
            >
              States
            </Text>
          </Box>
          <RHFStateSelector<Schema>
            name="states"
            options={statesQuery.data}
          />
          <Text sx={errorTextStyle}>{errors.states?.message}</Text>
        </Flex>

        <Flex
          flexDir={"column"}
          border={errors.languages ? "1px solid red" : `1px solid ${darkColor}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={"20px"}
          pt={"20px"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.languages ? "red" : darkColor}
              fontSize={"12px"}
            >
              Language
            </Text>
          </Box>
          <RHFToggleButtonGroup<Schema>
            name="languages"
            options={languagestatesQuery.data}
          />
          <Text sx={errorTextStyle}>{errors.languages?.message}</Text>
        </Flex>

        <Flex
          flexDir={"column"}
          border={errors.gender ? "1px solid red" : `1px solid ${darkColor}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={"20px"}
          pt={"20px"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.gender ? "red" : darkColor}
              fontSize={"12px"}
            >
              Gender
            </Text>
          </Box>
          <RHFRadioGroup<Schema>
            name="gender"
            options={gendersQuery.data}
          />
          <Text sx={errorTextStyle}>{errors.gender?.message}</Text>
        </Flex>

        <Flex
          flexDir={"column"}
          border={errors.skills ? "1px solid red" : `1px solid ${darkColor}`}
          borderRadius="4px"
          mt="4px"
          p="10px"
          px={"20px"}
          pt={"20px"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.skills ? "red" : darkColor}
              fontSize={"12px"}
            >
              Skills
            </Text>
          </Box>
          <RHFSkillSelector<Schema>
            name="skills"
            options={skillsQuery.data}
          />
          <Text sx={errorTextStyle}>{errors.skills?.message}</Text>
        </Flex>

        <Flex
          flexDir={"column"}
          gap={"5px"}
          position={"relative"}
        >
          <Box
            bg={"#F8F9FA"}
            paddingX={"8px"}
            position={"absolute"}
            top={"-6px"}
            left={"10px"}
            zIndex={10}
          >
            <Text
              fontWeight={700}
              color={errors.dob ? "red" : darkColor}
              fontSize={"12px"}
            >
              Date of birth
            </Text>
          </Box>

          <Input
            border={errors.dob ? "1px solid red" : `1px solid ${darkColor}`}
            width="350px"
            height="50px"
            borderRadius="4px"
            mt="4px"
            {...register("dob")}
            type="date"
            placeholder={"Date of birth"}
            _placeholder={{
              fontSize: "14px",
              color: errors.dob ? "#E14949" : "#A0AEC0",
            }}
            size="sm"
            p="0 20px 0 20px"
          />
          <Text sx={errorTextStyle}>{errors.dob?.message}</Text>
        </Flex>

        <Flex
          flexDir={"column"}
          gap={"20px"}
        >
          <Text
            fontWeight={700}
            color={errors.FEPeriod ? "red" : darkColor}
            fontSize={"12px"}
          >
            Former Employment Period
          </Text>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex
              flexDir={"column"}
              gap={"5px"}
              position={"relative"}
            >
              <Box
                bg={"#F8F9FA"}
                paddingX={"8px"}
                position={"absolute"}
                top={"-6px"}
                left={"10px"}
                zIndex={10}
              >
                <Text
                  fontWeight={700}
                  color={errors.FEPeriod?.[0] ? "red" : darkColor}
                  fontSize={"12px"}
                >
                  From
                </Text>
              </Box>

              <Input
                border={
                  errors.FEPeriod?.[0]
                    ? "1px solid red"
                    : `1px solid ${darkColor}`
                }
                width="150px"
                height="50px"
                borderRadius="4px"
                mt="4px"
                {...register("FEPeriod.0")}
                type="date"
                size="sm"
                p="0 20px 0 20px"
              />
              <Text sx={errorTextStyle}>{errors.FEPeriod?.message}</Text>
            </Flex>
            <Text
              fontWeight={700}
              color={errors.FEPeriod ? "red" : darkColor}
              fontSize={"12px"}
            >
              -
            </Text>
            <Flex
              flexDir={"column"}
              gap={"5px"}
              position={"relative"}
            >
              <Box
                bg={"#F8F9FA"}
                paddingX={"8px"}
                position={"absolute"}
                top={"-6px"}
                left={"10px"}
                zIndex={10}
              >
                <Text
                  fontWeight={700}
                  color={errors.FEPeriod?.[1] ? "red" : darkColor}
                  fontSize={"12px"}
                >
                  To
                </Text>
              </Box>

              <Input
                border={
                  errors.FEPeriod?.[1]
                    ? "1px solid red"
                    : `1px solid ${darkColor}`
                }
                width="150px"
                height="50px"
                borderRadius="4px"
                mt="4px"
                {...register("FEPeriod.1")}
                type="date"
                size="sm"
                p="0 20px 0 20px"
              />
              <Text sx={errorTextStyle}>{errors.FEPeriod?.message}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          gap={"10px"}
        >
          <Text
            fontWeight={700}
            color={errors.salaryRange ? "red" : darkColor}
            fontSize={"12px"}
          >
            Salary range
          </Text>
          <RHFSlider<Schema>
            name="salaryRange"
            label="salaryRange"
          />

          <Text sx={errorTextStyle}>{errors.salaryRange?.message}</Text>
        </Flex>

        <Flex
          gap={"10px"}
          alignItems={"center"}
          width={"350px"}
        >
          <Text
            fontWeight={700}
            color={errors.isTeacher ? "red" : darkColor}
            fontSize={"12px"}
            width={"160px"}
          >
            Are you a teacher?
          </Text>
          <RHFSwitch<Schema>
            name="isTeacher"
            label="isTeacher"
          />
        </Flex>
        <Button type="submit">submit</Button>
        <DevTool control={control} />
      </Flex>
    </form>
  );
}
