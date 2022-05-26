import React from "react";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="#fff" shadow="md" boxShadow="md" height="50px">
      <Container maxW="container.xl" px="2rem">
        <Flex align="center" justify="space-between" mt="25px">
          <Heading as="h2" size="md">
            Admin Dashboard
          </Heading>
          <Box>
            <Flex></Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
