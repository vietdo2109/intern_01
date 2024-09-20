import SideMenu from "./SideMenu";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <Box
      bg="#F8F9FA"
      display="flex"
    >
      <SideMenu />
      <Box
        bg={"#F8F9FA"}
        w="300px"
      ></Box>
      {children}
    </Box>
  );
}
