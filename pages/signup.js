import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  HStack,
  Radio,
  Flex,
  Text,
  Grid,
  Link,
  Hide,
  Image,
  GridItem,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [vat, setVAT] = useState("");
  const [account, setAccount] = useState("business");

  let isEmailError = email === "";
  let isNameError = name === "";
  let isPasswordError = password === "";
  let isConfirmPasswordError = confirmPassword !== password;
  let isAddressError = address === "";
  let isPhoneError = phone === "";

  const handleSignup = () => {
    const newUser = {
      email,
      name,
      password,
      profile: {
        phone,
        whatsapp,
        company,
        address,
        vat,
      },
    };
  };

  return (
    <Box height="100vh" bg="#fff">
      <Box left="7" top="2" position={{base: "relative", md: "absolute"}}>
        <Link href="/">
          <Image alt="logo" width="230" height="180" src="/dark.svg" />
        </Link>
      </Box>
      <Grid h="100vh" templateColumns="repeat(7, 1fr)">
        <Hide below="md">
          <GridItem
            id="home"
            colSpan={2}
            bg="#0f69a3"
            height="100%"
            backgroundImage="url('/bg2.jpg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            style={{ backgroundSize: "cover" }}
          ></GridItem>
        </Hide>
        <GridItem colSpan={5} height="100%" pl="5">
          <Flex
            height="100%"
            align="flex-start"
            justify="center"
            direction="column"
          >
            <Heading as="h1" pt="3rem" pl="1.55rem">
              Sign Up
            </Heading>

            <Box pl="1.7rem" pt="0.5rem">
              <Link to="/login">
                <Text color="#0f69a3">
                  Already have an account? <b>Login here.</b>
                </Text>
              </Link>
            </Box>

            <Box bg="white" p="7" width="100%" mb="5">
              <VStack align="flex-start">
                <Flex
                  gap={{ base: "1rem", md: "5rem" }}
                  align="flex-start"
                  justify="flex-start"
                  direction={{ base: "column", md: "row" }}
                >
                  <FormControl isInvalid={isNameError} width="18rem">
                    <FormLabel htmlFor="name">
                      Name <span style={{ color: "#0f69a3" }}>*</span>
                    </FormLabel>
                    <Input
                      id="name"
                      name="name"
                      type="name"
                      value={name}
                      placeholder="Full name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {!isNameError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Your name is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isEmailError} width="18rem">
                    <FormLabel htmlFor="email">
                      Email <span style={{ color: "#0f69a3" }}>*</span>
                    </FormLabel>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {!isEmailError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Your email is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Flex>
                <Flex
                  gap={{ base: "1rem", md: "5rem" }}
                  align="flex-start"
                  justify="flex-start"
                  direction={{ base: "column", md: "row" }}
                >
                  <FormControl isInvalid={isPasswordError} width="18rem">
                    <FormLabel htmlFor="password">
                      Password <span style={{ color: "#0f69a3" }}>*</span>
                    </FormLabel>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isPasswordError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isConfirmPasswordError} width="18rem">
                    <FormLabel htmlFor="password">
                      Confirm Password{" "}
                      <span style={{ color: "#0f69a3" }}>*</span>
                    </FormLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      placeholder="Confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {!isConfirmPasswordError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Passwords do not match
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </Flex>

                <FormControl as="fieldset" py="1rem">
                  <FormLabel as="legend">Account type</FormLabel>
                  <RadioGroup onChange={setAccount} value={account}>
                    <HStack spacing="24px">
                      <Radio value="individual">Individual</Radio>
                      <Radio value="business">Business</Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
                <Flex
                  gap={{ base: "1rem", md: "5rem" }}
                  align="flex-start"
                  justify="flex-start"
                  direction={{ base: "column", md: "row" }}
                >
                  <FormControl isInvalid={isPhoneError} width="18rem">
                    <FormLabel htmlFor="phone">
                      Phone number <span style={{ color: "#0f69a3" }}>*</span>
                    </FormLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="text"
                      value={phone}
                      placeholder="Phone number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {!isPhoneError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Phone number is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl width="18rem">
                    <FormLabel htmlFor="whatsapp">Whatsapp number</FormLabel>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="text"
                      value={whatsapp}
                      placeholder="Whatsapp number"
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <Flex
                  gap={{ base: "1rem", md: "5rem" }}
                  align="flex-start"
                  justify="flex-start"
                  direction={{ base: "column", md: "row" }}
                >
                  <FormControl isInvalid={isAddressError} width="18rem">
                    <FormLabel htmlFor="address">
                      Address <span style={{ color: "#0f69a3" }}>*</span>
                    </FormLabel>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={address}
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {!isAddressError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Your address is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  {account === "business" && (
                    <FormControl width="18rem">
                      <FormLabel htmlFor="company">Company name</FormLabel>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={company}
                        placeholder="Company name"
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </FormControl>
                  )}
                </Flex>
                <Flex
                  gap={{ base: "1rem", md: "5rem" }}
                  align="flex-start"
                  justify="flex-start"
                  direction={{ base: "column", md: "row" }}
                >
                  {account === "business" && (
                    <FormControl width="18rem">
                      <FormLabel htmlFor="vat">VAT number</FormLabel>
                      <Input
                        id="vat"
                        name="vat"
                        type="text"
                        value={vat}
                        placeholder="VAT number"
                        onChange={(e) => setVAT(e.target.value)}
                      />
                    </FormControl>
                  )}
                  <FormControl width="18rem"></FormControl>
                </Flex>
                <Box ml="auto" pt="4" align="flex-end"></Box>
                {(isEmailError ||
                  isNameError ||
                  isPasswordError ||
                  isConfirmPasswordError ||
                  isAddressError ||
                  isPhoneError) && (
                  <Button
                    disabled
                    px="8"
                    colorScheme="messenger"
                    variant="solid"
                  >
                    Sign up
                  </Button>
                )}
                {!isEmailError &&
                  !isNameError &&
                  !isPasswordError &&
                  !isConfirmPasswordError &&
                  !isAddressError &&
                  !isPhoneError && (
                    <Button
                      onClick={() => {
                        handleSignup();
                      }}
                      px="8"
                      colorScheme="messenger"
                      variant="solid"
                    >
                      Sign up
                    </Button>
                  )}
              </VStack>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Signup;
