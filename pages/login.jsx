import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue,
  FormHelperText,
  FormErrorMessage,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
// import { useAuth } from "../lib/context/AuthContext";
import signInImage from "../public/building.jpg";

export default function Login() {
  // Chakra color mode
  const titleColor = useColorModeValue("#272058", "#272058");
  const textColor = useColorModeValue("gray.400", "white");

  //   const authService = useAuth();
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const { state } = location;

  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isEmailError = email === "";
  const isPasswordError = password === "";

  //   const handleLogin = () => {
  //     let credentials = { email, password };
  //     authService.login(credentials).then((data) => {
  //       if (data.success) {
  //         authService.checkAuthState();
  //         toast({
  //           position: "top-right",
  //           title: "Login successful.",
  //           description: "You've successfully logged in.",
  //           status: "success",
  //           duration: 3000,
  //           isClosable: true,
  //         });
  //         if (state) {
  //           state.from ? navigate(state.from) : navigate("/dashboard/profile");
  //         }
  //       } else {
  //         let error;
  //         let title;
  //         if (data.errors) {
  //           error = data.errors[0].message;
  //           title = `${data.errors[0].title} error`;
  //         } else {
  //           title = "Login error";
  //           error = "Server error, please try again.";
  //         }
  //         toast({
  //           position: "top-right",
  //           title: title,
  //           description: error,
  //           status: "error",
  //           duration: 3000,
  //           isClosable: true,
  //         });
  //       }
  //     });
  //   };

  return (
    <Flex position="relative" mb="40px">
      <Box left="9" top="7" position="absolute">
        {/* <Link to="/" style={{}}></Link> */}
      </Box>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="90px"
        pt={{ sm: "0px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "100px", lg: "80px" }}
          >
            <Link href="/" mx="auto" mt="-5rem" mb="2rem">
              <Image alt="logo" width="230" height="180" src="/dark.svg" />
            </Link>
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            <FormControl isInvalid={isEmailError}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                borderRadius="5px"
                mb="1"
                fontSize="sm"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
              {!isEmailError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={isPasswordError}>
              <FormLabel mt="1rem" ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                type="password"
                borderRadius="5px"
                mb="1"
                fontSize="sm"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
              />
              {!isPasswordError ? (
                <FormHelperText>Minimum length of 8 characters</FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl display="flex" alignItems="center" mt="1rem">
              <Switch id="remember-login" colorScheme="facebook" me="10px" />
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                ms="1"
                fontWeight="normal"
              >
                Remember me
              </FormLabel>
            </FormControl>
            {(isPasswordError || isEmailError) && (
              <Button
                disabled
                fontSize="10px"
                type="submit"
                w="100%"
                h="45"
                mb="20px"
                colorScheme="facebook"
                mt="20px"
                _hover={{
                  bg: "blue.700",
                }}
                _active={{
                  bg: "blue.700",
                }}
              >
                SIGN IN
              </Button>
            )}
            {!isPasswordError && !isEmailError && (
              <Button
                onClick={() => {
                  handleLogin();
                }}
                fontSize="10px"
                type="submit"
                w="100%"
                h="45"
                mb="20px"
                bg="#272058"
                color="white"
                mt="20px"
                _hover={{
                  bg: "blue.700",
                }}
                _active={{
                  bg: "blue.700",
                }}
              >
                SIGN IN
              </Button>
            )}
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              {/* <Link to="/signup" color={titleColor} ms="5px" fontWeight="bold"> */}
              <Text color={textColor} fontWeight="medium">
                {/* Don't have an account? Sign Up */}
              </Text>
              {/* </Link> */}
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="40vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage="url('/bg.jpg')"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}
