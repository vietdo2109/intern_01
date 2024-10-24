import { Flex, Box, Text, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { DARK_COLOR, GRAY_COLOR } from '@constants/colors';

export default function PlatformSetting() {
  return (
    <Box flex={1} bg={'#FFFFFF'} borderRadius={'15px'} shadow="xs" px="21px" py="28px">
      <Flex flexDir="column" gap="19px" maxH={'700px'}>
        <Text fontSize="18ox" fontWeight="700" color={DARK_COLOR}>
          Platform Settings
        </Text>
        <Text fontSize="10px" fontWeight="700" color={GRAY_COLOR}>
          ACCOUNT
        </Text>
        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="rememer-me-switch" colorScheme="teal" />
          <FormLabel
            htmlFor="rememer-me-switch"
            mb="0"
            fontSize="12px"
            fontWeight="400"
            color={GRAY_COLOR}
          >
            Email me when someone follows me
          </FormLabel>
        </FormControl>
        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="rememer-me-switch" colorScheme="teal" />
          <FormLabel
            htmlFor="rememer-me-switch"
            mb="0"
            fontSize="12px"
            fontWeight="400"
            color={GRAY_COLOR}
          >
            Email me when someone answers on my post
          </FormLabel>
        </FormControl>
        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="rememer-me-switch" colorScheme="teal" />
          <FormLabel
            htmlFor="rememer-me-switch"
            mb="0"
            fontSize="12px"
            fontWeight="400"
            color={GRAY_COLOR}
          >
            Email me when someone mentions me
          </FormLabel>
        </FormControl>

        <Text fontSize="10px" fontWeight="700" color={GRAY_COLOR}>
          APPLICATION
        </Text>

        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="rememer-me-switch" colorScheme="teal" />
          <FormLabel
            htmlFor="rememer-me-switch"
            mb="0"
            fontSize="12px"
            fontWeight="400"
            color={GRAY_COLOR}
          >
            New launches and projects
          </FormLabel>
        </FormControl>

        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="rememer-me-switch" colorScheme="teal" />
          <FormLabel
            htmlFor="rememer-me-switch"
            mb="0"
            fontSize="12px"
            fontWeight="400"
            color={GRAY_COLOR}
          >
            Monthly product updates{' '}
          </FormLabel>
        </FormControl>

        <FormControl display="flex" alignItems="center" gap="10px">
          <Switch id="rememer-me-switch" colorScheme="teal" />
          <FormLabel
            htmlFor="rememer-me-switch"
            mb="0"
            fontSize="12px"
            fontWeight="400"
            color={GRAY_COLOR}
          >
            Subscribe to newsletter{' '}
          </FormLabel>
        </FormControl>
      </Flex>
    </Box>
  );
}
