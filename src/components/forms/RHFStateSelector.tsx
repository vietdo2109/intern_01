import React from "react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { State } from "../../types/state";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: State[];
};

export default function RHFStateSelector<T extends FieldValues>({
  name,
  options,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...restField } }) => (
        <CheckboxGroup
          colorScheme="gray"
          {...restField}
        >
          <Stack
            borderRadius={"6px"}
            spacing={[1, 5]}
            direction={["column"]}
          >
            {options?.map((option) => (
              <Checkbox
                value={option.value}
                key={option.value}
              >
                {option.value}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      )}
    ></Controller>
  );
}
