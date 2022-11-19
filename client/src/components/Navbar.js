import React from 'react'
import { Stack, HStack, VStack, Box, Flex, Link, Text } from '@chakra-ui/react'


const Navbar = () => {
    return (
        <>
            <Flex w='100%' h={'4rem'} pt={2} px={2} alignItems='center' justify='space-between'>
                <h1>Tips Blog</h1>

                <HStack as='nav' spacing='5' mr='2rem' >
                    <Link><Text fontSize="sm">HOME</Text></Link>
                    <Link><Text fontSize='sm'>DASHBOARD</Text></Link>
                    <Link><Text fontSize='sm'>POSTS</Text></Link>
                </HStack>
            </Flex>
        </>
    )
}

export default Navbar