import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
export default function PlatformSetting() {
  const darkColor = "#2D3748";
  const grayColor = "#A0AEC0";

  return (
    <Box
      flex={1}
      bg={"#FFFFFF"}
      borderRadius={"15px"}
      shadow="xs"
      px="21px"
      py="28px"
    >
      <Flex
        flexDir="column"
        gap="19px"
        maxH={"700px"}
      >
        <Text
          fontSize="18ox"
          fontWeight="700"
          color={darkColor}
        >
          Platform Settings
        </Text>
        <Text
          fontSize="10px"
          fontWeight="700"
          color={grayColor}
        >
          ACCOUNT
        </Text>
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
            fontWeight="400"
            color={grayColor}
          >
            Email me when someone follows me
          </FormLabel>
        </FormControl>
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
            fontWeight="400"
            color={grayColor}
          >
            Email me when someone answers on my post
          </FormLabel>
        </FormControl>
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
            fontWeight="400"
            color={grayColor}
          >
            Email me when someone mentions me
          </FormLabel>
        </FormControl>

        <Text
          fontSize="10px"
          fontWeight="700"
          color={grayColor}
        >
          APPLICATION
        </Text>

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
            fontWeight="400"
            color={grayColor}
          >
            New launches and projects
          </FormLabel>
        </FormControl>

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
            fontWeight="400"
            color={grayColor}
          >
            Monthly product updates{" "}
          </FormLabel>
        </FormControl>

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
            fontWeight="400"
            color={grayColor}
          >
            Subscribe to newsletter{" "}
          </FormLabel>
        </FormControl>
      </Flex>
    </Box>
  );
}
