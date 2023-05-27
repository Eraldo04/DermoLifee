import React from "react";
import {
  Box,
  HStack,
  TableContainer,
  Table as ChakraTable,
  Thead,
  Th,
  Tr,
  Text,
  Tbody,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import PacientsTableRow from "./PacientsTableRow";

interface UsersTableProps {
  headData?: string[];
  bodyData?: any;
}

const PacientsTable = (props: UsersTableProps) => {
  const { headData, bodyData } = props;

  return (
    <>
    <HStack w="full" px="24px" py="32px">
    <Box
      height="32px"
      width="16px"
      bg="#246991"
      borderRadius="5px"
      mr="10px"
    />
    <Stack>
      <InputGroup
        backgroundColor="blackAlpha.100"
        borderRadius="10px"
        overflow="hidden"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="text" placeholder="Search product" />
      </InputGroup>
    </Stack>
  </HStack>
      <ChakraTable variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            {headData?.map((item, index) => (
              <Th key={index}>
                <Text>{item}</Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <PacientsTableRow
            id="Name Surname"
            status='ACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="200"
          />
          <PacientsTableRow
            id="Name Surname"
            status='INACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="19"
            totalSpent="100"
          />
          <PacientsTableRow
            id="Name Surname"
            status='ACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="200"
          />
          <PacientsTableRow
            id="Name Surname"
            status='ACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="23"
            totalSpent="212"
          />
          <PacientsTableRow
            id="Name Surname"
            status='INACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="240"
          />
          <PacientsTableRow
            id="Name Surname"
            status='ACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="120"
          />
          <PacientsTableRow
            id="Name Surname"
            status='INACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="200"
          />
          <PacientsTableRow
            id="Name Surname"
            status='ACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="200"
          />
          <PacientsTableRow
            id="Name Surname"
            status='ACTIVE'
            username="Mondi123"
            email="admin@hotmail.com"
            phone="0673087654"
            joinDate="23.05.2022"
            lastOrder="20"
            totalSpent="200"
          />
        </Tbody>
      </ChakraTable>
  </>  
);
};

export default PacientsTable;
