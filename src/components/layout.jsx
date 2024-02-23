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
    const [isPlaying, setIsplaying] = useState(false);
    const [showFinalResults, setFinalResults] = useState(false);
    const [count, setCount] = useState(10);    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentOptions, setCurrentOptions] = useState(0);
    const [showQuestion, RenderQuestion] = useState(false);
    const [score, setScore] = useState(0);
    const contextValue = useContext(userContext);
    const OptionsArray = contextValue[currentOptions].options;
    const CorrectAnswer = contextValue[currentQuestion].options.isCorrect;
    const [buttonClicked, setButtonCLicked] = useState(false);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
    const [navigations, showNavigators] = useState(false);
    const Total = [];

    const navigateQuestions = (index) => {
        if(index >= 0 && index < contextValue.length) {
            setcurrentQuestionIndex(index);
            setCurrentQuestion(index)
            setCurrentOptions(index)
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
        // showRound(false);
        RenderQuestion(true);
        setCount(20); 
                const audioMp = new Audio(audio)
                 if((!isPlaying) && (count >= 10)){
                  audioMp.play();
                 }  else {
                     audioMp.pause();
                     audioMp.currentTime = 0;
                 };
    
    }


    useEffect(() => {
        const Button = (event) => {            
            setFinalResults(true);
            RenderQuestion(true)

            if(buttonClicked){
                setFinalResults(true);

            }
        };
        const showResults = document.querySelectorAll(".btn-main");

        showResults.forEach((element) =>{
            element.addEventListener('click', Button);
        });

        return()=>{
            showResults.forEach((element) => {
                element.removeEventListener('click', Button);
            });
        };

     }, [buttonClicked]);
  
    

    useEffect(() => {
        const RoundOne = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(0);
            setCurrentOptions(0);
            setCount(20);
            

            if(currentQuestion == 24){
                Total = (score)/25*100
                showFinalResults(true);
                RenderQuestion(false);
                setFirstRoundResult(true);

            }
        };
        const listElementROne = document.querySelectorAll(".Roundone");

        listElementROne.forEach((element) =>{
            element.addEventListener('click', RoundOne);
        });

        return()=>{
            listElementROne.forEach((element) => {
                element.removeEventListener('click', RoundOne);
            });
        };

     }, []);


     useEffect(() => {
        const RoundTwo = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(50);
            setCurrentOptions(50);
            setCount(20);

            if(currentQuestion == 74){
                Total = (score)/25*100
                showFinalResults(true);
                RenderQuestion(false);
                setFirstRoundResult(true);

            }
        };
        const listElementRTwo = document.querySelectorAll(".Roundtwo");

        listElementRTwo.forEach((element) =>{
            element.addEventListener('click', RoundTwo);
        });

        return()=>{
            listElementRTwo.forEach((element) => {
                element.removeEventListener('click', RoundTwo);
            });
        };

     }, []);



     
    useEffect(() => {
        const RoundThree = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(24);
            setCurrentOptions(24);
            setCount(20);

            if(currentQuestion == 50){
                Total = (score)/25*100
                showFinalResults(true);
                RenderQuestion(false);
                setFirstRoundResult(true);

            }
        };
        const listElementRThree = document.querySelectorAll(".Roundthree");

        listElementRThree.forEach((element) =>{
            element.addEventListener('click', RoundThree);
        });

        return()=>{
            listElementRThree.forEach((element) => {
                element.removeEventListener('click', RoundThree);
            });
        };

     }, []);


     useEffect(() => {
        const RoundFour = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(74);
            setCurrentOptions(74);
            setCount(20);

            // if(currentQuestion == 100){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRTwo = document.querySelectorAll(".Roundfour");

        listElementRTwo.forEach((element) =>{
            element.addEventListener('click', RoundFour);
        });

        return()=>{
            listElementRTwo.forEach((element) => {
                element.removeEventListener('click', RoundFour);
            });
        };

     }, []);

     useEffect(() => {
        const RoundFive = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(99);
            setCurrentOptions(99);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRFive = document.querySelectorAll(".Roundfive");

        listElementRFive.forEach((element) =>{
            element.addEventListener('click', RoundFive);
        });

        return()=>{
            listElementRFive.forEach((element) => {
                element.removeEventListener('click', RoundFive);
            });
        };

     }, []);


     
     useEffect(() => {
        const RoundSix = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(109);
            setCurrentOptions(109);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRSix = document.querySelectorAll(".Roundsix");

        listElementRSix.forEach((element) =>{
            element.addEventListener('click', RoundSix);
        });

        return()=>{
            listElementRSix.forEach((element) => {
                element.removeEventListener('click', RoundSix);
            });
        };

     }, []);

     useEffect(() => {
        const YrIIRoundOne = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(130);
            setCurrentOptions(130);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrone = document.querySelectorAll(".YRII_Roundone");

        listElementRYrone.forEach((element) =>{
            element.addEventListener('click', YrIIRoundOne);
        });

        return()=>{
            listElementRYrone.forEach((element) => {
                element.removeEventListener('click', YrIIRoundOne);
            });
        };

     }, []);

     useEffect(() => {
        const YrIIRoundTwo = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(156);
            setCurrentOptions(156);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrtwo = document.querySelectorAll(".YRII_Roundtwo");

        listElementRYrtwo.forEach((element) =>{
            element.addEventListener('click', YrIIRoundTwo);
        });

        return()=>{
            listElementRYrtwo.forEach((element) => {
                element.removeEventListener('click', YrIIRoundTwo);
            });
        };

     }, []);


     useEffect(() => {
        const YrIIRoundThree = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(182);
            setCurrentOptions(182);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrthree = document.querySelectorAll(".YRII_Roundthree");

        listElementRYrthree.forEach((element) =>{
            element.addEventListener('click', YrIIRoundThree);
        });

        return()=>{
            listElementRYrthree.forEach((element) => {
                element.removeEventListener('click', YrIIRoundThree);
            });
        };

     }, []);


     useEffect(() => {
        const YrIIRoundFour = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(208);
            setCurrentOptions(208);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrfour = document.querySelectorAll(".YRII_Roundfour");

        listElementRYrfour.forEach((element) =>{
            element.addEventListener('click', YrIIRoundFour);
        });

        return()=>{
            listElementRYrfour.forEach((element) => {
                element.removeEventListener('click', YrIIRoundFour);
            });
        };

     }, []);


     useEffect(() => {
        const YrIIRoundFIve = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(234);
            setCurrentOptions(234);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrfive = document.querySelectorAll(".YRII_Roundfive");

        listElementRYrfive.forEach((element) =>{
            element.addEventListener('click', YrIIRoundFIve);
        });

        return()=>{
            listElementRYrfive.forEach((element) => {
                element.removeEventListener('click', YrIIRoundFIve);
            });
        };

     }, []);


     useEffect(() => {
        const YrIIRoundFSix = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(265);
            setCurrentOptions(265);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrsix = document.querySelectorAll(".YRII_Roundsix");

        listElementRYrsix.forEach((element) =>{
            element.addEventListener('click', YrIIRoundFSix);
        });

        return()=>{
            listElementRYrsix.forEach((element) => {
                element.removeEventListener('click', YrIIRoundFSix);
            });
        };

     }, []);

     useEffect(() => {
        const YrIIIRoundone = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(284);
            setCurrentOptions(284);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrIIIone= document.querySelectorAll(".YRIII_Roundone");

        listElementRYrIIIone.forEach((element) =>{
            element.addEventListener('click', YrIIIRoundone);
        });

        return()=>{
            listElementRYrIIIone.forEach((element) => {
                element.removeEventListener('click', YrIIIRoundone);
            });
        };

     }, []);

     useEffect(() => {
        const YrIIIRoundtwo = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(308);
            setCurrentOptions(308);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrIIItwo= document.querySelectorAll(".YRIII_Roundtwo");

        listElementRYrIIItwo.forEach((element) =>{
            element.addEventListener('click', YrIIIRoundtwo);
        });

        return()=>{
            listElementRYrIIItwo.forEach((element) => {
                element.removeEventListener('click', YrIIIRoundtwo);
            });
        };

     }, []);


     useEffect(() => {
        const YrIIIRoundthree = (event) => {
            RenderQuestion(true)
            setCurrentQuestion(332);
            setCurrentOptions(332);
            setCount(20);

            // if(currentQuestion == ){
            //     Total = (score)/25*100
            //     showFinalResults(true);
            //     RenderQuestion(false);
            //     setFirstRoundResult(true);

            // }
        };
        const listElementRYrIIIthree= document.querySelectorAll(".YRIII_Roundthree");

        listElementRYrIIIthree.forEach((element) =>{
            element.addEventListener('click', YrIIIRoundthree);
        });

        return()=>{
            listElementRYrIIIthree.forEach((element) => {
                element.removeEventListener('click', YrIIIRoundthree);
            });
        };

     }, []);



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
        
    }

    const optionClicked = (CorrectAnswer) => {
    
        console.log(CorrectAnswer);

        setSelectedAnswer(CorrectAnswer);

        const audioMp = new Audio(audio)
        if((!isPlaying) && (count >= 10)){
         audioMp.play();
        }  else {
            audioMp.pause();
            audioMp.currentTime = 0;
        }  
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
              <div style={{textTransform: 'capitalize', position: 'absolute',top: '100px', right: '0'}}>
                    <Button  className='btn-main' pos={'absolute'} bottom={0} mt={15} right={5}>result</Button>
                </div>
              <div>
                <Center>
            <Grid className='Rounds_main' cursor={'pointer'} textTransform={'capitalize'} templateColumns='repeat(5, 1fr)' gap={6}>
                <ul id='Rounds'>
                {/* Year one */}
                YEAR ONE
                    <GridItem w='200%' h='10' listStyleType={'none'}>
                     Data and information   <li className='Roundone'>round 1</li>
                     computer generation   <li className='Roundtwo'>round 2</li>
                      computer memory  <li className='Roundthree'>round 3</li>
                     communication and technology   <li className='Roundfour'>round 4</li>
                      algorithm and binary representation  <li className='Roundfive'>round 5</li>
                      basic computing   <li className='Roundsix'>round 6</li>
                        </GridItem>
                </ul>
                {/* Year two  */}
                    <GridItem className='Yrtwo' listStyleType={ 'none'} w='200%' h='10'>
                        YEAR TWO
                        <li className='YRII_Roundone'>round 1</li>
                        <li className='YRII_Roundtwo'>round 2</li>
                        <li className='YRII_Roundthree'>round 3</li>
                        <li className='YRII_Roundfour'>round 4</li>
                        <li className='YRII_Roundfive'>round 5</li>
                        <li className='YRII_Roundsix'>round 6</li>
                    </GridItem>
                    {/* Year Three */}
                    <GridItem listStyleType={'none'} w='200%' h='10'>
                        YEAR THREE
                        <li className='YRIII_Roundone'>round 1</li>
                        <li className='YRIII_Roundtwo'>round 2</li>
                        <li className='YRIII_Roundthree'>round 3</li>
                        <li className=''>round 4</li>
                        <li className=''>round 5</li>
                        <li className=''>round 6</li>
                    </GridItem>
                    
                    
            </Grid>
                </Center>

            </div>
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
                        backgroundColor: selectedAnswer === option.isCorrect ? option.isCorrect ? 'blue': '#434242' : '#434242'
                    }}
                    className='text'
                    onClick={() => optionClicked(option.isCorrect)} key={option.text}>{option.text} </li>
                ))
            }
               </Box>
               <Box pos={'absolute'} right={10} top={10}>
                     <p>Question {currentQuestion}/100</p>
               </Box>
            <Button pos={'absolute'} right={5} bottom={0} textTransform={'capitalize'} onClick={() => NextQuestion(event)}>next</Button>
            <Button textTransform={'capitalize'} onClick={() => Navigations()}>navigators</Button>
            <Button m={10} onClick={() => closeNavigations()}>x</Button>
               </div>
               
               ) : (
        <div className='record'>
            <p>Score so far : {score}/ </p> 
            <p>{(score/130 ) * 100}%</p>
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
