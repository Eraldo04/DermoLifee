import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { NavbarItem } from './menu';


export const NavItem = ({ icon, path, label }: NavbarItem) => {
    const { pathname } = useLocation();
    const isSelected = pathname.includes(path);
    return (
        <Box
            role='group'
            paddingY='6px'
            as={Link}
            to={path}
            w='full'
            justifyContent='flex-start'
            alignItems='center'
            borderRadius='6px'>
            <HStack
                borderRadius='6px'
                paddingX='12px'
                paddingY='6px'
                w='100%'
                cursor={'pointer'}
                width="100%"
                transitionDuration='300ms'
                color={isSelected ? 'primary.purple' : 'neutral500'}
                _groupHover={{
                    backgroundColor: 'secondary.purple',
                    color: 'primary.purple',
                    transitionDuration: '0ms',
                    transitionTimingFunction: "ease-in-out",
                }}
            >
                <Icon as={icon} w={Icon.name === 'BsGem' ? '18px' : '20px'} h={Icon.name === 'BsGem' ? '18px' : '20px'} />
                <Text
                    w='full'
                    variant={'base1Semi'}
                    color={isSelected ? 'primary.purple' : 'neutral500'}
                    _groupHover={{
                        color: 'primary.purple',
                        transitionDuration: '200ms',
                        transitionTimingFunction: "ease-in-out",
                    }}
                >
                    {label}
                </Text>
            </HStack>
        </Box>
    )
}