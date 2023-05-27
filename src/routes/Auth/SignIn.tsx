import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import {
  Box,
  Button,
  Container,
  Divider,
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
import { Link, useNavigate, useLocation } from "react-router-dom";
import {LayoutPage} from "../../components/common/layout-page"
// import logo from "../../assets/images/logo.png";

interface LoginData {
  username?: string;
  password?: string;
}

const SignIn = () => {
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [success, setSuccess] = useState(false)
  const [activeButton, setActiveButton] = useState(1);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginProvidedData, setLoginProvidedData] = useState<LoginData | null>(
    null
  );

  console.log(login, success, activeButton)
  console.log(loginProvidedData);

  const toast = useToast()
  const clipPath = useBreakpointValue({
    base: "none",
    md: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
    lg: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
    xl: "polygon(0 0, 100% 0, 74% 100%, 0 100%)",
  });

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8083/login",
        { ...loginProvidedData },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = JSON.stringify(response?.headers?.authorization);
      if (accessToken) {
        const role = response?.data?.roles;        
        localStorage.setItem("token", JSON.stringify(response?.headers?.authorization));
        login(accessToken, 'ADMIN')
      }
      navigate('/dashboard');
      console.log("data:", response.data);
      // setLoginAttempted(true);
      // setSuccess(true);
      // setAuth({ data, accessToken, roles})
      // navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      // setLoginAttempted(true);
      // setSuccess(false);
    }
  };

  const handleButtonClick = (buttonId: any) => {
    setActiveButton(buttonId)
};

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
              bg={activeButton === 1 ? "white" : "none"}
              fontSize="xl"
              borderRadius={"50px"}
              color={activeButton === 1 ? "black" : "white"}
              border={activeButton === 1 ? "white" : "none"}
              _hover={{ backgroundColor: "none" }}
              borderRightColor="#246991"
              minW="250px"
              h="45px"
              justifyContent="flex-start"
              onClick={() => handleButtonClick(1)}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              bg={activeButton === 2 ? "white" : "none"}
              fontSize="xl"
              borderRadius={"50px"}
              color={activeButton === 2 ? "black" : "white"}
              border={activeButton === 2 ? "white" : "none"}
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
          {/* <Image w="26em" src={logo} /> */}
      <form onSubmit={(e) => loginHandler(e)}>
      <VStack w="full">
                <Text
                  color="#246991"
                  fontSize="3xl"
                  fontWeight="bold"
                  mb="40px"
                >
                  LOGIN
                </Text>
                <FormControl>
                  <InputGroup>
        <Input
          placeholder="email"
          type="text"
          border="none"
          borderRadius="none"
          borderBottom="1px solid"
          borderBottomColor="blackAlpha.700"
          onChange={(e) =>
            setLoginProvidedData({
              ...loginProvidedData,
              username: e?.target?.value || "",
            })
          }
        />
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="full">
                <FormControl mt="12px">
                  <InputGroup borderRadius={"12px"}>
        <Input
          placeholder="password"
          type="password"
          border="none"
          borderRadius="none"
          borderBottom="1px solid"
          borderBottomColor="blackAlpha.700"
          onChange={(e) =>
            setLoginProvidedData({
              ...loginProvidedData,
              password: e?.target?.value || "",
            })
          }
        />
                          </InputGroup>
                </FormControl>
              </VStack>
              <HStack mt="30px">
                <Link to="/forgotPassword">
                  <Text
                    color="#246991"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize="sm"
                    minW="150px"
                  >
                    {" "}
                    Forgot Password ?
                  </Text>
                </Link>
                <Divider />
                <Button
                  type="submit"
                  bg="#22648A"
                  color="white"
                  _hover={{ backgroundColor: "#7ca5bd" }}
                  minW="104px"
                >
                  Sign In
                </Button>
              </HStack>
      </form>
      </Container>
        </Box>
      </GridItem>
    </Grid>

  );
};

export default SignIn
