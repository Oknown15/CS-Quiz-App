import React, { useContext, useState } from 'react';
import { userContext } from './Question';
import { Box, Text } from '@chakra-ui/react';
// import { Container, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Layout() {

    // const [showFinalResults, setFinalResults] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const contextValue = useContext(userContext);
    const QuestionArray = contextValue[0].Questions;
    const OptionsArray = contextValue[0].options;
    const CorrectAnswer = contextValue[0].options.isCorrect;

    // this.optionClicked = this.optionClicked.bind(this);

    const optionClicked = (CorrectAnswer) => {
        console.log(CorrectAnswer)
    }
    
    

    return (
        <div>
               <Box
               bg="BlackAlpha.700"
               textTransform={'capitalize'}
               listStyleType={'none'}
               >
                    <Text textTransform={'capitalize'} fontSize='2xl'>
                         {QuestionArray}
                    </Text>
                    <p>{CorrectAnswer}</p>
            {
               
                    OptionsArray.map(option => (
                    <li onClick={() => optionClicked(option.isCorrect)} className='text' key={option.text}>{option.text}</li>
                ))
            }
               </Box>

        </div>
    );
}

export default Layout;