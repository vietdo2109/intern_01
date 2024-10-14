import React from "react";
import { Switch, FormControl } from "@chakra-ui/react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
};

export default function RHFSwitch<T extends FieldValues>({
  name,
  label,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...restField } }) => (
        <FormControl {...restField}>
          <Switch
            size="md"
            ref={ref}
          />
        </FormControl>
      )}
    ></Controller>
  );
}
