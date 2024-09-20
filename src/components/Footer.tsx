import { Flex, Link, Text, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="60%"
      minW="800px"
      justifyContent={"space-between"}
      justifySelf="flex-end"
      height="40px"
      color="#A0AEC0"
      gap="70px"
      paddingBottom="30px"
      paddingTop="40px"
      mt="60px"
    >
      <Box flex="1">
        <Text fontSize="12px">
          © 2021, Made with ❤️ by{" "}
          <Link
            color="#4FD1C5"
            fontWeight="700"
            href="https://www.creative-tim.com/"
          >
            Creative Tim
          </Link>{" "}
          &{" "}
          <Link
            color="#4FD1C5"
            fontWeight="700"
            href="https://simmmple.com/"
          >
            Simmmple
          </Link>{" "}
          for a better web
        </Text>
      </Box>

      <Box>
        <Link href="https://www.creative-tim.com/">
          <Text fontSize="12px">Creative Tim</Text>
        </Link>
      </Box>
      <Box>
        <Link href="https://simmmple.com/">
          <Text fontSize="12px">Simmmple</Text>
        </Link>
      </Box>
      <Box>
        <Link href="https://www.creative-tim.com/blog">
          <Text fontSize="12px">Blog</Text>
        </Link>
      </Box>
      <Box>
        <Link href="https://www.creative-tim.com/license">
          <Text fontSize="12px">License</Text>
        </Link>
      </Box>
    </Flex>
  );
}
