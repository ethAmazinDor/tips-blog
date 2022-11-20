import React from 'react'
import heroImg from '../assets/jsimg.jpg'
import {
    Box,
    Button,
    Flex,
    Image,
    Spacer,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';

const Hero = () => {
    const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

    return (
        <>
            <Flex
                alignItems='center'
                w='full'
                px={isLargerThan62 ? '16' : '6'}
                py='16'
                bgColor={'#ECDCC9'}
                minHeight='90vh'
                justifyContent="space-between"
                flexDirection={isLargerThan62 ? 'row' : 'column'}
            >

                <Box mr={isLargerThan62 ? '6' : '0'} w={isLargerThan62 ? '60%' : 'full'}>
                    <Text
                        fontSize={isLargerThan62 ? '5xl' : '4xl'}
                        fontWeight="bold"
                        mb="4"
                    >
                        {' '}
                        JavaScript Tips Blog
                    </Text>

                    <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7}>
                        A mini javascript blog that spits out useful tips/features that you can use in Javascript. Check
                        out the different posts and get started today!
                    </Text>

                    <Button
                        w="200px"
                        colorScheme="blue"
                        variant="solid"
                        h="50px"
                        size={isLargerThan62 ? 'lg' : 'md'}
                        mb={isLargerThan62 ? '0' : '10'}

                    >
                        Check Out Our Posts
                    </Button>
                </Box>

                <Spacer />

                <Flex
                    w={isLargerThan62 ? '60%' : 'full'}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image src={heroImg} alt="Chakra UI" />
                </Flex>
            </Flex>


        </>
    )
}

export default Hero