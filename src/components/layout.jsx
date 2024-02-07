import React, { useContext, useEffect, useState } from 'react';
import { userContext } from './Question';
import { AbsoluteCenter, Box, Center, Text } from '@chakra-ui/react';
import Logo from './Images/coding.png';
// import { Container, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Layout( ) {

    const [showFinalResults, setFinalResults] = useState(false);
    const [count, setCount] = useState(10);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOptions, setCurrentOptions] = useState(0);
    const [showQuestion, RenderQuestion] = useState(false);
    const [score, setScore] = useState(0);
    const contextValue = useContext(userContext);
    const OptionsArray = contextValue[currentOptions].options;
    const CorrectAnswer = contextValue[currentQuestion].options.isCorrect;

    function showQuestions(event) {
       RenderQuestion(true);
       setCount(10)
    //    const  [audio] = useState(new Audio('C:\Users\hp\Documents\CS Quiz App\public\buzz.wav'));
    //    audio.play();
    }

    const optionClicked = (CorrectAnswer) => {
        setCurrentQuestion((prevIndex) => (prevIndex + 1) % contextValue.length); 
        setCurrentOptions((prevIndex) => (prevIndex + 1) % contextValue.length);
        console.log(CorrectAnswer);
        setCount(10);
     //Conditional statements   
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

    useEffect(()=> {
        const Counter = setInterval(() => {
            if(count > 0) {
                setCount(count - 1);
            }
            else if(count == 0) {
                setCurrentQuestion((prevIndex) => (prevIndex + 1) % contextValue.length); 
                setCurrentOptions((prevIndex) => (prevIndex + 1) % contextValue.length)
                setCount(10)
            }
        }, 1000);
        return ()=> clearInterval(Counter);
    }, [count]);
    return (
        <div className='bdy'>
            <Box width={"120px"}>
                <img src={Logo}></img>
            </Box>
            <AbsoluteCenter zIndex={-1} p={10} width={300} opacity={"10%"}>
                <img
                src={Logo}></img>
            </AbsoluteCenter>

        { showQuestion == false ? (
              <div>
                <p id='p'>are you ready?</p>
                <Center
                    textTransform={'capitalize'}
                     >
                    <button className='startbtn' onClick={() => showQuestions()}>start</button>
              </Center>
          </div>
        ) :
        showFinalResults == false ? (
            <div>
                <Box pos={'absolute'} textTransform={'capitalize'} top={50} right={10} fontSize={'4xl'}>
                    {count}
                    </Box>
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
        <div className='record'>
              <p>Score so far : {score}/ 24</p> 
              <p>{(score/24 ) * 100}%</p>

</div>
        )}
        </div>
    );
}

export default Layout;