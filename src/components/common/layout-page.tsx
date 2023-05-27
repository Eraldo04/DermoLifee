import React, { useEffect, useState } from 'react'
import { Container, Flex, HStack, VStack, Text, Box } from '@chakra-ui/react'
import { NavBar } from './navbar'
import { Header } from './header/header'
import { useLocation } from 'react-router'
export const LayoutPage = ({ children }: any) => {
    const [pageTitle, setPageTitle] = useState('TritaHospital')
    const location = useLocation()

    useEffect(() => {
        setPageTitle(location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.replace('/', '').slice(1))
    }, [location.pathname])

    return (
        <HStack spacing={0} padding={0}>
            <NavBar />
            <VStack flex={1} h='100vh'>
                <Header />
                <Container overflowY='hidden' style={{ marginTop: 0 }} borderTopLeftRadius='8px' padding={0} maxWidth={'100%'} bg='blackAlpha.200' height='full'>
                    <Flex flexDirection='column' gap='24px' h='full' position='relative' >
                        <Text variant='h1' paddingX='24px' position='absolute' bg='neutral00' w="calc(100% - 24px)" zIndex={10}>
                            {pageTitle}
                        </Text>
                        <Box h='full' overflowY='scroll' css={{
                            '&::-webkit-scrollbar': {
                                width: '10px',
                            },
                            '&::-webkit-scrollbar-track': {
                                width: '6px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: '#7A56C3',
                                borderRadius: '24px',
                            },
                        }} paddingTop='64px' paddingBottom='24px' borderRadius='0px' paddingX='24px'>
                            <Box w='12px' h='12px' top='64px' left='24px' position='absolute'>
                                {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0H0V12C0 12 0 7.30435 3.65217 3.65217C7.30435 0 12 0 12 0Z" fill="#F4F4F4" />
                                </svg> */}
                            </Box>
                            <Box w='12px' h='12px' top='64px' right='34px' position='absolute'>
                                {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H12V12C12 12 12 7.30435 8.34783 3.65217C4.69565 0 0 0 0 0Z" fill="#F4F4F4" />
                                </svg> */}

                            </Box>
                            <Box w='full' borderRadius='16px' overflow='hidden'>
                                {children}
                            </Box>
                        </Box>
                    </Flex>
                </Container>
            </VStack>
        </HStack>
    )
}