import React, { useState ,createContext, useContext } from 'react';
import Layout from './layout';

export const userContext = React.createContext()

function Question() {
   
    const [myArray, setMyArray] = useState([
        //computer science 100level
        {
            Questions: "what is data ?",
            options: [
                { id: 0, text: "processed information", isCorrect : false },
                { id: 1, text: "raw facts and figures", isCorrect : true},
                {id: 2, text: "interpreted insights", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: "The difference between data and information does not include one of the followings",
            options: [
                { id: 0, text: "Data are valueless while information is valuable and useful", isCorrect : false },
                { id: 1, text: "Information is structured and organized data.", isCorrect : false},
                {id: 2, text: "Information are numbers and figures while Data gives meaning to these numbers and figures.", isCorrect : true},
                { id: 3, text: "Data may be unreliable but the information is usually reliable.", isCorrect: false}
            ],
        },
        {
            Questions: "which of the following is an example of qualitative data?",
            options: [
                { id: 0, text: "temperature in degrees celcuis", isCorrect : false },
                { id: 1, text: "height of a building in meters", isCorrect : false},
                {id: 2, text: "customer satisaction rating", isCorrect : true},
                { id: 3, text: "weight of an object in kilograms", isCorrect: false}
            ],
        },
        {
            Questions: " ___________ is the process of removing characteristics from something to reduce it to a set of essential elements.",
            options: [
                { id: 0, text: "data warehouse", isCorrect : false },
                { id: 1, text: "data abstraction", isCorrect : true},
                {id: 2, text: "abstraction", isCorrect : false},
                { id: 3, text: "data seive", isCorrect: false}
            ],
        },
        {
            Questions: "what is the process of organizing and arranging data in a meaningful manner called ?",
            options: [
                { id: 0, text: "data formatting", isCorrect : false },
                { id: 1, text: "data aggregation", isCorrect : true},
                {id: 2, text: "data visualization", isCorrect : false},
                { id: 3, text: "data analysis", isCorrect: false}
            ],
        },
        {
            Questions: "which term refers to data that has been processed, organized, and presented ina meaningful context?",
            options: [
                { id: 0, text: "spreadsheet", isCorrect : false },
                { id: 1, text: "database", isCorrect : false},
                {id: 2, text: "algorithm", isCorrect : false},
                { id: 3, text: "information", isCorrect: true}
            ],
        },
        {
            Questions: "what is the primary purpose of data normalization?",
            options: [
                { id: 0, text: "to make data visually appealing", isCorrect : false },
                { id: 1, text: "to reduce redundancy and improve efficiency", isCorrect : true},
                {id: 2, text: "to encrypt sensitive information", isCorrect : false},
                { id: 3, text: "to perform statistical analysis and improve efficiency", isCorrect: false}
            ],
        },

        {
            Questions: "Data that is given a meaning is termed ……………………………",
            options: [
                { id: 0, text: "information", isCorrect : true },
                { id: 1, text: "a sentence", isCorrect : false},
                {id: 2, text: "gist", isCorrect : false},
                { id: 3, text: "Data", isCorrect: false}
            ],
        },

        {
            Questions: "in which stage of the data processing cycle is data input intoa computer system?",
            options: [
                { id: 0, text: "storage", isCorrect : false},
                { id: 1, text: "processing", isCorrect : false},
                {id: 2, text: "input", isCorrect : true},
                { id: 3, text: "output", isCorrect: false}
            ],
        },

        {
            Questions: " what is the process of converting data into a format suitable for storage or transmission?",
            options: [
                { id: 0, text: "data analysis", isCorrect : false },
                { id: 1, text: "data processing", isCorrect : false},
                {id: 2, text: "data encoding", isCorrect : false},
                { id: 3, text: "data encoding", isCorrect: true}
            ],
        },

        {
            Questions: "which of the following is NOT a characteristics of big data?",
            options: [
                { id: 0, text: "volume", isCorrect : false },
                { id: 1, text: "velocity", isCorrect : false},
                {id: 2, text: "variety ", isCorrect : false},
                { id: 3, text: "validity", isCorrect: true}
            ],
        },

        {
            Questions: "which data storage technology stores data in a distributed and repplicated manner across multiple servers?",
            options: [
                { id: 0, text: "data warehouse", isCorrect : false },
                { id: 1, text: "distribute database", isCorrect : true},
                {id: 2, text: "noSQL database", isCorrect : false},
                { id: 3, text: "relational database", isCorrect: false}
                
            ],
        },

        {
            Questions: "what is the process of identifying and correcting errors in data called?",
            options: [
                { id: 0, text: "data mining", isCorrect : false },
                { id: 1, text: "data validation", isCorrect : false},
                {id: 2, text: "data cleansing", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: "which of the following is an example of structured data?",
            options: [
                { id: 0, text: "social media post ", isCorrect : false },
                { id: 1, text: "email messages", isCorrect : false},
                {id: 2, text: "spreadsheet", isCorrect : true},
                { id: 3, text: "digital photographs", isCorrect: false}
            ],
        },

        {
            Questions: "which of the following is NOT a data visualization technique?",
            options: [
                { id: 0, text: "bar chart", isCorrect : false },
                { id: 1, text: "histogram", isCorrect : false},
                {id: 2, text: "scatter plot", isCorrect : false},
                { id: 3, text: "SQL query", isCorrect: true}
            ],
        },
        {
            Questions: "which data analysis technique is used to uncover hidden patterns,correlations and trends in large datasets ?",
            options: [
                { id: 0, text: "data mining", isCorrect : true },
                { id: 1, text: "data validation", isCorrect : false},
                {id: 2, text: "data normalization", isCorrect : false},
                { id: 3, text: "data encoding", isCorrect: false}
            ],
        },

        {
            Questions: "which term refers to the reliability and trustworthiness of data?",
            options: [
                { id: 0, text: "data integrity", isCorrect : true },
                { id: 1, text: "data security", isCorrect : false},
                {id: 2, text: "data redudancy", isCorrect : false},
                { id: 3, text: "data consistency", isCorrect: false}
            ],
        },

        {
            Questions: "what is difference between  data and information?",
            options: [
                { id: 0, text: "information is static, while data is dynamic", isCorrect : false},
                { id: 1, text: "information is processed data with context", isCorrect : true},
                {id: 2, text: "data is processed, while information is raw", isCorrect : false},
                { id: 3, text: "data is always accurate while information may contain errors", isCorrect: false}
            ],
        },

        {
            Questions: "what is the purpose of data validation in databases ?",
            options: [
                { id: 0, text: "speed up data retrieval", isCorrect : false },
                { id: 1, text: "ensure data consistency", isCorrect : true},
                {id: 2, text: "improve data compression", isCorrect : false},
                { id: 3, text: "ensure data visualization", isCorrect: false}
            ],
        },

        {
            Questions: "what is the purpose of a data dictionary?",
            options: [
                { id: 0, text: "store data records", isCorrect : false },
                { id: 1, text: "define data elements and their relationships", isCorrect : true},
                {id: 2, text: "secure data transmission", isCorrect : false},
                { id: 3, text: "create data backups", isCorrect: false}
            ],
        },

        {
            Questions: "what is the plural of data?",
            options: [
                { id: 0, text: "datum", isCorrect : false},
                { id: 1, text: "daton", isCorrect : false},
                {id: 2, text: "data", isCorrect : true},
                { id: 3, text: "datas", isCorrect: false}
            ],
        },

        {
            Questions: "where is the word 'data' from?",
            options: [
                { id: 0, text: "latin", isCorrect : true },
                { id: 1, text: "spanish", isCorrect : false},
                {id: 2, text: "greek", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        
        {
            Questions: "which of the following is NOT a charcacteristic of meaningful information?",
            options: [
                { id: 0, text: "accuracy", isCorrect : false },
                { id: 1, text: "timeliness", isCorrect : false},
                {id: 2, text: "completeness", isCorrect : false},
                { id: 3, text: "randomness", isCorrect: true}
            ],
        },

        {
            Questions: "in the context of decision-making, what role does information play?",
            options: [
                { id: 0, text: "information is irrelevant for decision making", isCorrect : false},
                { id: 1, text: "information supports informed decision making", isCorrect : true},
                {id: 2, text: "information complicates decision making", isCorrect : false},
                { id: 3, text: "information delays decision making", isCorrect: false}
            ],
        },
//computer memory questions YEARONE
        {
            Questions: "what is the primary function of computer memory ?",
            options: [
                { id: 0, text: "store data temporarily", isCorrect : true },
                { id: 1, text: "execute instructions", isCorrect : false},
                {id: 2, text: "perform calculations", isCorrect : false},
                { id: 3, text: "control input/output operations", isCorrect: false}
            ],
        },
        {
            Questions: "which of the following is a type of volatile memory?",
            options: [
                { id: 0, text: "hard disk", isCorrect : false},
                { id: 1, text: "cache memory", isCorrect : false},
                {id: 2, text: "RAM", isCorrect : true},
                { id: 3, text: "ROM", isCorrect: false}
            ],
        },
        {
            Questions: "what does RAM stand for?",
            options: [
                { id: 0, text: "run-acess memory", isCorrect : false },
                { id: 1, text: "read-write memory", isCorrect : false},
                {id: 2, text: "random access memory", isCorrect : true},
                { id: 3, text: "read-only memory", isCorrect: false}
            ],
        },
        {
            Questions: "which memory type retains data even when the power is turned off?",
            options: [
                { id: 0, text: "RAM", isCorrect : false },
                { id: 1, text: "ROM", isCorrect : true},
                {id: 2, text: "cache memory", isCorrect : false},
                { id: 3, text: "virtual memory", isCorrect: false}
            ],
        },
        {
            Questions: "what does ROM stand for?.",
            options: [
                { id: 0, text: "run-only memory", isCorrect : false },
                { id: 1, text: "random output memory", isCorrect : false},
                {id: 2, text: "read-output memory", isCorrect : false},
                { id: 3, text: "read-only memory", isCorrect: true}
            ],
        },
        {
            Questions: "which memory type is used to store BIOS settings?",
            options: [
                { id: 0, text: "virtual memory", isCorrect : false },
                { id: 1, text: "cache memory", isCorrect : false},
                {id: 2, text: "ROM", isCorrect : true},
                { id: 3, text: "RAM", isCorrect: false}
            ],
        },
        {
            Questions: "In a computer system, the .………………………………………….………. memory is highly volatile.?",
            options: [
                { id: 0, text: "computer memory ", isCorrect : false },
                { id: 1, text: "RAM", isCorrect : true},
                {id: 2, text: "flash drive", isCorrect : false},
                { id: 3, text: "ROM", isCorrect: false}
            ],

        },
        {
            Questions: "which memory type is fastest among these ?",
            options: [
                { id: 0, text: "ROM", isCorrect : false },
                { id: 1, text: "cache memory", isCorrect : true},
                {id: 2, text: "RAM", isCorrect : false},
                { id: 3, text: "hard disk", isCorrect: true}
            ],
        },

        {
            Questions: "which of the following is a characteristics of ROM ?",
            options: [
                { id: 0, text: " volatile", isCorrect : false },
                { id: 1, text: "read-write ", isCorrect : false},
                {id: 2, text: "non-volatile", isCorrect : true},
                { id: 3, text: "slow acess speed ", isCorrect: false}
            ],
        },

        {
            Questions: "the term 'volatile' in computer memory means?" ,
            options: [
                { id: 0, text: "memory that retains data even when power is turned off ", isCorrect : false },
                { id: 1, text: "memory that loses data when power is turned off ", isCorrect : true},
                {id: 2, text: "memory that stores data temporarily ", isCorrect : false},
                { id: 3, text: "Both A and B ", isCorrect: false}
            ],
        },

        {
            Questions: "what is the primary storage of the operating system? ",
            options: [
                { id: 0, text: "cache memory  ", isCorrect : false },
                { id: 1, text: "secondary storage", isCorrect : false},
                {id: 2, text: " RAM  ", isCorrect : true},
                { id: 3, text: " All of the above ", isCorrect: false}
            ],
        },

        {
            Questions: "what is ROM used for ? ",
            options: [
                { id: 0, text: "storing data temporarily ", isCorrect : false },
                { id: 1, text: "storing frequently accessed data ", isCorrect : false},
                {id: 2, text: " storing the BIOS setting ", isCorrect : true},
                { id: 3, text: " All of the above ", isCorrect: false}
            ],
        },

        {
            Questions: "what is the purpose of RAM ? ",
            options: [
                { id: 0, text: " to execute instructions ", isCorrect : false },
                { id: 1, text: "to store data and instructions temporarily ", isCorrect : true},
                {id: 2, text: "to store data permanently ", isCorrect : false},
                { id: 3, text: " Angry IP Scanner ", isCorrect: false}
                
            ],
        },

        {
            Questions: "which memory keeps its data even when the computer is turned off ?",
            options: [
                { id: 0, text: "RAM ", isCorrect : false },
                { id: 1, text: "ROM ", isCorrect : true},
                {id: 2, text: "cache memory ", isCorrect : false},
                { id: 3, text: "hard disk ", isCorrect: false}
            ],
        },
        {
            Questions: "which is not a type or computer memory ?",
            options: [
                { id: 0, text: "RAM ", isCorrect : false },
                { id: 1, text: "SSD", isCorrect : false},
                {id: 2, text: " ROM ", isCorrect : false},
                { id: 3, text: "keyboard", isCorrect: true}
            ],
        },

        {
            Questions: "what does ROM store?",
            options: [
                { id: 0, text: "operating system ", isCorrect : false },
                { id: 1, text: "data temporarily ", isCorrect : false},
                {id: 2, text: "bIOS settings ", isCorrect : true},
                { id: 3, text: " programs", isCorrect: false}
            ],
        },
        {
            Questions: "what memory type increases physical memory ? ",
            options: [
                { id: 0, text: "virtual memory ", isCorrect : false },
                { id: 1, text: "ROM", isCorrect : false},
                {id: 2, text: "virtual memory", isCorrect : true},
                { id: 3, text: "cache memory", isCorrect: false}
            ],
        },

        {
            Questions: "what type of memory is used to store data and instructions currently processed bbyt the CPU? ",
            options: [
                { id: 0, text: "cache memory ", isCorrect : false },
                { id: 1, text: " ROM", isCorrect : false},
                {id: 2, text: "RAM ", isCorrect : true},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },

        {
            Questions: "the following are types of ROM except ?",
            options: [
                { id: 0, text: "i dont know", isCorrect : false},
                { id: 1, text: "PROME", isCorrect : true},
                {id: 2, text: " EPROM", isCorrect : false},
                { id: 3, text: "EEPROM ", isCorrect: false}
            ],
        },

        {
            Questions: "what is the main difference between ROM and RAM ? ",
            options: [
                { id: 0, text: "RAM is volatile, ROM is non-volatile", isCorrect : true },
                { id: 1, text: "RAM is non-volatile,ROM is volatile", isCorrect : false},
                {id: 2, text: "RAM is slow, ROM is fast", isCorrect : false},
                { id: 3, text: "RAM is for storage ROM is for processing ", isCorrect: false}
            ],
        },

        {
            Questions: "computer memory are divided into ____ types ?",
            options: [
                { id: 0, text: "4 ", isCorrect : false },
                { id: 1, text: "3 ", isCorrect : false},
                {id: 2, text: "2", isCorrect : true},
                { id: 3, text: "6", isCorrect: false}
            ],
        },

        {
            Questions: "which is faster between a RAM or a hard drive ?",
            options: [
                { id: 0, text: "none of them", isCorrect : false },
                { id: 1, text: "RAM ", isCorrect : true},
                {id: 2, text: "flash drive ", isCorrect : false},
                { id: 3, text: "hard drive ", isCorrect: false}
            ],
        },

        {
            Questions: "is flash drive a primary memory or secondary memory ?",
            options: [
                { id: 0, text: "can't say", isCorrect : false },
                { id: 1, text: "false ", isCorrect : false},
                { id: 3, text: "true", isCorrect: true}
            ],
        },
        
        {
            Questions: "what memory is faster but smaller in size?",
            options: [
                { id: 0, text: "RAM", isCorrect : false},
                { id: 1, text: "hard drive", isCorrect : false},
                {id: 2, text: "SSD", isCorrect : false},
                { id: 3, text: "cache", isCorrect: true}
            ],
        },

        {
            Questions: "what term refers to the location of data within memory?",
            options: [
                { id: 0, text: "register", isCorrect : false },
                { id: 1, text: "memory address", isCorrect : true},
                {id: 2, text: "byte", isCorrect : false},
                { id: 3, text: "bit", isCorrect: false}
            ],
        },

        {
            Questions: "what type of memory is volatile, meaning it loses its data when power is off?",
            options: [
                { id: 0, text: "solid state drive", isCorrect : false },
                { id: 1, text: "hard disk drive", isCorrect : false},
                {id: 2, text: "RAM", isCorrect : true},
                { id: 3, text: "ROM", isCorrect: false}
            ],
        },
//software engineering 100level
{
    Questions: "  The 4th generation computers used ……………………… as their major hardware component ?",
    options: [
        { id: 0, text: "transitors", isCorrect : false },
        { id: 1, text: "microprocessors", isCorrect : true},
        {id: 2, text: "the analytical engine", isCorrect : false},
        { id: 3, text: "abacus", isCorrect: false}
    ],
},

{
    Questions: "  The LSI, MSI and VLSI are of the …………………………………………… generation?",
    options: [
        { id: 0, text: "5th", isCorrect : false },
        { id: 1, text: "3rd", isCorrect : false},
        {id: 2, text: "4th", isCorrect : true},
        { id: 3, text: "1st", isCorrect: false}
    ],
},
{
    Questions: " Second generation computers are characterized by …………….……… as their major hardware.",
    options: [
        { id: 0, text: "interpreters", isCorrect : false },
        { id: 1, text: "compilers", isCorrect : false},
        {id: 2, text: "palmtops", isCorrect : false},
        { id: 3, text: "transistors", isCorrect: true}
        
    ],
},

        {
            Questions: "	One nibble is equivalent to how many bits?",
            options: [
                { id: 0, text: "8", isCorrect : false },
                { id: 1, text: "3", isCorrect : false},
                {id: 2, text: "1", isCorrect : false},
                { id: 3, text: "4", isCorrect: true}
            ],
        },
        {
            Questions: "which of the following is the first generation of computer ?",
            options: [
                { id: 0, text: "ENIAC", isCorrect : true },
                { id: 1, text: "UNIVAC", isCorrect : false},
                {id: 2, text: "IBM 1401", isCorrect : false},
                { id: 3, text: "IBM 360 ", isCorrect: false}
            ],
        },
        {
            Questions: " 1 yottabyte is ______________?",
            options: [
                { id: 0, text: "1024 TB", isCorrect : false },
                { id: 1, text: "1024 EB", isCorrect : false},
                {id: 2, text: "1024 ZB", isCorrect : true},
                { id: 3, text: "1024 PB", isCorrect: false}
            ],
        },
        {
            Questions: "what technology was used in the second generation of computers ?",
            options: [
                { id: 0, text: "microprocessors", isCorrect : false },
                { id: 1, text: "integrated circuits", isCorrect : false},
                {id: 2, text: "vacuum tubes", isCorrect : false},
                { id: 3, text: "transistors", isCorrect: true}
            ],
        },

        {
            Questions: "	What does SVGA stands for?",
            options: [
                { id: 0, text: "Standard Visual Graphics Array", isCorrect : false },
                { id: 1, text: "Super Visual Graphics Array", isCorrect : false},
                {id: 2, text: "Standard Video Graphics Array", isCorrect : false},
                { id: 3, text: "Super Video Graphics Array", isCorrect: true}
            ],
        },

        {
            Questions: "	PCI stands for _________?",
            options: [
                { id: 0, text: "Peripheral Component Interconnect", isCorrect : true },
                { id: 1, text: "Partial Component Interconnect", isCorrect : false},
                {id: 2, text: "Peripheral Component Interaction", isCorrect : false},
                { id: 3, text: "Partial Component Interaction", isCorrect: false}
            ],
        },

        {
            Questions: " A _________ monitor looks like a television and are normally used with non-portable computer systems? ",
            options: [
                { id: 0, text: "CRT ", isCorrect : true },
                { id: 1, text: "LCD", isCorrect : false},
                {id: 2, text: "LED", isCorrect : false},
                { id: 3, text: "flat panel computers", isCorrect: false}
            ],
        },

        {
            Questions: "which of the following is not a charateristics of 3rd generation computers?",
            options: [
                { id: 0, text: "use of integrated circuits", isCorrect : false },
                { id: 1, text: "use of operating systems", isCorrect : false},
                {id: 2, text: "use of high level programming languages", isCorrect : false},
                { id: 3, text: "use of vacuum tubes", isCorrect: true}
            ],
        },

        {
            Questions: " Which of the following is not a function of the Input Unit?",
            options: [
                { id: 0, text: "It reads instructions and data from the outside world.", isCorrect : false },
                { id: 1, text: "It converts the data into computer acceptable format.", isCorrect : false},
                {id: 2, text: "It makes the data into user understandable format.", isCorrect : true},
                { id: 3, text: "It supplies the data and instructions to the computer for further processing.", isCorrect: false}
                
            ],
        },

        {
            Questions: "the microprocessor was introduced in which generation of computers  ?",
            options: [
                { id: 0, text: "1st gen.", isCorrect : false },
                { id: 1, text: "2nd gen.", isCorrect : false},
                {id: 2, text: "3rd gen.", isCorrect : false},
                { id: 3, text: "4th gen.", isCorrect: true}
            ],
        },
        {
            Questions: "which phase comes first in the software development cycle (SDLC)?",
            options: [
                { id: 0, text: "maintenance", isCorrect : false },
                { id: 1, text: "testing", isCorrect : false},
                {id: 2, text: "design", isCorrect : false},
                { id: 3, text: "requirement gathering", isCorrect: true}
            ],
        },

        {
            Questions: "which of the following is not a feature of the fourth generation of computers ?",
            options: [
                { id: 0, text: "punch cards used for input", isCorrect : true },
                { id: 1, text: "artificial intelligence ", isCorrect : false},
                {id: 2, text: "microprocessor based", isCorrect : false},
                { id: 3, text: "LSI and VLSI technology", isCorrect: false}
            ],
        },
        {
            Questions: " what is software bug?",
            options: [
                { id: 0, text: "a feature requested by users", isCorrect : false },
                { id: 1, text: "a problem in the software that causes it to behave unexpectedly", isCorrect : true},
                {id: 2, text: "a documentation error", isCorrect : false},
                { id: 3, text: "a hardware malfunction", isCorrect: false}
            ],
        },

        {
            Questions: "what technology marked the beginning of the fifth generation of computers ?",
            options: [
                { id: 0, text: "artificial intelligence", isCorrect : true },
                { id: 1, text: "quantum comouting", isCorrect : false},
                {id: 2, text: "neural networks", isCorrect : false},
                { id: 3, text: "super computers", isCorrect: false}
            ],
        },

        {
            Questions: " what does CPU stand for?",
            options: [
                { id: 0, text: "central power unit", isCorrect : false},
                { id: 1, text: "center processing unit", isCorrect : false},
                {id: 2, text: "control processing unit", isCorrect : false},
                { id: 3, text: "central processing unit", isCorrect: true}
            ],
        },

        {
            Questions: " The output unit coverts the data entered by the user into computer understandable form.?",
            options: [
                { id: 0, text: "true", isCorrect : false },
                { id: 1, text: "false", isCorrect : true},
                {id: 2, text: "not true yet not false.", isCorrect : false},
                { id: 3, text: "none of the above.", isCorrect: false}
            ],
        },

        {
            Questions: " Ms Word, Ms Excel, Ms PowerPoint and  CoreDraw are examples of ……………….Software ?",
            options: [
                { id: 0, text: "web application", isCorrect : false },
                { id: 1, text: "application", isCorrect : false},
                {id: 2, text: " application software", isCorrect : true},
                { id: 3, text: "word editors", isCorrect: false}
            ],
        },

        {
            Questions: "which programming language was primarily associated with the third generation of computers ?",
            options: [
                { id: 0, text: "assembly language", isCorrect : false },
                { id: 1, text: "COBOL", isCorrect : true},
                {id: 2, text: "BASIC", isCorrect : false},
                { id: 3, text: "C++", isCorrect: false}
            ],
        },

        {
            Questions: " Which of the following is NOT a characteristic of good software?",
            options: [
                { id: 0, text: "maintainability", isCorrect : false },
                { id: 1, text: "usability", isCorrect : false},
                {id: 2, text: "scalability", isCorrect : false},
                { id: 3, text: "complexity", isCorrect: true}
            ],
        },
        
        {
            Questions: "	The devices that used to give single or multiple colored images and drawings are ___________?",
            options: [
                { id: 0, text: "monitors", isCorrect : false },
                { id: 1, text: "printers", isCorrect : false},
                {id: 2, text: "plotters", isCorrect : true},
                { id: 3, text: "VDUs", isCorrect: false}
            ],
        },

        {
            Questions: " the monitor is a _________ device ?",
            options: [
                { id: 0, text: "input device", isCorrect : false},
                { id: 1, text: "output device", isCorrect : false},
                {id: 2, text: "input and output device", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
//ICT 100l
        {
            Questions: " what does ICT stand for?",
            options: [
                { id: 0, text: "information and computer technology", isCorrect : false },
                { id: 1, text: "internet and communication technology", isCorrect : false},
                {id: 2, text: "information and communication technology", isCorrect : true},
                { id: 3, text: "integrated computer technology", isCorrect: false}
            ],
        },
        {
            Questions: "which of the following is not an input device?",
            options: [
                { id: 0, text: "mouse", isCorrect : false },
                { id: 1, text: "keyboard", isCorrect : false},
                {id: 2, text: "keyboard.", isCorrect : false}, 
                { id: 3, text: "printer", isCorrect: true}
            ],
        },
        {
            Questions: " which component of a computer is also known as the 'brain' of the computer?",
            options: [
                { id: 0, text: "RAM", isCorrect : false },
                { id: 1, text: "hard disk drive", isCorrect : false},
                {id: 2, text: "CPU", isCorrect : true},
                { id: 3, text: "GPU", isCorrect: false}
            ],
        },
        {
            Questions: "what was the size of the first generation of computers  ?",
            options: [
                { id: 0, text: "room-sized", isCorrect : true },
                { id: 1, text: "desktop-size", isCorrect : false},
                {id: 2, text: "handheld", isCorrect : false},
                { id: 3, text: "wearable", isCorrect: false}
            ],
        },
        {
            Questions: "what was the primary characteristics of the third generation ?",
            options: [
                { id: 0, text: "microprocessors", isCorrect : false },
                { id: 1, text: "transistors", isCorrect : true},
                {id: 2, text: "integrated circuits", isCorrect : false},
                { id: 3, text: "vacuum tubes", isCorrect: false}
            ],
        },
        {
            Questions: " what is the function of a modem?",
            options: [
                { id: 0, text: "modulates and demodulates signals for comunications over a network", isCorrect : true },
                { id: 1, text: "displays images on the monitor", isCorrect : false},
                {id: 2, text: "stores data permanently", isCorrect : false},
                { id: 3, text: "processes calculations and logical operations", isCorrect: false}
            ],
        },
        {
            Questions: " which of the following is not a type of network topology?",
            options: [
                { id: 0, text: "bus", isCorrect : false },
                { id: 1, text: "star", isCorrect : false},
                {id: 2, text: "tree", isCorrect : false},
                { id: 3, text: "dial-up", isCorrect: true}
            ],
        },

        {
            Questions: " which of the following is not a web browser?",
            options: [
                { id: 0, text: "chrome", isCorrect : false },
                { id: 1, text: "safari", isCorrect : false},
                {id: 2, text: "java", isCorrect : true},
                { id: 3, text: "firefox", isCorrect: false}
            ],
        },

        {
            Questions: " what is the full form of URL?",
            options: [
                { id: 0, text: "universal resource locator", isCorrect : false},
                { id: 1, text: "uniform resource locator", isCorrect : true},
                {id: 2, text: "unified resource locator", isCorrect : false},
                { id: 3, text: "universal reference locator", isCorrect: false}
            ],
        },

        {
            Questions: "what is LAN stand for?",
            options: [
                { id: 0, text: "local area network ", isCorrect : true},
                { id: 1, text: "long area netwerk", isCorrect : false},
                {id: 2, text: "large area network", isCorrect : false},
                { id: 3, text: "linear access network", isCorrect: false}
            ],
        },

        {
            Questions: " what is the purpose of a spreadsheet program like microsoft excel?",
            options: [
                { id: 0, text: "creating and editing documents", isCorrect : false },
                { id: 1, text: "sending and recieving emails", isCorrect : false},
                {id: 2, text: "analyzing and manipulating dats ", isCorrect : true},
                { id: 3, text: "editing images and photos", isCorrect: false}
            ],
        },

        {
            Questions: " _____ is data that has been organized or presented in a meaningful fashion?",
            options: [
                { id: 0, text: "a process", isCorrect : false },
                { id: 1, text: "software", isCorrect : false},
                {id: 2, text: "storage", isCorrect : false},
                { id: 3, text: "information", isCorrect: true}
                
            ],
        },

        {
            Questions: " computers gather data, which means that they allow users to _________data ?",
            options: [
                { id: 0, text: "present", isCorrect : false },
                { id: 1, text: "input", isCorrect : true},
                {id: 2, text: "output", isCorrect : false},
                { id: 3, text: "store", isCorrect: false}
            ],
        },
        {
            Questions: " computers process data into information by working exclusively with?",
            options: [
                { id: 0, text: "multimedia ", isCorrect : false },
                { id: 1, text: "words", isCorrect : false},
                {id: 2, text: "characters", isCorrect : false},
                { id: 3, text: "numbers", isCorrect: true}
            ],
        },

        {
            Questions: "the term bit is short for?",
            options: [
                { id: 0, text: "binary digit ", isCorrect : true },
                { id: 1, text: "binary language", isCorrect : false},
                {id: 2, text: "megabyte", isCorrect : false},
                { id: 3, text: "binary number", isCorrect: false}
            ],
        },
        {
            Questions: "  __________is any part of the computer that you can physically touch ?",
            options: [
                { id: 0, text: "hardware", isCorrect : true },
                { id: 1, text: "a device ", isCorrect : false},
                {id: 2, text: "a peripheral", isCorrect : false},
                { id: 3, text: "an application", isCorrect: false}
            ],
        },

        {
            Questions: " all of the following are examples of input devices except _____?",
            options: [
                { id: 0, text: "scanner", isCorrect : false },
                { id: 1, text: "mouse", isCorrect : false},
                {id: 2, text: "keyboard", isCorrect : false},
                { id: 3, text: "printer", isCorrect: true}
            ],
        },

        {
            Questions: " word processing, spreadsheet and photo-editing are examples of?",
            options: [
                { id: 0, text: "application software", isCorrect : true},
                { id: 1, text: "system software", isCorrect : false},
                {id: 2, text: "operating system software", isCorrect : false},
                { id: 3, text: "platform software", isCorrect: false}
            ],
        },

        {
            Questions: " _____________ is a set of computer programs used on a computer to help perfom tasks?",
            options: [
                { id: 0, text: "an instruction ", isCorrect : false },
                { id: 1, text: "software", isCorrect : true},
                {id: 2, text: "memory", isCorrect : false},
                { id: 3, text: "a processor", isCorrect: false}
            ],
        },

        {
            Questions: "	a ____________ is approximately 1000 bytes?",
            options: [
                { id: 0, text: "megabyte", isCorrect : false },
                { id: 1, text: "terabyte", isCorrect : false},
                {id: 2, text: "kilobyte", isCorrect : true},
                { id: 3, text: "bit", isCorrect: false}
            ],
        },

        {
            Questions: " the binary language consit of ______ and ____?",
            options: [
                { id: 0, text: "2 and 1", isCorrect : false },
                { id: 1, text: "0 and 1", isCorrect : true},
                {id: 2, text: "0 and 0", isCorrect : false},
                { id: 3, text: "1 and 2", isCorrect: false}
            ],
        },

        {
            Questions: " a computer gathers data, processes it, outputs the data or information, and _______?",
            options: [
                { id: 0, text: "manipulates", isCorrect : false },
                { id: 1, text: "divides", isCorrect : false},
                {id: 2, text: "produces", isCorrect : false},
                { id: 3, text: "stores", isCorrect: true}
            ],
        },
        
        {
            Questions: " the devices you use to enter data into a computer system are known is______?",
            options: [
                { id: 0, text: "input", isCorrect : true },
                { id: 1, text: "display device", isCorrect : false},
                {id: 2, text: "ouput device", isCorrect : false},
                { id: 3, text: "storage device", isCorrect: false}
            ],
        },

        {
            Questions: "you would use ______ software to create spreadsheets, type documents and edit photos?",
            options: [
                { id: 0, text: "ms excel", isCorrect : false},
                { id: 1, text: "application software", isCorrect : true},
                {id: 2, text: "ms access", isCorrect : false},
                { id: 3, text: "documents", isCorrect: false}
            ],
        },

        {
            Questions: "what distinguishes the 4th generation of computers from the previous generation?",
            options: [
                { id: 0, text: "use of magnetic tapes", isCorrect : false },
                { id: 1, text: "introduction of microprocessors", isCorrect : true},
                {id: 2, text: "use of vacuum", isCorrect : false},
                { id: 3, text: "i dont know", isCorrect: false}
            ],
        },

        // round 5 current questions year one
        {
            Questions: " what is the primary function of RAM in a computer?",
            options: [
                { id: 0, text: "long-term storage", isCorrect : false },
                { id: 1, text: "short-term storage", isCorrect : true},
                {id: 2, text: "processing calculations", isCorrect : false},
                { id: 3, text: "external communication", isCorrect: false}
            ],
        },
        {
            Questions: " how is data typically organized in a stack data structure?",
            options: [
                { id: 0, text: "first in first out", isCorrect : false },
                { id: 1, text: "last in last out", isCorrect : false},
                {id: 2, text: "first in last out", isCorrect : false},
                { id: 3, text: "last in first out", isCorrect: true}
            ],
        },
        {
            Questions: " in binary, what does '1010' represent?",
            options: [
                { id: 0, text: "5", isCorrect : false },
                { id: 1, text: "10", isCorrect : true},
                {id: 2, text: "15", isCorrect : false},
                { id: 3, text: "20", isCorrect: false}
            ],
        },
        {
            Questions: "what is the primary function of an algorithm?",
            options: [
                { id: 0, text: "store data", isCorrect : false },
                { id: 1, text: "process data", isCorrect : false},
                {id: 2, text: "solve a problem", isCorrect : true},
                { id: 3, text: "dsplay output", isCorrect: false}
            ],
        },
        {
            Questions: "what is the basic unit of information in computer?",
            options: [
                { id: 0, text: "bit", isCorrect : true },
                { id: 1, text: "byte", isCorrect : false},
                {id: 2, text: "megabyte", isCorrect : false},
                { id: 3, text: "kilobyte", isCorrect: false}
            ],
        },
        {
            Questions: " the _____ was built by charles babbage?",
            options: [
                { id: 0, text: "analytical engine", isCorrect : false },
                { id: 1, text: "abacus", isCorrect : false},
                {id: 2, text: "calculator", isCorrect : false},
                { id: 3, text: "difference engine", isCorrect: true}
            ],
        },
        {
            Questions: " the most common input device is the ______?",
            options: [
                { id: 0, text: "light pen", isCorrect : false },
                { id: 1, text: "keyboard", isCorrect : true},
                {id: 2, text: "monitor", isCorrect : false},
                { id: 3, text: "mouse", isCorrect: false}
            ],
        },

        {
            Questions: " ______ is the process of carrying out commands?",
            options: [
                { id: 0, text: "executing ", isCorrect : true },
                { id: 1, text: "decoding", isCorrect : false},
                {id: 2, text: "storing", isCorrect : false},
                { id: 3, text: "fetching", isCorrect: false}
            ],
        },

        {
            Questions: " what is scanner used for?",
            options: [
                { id: 0, text: "outputing data to the outside world", isCorrect : false },
                { id: 1, text: "for documenting certain informations", isCorrect : false},
                {id: 2, text: "inputing data into the computer system", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: " what does MSI stand for?",
            options: [
                { id: 0, text: "medium scale integrated circuit", isCorrect : true },
                { id: 1, text: "mental stagnant circuit", isCorrect : false},
                {id: 2, text: "methodological standard cycle", isCorrect : false},
                { id: 3, text: "most studied interpreter", isCorrect: false}
            ],
        },
//current questions for year one
        {
            Questions: " what is a light pen?",
            options: [
                { id: 0, text: "input device", isCorrect : false },
                { id: 1, text: "displaying device", isCorrect : false},
                {id: 2, text: "optical input device", isCorrect : true},
                { id: 3, text: "pointing device", isCorrect: false}
            ],
        },
        {
            Questions: " FORTRAN is________?",
            options: [
                { id: 0, text: "formal translation", isCorrect : true },
                { id: 1, text: "formal translator", isCorrect : false},
                {id: 2, text: " future tanslator", isCorrect : false},
                { id: 3, text: "fortitude translation", isCorrect: false}
            ],
        },
        {
            Questions: " ASCII stands for ?",
            options: [
                { id: 0, text: "american standard code for instructions interswitch", isCorrect : false },
                { id: 1, text: "american study coding for intellectuals", isCorrect : false},
                {id: 2, text: "american standard code for intructions interchange", isCorrect : true},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },
        {
            Questions: " ALU and control unit associated with the ______?",
            options: [
                { id: 0, text: "motherboard", isCorrect : false },
                { id: 1, text: "CPU", isCorrect : true},
                {id: 2, text: "system unit", isCorrect : false},
                { id: 3, text: "kernel", isCorrect: false}
            ],
        },
        {
            Questions: " which of the following is NOT a computer language?",
            options: [
                { id: 0, text: "Java", isCorrect : false },
                { id: 1, text: "python", isCorrect : false},
                {id: 2, text: "ms excel", isCorrect : true},
                { id: 3, text: "C++", isCorrect: false}
            ],
        },
        {
            Questions: "who is the father of computer science?",
            options: [
                { id: 0, text: "alan turring", isCorrect : false },
                { id: 1, text: "charles babbage", isCorrect : true},
                {id: 2, text: "philip emeagwali", isCorrect : false},
                { id: 3, text: "victor osimhen", isCorrect: false}
            ],
        },
        {
            Questions: " the term 'computer' is derived from?",
            options: [
                { id: 0, text: "greece", isCorrect : false },
                { id: 1, text: "latin", isCorrect : true},
                {id: 2, text: "spain", isCorrect : false},
                { id: 3, text: "england", isCorrect: false}
            ],
        },

        {
            Questions: " you organize files by storing them in?",
            options: [
                { id: 0, text: "files", isCorrect : false },
                { id: 1, text: "folders", isCorrect : true},
                {id: 2, text: "ms word documents", isCorrect : false},
                { id: 3, text: "computer system", isCorrect: false}
            ],
        },

        {
            Questions: " a CPU contains ______________________? ",
            options: [
                { id: 0, text: "a control unit and an arithmetic logic unit", isCorrect : true },
                { id: 1, text: "system unit", isCorrect : false},
                {id: 2, text: "a subtrate", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: "UNIVAC is ______________________?",
            options: [
                { id: 0, text: "universal automatic controller", isCorrect : false },
                { id: 1, text: "universal autoCAD", isCorrect : false},
                {id: 2, text: "universal automatic computer", isCorrect : true},
                { id: 3, text: "university automated computer", isCorrect: false}
            ],
        },

        {
            Questions: "ALU stands for ________________?",
            options: [
                { id: 0, text: "arithmetic logic unit", isCorrect : true },
                { id: 1, text: "array logic unit", isCorrect : false},
                {id: 2, text: "arithmetic logical unit ", isCorrect : false},
                { id: 3, text: "arithmetic logistics unit", isCorrect: false}
            ],
        },

        {
            Questions: "the computer size was very large in ___________?",
            options: [
                { id: 0, text: "second generation", isCorrect : false },
                { id: 1, text: "first generation", isCorrect : true},
                {id: 2, text: "fourth generaion", isCorrect : false},
                { id: 3, text: "third generation", isCorrect: false}
                
            ],
        },

        {
            Questions: " microprocessors was developed in what generation?",
            options: [
                { id: 0, text: "4th", isCorrect : true },
                { id: 1, text: "3rd", isCorrect : false},
                {id: 2, text: "1st ", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: "who designed the first electronic computer?",
            options: [
                { id: 0, text: "j. presper eckert and john W mauchly ", isCorrect : true },
                { id: 1, text: "alan turring and philip emeagwali", isCorrect : false},
                {id: 2, text: "charles darwin and j. presper", isCorrect : false},
                { id: 3, text: "j.presper and edward robbert", isCorrect: false}
            ],
        },

        {
            Questions: "a computer program that translates one program instruction at a time inot machine language is called _______________?",
            options: [
                { id: 0, text: "interpreter", isCorrect : true },
                { id: 1, text: "compiler", isCorrect : false},
                {id: 2, text: "translator", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: " a computer program that converts an entire program into machine language is called?",
            options: [
                { id: 0, text: "transistors", isCorrect : false },
                { id: 1, text: "compilers", isCorrect : true},
                {id: 2, text: "translators", isCorrect : false},
                { id: 3, text: "interpreters", isCorrect: false}
            ],
        },

        {
            Questions: " RAM stands for ____________________________________?",
            options: [
                { id: 0, text: "random assets memory", isCorrect : false },
                { id: 1, text: "random access memory", isCorrect : true},
                {id: 2, text: "read acess memory", isCorrect : false},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },

        {
            Questions: "data becomes ______________ when it is presented in a format that people can understand and use?",
            options: [
                { id: 0, text: "information", isCorrect : true},
                { id: 1, text: " data files", isCorrect : false},
                {id: 2, text: "cookies", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: "which of the following is first generation of computer ?",
            options: [
                { id: 0, text: "ENIAC", isCorrect : false },
                { id: 1, text: "EDVAC", isCorrect : false},
                {id: 2, text: "analytical engine", isCorrect : false},
                { id: 3, text: "EDSAC", isCorrect: true}
            ],
        },

        {
            Questions: " second generation were developed durng?",
            options: [
                { id: 0, text: "1970-1980", isCorrect : false },
                { id: 1, text: "1955-1965", isCorrect : true},
                {id: 2, text: "2000-2006", isCorrect : false},
                { id: 3, text: "1972-1980", isCorrect: false}
            ],
        },

        {
            Questions: "which device is required for the internet connection?",
            options: [
                { id: 0, text: "sim card", isCorrect : false },
                { id: 1, text: "modem", isCorrect : true},
                {id: 2, text: "satelite", isCorrect : false},
                { id: 3, text: "none of  the above", isCorrect: false}
            ],
        },
//CS questions for Year 2
        {
            Questions: "What is abstraction??",
            options: [
                { id: 0, text: "is the process of making an artefact ", isCorrect : false },
                { id: 1, text: "is the process of making an artefact more understandable through reducing the unnecessary detail and number of variables", isCorrect : true},
                {id: 2, text: " is the process of making an artefact more  the unnecessary detail", isCorrect : false},
            ],
        },
        {
            Questions: "Abstraction can lead to a more straightforward solutions?",
            options: [
                { id: 0, text: "all of the above", isCorrect : false },
                { id: 1, text: "false but also true", isCorrect : false},
                {id: 2, text: "false", isCorrect : false},
                { id: 3, text: "true", isCorrect: true}
            ],
        },
        {
            Questions: "Computational thinking is the thought processes used to formulate a problem and express its solution or solutions in terms a computer can apply effectively?",
            options: [
                { id: 0, text: "true", isCorrect : true },
                { id: 1, text: "false", isCorrect : false},
                {id: 2, text: "rather not say", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: "4. the process of constructing a scheme of ordered steps which may be followed to provide solutions to all constituent problems necessary to solve the original problem?",
            options: [
                { id: 0, text: "pseudocode", isCorrect : false },
                { id: 1, text: " Arithmetic thinking", isCorrect : false},
                {id: 2, text: " Logarithmic Thinking", isCorrect : false},
                { id: 3, text: " Algorithmic Thinking", isCorrect: true}
            ],
        },
        {
            Questions: "cultivating Skills in STEM Education among Students is one of the benefit of Computational thinking?",
            options: [
                { id: 0, text: "true", isCorrect : true },
                { id: 1, text: "false", isCorrect : false},
                {id: 2, text: "can't say", isCorrect : false},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },
        {
            Questions: " One of the benefit of Computational Thinking in Education is…?",
            options: [
                { id: 0, text: "none of the above", isCorrect : false },
                { id: 1, text: " Fostering thinking in Computational thinking", isCorrect : false},
                {id: 2, text: "Cultivating skills and manpower", isCorrect : false},
                { id: 3, text: "Increased Critical and Analytical Thinking ", isCorrect: true}
            ],
        },
        {
            Questions: " The three major stages of Computational thinking model are?",
            options: [
                { id: 0, text: "analyse the solution, Define the problem and Solving the problem", isCorrect : true },
                { id: 1, text: "identify the stages, Define the stages and define the model", isCorrect : false},
                {id: 2, text: "compute the stage, compute the model and add the model", isCorrect : false},
            ],
        },

        {
            Questions: " What is design thinking? ?",
            options: [
                { id: 0, text: "all of the above", isCorrect : false },
                { id: 1, text: "design thinking is creating new solutions using the tools and mind sets of design practitioners", isCorrect : false},
                {id: 2, text: "design thinking is a way of finding human needs.", isCorrect : false},
                { id: 3, text: " design thinking is a way of finding human needs and creating new solutions using the tools and mind sets of design practitioners", isCorrect: true}
            ],
        },

        {
            Questions: "Personal computers are electronic devices that use microchips to process information and may include?",
            options: [
                { id: 0, text: "all of the above", isCorrect : false },
                { id: 1, text: " Laptops, desktops  computers or tablet", isCorrect : true},
                {id: 2, text: " Devices and gadget", isCorrect : false},
                { id: 3, text: "Servers, Cloud, infrastructure", isCorrect: false}
            ],
        },

        {
            Questions: " A DSP system is a device or setup that performs …..?",
            options: [
                { id: 0, text: "none of the above", isCorrect : false },
                { id: 1, text: "DSP operations", isCorrect : true},
                {id: 2, text: "analog operations", isCorrect : false},
                { id: 3, text: "all operations", isCorrect: false}
            ],
        },

        {
            Questions: " Operations of the DSP include all but one ?",
            options: [
                { id: 0, text: "polymerization", isCorrect : false },
                { id: 1, text: " Modulation", isCorrect : false},
                {id: 2, text: " Moderation ", isCorrect : true},
                { id: 3, text: " Equalization", isCorrect: false}
            ],
        },

        {
            Questions: " DSP systems are used in an array of applications, such as the following:?",
            options: [
                { id: 1, text: "Audio, speech, light", isCorrect : false},
                {id: 2, text: "Seismology,  devices, Radio", isCorrect : false},
                { id: 3, text: " Audio and speech processing, Radar and sonar, Telecommunication", isCorrect: true}
                
            ],
        },

        {
            Questions: " The Categories DSP are?",
            options: [
                { id: 0, text: " Analog and Digital", isCorrect : true },
                { id: 1, text: " Signal and Processing", isCorrect : false},
                {id: 2, text: " Domain and Time", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: " Advantages of DSP  include?",
            options: [
                { id: 0, text: " increased redundancy", isCorrect : false },
                { id: 1, text: " Poor Reproductibility", isCorrect : false},
                {id: 2, text: " low Performance", isCorrect : false},
                { id: 3, text: "Guaranteed Accuracy", isCorrect: true}
            ],
        },

        {
            Questions: " What is a network protocols?",
            options: [
                { id: 0, text: "Are protocols enable the exchange of internet across the internet", isCorrect : false },
                { id: 1, text: "Are protocols enable the exchange of Data across the internet", isCorrect : false},
                {id: 2, text: "Are protocols that enable the exchange of information across the internet", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: "the following are the rules of set theory except ?",
            options: [
                { id: 0, text: "de morgan's law", isCorrect : false },
                { id: 1, text: "distributive law", isCorrect : false},
                {id: 2, text: "associatve  law", isCorrect : false},
                { id: 3, text: "contradictory law", isCorrect: true}
            ],
        },

        {
            Questions: " Applications, files, and documents in Windows Operating System Desktop are represented by  _____________?",
            options: [
                { id: 0, text: "graphs", isCorrect : false },
                { id: 1, text: "icons", isCorrect : true},
                {id: 2, text: "labels", isCorrect : false},
                { id: 3, text: "symvols", isCorrect: false}
            ],
        },

        {
            Questions: " No women teacher can play. Some women teachers are athletes.          Conclusions: Male athletes can play / Some athletes can play?",
            options: [
                { id: 0, text: "Only conclusion I follows", isCorrect : false},
                { id: 1, text: "Only conclusion II follows", isCorrect : false},
                {id: 2, text: "Neither I nor II follows", isCorrect : false},
                { id: 3, text: "Either I or II follows", isCorrect: true}
            ],
        },

        {
            Questions: " what is the difference between a database and a spreadsheet?",
            options: [
                { id: 0, text: "a database is more complex and structured, while a spreadsheet is simpler and less organized.", isCorrect : false },
                { id: 1, text: "there is no difference, they are the same thing.", isCorrect : false},
                {id: 2, text: "a spreadsheet is more complex and structured, while a database is simpler and less organized", isCorrect : false},
                { id: 3, text: "a database is designed for efficient storage and retrieval of large amounts of data, while a spreadsheet is better suited for smaller datasets and basic calculations.", isCorrect: true}
            ],
        },

        {
            Questions: " What is the decimal equivalent of the binary number 110101? ?",
            options: [
                { id: 0, text: "53", isCorrect : false },
                { id: 1, text: "47", isCorrect : true},
                {id: 2, text: "22", isCorrect : false},
                { id: 3, text: "32", isCorrect: false}
            ],
        },

        {
            Questions: " What is the binary representation of the decimal number 14? ?",
            options: [
                { id: 0, text: "1111", isCorrect : false },
                { id: 1, text: "1110", isCorrect : true},
                {id: 2, text: "1101", isCorrect : false},
                { id: 3, text: "10101", isCorrect: false}
            ],
        },

        {
            Questions: " How can you convert a binary number to its hexadecimal equivalent? ?",
            options: [
                { id: 0, text: "all of the above", isCorrect : true },
                { id: 1, text: "use a conversion table that maps binary digits to hexadecimal digits", isCorrect : false},
                {id: 2, text: "convert each group of 8 bits to its decimal equivalent.", isCorrect : false},
                { id: 3, text: "Divide the binary number into groups of 8 bits.", isCorrect: false}
            ],
        },
        
        {
            Questions: " Imagine you have a 4-bit register. What is the maximum decimal value it can store??",
            options: [
                { id: 0, text: "15", isCorrect : true },
                { id: 1, text: "31", isCorrect : false},
                {id: 2, text: "8", isCorrect : false},
                { id: 3, text: "4", isCorrect: false}
            ],
        },

        {
            Questions: " What is the difference between a stack and a queue data structure??",
            options: [
                { id: 0, text: "its the same thing", isCorrect : false},
                { id: 1, text: "Both use FIFO and only differ in implementatio", isCorrect : false},
                {id: 2, text: " Stack uses LIFO and queue uses FIFO (First In, First Out).", isCorrect : true},
                { id: 3, text: "Both store elements in a LIFO (Last In, First Out) order.", isCorrect: false}
            ],
        },
        {
            Questions: " What is the difference between signed and unsigned binary numbers?",
            options: [
                { id: 0, text: "Signed numbers use more bits than unsigned numbers. ", isCorrect : false },
                { id: 1, text: "Unsigned numbers can represent negative values.", isCorrect : false},
                {id: 2, text: "There is no difference", isCorrect : false},
                { id: 3, text: "signed numbers use a leading bit to indicate sign.", isCorrect: true}
            ],
        },
        {
            Questions: "What is the role of binary representation in modern computers??",
            options: [
                { id: 0, text: "all of the above", isCorrect : false},
                { id: 1, text: " It is replaced by other number systems for complex tasks. ", isCorrect : false},
                {id: 2, text: "It is only used for basic operations like logic gates. ", isCorrect : false},
                { id: 3, text: "It is used to store all information in memory and perform calculations.", isCorrect: true}
            ],
        },
//YrII software 
        {
            Questions: " What is the primary aim of a feasibility study in software engineering?",
            options: [
                { id: 0, text: "recruiting team members for the project", isCorrect : false },
                { id: 1, text: "Setting the budget for the project", isCorrect : false},
                {id: 2, text: "determining if the proposed system is possible and practical", isCorrect : true},
                { id: 3, text: "designing the user interface", isCorrect: false}
            ],
        },
        {
            Questions: " What does UML stand for in software engineering??",
            options: [
                { id: 0, text: "Unified Markup Language", isCorrect : false },
                { id: 1, text: "Universal Modeling Language", isCorrect : false},
                {id: 2, text: "Unified Modeling Language", isCorrect : true},
                { id: 3, text: "Unique Markup Language", isCorrect: false}
            ],
        },
        {
            Questions: "what is the main purpose of software testing??",
            options: [
                { id: 0, text: "To improve the features of the software", isCorrect : false },
                { id: 1, text: "To find and correct errors in the software", isCorrect : true},
                {id: 2, text: "To enhance the user interface", isCorrect : false},
                { id: 3, text: "To boost the performance of developers", isCorrect: false}
            ],

        },
        {
            Questions: " Which phase of SDLC involves determining system requirements??",
            options: [
                { id: 0, text: "Implementation", isCorrect : false },
                { id: 1, text: "Design", isCorrect : false},
                {id: 2, text: "Analysis", isCorrect : true},
                { id: 3, text: "Planning", isCorrect: false}
            ],


        },
        {
            Questions: " In the context of software metrics, what does LOC stand for??",
            options: [
                { id: 0, text: "Logic Of Code", isCorrect : false },
                { id: 1, text: "Line Of Code", isCorrect : true},
                {id: 2, text: "Length Of Code", isCorrect : false},
                { id: 3, text: "line Of Characters", isCorrect: false}
            ],
        },

        {
            Questions: "What is the main goal of software architecture??",
            options: [
                { id: 0, text: "Code optimization", isCorrect : false },
                { id: 1, text: "Error detection", isCorrect : false},
                {id: 2, text: "High-level structuring of the software system", isCorrect : true},
                { id: 3, text: "cost estimation", isCorrect: false}
            ],
        },
        {
            Questions: " In which testing phase do different software modules interact with each other??",
            options: [
                { id: 0, text: "System testing", isCorrect : false },
                { id: 1, text: "Acceptance testing", isCorrect : false},
                {id: 2, text: "Integration testing", isCorrect : true},
                { id: 3, text: "Unit testing", isCorrect: false}
            ],

        },

        {
            Questions: " What is the primary focus of software maintenance??",
            options: [
                { id: 0, text: "Adding new features", isCorrect : false },
                { id: 1, text: "All of the above", isCorrect : true},
                {id: 2, text: " Enhancing the existing features", isCorrect : false},
                { id: 3, text: "Debugging", isCorrect: false}
            ],
        },
        {
            Questions: " Which phase comes first in SDLC?? ",
            options: [
                { id: 0, text: "Planning", isCorrect : true },
                { id: 1, text: "Implementation", isCorrect : false},
                {id: 2, text: "Design", isCorrect : false},
                { id: 3, text: "Testing", isCorrect: false}
            ],
        },
        {
            Questions: " What does SDLC stand for in software engineering??",
            options: [
                { id: 0, text: " Software Delivery Life Cycle", isCorrect : false },
                { id: 1, text: "System Design Life Cycle", isCorrect : false},
                {id: 2, text: " Software Development Life Cycle", isCorrect : true},
                { id: 3, text: "Software Debugging Life Cycle", isCorrect: false}
            ],
        },

        {
            Questions: " Which of the following best describes software engineering??",
            options: [
                { id: 0, text: "Fixing bugs in a software application", isCorrect : false },
                { id: 1, text: " The study of computer hardware components", isCorrect : false},
                {id: 2, text: "The application of a systematic approach to software design", isCorrect : true},
                { id: 3, text: "Writing code in multiple programming languages", isCorrect: false}
            ],
        },
        {
            Questions: "What is the SOLID principle of software design that stands for 'Single Responsibility'?",
            options: [
                { id: 0, text: "Objects should only have one state and operations that modify that state.", isCorrect : false },
                { id: 1, text: " Classes should depend on abstractions, not concretions", isCorrect : false},
                {id: 2, text: "All code should be open for modification but closed for extension.", isCorrect : false},
                { id: 3, text: "Each class should be responsible for a single task", isCorrect: true}
                
            ],
        },

        {
            Questions: " What does the DRY principle in software development stand for?",
            options: [
                { id: 0, text: "Don't Repeat Yourself", isCorrect : true },
                { id: 1, text: "Design Regularly, Yet Efficiently", isCorrect : false},
                {id: 2, text: " Develop with Reliable Yield.", isCorrect : false},
                { id: 3, text: " Debug Rapidly Yet Thoroughly.", isCorrect: false}
            ],
        },

       {
            Questions: " What is the difference between a compiler and an interpreter?",
            options: [
                { id: 0, text: "compilers are for compiled languages, and interpreters for scripting languages.", isCorrect : false },
                { id: 1, text: "They are the same thing, different terms for the same process.", isCorrect : false},
                {id: 2, text: "Interpreters translate code line by line, while compilers translate whole programs at once.", isCorrect : true},
                { id: 3, text: "Compilers interpret code line by line, while interpreters translate whole programs at once.", isCorrect: false}
            ],
        },
        {
            Questions: " What is the difference between a variable and a constant in programming??",
            options: [
                { id: 0, text: "Variables can change their value, while constants remain fixed.", isCorrect : true },
                { id: 1, text: "Variables are for storing data, while constants are for performing calculations.", isCorrect : false},
                {id: 2, text: "There is no difference.", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
        {
            Questions: "  what is the difference between a linked list and an array??",
            options: [
                { id: 0, text: "Both store data in contiguous memory locations.", isCorrect : false },
                { id: 1, text: "Linked lists store data sequentially, while arrays offer random access.", isCorrect : false},
                {id: 2, text: "Arrays are better for large datasets, while linked lists are faster for insertions and deletions.", isCorrect : true},
                { id: 3, text: "Linked lists are used in front-end, while arrays are used in back-end development.", isCorrect: false}
            ],
        },
        {
            Questions: " explain the concept of SOLID principles in software design?",
            options: [
                { id: 0, text: "A set of five principles promoting maintainable, flexible, and reusable code.", isCorrect : true },
                { id: 1, text: "Design patterns for specific functionalities.", isCorrect : false},
                {id: 2, text: "Testing methodologies.", isCorrect : false},
                { id: 3, text: "Security best practices.", isCorrect: false}
            ],
        },
        {
            Questions: " What are the features of Software Code?",
            options: [
                { id: 0, text: "All of the above", isCorrect : false},
                { id: 1, text: "Modularity", isCorrect : true},
                {id: 2, text: "Accessibility", isCorrect : false},
                { id: 3, text: "Simplicity", isCorrect: false}
            ],
        },
        {
            Questions: "___________ is a software development activity that is not a part of software?",
            options: [
                { id: 0, text: "Validation", isCorrect : false },
                { id: 1, text: "Specification", isCorrect : false},
                {id: 2, text: "Development", isCorrect : false},
                { id: 3, text: "Dependence", isCorrect: true}
            ],
        },
        {
            Questions: "CASE stands for?",
            options: [
                { id: 0, text: "Computer-Aided Software Engineering", isCorrect : true },
                { id: 1, text: "control Aided Science and Engineering", isCorrect : false},
                {id: 2, text: "Cost Aided System Experiments", isCorrect : false},
                { id: 3, text: " None of the mentioned", isCorrect: false}
            ],
        },
        {
            Questions: "attributes of good software is ____________?",
            options: [
                { id: 0, text: "Development", isCorrect : false },
                { id: 1, text: "Maintainability & functionality", isCorrect : true},
                {id: 2, text: "Functionality", isCorrect : false},
                { id: 3, text: "Maintainability", isCorrect: false}
            ],
        },

        {
            Questions: " what is the use of a compiler in programming?",
            options: [
                { id: 0, text: "used to convert numbers to text", isCorrect : false },
                { id: 1, text: "converts user written code to what a computer can understand", isCorrect : true},
                {id: 2, text: "none of the above", isCorrect : false},
                { id: 3, text: "error checking", isCorrect: false}
            ],
        },

        
        {
            Questions: "Software is defined as ___________?",
            options: [
                { id: 0, text: "set of programs, documentation & configuration of data", isCorrect : true },
                { id: 1, text: "set of programs", isCorrect : false},
                {id: 2, text: " documentation and configuration of data", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: " What is Software Engineering??",
            options: [
                { id: 0, text: "Designing a software", isCorrect : false},
                { id: 1, text: "Testing a software", isCorrect : false},
                {id: 2, text: "application of engineering principles to the design a software", isCorrect : true},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },
        {
            Questions: " What is system software??",
            options: [
                { id: 0, text: "computer program", isCorrect : true },
                { id: 1, text: "testing", isCorrect : false},
                {id: 2, text: "AI", isCorrect : false},
                { id: 3, text: "IoT", isCorrect: false}
            ],
        },
        {
            Questions: "In which step of SDLC actual programming of software code is done?",
            options: [
                { id: 0, text: "Maintenance and Evaluation", isCorrect : false},
                { id: 1, text: "Design", isCorrect : false},
                {id: 2, text: "Analysis", isCorrect : false},
                { id: 3, text: "Development and Documentation", isCorrect: true}
            ],
        },
//YRII cyb questions

{
    Questions: " What ethical principle involves recognizing and respecting the rights of individuals to make informed decisions?",
    options: [
        { id: 0, text: "Autonomy", isCorrect : true },
        { id: 1, text: "Trustworthiness", isCorrect : false},
        {id: 2, text: "fairness", isCorrect : false},
        { id: 3, text: "accountability", isCorrect: false}
    ],
},
{
    Questions: " In the context of cybersecurity ethics, what is the responsibility of professionals regarding the use of open-source tools and software?",
    options: [
        { id: 0, text: "Promoting the unauthorized use of open-source tools", isCorrect : false },
        { id: 1, text: "Ignoring the use of open-source tools in favor of proprietary solutions", isCorrect : false},
        {id: 2, text: "Respecting the licensing terms and attributions of open-source tools", isCorrect : true},
        { id: 3, text: "Concealing the use of open-source tools", isCorrect: false}
    ],
},

{
    Questions: " What ethical principle involves being transparent and open in communication?",
    options: [
        { id: 0, text: "Fairness", isCorrect : false },
        { id: 1, text: "Trustworthiness", isCorrect : false},
        {id: 2, text: "Honesty", isCorrect : true},
        { id: 3, text: "Accountability", isCorrect: false}
    ],

},
{
    Questions: " Which of these describes an ongoing pursuit by an individual/group?",
    options: [
        { id: 0, text: "Stalking", isCorrect : true },
        { id: 1, text: "Identity theft", isCorrect : false},
        {id: 2, text: "Phishing", isCorrect : false},
        { id: 3, text: " bulling", isCorrect: false}
    ],
},
{
    Questions: " Which one of the following is considered in the category of computer threats?",
    options: [
        { id: 0, text: "Soliciting", isCorrect : false },
        { id: 1, text: "DoS attack", isCorrect : true},
        {id: 2, text: "Phishing", isCorrect : false},
        { id: 3, text: "Both A and B", isCorrect: false}
    ],
},
{
    Questions: " Which of the following typically keeps tabs on every online activity the victim engages in, compiles all the data in the background, and sends it to a third party?",
    options: [
        { id: 0, text: "Adware", isCorrect : false },
        { id: 1, text: " Spyware", isCorrect : true},
        {id: 2, text: "Malware", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: false}
    ],
},
{
    Questions: " Which one is considered to be a type of antivirus program?",
    options: [
        { id: 0, text: "all of the above", isCorrect : true },
        { id: 1, text: "Quick heal", isCorrect : false},
        {id: 2, text: "Mcafee", isCorrect : false},
        { id: 3, text: "Kaspersky", isCorrect: false}
    ],   
},

{
    Questions: " Which of these scanners for ports and IP addresses is most used by users?",
    options: [
        { id: 0, text: "Cain and Abel", isCorrect : false },
        { id: 1, text: "Angry IP Scanner", isCorrect : true},
        {id: 2, text: " Ettercap", isCorrect : false},
        { id: 3, text: "Snort", isCorrect: false}
    ],
},

{
    Questions: " Which of the following phrases describes taking someone else's creation or idea and using it for one's own advantage?",
    options: [
        { id: 0, text: "all of the above", isCorrect : true },
        { id: 1, text: "Plagiarism", isCorrect : false},
        {id: 2, text: "Piracy", isCorrect : false},
        { id: 3, text: "    Intellectual property rights", isCorrect: false}
    ],
},
{
    Questions: "Determine the earliest method of free phone calls used by hackers. ",
    options: [
        { id: 0, text: " Cracking", isCorrect : false },
        { id: 1, text: "Spamming", isCorrect : false},
        {id: 2, text: " Phreaking", isCorrect : true},
        { id: 3, text: "Phishing", isCorrect: false}
    ],
},
{
    Questions: "Which of the following statements best describes how the principle would be broken if a computer was no longer accessible?",
    options: [
        { id: 0, text: "all of the above", isCorrect : false },
        { id: 1, text: "Availability", isCorrect : true},
        {id: 2, text: " Access control", isCorrect : false},
        { id: 3, text: "Confidentiality", isCorrect: false}
    ],
},
{
    Questions: "Which of these methods is used to check the validity of a message?",
    options: [
        { id: 0, text: "Decryption algorithm", isCorrect : false },
        { id: 1, text: "Digital signature", isCorrect : false},
        {id: 2, text: "Protocol", isCorrect : false},
        { id: 3, text: " Message Digest", isCorrect: true}
        
    ],
},
{
    Questions: " Which of the following is typically used when hacking Wi-Fi?",
    options: [
        { id: 0, text: "Wireshark", isCorrect : false },
        { id: 1, text: "Aircrack-ng", isCorrect : true},
        {id: 2, text: "Norton ", isCorrect : false},
        { id: 3, text: "all of the above ", isCorrect: false}
    ],
},


{
    Questions: " The DNS would convert any domain name into:",
    options: [
        { id: 0, text: "Binary", isCorrect : false },
        { id: 1, text: "IP", isCorrect : false},
        {id: 2, text: "Hex", isCorrect : false},
        { id: 3, text: "URL", isCorrect: true}
    ],
},
{
    Questions: " The most important step in system hacking is:?",
    options: [
        { id: 0, text: "Covering tracks", isCorrect : false },
        { id: 1, text: "Information gathering", isCorrect : false},
        {id: 2, text: "Cracking passwords", isCorrect : true},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},
{
    Questions: " Which of the following is an anti-virus program",
    options: [
        { id: 0, text: "Quick heal", isCorrect : false },
        { id: 1, text: "K7", isCorrect : false},
        {id: 2, text: "all of the above", isCorrect : true},
        { id: 3, text: "Norton", isCorrect: false}
    ],
},
{
    Questions: " All of the following are examples of real security and privacy threats except:",
    options: [
        { id: 0, text: "Hackers", isCorrect : false },
        { id: 1, text: "Virus", isCorrect : false},
        {id: 2, text: "Spam", isCorrect : true},
        { id: 3, text: "Worm", isCorrect: false}
    ],
},
{
    Questions: " Trojan horses are very similar to virus in the matter that they are computer programs that replicate copies of themselves?",
    options: [
        {id: 2, text: "false", isCorrect : true},
        { id: 3, text: "true", isCorrect: false}
    ],
},
{
    Questions: "Viruses are __________.",
    options: [
        { id: 0, text: "none of the above", isCorrect : false },
        { id: 1, text: "machine made", isCorrect : true},
        {id: 2, text: "naturaly occur", isCorrect : false},
        { id: 3, text: "man-made", isCorrect: false}
    ],
},
{
    Questions: "Firewall is a type of ____________.?",
    options: [
        { id: 0, text: "worms", isCorrect : false },
        { id: 1, text: "security threat", isCorrect : false},
        {id: 2, text: "virus", isCorrect : false},
        { id: 3, text: " None of the mentioned", isCorrect: true}
    ],
},
{
    Questions: "Transit time and response time measure the _______ of a network?",
    options: [
        { id: 0, text: "Longevity", isCorrect : false },
        { id: 1, text: "Security", isCorrect : false},
        {id: 2, text: "Reliability", isCorrect : false},
        { id: 3, text: "Performance", isCorrect: true}
    ],
},

{
    Questions: " Network failure is primarily a _______ issue.?",
    options: [
        { id: 0, text: "Performance", isCorrect : false },
        { id: 1, text: "none of the above", isCorrect : false},
        {id: 2, text: "Security", isCorrect : false},
        { id: 3, text: "Reliability", isCorrect: true}
    ],
},
{
    Questions: "a _______ is illicitly introduced code that damages a network device",
    options: [
        { id: 0, text: "Medium", isCorrect : false },
        { id: 1, text: "Catastrophe", isCorrect : false},
        {id: 2, text: "Protocol ", isCorrect : false},
        { id: 3, text: "Virus", isCorrect: true}
    ],
},
{
    Questions: "Which of the following describes the different forms of scanning? ",
    options: [
        { id: 0, text: " Port, network, and services", isCorrect : false},
        { id: 1, text: "Network, vulnerability, and port scanning", isCorrect : true},
        {id: 2, text: "Client, Server, and network", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: false}
    ],
},
{
    Questions: "A program designed to destroy data on your computer which can travel to “infect” other computers is called a _______",
    options: [
        { id: 0, text: "virus", isCorrect : true },
        { id: 1, text: "hurricane", isCorrect : false},
        {id: 2, text: "torpedo", isCorrect : false},
        { id: 3, text: "disease", isCorrect: false}
    ],
},
{
    Questions: "Trojan-Horse programs?",
    options: [
        { id: 0, text: "are legitimate programs that allow unauthorized access", isCorrect : false},
        { id: 1, text: "are hacker programs that do not show up on the system", isCorrect : true},
        {id: 2, text: " really do not usually work", isCorrect : false},
        { id: 3, text: "are usually immediately discovered", isCorrect: false}
    ],
},
//YRII ICT
{
    Questions: "What is Ethics in ICT?",
    options: [
        { id: 0, text: "Ethics are defined as moral principles of a person", isCorrect : false },
        { id: 1, text: "Ethics are defined as moral principles that govern a person's behavior or conduct of a certain activity", isCorrect : true},
        {id: 2, text: "Ethics are defined as moral principles of a government", isCorrect : false},
    ],
},
{
    Questions: " What is Cyberspace is an interconnected digital environment?",
    options: [
        { id: 1, text: "cyberspace is an interconnected digital environment", isCorrect : true},
        {id: 2, text: "cyberspace is an interconnected human environment", isCorrect : false},
        { id: 3, text: "Cyberspace is a digital environment", isCorrect: false}
    ],
},

{
    Questions: " Which of the following is a Benefit Of Ethics and ICT?",
    options: [
        { id: 1, text: "cyberspace Enhances ", isCorrect : false},
        {id: 2, text: "enhances safety of data", isCorrect : true},
        { id: 3, text: "Enhances data", isCorrect: false}
    ],
    
},
{
    Questions: " The Fourth Industrial Revolution has the power to change the world?",
    options: [
        { id: 0, text: "none of the above", isCorrect : false },
        { id: 1, text: "rather not say", isCorrect : false},
        {id: 2, text: "false", isCorrect : false},
        { id: 3, text: " true", isCorrect: true}
    ],
},
{
    Questions: " Cyberspace users are sometimes referred to as _________?",
    options: [
        { id: 0, text: "cybernauts", isCorrect : true },
        {id: 2, text: "Bernuats", isCorrect : false},
        { id: 3, text: "Cyber guru", isCorrect: false}
    ],
},

{
    Questions: " . Process concerns the activities of ICT professionals while Product is considered in the?",
    options: [
        { id: 0, text: "development", isCorrect : true },
        { id: 1, text: " processing", isCorrect : false},
        {id: 2, text: "storing data", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: false}
    ],
},
{
    Questions: " Cyber peace is often define as ........?",
    options: [
        { id: 0, text: "Development of stability of the internet and connected service", isCorrect : false },
        { id: 1, text: "The stability of the internet and connected service", isCorrect : false},
        {id: 2, text: " A practice that maintain the stability of the internet and connected service", isCorrect : true},
        { id: 3, text: "none of the above", isCorrect: false}
    ],   
},

{
    Questions: " cyber peace mean making stability of information technology and or as cyber defense action.?",
    options: [
        { id: 0, text: "true", isCorrect : true },
        { id: 1, text: "rather not say", isCorrect : false},
        {id: 2, text: "can't say ", isCorrect : false},
        { id: 3, text: "false", isCorrect: false}
    ],
},

{
    Questions: " which of the following is among the Pillars of Cyber Peace?",
    options: [
        { id: 1, text: "Spreading internet access with cyber security best practice", isCorrect : true},
        {id: 2, text: "Respecting human to faking", isCorrect : false},
        { id: 3, text: "Promoting instability among government ", isCorrect: false}
    ],
},
{
    Questions: "Respecting human rights and freedoms is among,..... ? ",
    options: [
        { id: 0, text: "distributing breakfast ", isCorrect : false },
        { id: 1, text: "Spreading internet", isCorrect : false},
        {id: 2, text: " Promoting government", isCorrect : false},
        { id: 3, text: " the pillars of cyber peace", isCorrect: true}
    ],
},


{
    Questions: " things to consider in a Frameworks and Legal Conventions include all but.....?",
    options: [
        { id: 0, text: "all of the above", isCorrect : false },
        { id: 1, text: "Accountancy", isCorrect : true},
        {id: 2, text: " Trust in machines", isCorrect : false},
        { id: 3, text: "Ethical Theory", isCorrect: false}
    ],
    
},
{
    Questions: " One of the following in among ICT ETHICAL ISSUES ?",
    options: [
        { id: 0, text: "firmware", isCorrect : false },
        { id: 1, text: "computer systems", isCorrect : false},
        {id: 2, text: "employments", isCorrect : false},
        { id: 3, text: " digital divide", isCorrect: true}
        
    ],
},
{
    Questions: " Digital Divide, Cyber crime, Unemployment are also seen as?",
    options: [
        { id: 0, text: "ICT System", isCorrect : false },
        { id: 1, text: "ICT Standard", isCorrect : false},
        {id: 2, text: "ICT Ethical issues ", isCorrect : true},
        { id: 3, text: "all of the above ", isCorrect: false}
    ],
},
{
    Questions: " This is the term used in referring to the action of an individual who has enough knowledge to gain access to computer systems to identify security flaws without authorization. ?",
    options: [
        { id: 0, text: "Hackers", isCorrect : true },
        { id: 1, text: "Fraud star", isCorrect : false},
        {id: 2, text: "Benin Boys", isCorrect : false},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},
{
    Questions: " An Intelligence services play an individual in an important role in protecting national security is called a?",
    options: [
        { id: 0, text: "secret service", isCorrect : true },
        { id: 1, text: "state Security Service", isCorrect : false},
        {id: 2, text: "FBI", isCorrect : false},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},

{
    Questions: " ICT resources means generally all ?",
    options: [
        { id: 0, text: "palmtops, special purpose computers e.t.c", isCorrect : false },
        { id: 1, text: "hardware, Networks, as well as software", isCorrect : true},
        {id: 2, text: "laptops, Database, Es", isCorrect : false},
        { id: 3, text: "mobile phones, Devices, hardware devices ", isCorrect: false}
    ],
},

{
    Questions: " Information and communications technology (ICT) resource management is the discipline responsible for planning, designing, implementing, monitoring and evaluating an ....?",
    options: [
        { id: 0, text: "Organization's infrastructure", isCorrect : false },
        { id: 1, text: "organizational rehabilitation", isCorrect : false},
        {id: 2, text: "Organization's Records", isCorrect : false},
        { id: 3, text: "organization's information and communications technology (ICT) infrastructure", isCorrect: true}
    ],
    
},
{
    Questions: "  ICT management is based on four fundamental pillars: which ?",
    options: [
        {id: 0, text: "ICT infrastructure, Information security, Data storage and Change management", isCorrect: false},
        {id: 1, text: "nformation security: Information security, Data storage, Hardware", isCorrect: false},
        {id: 2, text: "Data storage, security, Data storage and Change management", isCorrect : true},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},
{
    Questions: " Resource allocation is the process by which a computing system aims to meet...?",
    options: [
        { id: 0, text: "none of the above", isCorrect : false },
        { id: 1, text: "The software requirements of an application", isCorrect : false},
        {id: 2, text: "The application run by it In computing", isCorrect : false},
        { id: 3, text: " The hardware requirements of an application run by it In computing, networking and energy resources", isCorrect: true}
    ],
},
{
    Questions: " Which of this  is among the Principles Behind ICT Resources?",
    options: [
        { id: 0, text: "Provision of PHCN", isCorrect : false },
        { id: 1, text: "Provision of human power", isCorrect : false},
        {id: 2, text: "Provision of resources", isCorrect : true},
        { id: 3, text: " None of the mentioned", isCorrect: false}
    ],
    
},
{
    Questions: " A keyboard is a/an ______ device.?",
    options: [
        { id: 0, text: "can't say", isCorrect : false },
        { id: 1, text: "output device", isCorrect : false},
        {id: 2, text: "input device", isCorrect : true},
        { id: 3, text: "I/O device", isCorrect: false}
    ],
},

{
    Questions: " Which of these is a free operating system??",
    options: [
        { id: 0, text: "macOSX", isCorrect : false },
        { id: 1, text: "windows XP", isCorrect : false},
        {id: 2, text: "winodws 7", isCorrect : false},
        { id: 3, text: "ubuntu", isCorrect: true}
    ],
},
{
    Questions: " Examples of peripheral devices are?",
    options: [
        { id: 0, text: "monitor", isCorrect : false },
        { id: 1, text: "mouse", isCorrect : false},
        {id: 2, text: "keyboard", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: true}
    ],
},
{
    Questions: " What would you use a USB Flash Drive for?? ",
    options: [
        { id: 0, text: "listening music ", isCorrect : false},
        { id: 1, text: "back up", isCorrect : false},
        {id: 2, text: "saving files", isCorrect : true},
        { id: 3, text: "all of the above", isCorrect: false}
    ],
},
{
    Questions: " Which part of the computer system that one can physically touch??",
    options: [
        { id: 0, text: "programs", isCorrect : false },
        { id: 1, text: "OS", isCorrect : false},
        {id: 2, text: "hardware", isCorrect : true},
        { id: 3, text: "software", isCorrect: false}
    ],
},
{
    Questions: " What are IC chips made of?",
    options: [
        { id: 0, text: "silicon", isCorrect : true},
        { id: 1, text: "iron", isCorrect : false},
        {id: 2, text: "chromuim ", isCorrect : false},
        { id: 3, text: "lead", isCorrect: false}
    ],
},

//round 5 YRII
{
    Questions: "what is the purpose of an operating system ?",
    options: [
        { id: 0, text: "to manage hardware resources", isCorrect : false },
        { id: 1, text: "to provide a user interface", isCorrect : false},
        {id: 2, text: "to run applications", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: true}
    ],
},
{
    Questions: "what does HTTP stand for?",
    options: [
        { id: 0, text: "hypertext transfer protocol", isCorrect : true },
        { id: 1, text: "hypertext transmission protocol", isCorrect : false},
        {id: 2, text: "hypertext transfer program", isCorrect : false},
        { id: 3, text: "hypertext transmission program", isCorrect: false}
    ],
},
{
    Questions: "what programming language is primarily used for artificial intelligence and machine learning ?",
    options: [
        { id: 0, text: "c++", isCorrect : false },
        { id: 1, text: "java", isCorrect : false},
        {id: 2, text: "python", isCorrect : true},
        { id: 3, text: "ruby", isCorrect: false}
    ],
},
{
    Questions: "what is the binary equivalent of the decimal number 25 ?",
    options: [
        { id: 0, text: "10101", isCorrect : false },
        { id: 1, text: "11001", isCorrect : true},
        {id: 2, text: "11111", isCorrect : false},
        { id: 3, text: "10011", isCorrect: false}
    ],
},
{
    Questions: "what is the output of 3 + 4 * 2 ?",
    options: [
        { id: 0, text: "14", isCorrect : false },
        { id: 1, text: "11", isCorrect : true},
        {id: 2, text: "10", isCorrect : false},
        { id: 3, text: "15", isCorrect: false}
    ],
},
{
    Questions: "which of the following is NOT a type of computer network ?",
    options: [
        { id: 0, text: "RAM", isCorrect : true },
        { id: 1, text: "MAN", isCorrect : false},
        {id: 2, text: "WAN", isCorrect : false},
        { id: 3, text: "LAN", isCorrect: false}
    ],
},
{
    Questions: "which of the following is a valid programming paradigm ?",
    options: [
        { id: 0, text: "random-oriented programming", isCorrect : false },
        { id: 1, text: "stochastic programming", isCorrect : false},
        {id: 2, text: "imperative programming", isCorrect : true},
        { id: 3, text: "guessing programming", isCorrect: false}
    ],
},

{
    Questions: "what is the main purpose of an operating system ?",
    options: [
        { id: 0, text: "manage hardware resources ", isCorrect : false },
        { id: 1, text: "execute application", isCorrect : false},
        {id: 2, text: "provide a user interface", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: true}
    ],
},

{
    Questions: "which of the following is not a programming language ?",
    options: [
        { id: 0, text: "python", isCorrect : false },
        { id: 1, text: "Java", isCorrect : false},
        {id: 2, text: "HTML", isCorrect : true},
        { id: 3, text: "c++", isCorrect: false}
    ],
},

{
    Questions: "which of the following is not a programming paradigm ?",
    options: [
        { id: 0, text: "sequential", isCorrect : true },
        { id: 1, text: "procedural", isCorrect : false},
        {id: 2, text: "functional", isCorrect : false},
        { id: 3, text: "object-oriented", isCorrect: false}
    ],
},


//software engineering domain questions
{
    Questions: "what is the primary goal of sotware engineering ?",
    options: [
        { id: 0, text: "maximizing profits", isCorrect : false },
        { id: 1, text: "delivering high quality", isCorrect : true},
        {id: 2, text: "miniimizing project duration", isCorrect : false},
        { id: 3, text: "increasing market share", isCorrect: false}
    ],
},
{
    Questions: "which software development model emphasizes iterative, incremental development?",
    options: [
        { id: 0, text: "waterfall model", isCorrect : false },
        { id: 1, text: "spiral model", isCorrect : false},
        {id: 2, text: "agile model", isCorrect : true},
        { id: 3, text: "RAD model", isCorrect: false}
    ],
},
{
    Questions: " which of the following is not a software development life cycle phase?",
    options: [
        { id: 0, text: "requirements analysis", isCorrect : false },
        { id: 1, text: "design and prototyping", isCorrect : false},
        {id: 2, text: "coding and debugging", isCorrect : false},
        { id: 3, text: "project deployement", isCorrect: true}
    ],
},
{
    Questions: "what is the purpose of version control systems in software development?",
    options: [
        { id: 0, text: "tracking changes to source code", isCorrect : true },
        { id: 1, text: "generating project documentation", isCorrect : false},
        {id: 2, text: "optimizing database performance", isCorrect : false},
        { id: 3, text: "monitoring system security", isCorrect: false}
    ],
},
{
    Questions: "which software testing technique focuses on examining the code logic and structure?",
    options: [
        { id: 0, text: "white-box testing", isCorrect : true },
        { id: 1, text: "black-box testing ", isCorrect : false},
        {id: 2, text: "integration testing", isCorrect : false},
        { id: 3, text: "regression testing", isCorrect: false}
    ],
},
{
    Questions: "which software development paradigm encourages breaking down tasks into small, manageable units called 'user stories' ?",
    options: [
        { id: 0, text: "waterfall model", isCorrect : false },
        { id: 1, text: "incremental model", isCorrect : false},
        {id: 2, text: "scrum methodology", isCorrect : true},
        { id: 3, text: "RAD model", isCorrect: false}
    ],
},
{
    Questions: "which software metric meausres the number of defects discovered per line of code?",
    options: [
        { id: 0, text: "cyclomatic complexity", isCorrect : false },
        { id: 1, text: "code coverage", isCorrect : false},
        {id: 2, text: "defect density", isCorrect : true},
        { id: 3, text: "halstead complexity", isCorrect: false}
    ],
},

{
    Questions: "what is the primary goal of software refactoring?",
    options: [
        { id: 0, text: "adding new features to the software", isCorrect : false },
        { id: 1, text: "optimizing code for performance", isCorrect : false},
        {id: 2, text: "simplifying code structure without changing its bahavior", isCorrect : true},
        { id: 3, text: "elminating all software bugs", isCorrect: false}
    ],
},

{
    Questions: "which software development principle advocates for classes to be open for extension but closed for modification ?",
    options: [
        { id: 0, text: "liskov substitution principle", isCorrect : false },
        { id: 1, text: "single responsiblity principle", isCorrect : false},
        {id: 2, text: "open/closed principle", isCorrect : true},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},

{
    Questions: "which software architecture style seperates the system into components that are loosely coupled and independently deployable?",
    options: [
        { id: 0, text: "monolithic arcitecture", isCorrect : false },
        { id: 1, text: "microservices architecture", isCorrect : true},
        {id: 2, text: "clent server architecture", isCorrect : false},
        { id: 3, text: "peer-to-peer architecture", isCorrect: false}
    ],
},
// cyber security domain questions

{
    Questions: "what does 'DDOS' stand for ?",
    options: [
        { id: 0, text: "distributed data system ", isCorrect : false },
        { id: 1, text: "data distribution service", isCorrect : false},
        {id: 2, text: "distribution denial of service", isCorrect : true},
        { id: 3, text: "data destruction strategy", isCorrect: false}
    ],
},
{
    Questions: "which of the following is NOT considered a strong password?",
    options: [
        { id: 0, text: "password123", isCorrect : true },
        { id: 1, text: "[email protected]", isCorrect : false},
        {id: 2, text: "tr0ub4dor&3", isCorrect : false},
        { id: 3, text: "correcteHorseBatteryStaple", isCorrect: false}
    ],
},
{
    Questions: "what is the purpose of a firewall in network security ?",
    options: [
        { id: 0, text: "to encrypt data transmissions", isCorrect : false },
        { id: 1, text: "to prevent unauthrized access to or fro a private network", isCorrect : true},
        {id: 2, text: "to manage user authentication", isCorrect : false},
        { id: 3, text: "to speed up internet connections", isCorrect: false}
    ],
},
{
    Questions: "what is the primary function of an antivirus software ?",
    options: [
        { id: 0, text: "to block spam emails", isCorrect : false },
        { id: 1, text: "to detect and remove malicious software", isCorrect : true},
        {id: 2, text: "to secure wireless networks", isCorrect : false},
        { id: 3, text: "to encrypt files", isCorrect: false}
    ],
},
{
    Questions: "which encryption protocol is commonly used to secure wireless networks ?",
    options: [
        { id: 0, text: "WPA", isCorrect : true },
        { id: 1, text: "HTTP ", isCorrect : false},
        {id: 2, text: "FTP", isCorrect : false},
        { id: 3, text: "SSL", isCorrect: false}
    ],
},
{
    Questions: "what does 'SSL' stand for ?",
    options: [
        { id: 0, text: "secure sockets layer", isCorrect : true },
        { id: 1, text: "secure system login ", isCorrect : false},
        {id: 2, text: "system security layer", isCorrect : false},
        { id: 3, text: "strong security link ", isCorrect: false}
    ],
},
{
    Questions: "which of the following isan example of social engineering ?",
    options: [
        { id: 0, text: "brute force attack", isCorrect : false },
        { id: 1, text: "sQL injection", isCorrect : false},
        {id: 2, text: "phishing", isCorrect : true},
        { id: 3, text: "cross-site scripting", isCorrect: false}
    ],
},

{
    Questions: "what is the purpose of penetration testing  ?",
    options: [
        { id: 0, text: "to detect vulnerabilities in a system or network", isCorrect : true },
        { id: 1, text: "to authenticate users", isCorrect : false},
        {id: 2, text: "to encrypt sensitive data", isCorrect : false},
        { id: 3, text: "to monitor network traffic", isCorrect: false}
    ],
},

{
    Questions: "which of the followingis a best practice to enhance password security?",
    options: [
        { id: 0, text: "using the same password for multiple accounts", isCorrect : false },
        { id: 1, text: "sharing passwords with trusted colleagues", isCorrect : false},
        {id: 2, text: "changing passwords frequently ", isCorrect : true},
        { id: 3, text: "writing passwords down on a sticky note", isCorrect: false}
    ],
},

{
    Questions: "what is the purpose of two-factor authentication (2FA) ?",
    options: [
        { id: 0, text: "to use two different antivirus programs", isCorrect : false },
        { id: 1, text: "to provide an additional layer of security beyond passwords", isCorrect : true},
        {id: 2, text: "to encrypt network traffic", isCorrect : false},
        { id: 3, text: "to prevent distributed denial service attacks", isCorrect: false}
    ],
},



//Round6 YRII current affairs
{
    Questions: "which company recently announced the development of its own custom ARM-based processors for it Mac computers?",
    options: [
        { id: 0, text: "microsoft", isCorrect : false },
        { id: 1, text: "dell", isCorrect : true},
        {id: 2, text: "apple", isCorrect : false},
        { id: 3, text: "hp", isCorrect: false}
    ],
},
{
    Questions: "which technology  company recently became the world's most valuable publicly traded company, surpassing a $3 trillion market capitalization?",
    options: [
        { id: 0, text: "amazon", isCorrect : false },
        { id: 1, text: "google", isCorrect : false},
        {id: 2, text: "microsoft", isCorrect : false},
        { id: 3, text: "apple", isCorrect: true}
    ],
},
{
    Questions: "which major cloud service provider suffered a widespread outage affecting various online services in 2021?",
    options: [
        { id: 0, text: "amazon web services (AWS)", isCorrect : true },
        { id: 1, text: "google cloud platform", isCorrect : false},
        {id: 2, text: "microsoft azure", isCorrect : false},
        { id: 3, text: "IBM cloud", isCorrect: false}
    ],
},
{
    Questions: "which programming language topped the TIOBE index as the most popular programming language in 2021 ?",
    options: [
        { id: 0, text: "java", isCorrect : false },
        { id: 1, text: "python", isCorrect : true},
        {id: 2, text: "c++", isCorrect : false},
        { id: 3, text: "javascript", isCorrect: false}
    ],
},
{
    Questions: "what is the name of the recent cybersecurity incident that targeted solarwinds software, compromising numerous government and private sector networks?",
    options: [
        { id: 0, text: "darkside ransomware attack", isCorrect : false },
        { id: 1, text: "wannaCry ransomware attack", isCorrect : false},
        {id: 2, text: "stuxnet malware attack ", isCorrect : false},
        { id: 3, text: "solarWinds supply chain attack ", isCorrect: true}
    ],
},
{
    Questions: "which gaming platform faced backlash and legal challenges over its app store polices and developer fees?",
    options: [
        { id: 0, text: "playstation network ", isCorrect : false },
        { id: 1, text: "xbox live ", isCorrect : false},
        {id: 2, text: "steam ", isCorrect : false},
        { id: 3, text: "apple app store ", isCorrect: true}
    ],
},
{
    Questions: "what is the name of the recent internet protocol upgrade aimed at improving security and performance on the web?",
    options: [
        { id: 0, text: "HTTP/2 ", isCorrect : false },
        { id: 1, text: "IPv6 ", isCorrect : false},
        {id: 2, text: "DNS over hTTPS(DoH) ", isCorrect : false},
        { id: 3, text: "HTTPS/3 ", isCorrect: true}
    ],
},

{
    Questions: "which tech billionaire recently announced plans to send cvilians to space aboard his companies spacecraft?",
    options: [
        { id: 0, text: "jeff bezos ", isCorrect : false },
        { id: 1, text: "elon musk", isCorrect : true},
        {id: 2, text: "richard branson ", isCorrect : false},
        { id: 3, text: "larry page", isCorrect: false}
    ],
},

{
    Questions: "which programming language was developed by microsoft andbacame open source in 2016?",
    options: [
        { id: 0, text: "java", isCorrect : false },
        { id: 1, text: "c#", isCorrect : true},
        {id: 2, text: "swift", isCorrect : false},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},

{
    Questions: "which company recently unveiled its first line of custom-designed computer chips named M1, for its laptops and desktops?",
    options: [
        { id: 0, text: "microsoft ", isCorrect : false },
        { id: 1, text: "dell ", isCorrect : false},
        {id: 2, text: " apple", isCorrect : true},
        { id: 3, text: "hp ", isCorrect: false}
    ],
},

{
    Questions: "which technology company recently announced its intentions to acquire the semiconductor company ARM holdings  ?",
    options: [
        { id: 0, text: " google ", isCorrect : false },
        { id: 1, text: "intel ", isCorrect : false},
        {id: 2, text: "NVDIA ", isCorrect : true},
        { id: 3, text: "samsung", isCorrect: false}
    ],
},
{
    Questions: "which popular video conferencing platform experienced a surge in users during the COVID-19 pandemic?",
    options: [
        { id: 0, text: "skype ", isCorrect : false },
        { id: 1, text:  "zoom", isCorrect : true},
        {id: 2, text: "google meet", isCorrect : false},
        { id: 3, text: "microsoft teams", isCorrect: false}
    ],
},
{
    Questions: "which browser introduced a new privacy called 'superduper secure mode' aimed at enhanced user privacy ?",
    options: [
        { id: 0, text: "google chrome", isCorrect : false },
        { id: 1, text: "mozilla firefox", isCorrect : false},
        {id: 2, text: "microsoft edge", isCorrect : true},
        { id: 3, text: "safari", isCorrect: false}
    ],
},
{
    Questions: "which social media platform introduced the 'fleets' feature allowing users to post disappearing content?",
    options: [
        { id: 0, text: "twitter", isCorrect : true },
        { id: 1, text: "facebook", isCorrect : false},
        {id: 2, text: "instagram ", isCorrect : false},
        { id: 3, text: "snapchat ", isCorrect: false}
    ],
},
{
    Questions: "which cryptocurrency surged in popularity due to its environmentally friendly consensus mechanism called 'proof of stake'?",
    options: [
        { id: 0, text: "bitcoin ", isCorrect : false },
        { id: 1, text: "ethereum  ", isCorrect : true},
        {id: 2, text: "dogecoin ", isCorrect : false},
        { id: 3, text: "litecoin ", isCorrect: false}
    ],
},
{
    Questions: "which search engine recently faced antivirus lawsuits and regulatory scrutiny for its dominance in online search and advertising?",
    options: [
        { id: 0, text: "bing ", isCorrect : false },
        { id: 1, text: "yahoo  ", isCorrect : false},
        {id: 2, text: "duckduckGo ", isCorrect : false},
        { id: 3, text: " google ", isCorrect: true}
    ],
},
{
    Questions: "what is the name of the recent vulneraility that impacted microsoft exhange servers, allowing unauthorized access to email accounts and network compromise?",
    options: [
        { id: 0, text: "heartbleed ", isCorrect : false },
        { id: 1, text: "log4shell ", isCorrect : false},
        {id: 2, text: "proxylogon ", isCorrect : true},
        { id: 3, text: "spectre ", isCorrect: false}
    ],
},

{
    Questions: "which social media platform faced criticism and regulatory hearings over its handling of misinformation and its impact on user privacy and mental health?",
    options: [
        { id: 0, text: "tiktok ", isCorrect : false },
        { id: 1, text: "twitter ", isCorrect : false},
        {id: 2, text: "facebook ", isCorrect : true},
        { id: 3, text: "snapchat ", isCorrect: false}
    ],
},

{
    Questions: "which tech company recently announced plans to develop a metaverse a virtual reality space where users can interact with digital environments and other users?",
    options: [
        { id: 0, text: "meta(fka facebook) ", isCorrect : true },
        { id: 1, text: "google ", isCorrect : false},
        {id: 2, text: " microsoft ", isCorrect : false},
        { id: 3, text: "apple", isCorrect: false}
    ],
},

{
    Questions: "what is the name of the recently vulnerability that affected numerous internet-connected devices, including routers and smart home gadgets, due to a flaw in the open-source network protocol library, libgcrypt?",
    options: [
        { id: 0, text: "heartbleed ", isCorrect : false },
        { id: 1, text: "log4shell ", isCorrect : true},
        {id: 2, text: "log4j ", isCorrect : false},
        { id: 3, text: "cursedgrabber ", isCorrect: true}
    ],
},

//CS QuestionYEARIII

{
    Questions: "What is computer hardware? ?",
    options: [
        { id: 0, text: "it is a hard substance ", isCorrect : false },
        { id: 1, text: "Invisible component of a computer", isCorrect : false},
        {id: 2, text: "Touchable component of a system ", isCorrect : false},
        { id: 3, text: " The physical components of a computer", isCorrect: true}
    ],
},
{
    Questions: "a DSP system is a device or setup that performs _________?",
    options: [
        { id: 0, text: "Analog Operations", isCorrect : false },
        { id: 1, text: " All operations", isCorrect : false},
        {id: 2, text: "DSP operations", isCorrect : true},
        { id: 3, text: "none of the above ", isCorrect: false}
    ],
},
{
    Questions: "Operations of the DSP include all but one ?",
    options: [
        { id: 0, text: " Modulation", isCorrect : true },
        { id: 1, text: " Moderation", isCorrect : false},
        {id: 2, text: "Equalization", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: false}
    ],
},
{
    Questions: "DSP systems are used in an array of applications, such as the following:",
    options: [
        { id: 0, text: " Audio and speech processing, Radar and sonar, Telecommunication", isCorrect : true },
        { id: 1, text: "Seismology,  devices, Radio", isCorrect : false},
        {id: 2, text: " Audio, speech, light ", isCorrect : false},
        { id: 3, text: " none of the above", isCorrect: false}
    ],
},
    {
        Questions: "what is the use of a compiler in programming?",
        options: [
            { id: 0, text: "used to convert numbers to text", isCorrect : false },
            { id: 1, text: "converts user written code to what a computer can understand", isCorrect : true},
            {id: 2, text: "none of the above", isCorrect : false},
            { id: 3, text: "error checking", isCorrect: false}
        ],
    },

{
    Questions: "_________ in Java is a blueprint from which individual objects are created. ?",
    options: [
        { id: 0, text: "public", isCorrect : false },
        { id: 1, text: "class ", isCorrect : true},
        {id: 2, text: "methods ", isCorrect : false},
        { id: 3, text: " keywords", isCorrect: false}
    ],
},
{
    Questions: "___________ topology is an arrangement of the network in which every node is connected to the central hub, switch or a central computer. ?",
    options: [
        { id: 0, text: " star", isCorrect : true },
        { id: 1, text: "ring", isCorrect : false},
        {id: 2, text: "tree ", isCorrect : false},
        { id: 3, text: "mesh ", isCorrect: false}
    ],
},

{
    Questions: "In OOP, the Collection of objects of the same kind is called:__________ ?",
    options: [
        { id: 0, text: "public ", isCorrect :  false },
        { id: 1, text: "class", isCorrect : true},
        {id: 2, text: "main methods ", isCorrect : false},
        { id: 3, text: "inheritance ", isCorrect: false}
    ],
},

{
    Questions: "what type of database model organizes dat into tables with rows and columns, where each row represents a record and each column represents a data attribute ?",
    options: [
        { id: 0, text: "hierarchical database model ", isCorrect : false},
        { id: 1, text: "network database model ", isCorrect : false},
        {id: 2, text: "relational database model ", isCorrect : true},
        { id: 3, text: " object-oriented database model", isCorrect: false}
    ],
},

{
    Questions: "__________________is  a privately owned network that operates within and nearby a single building like a home, ofice or factory.  ?",
    options: [
        { id: 0, text: "WAN ", isCorrect : false },
        { id: 1, text: "LAN ", isCorrect : true},
        {id: 2, text: "MAN",  isCorrect : false},
        { id: 3, text: "none of the above ", isCorrect: false}
    ],
},

{
    Questions: "The two types of data type in Java are _____ and _____ ?",
    options: [
        { id: 0, text: "primitive data type and imprimitive ", isCorrect : false },
        { id: 1, text: "primitve data type and non-imprimitve ", isCorrect : true},
        {id: 2, text: " float and double ", isCorrect : false},
        { id: 3, text: "none of the above ", isCorrect: false}
    ],
},

{
    Questions: "the following are types of a system EXCEPT?",
    options: [
        { id: 0, text: "physical or abstract systems  ", isCorrect : false },
        { id: 1, text: "open or closed systems  ", isCorrect : false},
        {id: 2, text: "man-made information systems. ", isCorrect : false},
        { id: 3, text: "none of the above ", isCorrect: true}
        
    ],
},

{
    Questions: "which ofthe following components is responsible for temporarily storing data and instructions during program execution ?",
    options: [
        { id: 0, text: "ALU(Arithmethic logic unit) ", isCorrect : false },
        { id: 1, text: "control unit", isCorrect : false},
        {id: 2, text: "cache memory", isCorrect : true},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},
{
    Questions: "what is encapsulation in OOP?",
    options: [
        { id: 0, text: "hiding the implementation details of a class  ", isCorrect : true },
        { id: 1, text: "inheriting properties from a superclass ", isCorrect : false},
        {id: 2, text: " creating multiple instances of a class", isCorrect : false},
        { id: 3, text: "overriding methods in a subclass ", isCorrect: false}
    ],
},

{
    Questions: "which keyword is used to implement inheritance in java ?",
    options: [
        { id: 0, text: "super ", isCorrect : false },
        { id: 1, text: "this ", isCorrect : false},
        {id: 2, text: " extends", isCorrect : true},
        { id: 3, text: " implements", isCorrect: false}
    ],
},
{
    Questions: "which phases of SDLC involves gathering, analyzing and documenting requirements?",
    options: [
        { id: 0, text: "design", isCorrect : false },
        { id: 1, text: "development", isCorrect : false},
        {id: 2, text: "testing", isCorrect : false},
        { id: 3, text: "requirement analysis", isCorrect: true}
    ],
},

{
    Questions: "which OOP concepts refers to the ability of a class tohave more than one method with the same name but different signatures ?",
    options: [
        { id: 0, text: " overloading", isCorrect : true },
        { id: 1, text: "overriding ", isCorrect : false},
        {id: 2, text: " inheritance", isCorrect : false},
        { id: 3, text: "encapsulation ", isCorrect: false}
    ],
},

{
    Questions: "what is the purpose ofthe planning phase in SDLC ?",
    options: [
        { id: 0, text: "to gather user requirements ", isCorrect : false},
        { id: 1, text: "to write code ", isCorrect : false},
        {id: 2, text: "to estimate project costs and timelines ", isCorrect : true},
        { id: 3, text: "to identify and fix defects", isCorrect: false}
    ],
},

{
    Questions: "What is abstraction?  ?",
    options: [
        { id: 0, text: "is the process of making an artefact  ", isCorrect : false },
        { id: 1, text: " is the process of making an artefact more understandable through reducing the unnecessary detail and number of variables ", isCorrect : true},
        {id: 2, text: "is the process of making an artefact more  the unnecessary detail", isCorrect : false},
        { id: 3, text: "all of the above ", isCorrect: false}
    ],
},

{
    Questions: "QWERTY, DVORAK and ________ are the types of keyboard arrangement.  ?",
    options: [
        { id: 0, text: "AZERTY keyboard ", isCorrect : true },
        { id: 1, text: "dunlop keyboard ", isCorrect : false},
        {id: 2, text: " QUERTO keyboard", isCorrect : false},
        { id: 3, text: "nonoe of the above ", isCorrect: false}
    ],
},

{
    Questions: "what is the primary purpose of maintenance phase in the SDLC?",
    options: [
        { id: 0, text: "gathering user feedbacks", isCorrect : false},
        { id: 1, text: "documenting requirements", isCorrect : false},
        {id: 2, text: " fixing defects", isCorrect : true},
        { id: 3, text: " writing codes", isCorrect: false}
    ],
},

{
    Questions: "what is the suffix of a java program file ?",
    options: [
        { id: 0, text: ".c ", isCorrect : false },
        { id: 1, text: ".java ", isCorrect : true},
        {id: 2, text: " .j", isCorrect : false},
        { id: 3, text: "none of the above", isCorrect: false}
    ],
},

{
    Questions: "The programming languages that use multithreading to process many streams of code simultaneously, which speeds up processing of complex code is known as _____________ languages ?",
    options: [
        { id: 0, text: " parallel processing", isCorrect : true },
        { id: 1, text: "object_oriented ", isCorrect : false},
        {id: 2, text: "procedural ", isCorrect : false},
        { id: 3, text: "speed_up programming ", isCorrect: false}
    ],
},

{
    Questions: "which of the following best defines polymorphism in OOP ?",
    options: [
        { id: 0, text: " ability to represent one form in multiple forms", isCorrect : true},
        { id: 1, text: "ability to hide the implementation ", isCorrect : false},
        {id: 2, text: "ability to create multiple instances of a class ", isCorrect : false},
        { id: 3, text: "ability to access variables and methods of another class ", isCorrect: false}
    ],
},


//SE YEARIII 

{
    Questions: "which software development principle emphasizes breaking down a system into smaller, manageable components ?",
    options: [
        { id: 0, text: "encapsulation  ", isCorrect : false },
        { id: 1, text: "abstraction  ", isCorrect : false},
        {id: 2, text: "modularity  ", isCorrect : true},
        { id: 3, text: "inheritance  ", isCorrect: false}
    ],
},
{
    Questions: "what is the term for the process of finding and fixing defects in software?",
    options: [
        { id: 0, text: " testing", isCorrect : false },
        { id: 1, text: "coding  ", isCorrect : false},
        {id: 2, text: "debugging ", isCorrect : true},
        { id: 3, text: "designing  ", isCorrect: false}
    ],
},
{
    Questions: "What does UML stand for in software engineering?  ?",
    options: [
        { id: 0, text: " Unified Markup Link ", isCorrect : false },
        { id: 1, text: "Universal Modeling Language  ", isCorrect : false},
        {id: 2, text: "Unified Modeling Language ", isCorrect : false},
        { id: 3, text: "all of the above", isCorrect: true}
    ],
},
{
    Questions: "The only language which the computer understands is ______________ ",
    options: [
        { id: 0, text: "Assembly Language  ", isCorrect : false },
        { id: 1, text: " Binary Language", isCorrect : true},
        {id: 2, text: "BASIC   ", isCorrect : false},
        { id: 3, text: " low level language ", isCorrect: false}
    ],
},
    {
        Questions: "Android, iOS, Symbian, Windows 8 etc are some popular mobile ____  ?",
        options: [
            { id: 0, text: "system softwared ", isCorrect : false },
            { id: 1, text: "application software ", isCorrect : false},
            {id: 2, text: "operating system", isCorrect : true},
            { id: 3, text: "none of the above ", isCorrect: false}
        ],
    },

{
    Questions: "which software engineering technique involves converting requirements into a detailed design specification  ?",
    options: [
        { id: 0, text: "object-oriented analysis ", isCorrect : true },
        { id: 1, text: "object-oriented design  ", isCorrect : false},
        {id: 2, text: " structured design  ", isCorrect : false},
        { id: 3, text: " structured design ", isCorrect: false}
    ],
},
{
    Questions: "which software development emphasizes close collaboration between developers and operations teams  ?",
    options: [
        { id: 0, text: "devops  ", isCorrect : true },
        { id: 1, text: " waterfall", isCorrect : false},
        {id: 2, text: " RAD(rapid application development) ", isCorrect : false},
        { id: 3, text: "extreme programming (XP)  ", isCorrect: false}
    ],
},

{
    Questions: "in modular programming approach program is further divided into ______  ?",
    options: [
        { id: 0, text: " object ", isCorrect :  false },
        { id: 1, text: "modules ", isCorrect : true},
        {id: 2, text: " question ", isCorrect : false},
        { id: 3, text: "solution  ", isCorrect: false}
    ],
},

{
    Questions: " which of the following represents the life cycle of software development?",
    options: [
        { id: 0, text: " analysis > design > coding > testing > operation and maintenance ", isCorrect : true},
        { id: 1, text: " analysis > design > coding > operation and maintenance > testing ", isCorrect : false},
        {id: 2, text: " design > analysis > coding > testing > operation and maintenance  ", isCorrect : false},
        { id: 3, text: "design > analysis > coding > operation and maintenance > testing  ", isCorrect: false}
    ],
},

{
    Questions: "which of the following is/are te phases of system development life cycle?",
    options: [
        { id: 0, text: "implementation  ", isCorrect : false },
        { id: 1, text: " feasibility study ", isCorrect : false},
        {id: 2, text: " all of the options",  isCorrect : true},
        { id: 3, text: "coding  ", isCorrect: false}
    ],
},

{
    Questions: "regression testing is primarily related to  ?",
    options: [
        { id: 0, text: "functional testing  ", isCorrect : false },
        { id: 1, text: " development testing ", isCorrect : false},
        {id: 2, text: " data flow testing  ", isCorrect : false},
        { id: 3, text: "maintenance testing ", isCorrect: true}
    ],
},

{
    Questions: "suppose a cloud contains software stack such as operating system application software etc, this model is referred as _______ model ?",
    options: [
        { id: 0, text: "saaS   ", isCorrect : true },
        { id: 1, text: " iaaS  ", isCorrect : false},
        {id: 2, text: "maaS  ", isCorrect : false},
        { id: 3, text: " paaS ", isCorrect: false}
        
    ],
},

{
    Questions: " what is a key characteristics of the microservices arhitectural style?",
    options: [
        { id: 0, text: " monolithic codebase", isCorrect : false },
        { id: 1, text: "tight coupling between modules", isCorrect : false},
        {id: 2, text: "independent deployability of services ", isCorrect : true},
        { id: 3, text: "centralized data storage ", isCorrect: false}
    ],
},
{
    Questions: "which of the following is not a software process quality ?",
    options: [
        { id: 0, text: " visibility  ", isCorrect : false },
        { id: 1, text: " timeliness  ", isCorrect : false},
        {id: 2, text: " productivity" , isCorrect : false},
        { id: 3, text: "portability  ", isCorrect: true}
    ],
},

{
    Questions: "RAD stands for ?",
    options: [
        { id: 0, text: "none of the mentioned   ", isCorrect : false },
        { id: 1, text: " relative application development   ", isCorrect : false},
        {id: 2, text: " rapid application document ", isCorrect : false},
        { id: 3, text: " rapid application development ", isCorrect: true}
    ],
},
{
    Questions: "In which testing phase do different software modules interact with each other? ?",
    options: [
        { id: 0, text: "System testing ", isCorrect : false },
        { id: 1, text: "Unit testing ", isCorrect : false},
        {id: 2, text: " Integration testing", isCorrect : true},
        { id: 3, text: " Acceptance testing", isCorrect: false}
    ],
},

{
    Questions: "what is the primary purpose of software testing?",
    options: [
        { id: 0, text: " to develop user documentation ", isCorrect : false },
        { id: 1, text: " to identify and fix bugs", isCorrect : true},
        {id: 2, text: " to write  efficient code ", isCorrect : false},
        { id: 3, text: " to manage project resources ", isCorrect: false}
    ],
},

{
    Questions: "which programming language is often used for backend development in web applications?",
    options: [
        { id: 0, text: " java ", isCorrect : true},
        { id: 1, text: " hTML ", isCorrect : false},
        {id: 2, text: "  javascript  ", isCorrect : false},
        { id: 3, text: " cSS", isCorrect: false}
    ],
},

{
    Questions: " what does the term'refactoring' mean in software engineering?",
    options: [
        { id: 0, text: " rewriting code from scratch", isCorrect : false },
        { id: 1, text: " optimizing code for better performance", isCorrect : false},
        {id: 2, text: " making changes to code to improve readability ", isCorrect : true},
        { id: 3, text: "all of the above ", isCorrect: false}
    ],
},

{
    Questions: " what is the purpose of a software requirements specification document?",
    options: [
        { id: 0, text: " to outline ", isCorrect : false },
        { id: 1, text: "to describe the design the user interface ", isCorrect : false},
        {id: 2, text: " to document the functional and non-functional requirements of the software ", isCorrect : true},
        { id: 3, text: " to specify the hardware requirements for running the software ", isCorrect: false}
    ],
},

{
    Questions: "which of the following is not a fundamental concept of software engineering ?",
    options: [
        { id: 0, text: " software requirements analysis ", isCorrect : false},
        { id: 1, text: "software testing ", isCorrect : false},
        {id: 2, text: " software piracy ", isCorrect : true},
        { id: 3, text: " software design ", isCorrect: false}
    ],
},

{
    Questions: " what is the primary purpose of software engineering in the context of computer science educaion?",
    options: [
        { id: 0, text: "to teach programming languages  ", isCorrect : false },
        { id: 1, text: "to develop problem solving skills ", isCorrect : true},
        {id: 2, text: "t design computer hardware ", isCorrect : false},
        { id: 3, text: "to create video games", isCorrect: false}
    ],
},

{
    Questions: "which of the following is not a valid software testing technique?",
    options: [
        { id: 0, text: "white-box testing  ", isCorrect : false },
        { id: 1, text: " black-box testing ", isCorrect : false},
        {id: 2, text: " green-box testing ", isCorrect : true},
        { id: 3, text: " gray-box testing ", isCorrect: false}
    ],
},

{
    Questions: " what is the purpose of asoftware requirement specification(SRS) document?",
    options: [
        { id: 0, text: "to provide a detailed breakdown of software development costs " , isCorrect : false},
        { id: 1, text: "to outline the functionality, constraints and objectives of the software to be developed ", isCorrect: true},
        {id: 2, text: "to describe the coding standards to be followed during software development", isCorrect : false},
        { id: 3, text: "to document the results of software testing procedures", isCorrect: false}
    ],
},
    
//cyb year 3
{
    Questions: "The security of a system can be improved by ?",
    options: [
        { id: 0, text: "  threat monitoring ", isCorrect : true },
        { id: 1, text: "  audit log ", isCorrect : false},
        {id: 2, text: "  both (a) and (b) ", isCorrect : false},
        { id: 3, text: "  none of these ", isCorrect: false}
    ],
},
{
    Questions: "Worm was made up of ?",
    options: [
        { id: 0, text: " one program ", isCorrect : false },
        { id: 1, text: "  two programs ", isCorrect : true},
        {id: 2, text: " three programs ", isCorrect : false},
        { id: 3, text: " all of these  ", isCorrect: false}
    ],
},
{
    Questions: "____ are viruses that are triggered by the passage of time or on a certain date.  ?",
    options: [
        { id: 0, text: " Boot-sector viruses  ", isCorrect : false },
        { id: 1, text: "Macro viruses   ", isCorrect : false},
        {id: 2, text: "Time bombs  ", isCorrect : true},
        { id: 3, text: "Worms ", isCorrect: false}
    ],
},
{
    Questions: "__ is a security protocol based on digital certificates.  ",
    options: [
        { id: 0, text: " Digital signature  ", isCorrect : false },
        { id: 1, text: "Secure sockets layer protocol  ", isCorrect : false},
        {id: 2, text: "  Secure electronic transactions  ", isCorrect : true},
        { id: 3, text: " none of these  ", isCorrect: false}
    ],
},
    {
        Questions: "The ability to recover and read deleted or damaged files from a criminal's computer is an example of a law enforcement specialty called:   ?",
        options: [
            { id: 0, text: "robotics", isCorrect : false },
            { id: 1, text: " simulation ", isCorrect : false},
            {id: 2, text: " computer forensics  ", isCorrect : true},
            { id: 3, text: "none of the above ", isCorrect: false}
        ],
    },

{
    Questions: "Firewalls are used to protect against __   ?",
    options: [
        { id: 0, text: "unauthorized Attacks", isCorrect : true },
        { id: 1, text: " virus Attacks  ", isCorrect : false},
        {id: 2, text: "Data Driven Attacks    ", isCorrect : false},
        { id: 3, text: " Fire Attacks  ", isCorrect: false}
    ],
},
{
    Questions: "What is backup? ?",
    options: [
        { id: 0, text: " Adding more components to your network  ", isCorrect : false },
        { id: 1, text: " Protecting data by copying it from the original source to a different  destination ", isCorrect : true},
        {id: 2, text: " Filtering old data from new data  ", isCorrect : false},
        { id: 3, text: " Accessing data on tape  ", isCorrect: false}
    ],
},

{
    Questions: "Nowadays, phishing has become a criminal practice of using social engineering. For which of the following ?  ?",
    options: [
        { id: 0, text: "Social networking sites   ", isCorrect :  false },
        { id: 1, text: "Mobile Phones  ", isCorrect : true},
        {id: 2, text: "e-mails   ", isCorrect : false},
        { id: 3, text: " Cyber cafes  ", isCorrect: false}
    ],
},

{
    Questions: "A Proxy server is used for which of the following?  ?",
    options: [
        { id: 0, text: " To provide security against unauthorized users  ", isCorrect : false},
        { id: 1, text: " To process client requests for web pages  ", isCorrect : true},
        {id: 2, text: "  To process client requests for database access  ", isCorrect : false},
        { id: 3, text: "  to provde tcp/ip", isCorrect: false}
    ],
},

{
    Questions: "Passwords enable users to ?",
    options: [
        { id: 0, text: "get into the system quickly   ", isCorrect : false },
        { id: 1, text: " make efficient use of time  ", isCorrect : false},
        {id: 2, text: " retain confidentiality of files ",  isCorrect : true},
        { id: 3, text: " simplify file structures  ", isCorrect: false}
    ],
},

{
    Questions: "Which will not harm computer resources?  ?",
    options: [
        { id: 0, text: "firewall   ", isCorrect : true },
        { id: 1, text: " virus  ", isCorrect : false},
        {id: 2, text: "trojan horse ", isCorrect : false},
        { id: 3, text: " none of the above ", isCorrect: false}
    ],
},

{
    Questions: " A program designed to destroy data on your computer which can travel to “infect” other computers is called a _ ?",
    options: [
        { id: 0, text: "disease    ", isCorrect : false },
        { id: 1, text: "   virus ", isCorrect : true},
        {id: 2, text: " hurricane   ", isCorrect : false},
        { id: 3, text: "  tornado ", isCorrect: false}
        
    ],
},

{
    Questions: " Trojan-Horse programs ?",
    options: [
        { id: 0, text: "are legitimate programs that allow unauthorized access  ", isCorrect : true },
        { id: 1, text: " are hacker programs that do not show up on the system", isCorrect : false},
        {id: 2, text: "really do not usually work  ", isCorrect : false},
        { id: 3, text: "are usually immediately discovered  ", isCorrect: false}
    ],
},
{
    Questions: "Technology, no longer protected by copyright, and is available to everyone, is considered to be:  ?",
    options: [
        { id: 0, text: "  proprietary  ", isCorrect : true },
        { id: 1, text: " open   ", isCorrect : false},
        {id: 2, text: " experimental " , isCorrect : false},
        { id: 3, text: "  in the public domain. ", isCorrect: false}
    ],
},

{
    Questions: "Security violation due to ?",
    options: [
        { id: 0, text: "malicious    ", isCorrect : false },
        { id: 1, text: " accidental    ", isCorrect : false},
        {id: 2, text: " both (a) and (b)  ", isCorrect : true},
        { id: 3, text: " all of the above  ", isCorrect: false}
    ],
},
{
    Questions: "__ is a computer crime in which a criminal breaks into a computer system for exploring details of information etc.  ?",
    options: [
        { id: 0, text: "Hacking  ", isCorrect : true },
        { id: 1, text: "Spoofing  ", isCorrect : false},
        {id: 2, text: " Eavesdropping ", isCorrect : false},
        { id: 3, text: " Phishing ", isCorrect: false}
    ],
},

{
    Questions: "What does SSL stand for? ?",
    options: [
        { id: 0, text: " Saving Sharing and Limits  ", isCorrect : false },
        { id: 1, text: " Safe, Secured and Locked" , isCorrect : false},
        {id: 2, text: " Secure Socket Limbs  ", isCorrect : false},
        { id: 3, text: "Secure Socket Layers  ", isCorrect: true}
    ],
},

{
    Questions: " Verification of a login name and password is known as: ?",
    options: [
        { id: 0, text: " logging in ", isCorrect : false},
        { id: 1, text: " authentication ", isCorrect : true},
        {id: 2, text: "  accessibility  ", isCorrect : false},
        { id: 3, text: " configuration", isCorrect: false}
    ],
},

{
    Questions: "Which of the following enables multi-tasking in UNIX?   ?",
    options: [
        { id: 0, text: "time sharing   ", isCorrect : true },
        { id: 1, text: " Multi-programming  ", isCorrect : false},
        {id: 2, text: " Multi user   ", isCorrect : false},
        { id: 3, text: "all of the above ", isCorrect: false}
    ],
},

{
    Questions: " In what type of system is the time interval required to process and respond to inputs so small that it controls the environment.  ?",
    options: [
        { id: 0, text: "  Real-time system  ", isCorrect : true },
        { id: 1, text: "Time sharing system  ", isCorrect : false},
        {id: 2, text: " Internet system   ", isCorrect : false},
        { id: 3, text: " . Network system ", isCorrect: false}
    ],
},

{
    Questions: "in which type of operating system is the ASCII text file accessible   ?",
    options: [
        { id: 0, text: "  Linux operating system  ", isCorrect : true},
        { id: 1, text: " Windows operating system  ", isCorrect : false},
        {id: 2, text: " Cloud operating system   ", isCorrect : false},
        { id: 3, text: " Oracle system  ", isCorrect: false}
    ],
},

{
    Questions: "When a program tries to access a page that is mapped in address space but not loaded into physical memory, then   ?",
    options: [
        { id: 0, text: " Segmentation fault occurs   ", isCorrect : false },
        { id: 1, text: " Fatal error occurs  ", isCorrect : false},
        {id: 2, text: " Page fault occurs  ", isCorrect : true},
        { id: 3, text: "No errors occur ", isCorrect: false}
    ],
},

{
    Questions: "Which one is false?  ?",
    options: [
        { id: 0, text: "Kernel is the program that constitutes the central core of the operating system    ", isCorrect : false },
        { id: 1, text: "   Kernel is made of various modules which can not be loaded in running operating system ", isCorrect : true},
        {id: 2, text: " kernel is the first part of the operating system to load into memory during booting  ", isCorrect : false},
        { id: 3, text: " Kernel remains in the memory during the entire computer session ", isCorrect: false}
    ],
},

{
    Questions: "What is the primary purpose of the network operating system?   ?",
    options: [
        { id: 0, text: "Share file and hardware resources   " , isCorrect : true},
        { id: 1, text: "save files ", isCorrect: false},
        {id: 2, text: "Process data ", isCorrect : false},
        { id: 3, text: " all of the above", isCorrect: false}
    ],
},

// Round4 domain questions
//CS YEARIII
{
    Questions: "1.what does HTML  stand for?",
    options: [
        { id: 0, text: "hyper text markup langauage", isCorrect : true },
        { id: 1, text: "high tech markup language", isCorrect : false},
        {id: 2, text: "hyper tranfer markup language ", isCorrect : false},
        { id: 3, text: "hyper transfer markup language ", isCorrect: false}
    ],
},
{
    Questions: "2.which data structure uses LIFO ordering ?",
    options: [
        { id: 0, text: " queue", isCorrect : false },
        { id: 1, text: " stack", isCorrect : true},
        {id: 2, text: "array ", isCorrect : false},
        { id: 3, text: " linked list", isCorrect: false}
    ],
},

{
    Questions: "3.which of the following is not a programming language ?",
    options: [
        { id: 0, text: "python ", isCorrect : false },
        { id: 1, text: "java ", isCorrect : false},
        {id: 2, text: "SQL ", isCorrect : false},
        { id: 3, text: " API", isCorrect: true}
    ],
},

{
    Questions: "4. what is the main difference between TCP and UDP  ?",
    options: [
        { id: 0, text: "TCP is connection oriented , UDP is connectionless ", isCorrect : true},
        { id: 1, text: "TCP is faster than UDP ", isCorrect : false},
        {id: 2, text: "UDP guarantees message delivery , TCP does not  ", isCorrect : false},
        { id: 3, text: " TCP is used for video streaming UDP is used for file transfer", isCorrect: false}
    ],
},
{
    Questions: "5.which sorting algorithm has the best average time complexity ?",
    options: [
        { id: 0, text: "bubble sorting", isCorrect : false },
        { id: 1, text: "selection sort", isCorrect : false},
        {id: 2, text: "insertion sort", isCorrect : false},
        { id: 3, text: "merge sort", isCorrect: true}
    ],
},
{
    Questions: "6.what is the binary equivalent of the decimal number 25 ?",
    options: [
        { id: 0, text: "11001", isCorrect : false},
        { id: 1, text: "10011 ", isCorrect : true},
        {id: 2, text: " 11101", isCorrect : false},
        { id: 3, text: "10100", isCorrect: false}
    ],
},
{
    Questions: "7.which of the following is not a type of join in SQL ?",
    options: [
        { id: 0, text: "INNER JOIN", isCorrect : false },
        { id: 1, text: "OUTER JOIN", isCorrect : false},
        {id: 2, text: "SIDE JOIN", isCorrect : true},
        { id: 3, text: "LEFT JOIN", isCorrect: false}
    ],
},

{
    Questions: "8.what does HTTP stand for?",
    options: [
        { id: 0, text: "hypertext transfer protocol", isCorrect : true },
        { id: 1, text: "hypertext transmission partcipants", isCorrect : false},
        {id: 2, text: "hyper text terminal protocol", isCorrect : false},
        { id: 3, text: "hypertext translation protocol", isCorrect: false}
    ],
},

{
    Questions: "9.what is the purpose of an index in a database?",
    options: [
        { id: 0, text: "to optimize queries and speed ", isCorrect : true},
        { id: 1, text: " to store large sensitive data", isCorrect : false},
        {id: 2, text: "to encrypt sensitive data", isCorrect : false},
        { id: 3, text: "to enforce data integrity constraints", isCorrect: false}
    ],
},

{
    Questions: "10.what data structure uses LIFO(LAST IN FIRST OUT)?",
    options: [
        { id: 0, text: "tree", isCorrect : false },
        { id: 1, text: "linked list", isCorrect : false},
        {id: 2, text: "stack", isCorrect : true},
        { id: 3, text: "Queue", isCorrect: false}
    ],
},

//SE domain questions

{
    Questions: "1.which of the following programming languages is NOT statically typed?",
    options: [
        { id: 0, text: "python", isCorrect : true },
        { id: 1, text: "java", isCorrect : false},
        {id: 2, text: "c++ ", isCorrect : false},
        { id: 3, text: "typescript ", isCorrect: false}
    ],
},
{
    Questions: "2.What is the purpose of version control systems in software development ?",
    options: [
        { id: 0, text: "To optimize database performance", isCorrect : false },
        { id: 1, text: "To improve user interface design", isCorrect : false},
        {id: 2, text: "To prevent bugs in the code", isCorrect : false},
        { id: 3, text: " To track changes to source code over time", isCorrect: true}
    ],
},

{
    Questions: "3.Which software development methodology emphasizes incremental and iterative development cycles? ?",
    options: [
        { id: 0, text: "Waterfall", isCorrect : false },
        { id: 1, text: " RAD (Rapid Application Development)", isCorrect : false},
        {id: 2, text: "Spiral ", isCorrect : false},
        { id: 3, text: " Agile", isCorrect: true}
    ],
},

{
    Questions: "4.Which of the following is NOT a type of software testing?  ?",
    options: [
        { id: 0, text: "Integration testing ", isCorrect :false},
        { id: 1, text: " Top-down testing", isCorrect : true},
        {id: 2, text: "White-box testing  ", isCorrect : false},
        { id: 3, text: "Black-box testing ", isCorrect: false}
    ],
},

{
    Questions: "5.What is the purpose of the SOLID principles in object-oriented design? ",
    options: [
        { id: 0, text: "To enhance code readability and maintainability", isCorrect : false },
        { id: 1, text: "To minimize CPU usage", isCorrect : false},
        {id: 2, text: "To increase network security", isCorrect : false},
        { id: 3, text: "To optimize database queries", isCorrect: true}
    ],
},


{
    Questions: "6.Which programming paradigm focuses on breaking down a program into smaller, reusable pieces called functions or procedures? ",
    options: [
        { id: 0, text: "object-oriented programming", isCorrect : false},
        { id: 1, text: "Functional programming ", isCorrect : false},
        {id: 2, text: "Procedural programming", isCorrect : true},
        { id: 3, text: "Declarative programming", isCorrect: false}
    ],
},


{
    Questions: "7.What is the purpose of a UML diagram in software engineering?",
    options: [
        { id: 0, text: "To represent hardware components in a system", isCorrect : false },
        { id: 1, text: "To model user interfaces", isCorrect : false},
        {id: 2, text: " To visualize software architecture and design", isCorrect : true},
        { id: 3, text: "To optimize code execution", isCorrect: false}
    ],
},

{
    Questions: "8.Which software design pattern is used to ensure that only one instance of a class is created and provides a global point of access to that instance?",
    options: [
        { id: 0, text: "Singleton", isCorrect : true },
        { id: 1, text: "Factory", isCorrect : false},
        {id: 2, text: "Observer", isCorrect : false},
        { id: 3, text: "Decorator", isCorrect: false}
    ],
},


{
    Questions: "9.who is the father of software engineering ?",
    options: [
        { id: 0, text: "alan turring", isCorrect : false},
        { id: 1, text: " charles babbage", isCorrect : false},
        {id: 2, text: "dr winston w royce", isCorrect : true},
        { id: 3, text: "densel washington", isCorrect: false}
    ],
},


{
    Questions: "10.Which of the following is NOT a software development life cycle model? ?",
    options: [
        { id: 0, text: "Waterfall", isCorrect : false },
        { id: 1, text: "Agile", isCorrect : false},
        {id: 2, text: "V-Model", isCorrect : false},
        { id: 3, text: "Linear", isCorrect: true}
    ],
},

//cyber security 

{
    Questions: "1.What is phishing ?",
    options: [
        { id: 0, text: "A type of malware", isCorrect : false },
        { id: 1, text: " A social engineering attack", isCorrect : true},
        {id: 2, text: " An encryption algorithm", isCorrect : false},
        { id: 3, text: "A hardware vulnerability ", isCorrect: false}
    ],
},

{
    Questions: "2.Which of the following is NOT a type of malware?",
    options: [
        { id: 0, text: "worm", isCorrect : false },
        { id: 1, text: "firewall", isCorrect : true},
        {id: 2, text: "trojan", isCorrect : false},
        { id: 3, text: " virus", isCorrect: false}
    ],
},

{
    Questions: "3.What is the primary purpose of a firewall in network security?",
    options: [
        { id: 0, text: "To detect and remove malware", isCorrect : false },
        { id: 1, text: "To authenticate users ", isCorrect : false},
        {id: 2, text: "To monitor network traffic ", isCorrect : false},
        { id: 3, text: "To filter incoming and outgoing network traffic ", isCorrect: true}
    ],
},

{
    Questions: "4.Which encryption algorithm is commonly used for securing web traffic ?",
    options: [
        { id: 0, text: "AES ", isCorrect :true},
        { id: 1, text: "RSA ", isCorrect : false},
        {id: 2, text: "MD5 ", isCorrect : false},
        { id: 3, text: " SHA-256", isCorrect: false}
    ],
},

{
    Questions: " 5.What does VPN stand for ?",
    options: [
        { id: 0, text: "Verified Private Network ", isCorrect : false },
        { id: 1, text: "Virtual Proxy Node", isCorrect : false},
        {id: 2, text: " Very Personal Network", isCorrect : false},
        { id: 3, text: "Virtual Private Network", isCorrect: true}
    ],
},



{
    Questions: "6. Which of the following is a strong password ?",
    options: [
        { id: 0, text: "password", isCorrect : false},
        { id: 1, text: " 123456", isCorrect : false},
        {id: 2, text: "Passw0rd", isCorrect : false},
        { id: 3, text: "CorrectHorseBatteryStaple", isCorrect: true}
    ],
},


{
    Questions: "7.Which of the following is a common social engineering technique?",
    options: [
        { id: 0, text: "Firewall breach", isCorrect : false },
        { id: 1, text: " Encryption key compromise", isCorrect : false},
        {id: 2, text: "Phishing", isCorrect : true},
        { id: 3, text: "DDoS attack", isCorrect: false}
    ],
},


{
    Questions: "8.What is the main goal of ransomware ?",
    options: [
        { id: 0, text: "To steal sensitive information", isCorrect : false },
        { id: 1, text: "To delete files from the system", isCorrect : false},
        {id: 2, text: " To encrypt files and demand payment for decryption ", isCorrect : true},
        { id: 3, text: "To spread across multiple networks", isCorrect: false}
    ],
},

{
    Questions: "9.What does IoT stand for ?",
    options: [
        { id: 0, text: "Internet of Things", isCorrect : false},
        { id: 1, text: "  Internet of Threats", isCorrect : false},
        {id: 2, text: " Intranet of Technology", isCorrect : true},
        { id: 3, text: "Internal Office Tools", isCorrect: false}
    ],
},

{
    Questions: "10. What is the purpose of multi-factor authentication (MFA) ?",
    options: [
        { id: 0, text: "To use multiple firewalls", isCorrect : false },
        { id: 1, text: "To have multiple antivirus programs", isCorrect : false},
        {id: 2, text: "To authenticate users using multiple methods", isCorrect : true},
        { id: 3, text: "To encrypt data with multiple algorithms", isCorrect: false}
    ],
},
//current affairs

{
    
    Questions: "1.What is the primary programming language used for developing Android applications?",
options: [
        { id: 0, text: "java", isCorrect : true },
        { id: 1, text: " C++", isCorrect : false},
        {id: 2, text: "Python", isCorrect : false},
        { id: 3, text: " Swift", isCorrect: false}
    ],
},

{
    Questions: "2. Which cloud computing platform is known for its serverless computing service    ?",
    options: [
        { id: 0, text: "Google Cloud Platform", isCorrect : false },
        { id: 1, text: "IBM Cloud", isCorrect : false},
        {id: 2, text: " Amazon Web Services", isCorrect : true},
        { id: 3, text: "Microsoft Azure ", isCorrect: false}
    ],
},

{
    Questions: "3. Which programming language is commonly used for data analysis and machine learning tasks?",
    options: [
        { id: 0, text: "JavaScript", isCorrect : false },
        { id: 1, text: "R", isCorrect : true},
        {id: 2, text: " PHP", isCorrect : false},
        { id: 3, text: "Ruby ", isCorrect: false}
    ],
},


{
    Questions: "4.What does CI/CD stand for in software development?",
    options: [
        { id: 0, text: " Continuous Integration/Continuous Deployment", isCorrect :true},
        { id: 1, text: "Centralized Integration/Continuous Delivery", isCorrect : false},
        {id: 2, text: "  Continuous Improvement/Continuous Deployment", isCorrect : false},
        { id: 3, text: "Continuous Innovation/Continuous Deployment ", isCorrect: false}
    ],
},

{
    Questions: "5.Which of the following is a popular version control system used in software development?",
    options: [
        { id: 0, text: "SVN", isCorrect : false },
        { id: 1, text: "CVS", isCorrect : false},
        {id: 2, text: "Git", isCorrect : true},
        { id: 3, text: "Mercurial", isCorrect: false}
    ],
},


{
    Questions: "6.Which programming language is widely used for building web applications and services?",
    options: [
        { id: 0, text: "Java", isCorrect : false},
        { id: 1, text: "C# ", isCorrect : false},
        {id: 2, text: "Python", isCorrect : true},
        { id: 3, text: "Ruby", isCorrect: false}
    ],
},


{
    Questions: "7.What is the primary purpose of Docker in software development? ",
    options: [
        { id: 0, text: "Containerization", isCorrect : true },
        { id: 1, text: "Virtualization", isCorrect : false},
        {id: 2, text: " Load Balancing", isCorrect : false},
        { id: 3, text: "Version Control", isCorrect: false}
    ],
},

{
    Questions: "8.Which database management system is known for its document-oriented approach?*",
    options: [
        { id: 0, text: "MySQL", isCorrect : false },
        { id: 1, text: "PostgreSQL", isCorrect : false},
        {id: 2, text: "MongoDB", isCorrect : true},
        { id: 3, text: "SQLite", isCorrect: false}
    ],
},

{
    Questions: "9. What is the primary function of Kubernetes in the context of container orchestration?",
    options: [
        { id: 0, text: "Code Deployment", isCorrect : false},
        { id: 1, text: "Configuration Management ", isCorrect : true},
        {id: 2, text: "Load Balancing", isCorrect : false},
        { id: 3, text: " Container Management", isCorrect: false}
    ],
},


{
    Questions: "10.Which programming language is commonly used for building native iOS applications?",
    options: [
        { id: 0, text: "Swift", isCorrect : true },
        { id: 1, text: "Java", isCorrect : false},
        {id: 2, text: "Objective-C", isCorrect : false},
        { id: 3, text: "Kotlin", isCorrect: false}
    ],
},


{
    Questions: "11.Which protocol is commonly used for secure communication over a computer network?",
    options: [
        { id: 0, text: "HTTP", isCorrect : false },
        { id: 1, text: "FTP", isCorrect : false},
        {id: 2, text: "SSH ", isCorrect : true},
        { id: 3, text: "Telnet", isCorrect: false}
    ],
},


{
    Questions: "12.What is the term for a software development approach that emphasizes short, iterative development cycles?",
    options: [
        { id: 0, text: "Agile", isCorrect : true },
        { id: 1, text: "Waterfall", isCorrect : false},
        {id: 2, text: "Spiral", isCorrect : false},
        { id: 3, text: " Lean", isCorrect: false}
    ],
},

{
    Questions: "13. Which of the following is a popular JavaScript framework for building single-page applications ?",
    options: [
        { id: 0, text: "React", isCorrect : true },
        { id: 1, text: "Vue.js ", isCorrect : false},
        {id: 2, text: "Angular ", isCorrect : false},
        { id: 3, text: "Ember.js", isCorrect: false}
    ],
},

{
    Questions: "14.Which programming language is commonly used for developing smart contracts on blockchain platforms like Ethereum?",
    options: [
        { id: 0, text: "Solidity", isCorrect :true},
        { id: 1, text: " Java ", isCorrect : false},
        {id: 2, text: " Python ", isCorrect : false},
        { id: 3, text: " C++", isCorrect: false}
    ],
},



{
    Questions: " 15. What is the purpose of a VPN (Virtual Private Network) in networking?",
    options: [
        { id: 0, text: "Secure Remote Access ", isCorrect : true },
        { id: 1, text: "Accelerating Internet Speed", isCorrect : false},
        {id: 2, text: "Network Address Translation ", isCorrect : false},
        { id: 3, text: "Load Balancing", isCorrect: false}
    ],
},


{
    Questions: "16. Which of the following is a popular NoSQL database used for real-time web applications? ",
    options: [
        { id: 0, text: "Cassandra", isCorrect : true},
        { id: 1, text: " Redis ", isCorrect : false},
        {id: 2, text: "Neo4j ", isCorrect : false},
        { id: 3, text: " Couchbase", isCorrect: false}
    ],
},



{
    Questions: "17Which software development methodology advocates for self-organizing cross-functional teams?",
    options: [
        { id: 0, text: "Scrum ", isCorrect : true },
        { id: 1, text: " Kanban ", isCorrect : false},
        {id: 2, text: "Six Sigma ", isCorrect : false},
        { id: 3, text: "Lean ", isCorrect: false}
    ],
},

{
    Questions: "18. What is the purpose of a CAPTCHA in web applications?",
    options: [
        { id: 0, text: "User Authentication", isCorrect : false },
        { id: 1, text: "  Data Encryption", isCorrect : false},
        {id: 2, text: " Preventing Automated Scripts ", isCorrect : true},
        { id: 3, text: "Session Management", isCorrect: false}
    ],
},
{
    Questions: "19.Which of the following is a popular JavaScript runtime built on Chrome's V8 JavaScript engine?",
    options: [
        { id: 0, text: "Node.js", isCorrect : true},
        { id: 1, text: " Deno ", isCorrect : false},
        {id: 2, text: "express.js ", isCorrect : false},
        { id: 3, text: "React.js", isCorrect: false}
    ],
},

{
    Questions: "20.What is the primary function of a CDN (Content Delivery Network) in web hosting?",
    options: [
        { id: 0, text: "Database Management", isCorrect : false },
        { id: 1, text: "Load Balancing", isCorrect : false},
        {id: 2, text: "Content Distribution", isCorrect : true},
        { id: 3, text: "Server Monitoring", isCorrect: false}
    ],
},

    ])

    return (
        <div>
            <div>
            {/* <Images/> */}
            </div>
        
          <userContext.Provider value={myArray}>
            <Layout/>
          </userContext.Provider>
       </div> 
    );
}

export default Question;