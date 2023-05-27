import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
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
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";

// interface registerData = {
//   username?: string;
//   email?: string;
//   phone?: string;
//   password?: string;
// };

function Signup() {
  
  const [activeRegisterButton, setActiveRegisterButton] = useState(2);
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [success, setSuccess] = useState(false) 
  // const { register } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const toast = useToast()
  const clipPath = useBreakpointValue({
    base: "none",
    md: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
    lg: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
    xl: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
  });

  const handleButtonClick = (buttonId: any) => {
      setActiveRegisterButton(buttonId);
  };

  // const [registerProvidedData, setregisterProvidedData] = useState<registerData | null>(
  //   null
  // );

  // console.log(registerProvidedData);

  // const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8083/register",
  //       { ...registerProvidedData },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     const accessToken = JSON.stringify(response?.headers?.authorization);
  //     if (accessToken) {
  //       const role = response?.data?.roles;        
  //       localStorage.setItem("token", response?.headers?.authorization);
  //       register(accessToken, 'ADMIN')
  //     }
  //     navigate('/profile');
  //     console.log("data:", response.data);
  //     // setLoginAttempted(true);
  //     // setSuccess(true);
  //     // setAuth({ data, accessToken, roles})
  //     // navigate(from, { replace: true });
  //   } catch (err) {
  //     console.log(err);
  //     // setLoginAttempted(true);
  //     // setSuccess(false);
  //   }
  // };

  useEffect(() => {
    if (loginAttempted && success) {
      toast({
        position: 'top-right',
        title: 'Login Success.',
        description: "You have successfully signed in.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    } else if (loginAttempted) {
      toast({
        position: 'top-right',
        title: 'Login Error.',
        description: "Troubles signing in.",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  }, [loginAttempted,success]);
  
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 4 }}
        height={{ base: "20vh", lg: "100vh" }}
      >
        <Box
          w={{ base: "100%", lg: "90%" }}
          boxShadow="25px 0px 57px rgba(0, 0, 0, 0.35)"
          height={{ base: "20vh", lg: "100vh" }}
          bg="#246991"
          clipPath={clipPath}
          backgroundImage="linear-gradient(45deg, #246991, #163f57)"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          pb={{ base: "0", lg: "50px" }}
          pr="50px"
        >
          <VStack>
            <Link to="/signin">
              <Button
                bg={activeRegisterButton === 1 ? "white" : "none"}
                fontSize="xl"
                borderRadius={"50px"}
                color={activeRegisterButton === 1 ? "black" : "white"}
                border={activeRegisterButton === 1 ? "white" : "none"}
                _hover={{ backgroundColor: "none" }}
                borderRightColor="#246991"
                minW="250px"
                h="45px"
                justifyContent="flex-start"
                onClick={() => handleButtonClick(1)}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                bg={activeRegisterButton === 2 ? "white" : "none"}
                fontSize="xl"
                borderRadius={"50px"}
                color={activeRegisterButton === 2 ? "black" : "white"}
                border={activeRegisterButton === 2 ? "white" : "none"}
                _hover={{ backgroundColor: "none" }}
                borderRightColor="#246991"
                minW="250px"
                h="45px"
                justifyContent="flex-start"
                onClick={() => handleButtonClick(2)}
              >
                Register
              </Button>
            </Link>
          </VStack>
        </Box>
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 2, xl: 2 }}
        height={{ base: "100vh", lg: "100vh" }}
      >
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          bg="white"
          w={{ base: "100%", lg: "70%" }}
          pt={{ base: "55px", lg: "0" }}
          h={{ lg: "100vh" }}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Container maxW="350px">
            {/* <Image src={logo} /> */}
            <form id="signupform">
              <VStack w="full">
                <Text
                  color="#246991"
                  fontSize="3xl"
                  fontWeight="bold"
                  mb="40px"
                >
                  SIGNUP
                </Text>
                <FormControl>
                  <InputGroup borderRadius={"12px"}>
                    <Input
                      id="username"
                      type="text"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid"
                      borderBottomColor="blackAlpha.700"
                      _focus={{ border: "whiteAlpha.100" }}
                      bgColor={"neutral400"}
                      placeholder=" User Name"
                      focusBorderColor="neutral400"
                      // onChange={(e) =>
                      //   setregisterProvidedData({
                      //     ...registerProvidedData,
                      //     username: e?.target?.value || "",
                      //   })
                      // }                    
                      />
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack>
                <FormControl mt="12px">
                  <InputGroup borderRadius={"12px"}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon color="neutral500" />}
                    />
                    <Input
                      id="email"
                      type="email"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid"
                      borderBottomColor="blackAlpha.700"
                      _focus={{ border: "none" }}
                      bgColor={"neutral400"}
                      placeholder="Email"
                      focusBorderColor="neutral400"
                      // onChange={(e) =>
                      //   setregisterProvidedData({
                      //     ...registerProvidedData,
                      //     email: e?.target?.value || "",
                      //   })
                      // }  
                    />
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="full">
                <FormControl mt="12px">
                  <InputGroup borderRadius={"12px"}>
                    <Input
                      id="phone"
                      type="number"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid"
                      borderBottomColor="blackAlpha.700"
                      _focus={{ border: "none" }}
                      bgColor={"neutral400"}
                      placeholder="Mobile Number"
                      focusBorderColor="neutral400"
                      // onChange={(e) =>
                      //   setregisterProvidedData({
                      //     ...registerProvidedData,
                      //     phone: e?.target?.value || "",
                      //   })
                      // }  
                    />
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="full">
                <FormControl mt="12px">
                  <InputGroup borderRadius={"12px"}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<LockIcon color="neutral500" />}
                    />
                    <Input
                      id="password"
                      type="password"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid"
                      borderBottomColor="blackAlpha.700"
                      _focus={{ border: "none" }}
                      bgColor={"neutral400"}
                      placeholder="Password"
                      focusBorderColor="neutral400"
                      // onChange={(e) =>
                      //   setregisterProvidedData({
                      //     ...registerProvidedData,
                      //     password: e?.target?.value || "",
                      //   })
                      // }  
                    />
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="full">
                <FormControl mt="12px">
                  <InputGroup borderRadius={"12px"} borderColor="GrayText">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<LockIcon color="neutral500" />}
                    />
                    <Input
                      id="confirmpassword"
                      type="password"
                      border="none"
                      borderRadius="none"
                      borderBottom="1px solid"
                      borderBottomColor="blackAlpha.700"
                      _focus={{ border: "none" }}
                      bgColor={"neutral400"}
                      placeholder="Confirm Password"
                      focusBorderColor="neutral400"
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
                >
                  Signup
                </Button>
              </HStack>
            </form>
          </Container>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Signup;
