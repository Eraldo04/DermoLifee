import {
  Flex,
  Icon,
  VStack,
  Text,
  Image,
  HStack,
  Box,
  Divider,
} from "@chakra-ui/react";
import { HiLogout } from "react-icons/hi";
import { menu } from "./menu";
import { NavbarItem } from "./menu";
import { NavItem } from "./nav-item";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

import logo from "../../../assets/images/logo.png";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Flex
      height="100svh"
      width="280px"
      direction="column"
      overflow="auto"
      backgroundColor="neutral200"
      color="black"
      justifyContent="space-between"
      padding="24px"
      userSelect="none"
    >
      <VStack spacing="48px" w="full" flexDirection="column">
        <Link to="/dashboard">
          <Image src={logo} w="full" minWidth="200px" maxWidth='260px' h="70px" />
        </Link>
        <VStack spacing={0} width="full" alignItems="flex-start">
          {menu.map((item: NavbarItem, key) => {
            return <NavItem key={key} {...item} />;
          })}
        </VStack>
      </VStack>
      <Box
        role="group"
        paddingY="6px"
        w="full"
        justifyContent="flex-start"
        alignItems="center"
        borderRadius="6px"
      >
                    <Divider orientation='horizontal'  w='90%' mx='10px' mb='20px' color='neutral400' />
        <Link to='/profile'>
        <HStack
          borderRadius="6px"
          paddingX="12px"
          paddingY="6px"
          w="100%"
          cursor={"pointer"}
          width="100%"
          transitionDuration="300ms"
          color={"primary.purple"}
          mb='30px'
          borderColor="transparent"
          _hover={{
            backgroundColor: "secondary.purple",
          }}
        >
          <Box display='flex' alignItems='center' justifyContent='center' >
            <Icon as={CgProfile} w="22px" h="22px" />
          </Box>
          <Text w="full" variant="base1Bold" color={"pr"}>
            Profile
          </Text>
        </HStack>
        </Link>
        <HStack
          borderRadius="6px"
          paddingX="12px"
          paddingY="6px"
          w="100%"
          cursor={"pointer"}
          width="100%"
          transitionDuration="300ms"
          color={"primary.red"}
          border="1px"
          borderColor="transparent"
          _hover={{
            backgroundColor: "secondary.red",
          }}
        >
          <Text w="full" variant="base1Bold" color={"pr"} onClick={() => logout()}>
            Sign Out
          </Text>
          <Icon as={HiLogout} w={"20px"} h={"20px"} />
        </HStack>
      </Box>
    </Flex>
  );
};
