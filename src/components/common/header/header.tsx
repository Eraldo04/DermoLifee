import { Button, Flex, Text, Avatar, Icon, HStack } from "@chakra-ui/react"
import React from "react";
// @ts-ignore
import { HiOutlineBell, HiOutlinePlus } from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom";

export const Header = () => {

    const location = useLocation();
    const isActive = location.pathname === '/tickets';

    return (
        <HStack
            height='60px'
            width="100%"
            alignItems='center'
            justifyContent='flex-end'
            paddingX='24px'
            paddingY='6px'
            gap='16px'
            userSelect='none'
        > 
            { isActive ? 
            <Link to='/new-ticket'>
            <Button size='sm' leftIcon={<HiOutlinePlus />} variant={'solid:blue'}>Create Ticket</Button> 
            </Link>
            : ''}
            <Link to="/new-event">
            <Button size='sm' leftIcon={<HiOutlinePlus />} variant={'solid:blue'} bg='primary.blue'>Create event</Button>
            </Link>
            <Icon as={HiOutlineBell} color={'neutral500'} w={6} h={6} />
            <Avatar size='sm' name='Admin Admin' />
        </HStack>
    )
}