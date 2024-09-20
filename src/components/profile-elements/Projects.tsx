import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { projects } from "./Project";
import { Project } from "./Project";

export default function Projects() {
  const darkColor = "#2D3748";
  const grayColor = "#A0AEC0";
  const greenColor = "#4FD1C5";
  return (
    <Flex
      flex={1}
      bg={"#FFFFFF"}
      shadow="xs"
      borderRadius={"15px"}
    >
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        paddingX="21px"
        paddingY="28px"
      >
        <Text
          fontSize="18px"
          fontWeight={700}
          color={darkColor}
        >
          Projects
        </Text>
        <Text
          fontSize="14px"
          fontWeight={400}
          color={grayColor}
          mb="20px"
        >
          Architects design houses
        </Text>
        <Flex
          gap="24px"
          w="100%"
          h="100%"
        >
          {projects.map(
            ({ imgSrc, projectId, projectName, projectDesc }: Project) => (
              <Flex
                flexDir="column"
                gap="12px"
                flex={1}
                height="100%"
                key={projectId}
              >
                <Box
                  bgImage={imgSrc}
                  w="100%"
                  h="60%"
                  bgSize="cover"
                  bgPosition={"center"}
                  bgRepeat={"no-repeat"}
                  borderRadius="12px"
                >
                  <Box
                    w="100%"
                    borderRadius="12px"
                    h="100%"
                    bgGradient={
                      "linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                    }
                    opacity="90%"
                  ></Box>
                </Box>

                <Flex
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Text
                    fontSize="10px"
                    fontWeight="400"
                    color={grayColor}
                  >
                    Project #{projectId}
                  </Text>
                  <Text
                    fontSize="18px"
                    fontWeight="700"
                    color={darkColor}
                  >
                    {projectName}
                  </Text>
                  <Text
                    fontSize="12px"
                    fontWeight="400"
                    color={grayColor}
                  >
                    {projectDesc}
                  </Text>
                </Flex>
                <Flex
                  flex={1}
                  flexDir={"column"}
                  justifyContent={"flex-end"}
                >
                  <Button
                    w={"110.5px"}
                    h={"35px"}
                    bg={"#FFFFFF"}
                    justifySelf={"flex-end"}
                    colorScheme="teal"
                    variant="outline"
                    borderRadius="12px"
                    border="2px solid #4FD1C5"
                  >
                    <Text
                      color={greenColor}
                      fontSize="10px"
                      fontWeight={700}
                      textAlign={"center"}
                    >
                      VIEW ALL
                    </Text>
                  </Button>
                </Flex>
              </Flex>
            )
          )}
          <Flex
            border="2px solid #E0E1E2"
            borderRadius="12px"
            gap="20px"
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir="column"
            _hover={{
              bg: "#E0E1E2",
            }}
            cursor={"pointer"}
          >
            <Text
              color={"#718096"}
              fontWeight={900}
              fontSize={"32px"}
            >
              +
            </Text>
            <Text
              color={"#718096"}
              fontWeight={700}
              fontSize={"18px"}
              textAlign={"center"}
            >
              Create a New Project
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
