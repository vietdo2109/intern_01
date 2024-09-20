import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SideMenuItem } from "./SideMenuItems";
import { NavLink } from "react-router-dom";
export default function MenuItem({ title, icon, url }: SideMenuItem) {
  const greenColor = "#4FD1C5";
  const darkColor = "#2D3748";
  const whiteColor = "#FFFFFF";

  return (
    <NavLink
      key={title}
      style={{
        width: "100%",
      }}
      to={url}
    >
      {({ isActive }) => (
        <Flex
          w="100%"
          flexDir="column"
        >
          <Box
            display="flex"
            alignItems={"center"}
            w="100%"
            gap={"12px"}
            padding="12px"
            borderRadius="15px"
            className="nav-container"
            bg={isActive ? whiteColor : ""}
          >
            <Box
              display="flex"
              h="30px"
              w="30px"
              alignItems={"center"}
              justifyContent={"center"}
              bg={isActive ? greenColor : whiteColor}
              borderRadius="12px"
            >
              <Icon
                w="15px"
                h="15px"
                as={icon}
                color={isActive ? whiteColor : greenColor}
              />
            </Box>

            <Box h="11px">
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={darkColor}
              >
                {title}
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </NavLink>
  );
}
