import { VStack } from "@chakra-ui/react";
import React from "react";
import PacientsTable from "../components/PacientsTable/PacientsTable";
import { LayoutPage } from "../components/common/layout-page";
const PatientsPage = () => {
  return (
    <LayoutPage>
      <VStack
        alignItems="flex-start"
        w="full"
        backgroundColor="#FFFFFF"
        gap="40px"
        px="24px"
        borderRadius="8px"
      >
        <PacientsTable
          headData={[
            "",
            "Username",
            "Status",
            "Email",
            "Phone Number",
            "Join Date",
            "Last Order",
            "Total Spent",
          ]}
        />
      </VStack>
     </LayoutPage>
  );
};

export default PatientsPage;
