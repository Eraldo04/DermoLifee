import { Box, Divider, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileInformation from '../components/profileInformation'
import LayoutPage from "../components/Layout"
const Profile = () => {
  return (
    <LayoutPage>
    <Flex direction="column" gridTemplateColumns="repeat(9, 1fr)">
      <VStack w='100%' borderRightRadius='12px' alignItems='flex-start'>
      <Box w='full' bg='white' borderRadius='12px'>
            <ProfileInformation />
            </Box>
      </VStack>
    </Flex>
    </LayoutPage>
  )
}

export default Profile


// const { user, logout } = useContext(AuthContext);
// <button onClick={() => logout()}>Sign out</button>
