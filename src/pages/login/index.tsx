import { Box, Button, Flex, FormControl, FormLabel, Input, Switch, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { TopNavBar } from '@components/topNavBar';
import signInImage from '@assets/images/signInBg.png';
import { Footer } from '@components/footer';
import { loginYupSchema } from '@schemas/yupSchema';
import { Formik, Form } from 'formik';
import { BG_COLOR } from '@constants/colors';
import { LoginFormValues } from '../../types/loginPage';

export default function Login() {
  return (
    <Flex as="nav" w={'100%'} justifyContent={'center'} h={'100vh'}>
      <Box
        display={{ base: 'none', md: 'block' }}
        overflowX="hidden"
        h="80%"
        w="44vw"
        position="absolute"
        right="0px"
      >
        <Box
          bgImage={signInImage}
          w="100%"
          h="100%"
          bgSize="cover"
          bgPosition="50%"
          position="absolute"
          borderBottomLeftRadius="20px"
        ></Box>
      </Box>
      <Flex
        w={'100%'}
        alignItems="center"
        h="100%"
        p="30px"
        pt="40px"
        position={'relative'}
        flexDirection={'column'}
        justifyContent="space-between"
      >
        <TopNavBar
          logoColor="black"
          textColor="#2D3748"
          bgColor="linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)"
          btnColor="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          btnTextColor="#FFFFFF"
          shadow={true}
        />

        {/* inputs */}
        <Flex minW="800px" width="100%" justifyContent="center">
          <Flex
            h="50vh"
            minH="400px"
            minW="800px"
            width="60%"
            justifySelf="left"
            justifyContent="left"
          >
            <Flex flexDir={'column'} gap="26px" mt="10px" justifyContent="space-between">
              <Box>
                <Text fontSize="32px" fontWeight="700" color="#4FD1C5">
                  Welcome Back
                </Text>
                <Text fontSize="14px" fontWeight="700" color="#A0AEC0">
                  Enter your email and password to sign in
                </Text>
              </Box>
              <Formik
                validationSchema={loginYupSchema}
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log({ values, actions });

                  actions.setSubmitting(false);
                }}
              >
                {(props) => (
                  <Form>
                    <Flex flexDir={'column'} gap={'24px'}>
                      <Flex flexDir={'column'}>
                        <Text fontSize="14px" color={BG_COLOR} ml="5px">
                          Email
                        </Text>
                        <Input
                          width="350px"
                          height="50px"
                          border={
                            props.touched.email && props.errors.email
                              ? '1px solid red'
                              : '1px solid #E2E8F0'
                          }
                          borderRadius="15px"
                          mt="4px"
                          type="email"
                          name="email"
                          value={props.values.email}
                          onChange={props.handleChange}
                          placeholder="Your email address"
                          _placeholder={{ fontSize: '14px', color: '#A0AEC0' }}
                          size="sm"
                          p="0 20px 0 20px"
                        />
                        {props.touched.email && props.errors.email && (
                          <Text
                            mt={'3px'}
                            textAlign={'right'}
                            fontSize={'10px'}
                            fontWeight={400}
                            color={'red'}
                          >
                            {props.errors.email}
                          </Text>
                        )}
                      </Flex>
                      <Flex flexDir={'column'}>
                        <Text fontSize="14px" color={BG_COLOR} ml="5px">
                          Password
                        </Text>
                        <Input
                          border={
                            props.touched.password && props.errors.password
                              ? '1px solid red'
                              : '1px solid #E2E8F0'
                          }
                          width="350px"
                          height="50px"
                          borderRadius="15px"
                          mt="4px"
                          name="password"
                          type="password"
                          value={props.values.password}
                          onChange={props.handleChange}
                          placeholder="Your password"
                          _placeholder={{ fontSize: '14px', color: '#A0AEC0' }}
                          size="sm"
                          p="0 20px 0 20px"
                        />
                        {props.touched.password && props.errors.password && (
                          <Text
                            mt={'3px'}
                            textAlign={'right'}
                            fontSize={'10px'}
                            fontWeight={400}
                            color={'red'}
                          >
                            {props.errors.password}
                          </Text>
                        )}
                      </Flex>
                      <FormControl display="flex" alignItems="center" gap="10px">
                        <Switch id="rememer-me-switch" colorScheme="teal" />
                        <FormLabel
                          htmlFor="rememer-me-switch"
                          mb="0"
                          fontSize="12px"
                          color="#2D3748"
                        >
                          Remember me
                        </FormLabel>
                      </FormControl>
                      <Button
                        bg="#4FD1C5"
                        size="lg"
                        borderRadius="12px"
                        mt="14px"
                        width={'100%'}
                        minH="45px"
                        type="submit"
                      >
                        <Text color="#FFFFFF" fontSize="10px" fontWeight={'800'}>
                          LOG IN
                        </Text>
                      </Button>
                    </Flex>
                  </Form>
                )}
              </Formik>

              <Flex padding={'15px'} alignItems={'center'} justifyContent={'center'} gap={'3px'}>
                <Text color="#A0AEC0" fontSize="14px" fontWeight="700">
                  Don't have an account? {'  '}
                </Text>{' '}
                <Text
                  color="#4FD1C5"
                  cursor="pointer"
                  textDecor="none"
                  fontSize="14px"
                  fontWeight="700"
                >
                  <Link to={'/signup'}> Sign up </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box w={'60%'}>
          <Footer />
        </Box>
      </Flex>
    </Flex>
  );
}

const initialValues: LoginFormValues = { email: '', password: '' };
