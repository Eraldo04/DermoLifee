import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { VscAdd } from "react-icons/vsc";
// import { HiInformationCircle } from "react-icons/hi";
// import { IoMdAdd } from "react-icons/io";

const ProfileInformation = () => {
  const [profileImageSrc, setProfileImageSrc] = useState<any>("");

  return (
    <VStack alignItems="flex-start" px="24px" mb="48px">
      <HStack w="full" py="32px">
        <Box
          height="32px"
          width="16px"
          bg="#246991"
          borderRadius="5px"
          mr="16px"
        />
        <Text variant="h4">Profile information</Text>
      </HStack>
      <HStack spacing={10} w="full" px="24px" py="32px">
        {profileImageSrc ? (
          <Image
            src={profileImageSrc}
            objectFit="cover"
            w="110px"
            h="110px"
            border="1px"
            borderColor="transparent"
            borderRadius="100%"
            overflow="hidden"
          />
        ) : (
          <Box
            w="110px"
            h="110px"
            border="1px"
            borderColor="blackAlpha.200"
            bg="blackAlpha.200"
            borderRadius="100%"
          ></Box>
        )}
        <Button
          as="label"
          htmlFor="profileImage"
          bg="#246991"
          borderRadius="12px"
          w="212px"
          h="48px"
          py="16px"
          cursor="pointer"
          _hover={{
            backgroundColor: "none",
            color: "blackAlpha.600",
          }}
        >
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e: any) => {
              if (e?.target?.files?.length === 0) return;
              const photo = e?.target?.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(photo);
              reader.onloadend = () => {
                setProfileImageSrc(reader.result);
              };
            }}
          />
          {/* <Icon as={IoMdAdd} mx="12px" /> */}
          Upload New Picture
        </Button>
        <Button
          as="label"
          bg="none"
          color="blackAlpha.800"
          border="2px"
          borderColor="neutral400"
          borderRadius="12px"
          w="100px"
          h="48px"
          py="16px"
          cursor="pointer"
          _hover={{
            backgroundColor: "none",
            color: "blackAlpha.800",
          }}
          onClick={() => {
            setProfileImageSrc("");
          }}
        >
          Remove
        </Button>
      </HStack>
      <HStack alignItems="center" pt="20px">
        <Text variant="base1Semi">Display Name</Text>
        {/* <Icon as={HiInformationCircle} color="neutral500" alignItems="center" /> */}
      </HStack>
      <Input
        type="text"
        placeholder="Display name"
        bg="blackAlpha.200"
        borderRadius="12px"
      />
      <HStack alignItems="center" pt="20px">
        <Text variant="base1Semi">Email</Text>
        {/* <Icon as={HiInformationCircle} color="neutral500" alignItems="center" /> */}
      </HStack>
      <Input
        type="email"
        placeholder="Email"
        bg="blackAlpha.200"
        borderRadius="12px"
      />
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        pt="20px"
      >
        <Text variant="base1Semi">Birth Date</Text>
      </HStack>
      <Input
        type="date"
        id="startDate"
        placeholder="Birth Date"
        borderRadius="12px"
        bg="blackAlpha.200"
      />
      <HStack alignItems="center" pt="20px">
        <Text variant="base1Semi">Location</Text>
        {/* <Icon as={HiInformationCircle} color="neutral500" alignItems="center" /> */}
      </HStack>
      <Input
        type="text"
        placeholder="Location"
        bg="blackAlpha.200"
        borderRadius="12px"
      />
      <HStack alignItems="center" pt="20px">
        <Text variant="base1Semi">Phone number</Text>
        {/* <Icon as={HiInformationCircle} color="neutral500" alignItems="center" /> */}
      </HStack>
      <Input
        type="number"
        placeholder="Phone Number"
        bg="blackAlpha.200"
        borderRadius="12px"
      />
      <Button color="blackAlpha.600" bg="#246991">Update Pacient</Button>
    </VStack>
  );
};

export default ProfileInformation;
