import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function ErrorMess({ error }: { error: string | undefined }) {
  return (
    <Text
      mt={"5px"}
      ml={"5px"}
      color={"red"}
      fontSize={"12px"}
      fontWeight={"400"}
      maxW={"350px"}
    >
      {error}
    </Text>
  );
}
