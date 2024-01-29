import React, { useContext, useState } from 'react';
import { userContext } from './Question';
import { Box, Text } from '@chakra-ui/react';
// import { Container, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Layout( ) {

    // const [showFinalResults, setFinalResults] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentOptions, setCurrentOptions] = useState(0)
    const [score, setScore] = useState(0)
    const contextValue = useContext(userContext);
    const OptionsArray = contextValue[currentOptions].options;
    const CorrectAnswer = contextValue[0].options.isCorrect;


    

    const optionClicked = (CorrectAnswer) => {
        setCurrentQuestion((prevIndex) => (prevIndex + 1) %  contextValue.length);
        setCurrentOptions((prevIndex) => (prevIndex+ 1) % OptionsArray.length);
        console.log(CorrectAnswer);

        if(CorrectAnswer == true) {
            setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
        }

    }
    
    

        <div className='bdy'>
            <Box width={"120px"}>
                <img src={Logo}></img>
            </Box>
            <AbsoluteCenter p={10} width={300} opacity={"10%"}>
                <img
                src={Logo}></img>
            </AbsoluteCenter>

        { showFinalResults == false ? (
            <div>
               <Box
               bg="BlackAlpha.700"
               textTransform={'capitalize'}
               listStyleType={'none'}
               >
                    <Text textTransform={'capitalize'} fontSize='2xl'>
                         {contextValue[currentQuestion].Questions}
                    </Text>
            {
                    OptionsArray.map(option => (
                    <li onClick={() => optionClicked(option.isCorrect)} className='text' key={option.text}>{option.text} </li>
                ))
            }
               </Box>
               <Box pos={'absolute'} right={10}>
                     <p>Question {currentQuestion}/25</p>

               </Box>

        </div>
    );
}

export default Layout;