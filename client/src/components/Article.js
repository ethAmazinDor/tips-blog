import React from 'react'
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Button, ButtonGroup, Divider, Image, Stack, Heading, Box } from '@chakra-ui/react'

const Article = () => {
    return (
        <>
            <Box minHeight={'90vh'}>
                <SimpleGrid ml={3} mt={10} spacing={3} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src='https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>How To Deal With Promises</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>

                            <Button variant='outline' colorScheme='blue'>
                                Read Article
                            </Button>


                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Article