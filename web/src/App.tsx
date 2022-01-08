import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  HStack,
  Container,
  Heading,
} from "@chakra-ui/react"

import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxWidth={{lg:'80%'}}>
      <VStack mt='5rem'>
        <Heading
          as='h1'
          size='3xl'
          fontWeight='normal'
        >
           เที่ยวไหนดี 
        </Heading>

      </VStack>
    </Container>
  </ChakraProvider>
)
