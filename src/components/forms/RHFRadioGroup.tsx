import React from "react";
import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../../types/option";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
};

export default function RHFRadioGroup<T extends FieldValues>({
  name,
  options,
}: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...restField } }) => (
        <RadioGroup
          {...restField}
          colorScheme="gray"
          display={"flex"}
          gap={"30px"}
        >
          {options?.map((option) => (
            <Radio
              ref={ref}
              value={option.id}
              key={option.id}
            >
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      )}
    ></Controller>
  );
}
