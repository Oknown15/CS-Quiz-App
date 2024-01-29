import React, { createContext, useState } from 'react'
import './App.css'
// import Page from './components/Page'?
import Question from './components/Question'
import Layout from './components/layout'
import { ChakraProvider } from '@chakra-ui/react';

// export const userContext = React.createContext()

function App() {

  return (
    <>
    <ChakraProvider>
      <Question />
    </ChakraProvider>

    </>
  )
}

export default App
