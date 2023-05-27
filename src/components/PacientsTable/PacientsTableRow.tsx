import React from "react";
import { Text, Td, Tr, Checkbox, Box, HStack } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";

interface UsersTableRow {
  id?: string;
  status?: "ACTIVE" | "INACTIVE";
  username?: string;
  email?: string;
  phone?: string;
  joinDate?: string;
  lastOrder?: string;
  totalSpent?: string;
}

const PacientsTableRow = (props: UsersTableRow) => {
  const {
    id,
    status,
    username,
    email,
    phone,
    joinDate,
    lastOrder,
    totalSpent,
  } = props;

  const statusColors = {
    background: "#489086",
    text: "white",
  };
  switch (status) {
    case "ACTIVE":
      statusColors.background = "#489086";
      statusColors.text = "blackAlpha.600";
      break;
    case "INACTIVE":
      statusColors.background = "#c0392b";
      statusColors.text = "white";
      break;
  }

  return (
    <Tr cursor='default' alignItems='flex-start'>
      <Td>
        <Checkbox size="lg"></Checkbox>
      </Td>
      <Link to="/pacient">
      <Td fontSize='md'>
        <Text variant='p' fontWeight='semibold'  maxW='100px' title={`${username}`}>
          {username}
        </Text>
      </Td>
      </Link>
      <Td>
        <Box
          w="fit-content"
          px="8px"
          py='3px'
          borderRadius="4px"
          bgColor={statusColors.background}
          color={statusColors.text}
        >
          <Text
            variant="p"
            fontWeight="bold"
            textTransform="capitalize"
            title={`${status}`}
          >
            {status?.toLocaleLowerCase()}
          </Text>
        </Box>
      </Td>
      <Td fontSize='md'>
        <Text variant='p' fontWeight='semibold' isTruncated maxW='100px' title={`${email}`}>
          {email}
        </Text>
      </Td>
      <Td fontSize='md'>
        <Text variant='p' fontWeight='semibold'  maxW='100px' title={`${phone}`}>
          {phone}
        </Text>
      </Td>
      <Td fontSize='md'>
        <Text variant='p' fontWeight='semibold' maxW='100px' title={`${moment(joinDate).format('DD.MM.YYYY')}`}> 
        {moment(joinDate).format('DD.MM.YYYY')}
        </Text>
      </Td>
      <Td fontSize='md'>
        <Text variant='p' color={lastOrder !== null || undefined ? 'green' : 'neutral500'} fontWeight='semibold'  maxW='80px' display="flex" title={`${lastOrder}`}>
          {lastOrder !== null || undefined ? <Text>$</Text> : "$0"} {lastOrder}
        </Text>
      </Td>
      <Td fontSize='md'>
        <Text color='green' variant='p' fontWeight='semibold'  maxW='100px' display="flex" title={`${totalSpent}`}>
          {totalSpent !== null || undefined ? <Text>$</Text> : ""} {totalSpent}
        </Text>
      </Td>
    </Tr>
  );
};

export default PacientsTableRow;
