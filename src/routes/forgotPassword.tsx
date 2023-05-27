import { EmailIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

// const logo = require("../assets/images/logo.png");

type Inputs = {
  emailVerification?: string;
};

function ForgotPassword() {

  const [showVerification, setShowVerification] = useState(false);
  const toast = useToast()
  const clipPath = useBreakpointValue({
    base: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    md: "polygon(0 0, 100% 0, 100% 100%, 39% 100%)",
    lg: "polygon(0 0, 100% 0, 100% 100%, 39% 100%)",
    xl: "polygon(0 0, 100% 0, 100% 100%, 39% 100%)",
  });

  const handleButtonClick = (show: any) => {
      setShowVerification(show);
  };
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 2, xl: 2 }}
        height={{ base: "80vh", lg: "100vh" }}
      >
        <Box
          bg="white"
          w={{ base: "100%", lg: "50%" }}
          pt={{ base: "55px", lg: "0" }}
          h={{ lg: "100vh" }}
          display="flex"
          alignItems="center"
          pl={{ base: 0, lg: "100px", xl: "130px" }}
        >
          <Container minW={{base:'250px',lg:"450px"}}>
            <form id="loginform">
              <VStack w="full">
                <Text
                  color="#246991"
                  fontSize="3xl"
                  fontWeight="bold"
                  mb={{ lg: "40px" }}
                >
                  Mail Address Here
                </Text>
                <Text
                  color="blackAlpha.600"
                  fontWeight="bold"
                  pb="10px"
                >
                  Enter the email address associated with your account
                </Text>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon color="blackAlpha.700" />}
                    />
                    <Input
                      type="emailVerification"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid"
                      borderBottomColor="blackAlpha.700"
                      placeholder="Email"
                    />
                  </InputGroup>
                </FormControl>
              </VStack>
              <HStack mt="30px">
                <Button
                  type="submit"
                  bg="#22648A"
                  color="white"
                  _hover={{ backgroundColor: "#7ca5bd" }}
                  minW="full"
                  onClick={() =>{
                    handleButtonClick(true);
                    toast({
                      position: 'top-right',
                      title: 'Account Failed.',
                      description: "We're having troubles creating your account for you.",
                      status: 'error',
                      duration: 4000,
                      isClosable: true,
                    })
                  }}
                >
                  Recover Password
                </Button>
              </HStack>
              {showVerification ?
              <Text color="blackAlpha.600" fontWeight="bold" mt="20px">
                Please click the link that was send to your email adress.
              </Text>
              : ''}
            </form>
          </Container>
        </Box>
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 4 }}
        height={{ base: "20vh", lg: "100vh" }}
      >
        <Box
          w={{ base: "100%", lg: "100%" }}
          boxShadow="25px 0px 57px rgba(0, 0, 0, 0.35)"
          height={{ base: "20vh", lg: "100vh" }}
          bg="#246991"
          clipPath={clipPath}
          backgroundImage="linear-gradient(45deg, #246991, #163f57)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pb={{ base: "0", lg: "50px" }}
          pl="100px"
        >
          <Link to="/signin">
            <Button
              bg="none"
              fontSize={{lg:"3xl"}}
              color="white"
              border="none"
              _hover={{ backgroundColor: "none" }}
              borderRightColor="#246991"
              minW={{base:'100px',lg:"250px"}}
              h={{lg:"45px"}}
              justifyContent="flex-start"
            >
              Forgot Password
            </Button>
          </Link>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default ForgotPassword;
