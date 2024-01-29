import React, { useContext, useState } from 'react';
import { userContext } from './Question';
import { AbsoluteCenter, Box, Center, Text } from '@chakra-ui/react';
import Logo from './Images/coding.png';
// import { Container, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Layout( ) {

    const [showFinalResults, setFinalResults] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentOptions, setCurrentOptions] = useState(0)
    const [score, setScore] = useState(0)
    const contextValue = useContext(userContext);
    const OptionsArray = contextValue[currentOptions].options;
    const CorrectAnswer = contextValue[currentQuestion].options.isCorrect;
    
    function previousQuestion() {
        setCurrentQuestion(currentQuestion - 1);
    }

    const optionClicked = (CorrectAnswer) => {
        setCurrentQuestion((prevIndex) => (prevIndex + 1) % contextValue.length);
        setCurrentOptions((prevIndex) => (prevIndex + 1) % contextValue.length)
        console.log(CorrectAnswer);

        
    if(currentQuestion + 1 < contextValue.length) {
        setCurrentQuestion(currentQuestion + 1);
    } else {
        setFinalResults(true);
    }
    if(CorrectAnswer == true) {
        setScore(score + 1);
    } else {
        console.log("wrong answer");
    }

    }

    return (


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
                     <p>Question {currentQuestion}/24</p>

               </Box>
               </div>
               ) : (
        <div class>
              <p>Score so far : {score}/ 24</p> 
              <p>{(score/24 ) * 100}%</p>

</div>
        )}

        <div>
            {
            currentQuestion >=1 && <button className='btn' onClick={() => previousQuestion()}>previous question </button>
            }
        </div>
        </div>
    );
}

export default Layout;