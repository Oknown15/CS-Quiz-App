import React, { useContext, useEffect, useState } from 'react';
import { userContext } from './Question';
import { AbsoluteCenter, Accordion, AccordionIcon,AccordionButton, AccordionItem, AccordionPanel, Box, Center, Text, Grid, GridItem, Button } from '@chakra-ui/react';
import Logo from './Images/coding.png';
import audio from './buzz.wav';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import { Container, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Layout( ) {

    const [selectedAnswer, setSelectedAnswer] = useState( null);
    const [FirstRound, setFirstRoundResult] = useState(false)
    const [showFinalResults, setFinalResults] = useState(false);
    const [count, setCount] = useState(10);    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOptions, setCurrentOptions] = useState(0);
    const [showQuestion, RenderQuestion] = useState(false);
    const [score, setScore] = useState(0);
    const contextValue = useContext(userContext);
    const OptionsArray = contextValue[currentOptions].options;
    const CorrectAnswer = contextValue[currentQuestion].options.isCorrect;
    const [buttonClicked, setButtonCLicked] = useState(false);
    // const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
    const [navigations, showNavigators] = useState(false);
    const Total = [];

    const navigateQuestions = (index) => {
        if(index >= 0 && index < contextValue.length) {
            setCurrentQuestion(index)
            setCurrentOptions(index)
            setCount(20)
            setCount(20)
        }
    }


    function Navigations(){
        showNavigators(true);
        
    }

    function closeNavigations(){
        showNavigators(false)
    }

    function showQuestions() {
        RenderQuestion(true);
        setCount(20); 
        setCount(20);
    
    }
    function Menu(){
        RenderQuestion(false); 
        setScore(0);
        setCurrentQuestion(0);
        setCurrentOptions(0);
        setFirstRoundResult(true)
    }

    function NextQuestion(){
        setCurrentQuestion((prevIndex) => (prevIndex + 1) % contextValue.length); 
        setCurrentOptions((prevIndex) => (prevIndex + 1) % contextValue.length);
        setSelectedAnswer(null)
        setCount(20)
        setCount(20)
  
    }

    const optionClicked = (CorrectAnswer) => {
    
        console.log(CorrectAnswer);

        setSelectedAnswer(CorrectAnswer);

     
     //Conditional statements   
    if(currentQuestion + 1 < contextValue.length) {
        // setCurrentQuestion(currentQuestion + 1);
        console.log("Pressed");
        
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
                // setCount(10)
                setSelectedAnswer(null)
            }
        }, 1500);
        return () => clearInterval(Counter);
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

        {
        showQuestion == false ? (
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
                <Box textTransform={'capitalize'} pos={'absolute'} bottom={0}>
                    <a onClick={() => Menu()}>menu</a>
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
                    <li
                    style={{
                        backgroundColor:'#434242'
                    }}
                    className='text'
                    onClick={() => optionClicked(option.isCorrect)} key={option.text}>{option.text} </li>
                ))
            }
               </Box>
               
               <Box pos={'absolute'} right={10} top={10}>
                     <p>Question {currentQuestion}/32</p>
               </Box>
               <Button pos={'absolute'} right={5} bottom={0} textTransform={'capitalize'} onClick={() => NextQuestion(event)}>next</Button>
                <Button textTransform={'capitalize'} onClick={() => Navigations()}>navigators</Button>
                <Button m={10} onClick={() => closeNavigations()}>x</Button>
                </div>
                ) : (
                <div className='record'>
                    <p>Score so far : {score}/31 </p> 
                    <p>{(score/31 ) * 100}%</p>
                </div>
                ) 
                }
                {
                navigations == true ? (
                    <div className='text'>
                        {contextValue.map((contextValue, index) => (
                        <button style={{padding: '10px'}} key={index} onClick={() => navigateQuestions(index)}>{index + 1}</button>
                        ))}    
                    </div>
                    ) :(
                <div></div>
            )
        }
        </div>
        
    );
}

export default Layout;
