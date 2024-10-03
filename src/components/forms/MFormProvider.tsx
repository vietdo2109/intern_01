import { FormProvider, useForm } from "react-hook-form";
import { zodSchema, Schema, defaultValues } from "../../schemas/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
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
import MediumForm from "./MediumForm";
export default function MFormProvider() {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(zodSchema),
    defaultValues: defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <MediumForm />
    </FormProvider>
  );
}
