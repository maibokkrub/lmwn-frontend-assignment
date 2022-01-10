import React from 'react';
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import {
  ChakraProvider,
  VStack,
  Container,
  Heading,
  Link,
} from "@chakra-ui/react"

import theme from "./theme"

import SearchPage from './pages/SearchPage';
const DetailsPage = React.lazy(()=>import('./pages/DetailsPage'))

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxWidth={{lg:'80%'}}>
      <VStack py='5rem'>
        <Heading as='h1' size='3xl' mb='2rem' fontWeight='normal'> 
          <Link to ="/"> เที่ยวไหนดี </Link> 
        </Heading>

        <Container>
        <BrowserRouter> 
          <Routes> 
            <Route path="/search"    
                element={<SearchPage  />} />
            <Route path="/search/:query"    
                element={<SearchPage  />} />
            <Route path="/place/:id" 
                element={<DetailsPage />} /> 
            <Route path="/"          
                element={<Navigate to="/search/" />} />
          </Routes>
        </BrowserRouter>
        </Container>
      </VStack>
    </Container>
  </ChakraProvider>
)
