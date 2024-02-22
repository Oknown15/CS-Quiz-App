import React, { useState ,createContext, useContext } from 'react';
import Layout from './layout';

export const userContext = React.createContext()

function Question() {
   
    const [myArray, setMyArray] = useState([
        //computer science 100level
        {
            Questions: "The followings are disadvantages of using the computer except",
            options: [
                { id: 0, text: "unemployment", isCorrect : false },
                { id: 1, text: "loss of privacy", isCorrect : false},
                {id: 2, text: "identity theft", isCorrect : false},
                { id: 3, text: "online trading", isCorrect: true}
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
            Questions: "Each instruction in procedural program is executed in _____________",
            options: [
                { id: 0, text: "ordered format", isCorrect : true },
                { id: 1, text: "sampling", isCorrect : false},
                {id: 2, text: "changeable format", isCorrect : false},
                { id: 3, text: "random format", isCorrect: false}
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
            Questions: "Which programming language is useful in programming Robotics and Artificial intelligence?",
            options: [
                { id: 0, text: "BASIC", isCorrect : false },
                { id: 1, text: "python", isCorrect : true},
                {id: 2, text: "fortran", isCorrect : false},
                { id: 3, text: "C++", isCorrect: false}
            ],
        },
        {
            Questions: "every web page has a unique address called a ____",
            options: [
                { id: 0, text: "URN", isCorrect : false },
                { id: 1, text: "ARN", isCorrect : false},
                {id: 2, text: "URL", isCorrect : true},
                { id: 3, text: "USB", isCorrect: false}
            ],
        },
        {
            Questions: "the part of a program that can be coded and tested seperately is usually called ____________?",
            options: [
                { id: 0, text: "instruction", isCorrect : false },
                { id: 1, text: "module", isCorrect : true},
                {id: 2, text: "declaration", isCorrect : false},
                { id: 3, text: "loop", isCorrect: false}
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
            Questions: "The light pen is an example of _______ device ",
            options: [
                { id: 0, text: "input", isCorrect : true },
                { id: 1, text: "output", isCorrect : false},
                {id: 2, text: "storage", isCorrect : false},
                { id: 3, text: "digital", isCorrect: false}
            ],
        },

        {
            Questions: " The Automated Teller Machine is classified as a  _________ ",
            options: [
                { id: 0, text: "general purpose computer ", isCorrect : false },
                { id: 1, text: "special purpose computer", isCorrect : true},
                {id: 2, text: "super computer", isCorrect : false},
                { id: 3, text: "micro computer", isCorrect: false}
            ],
        },

        {
            Questions: "  Scope of data and information revolves round the concept of …………………………",
            options: [
                { id: 0, text: "characters", isCorrect : true },
                { id: 1, text: "charater sets", isCorrect : false},
                {id: 2, text: "information ", isCorrect : false},
                { id: 3, text: "strings", isCorrect: false}
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
            Questions: "  A nibble comprises of…………………….………. number of bits. ?",
            options: [
                { id: 0, text: "8", isCorrect : false },
                { id: 1, text: "3", isCorrect : false},
                {id: 2, text: "4", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
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
            Questions: " Technological advancement of computer is measured in …………………………?",
            options: [
                { id: 0, text: "implementation", isCorrect : false },
                { id: 1, text: "Grit", isCorrect : false},
                {id: 2, text: "generation", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },
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
            Questions: " Give the full meaning of BCD ………………………?",
            options: [
                { id: 0, text: "binary coded decimal", isCorrect : true},
                { id: 1, text: "binary coding dynasty", isCorrect : false},
                {id: 2, text: "binary coding decimal", isCorrect : false},
                { id: 3, text: "binary coded decimals", isCorrect: false}
            ],
        },

        {
            Questions: "	The output unit coverts the data entered by the user into computer understandable form.?",
            options: [
                { id: 0, text: "thrid generation", isCorrect : false },
                { id: 1, text: "3rd gen.", isCorrect : true},
                {id: 2, text: "4th gen.", isCorrect : false},
                { id: 3, text: "2nd gen.", isCorrect: false}
            ],
        },

        {
            Questions: "	What is the device that allows you dial long distance calls automatically without the service of human operator ?",
            options: [
                { id: 0, text: "CPU", isCorrect : false },
                { id: 1, text: "transistors", isCorrect : false},
                {id: 2, text: "computers", isCorrect : true},
                { id: 3, text: "RAM", isCorrect: false}
            ],
        },

        {
            Questions: "On a large scale, _______ process and maintain record every driver ?",
            options: [
                { id: 0, text: "computers", isCorrect : true },
                { id: 1, text: "telecommunication", isCorrect : false},
                {id: 2, text: "satelite", isCorrect : false},
                { id: 3, text: "business", isCorrect: false}
            ],
        },

        {
            Questions: " The connectivity of two or more computers that enables for peripherals and information sharing is called ..........?",
            options: [
                { id: 0, text: "starlink WIFI", isCorrect : false },
                { id: 1, text: "satelite", isCorrect : false},
                {id: 2, text: "network", isCorrect : true},
                { id: 3, text: "interconnection", isCorrect: false}
            ],
        },
        
        {
            Questions: " The air conditioning and heating in many homes is controlled by __________?",
            options: [
                { id: 0, text: "ctrl unit", isCorrect : false },
                { id: 1, text: "computer", isCorrect : false},
                {id: 2, text: "microprocessor", isCorrect : true},
                { id: 3, text: "cache memory", isCorrect: false}
            ],
        },

        {
            Questions: "Computers are widely used for the creation, manipulation and ________ of documents ?",
            options: [
                { id: 0, text: "storage", isCorrect : true},
                { id: 1, text: "process", isCorrect : false},
                {id: 2, text: "back-ups", isCorrect : false},
                { id: 3, text: "safe keeping", isCorrect: false}
            ],
        },
//cyber security
        {
            Questions: " What is the primary goal of ethical behavior in cybersecurity?",
            options: [
                { id: 0, text: "Financial gain", isCorrect : false },
                { id: 1, text: "Protecting personal interests", isCorrect : false},
                {id: 2, text: "Safeguarding the integrity and confidentiality of information", isCorrect : true},
                { id: 3, text: "Gaining unauthorized access to systems", isCorrect: false}
            ],
        },
        {
            Questions: " What ethical principle involves being honest and truthful in all professional interactions?",
            options: [
                { id: 0, text: "honesty", isCorrect : true},
                { id: 1, text: "intergrity", isCorrect : false},
                {id: 2, text: "trustworthiness", isCorrect : false},
                { id: 3, text: "accountability", isCorrect: false}
            ],
        },
        {
            Questions: " In the context of cybersecurity ethics, what is the responsibility of professionals when facing a conflict of interest?",
            options: [
                { id: 0, text: "Engaging in unauthorized use of intellectual property", isCorrect : false },
                { id: 1, text: "Respecting the rights and ownership of intellectual property", isCorrect : true},
                {id: 2, text: "Ignoring the impact of intellectual property theft", isCorrect : false},
                { id: 3, text: "Concealing the use of intellectual property", isCorrect: false}
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
            Questions: " What is the significance of the 'golden rule' in cybersecurity ethics?.",
            options: [
                { id: 0, text: "Prioritizing personal interests over others", isCorrect : false },
                { id: 1, text: "Treating others as one would like to be treated", isCorrect : true},
                {id: 2, text: "Ignoring the impact of actions on others", isCorrect : false},
                { id: 3, text: "Engaging in unethical practices", isCorrect: false}
            ],
        },
        {
            Questions: " In the context of cybersecurity ethics, what does 'whistleblowing' refer to?",
            options: [
                { id: 0, text: "Engaging in unethical practices", isCorrect : false },
                { id: 1, text: "Reporting security vulnerabilities anonymously", isCorrect : false},
                {id: 2, text: "Disclosing unethical behavior or wrongdoing within an organization", isCorrect : true},
                { id: 3, text: "Ignoring the responsibility to report security incidents", isCorrect: false}
            ],
        },
        {
            Questions: "  In the context of cybersecurity ethics, what does 'informed consent' involve?",
            options: [
                { id: 0, text: "Engaging in activities without consent", isCorrect : false },
                { id: 1, text: "Obtaining permission from stakeholders before taking actions", isCorrect : true},
                {id: 2, text: "Ignoring the impact of actions on stakeholders", isCorrect : false},
                { id: 3, text: "concealing information from stakeholders", isCorrect: false}
            ],
        },
        {
            Questions: "What ethical principle involves avoiding actions that may harm the reputation of the cybersecurity profession?",
            options: [
                { id: 0, text: "Responsibility", isCorrect : false },
                { id: 1, text: "integrity", isCorrect : false},
                {id: 2, text: "trustworthiness", isCorrect : false},
                { id: 3, text: "Ethical leadership", isCorrect: true}
            ],
        },

        {
            Questions: " Which of these describes an ongoing pursuit by an individual/group ?",
            options: [
                { id: 0, text: "Stalking ", isCorrect : true },
                { id: 1, text: "Identity theft ", isCorrect : false},
                {id: 2, text: "phishing", isCorrect : false},
                { id: 3, text: "Bulling ", isCorrect: false}
            ],
        },

        {
            Questions: " Which one of the following is considered in the category of computer threats? ?" ,
            options: [
                { id: 0, text: "Soliciting ", isCorrect : false },
                { id: 1, text: "DoS attack ", isCorrect : true},
                {id: 2, text: "Phishing ", isCorrect : false},
                { id: 3, text: "Both A and B ", isCorrect: false}
            ],
        },

        {
            Questions: " Which one is considered to be a type of antivirus program? ",
            options: [
                { id: 0, text: "Kaspersky  ", isCorrect : false },
                { id: 1, text: "Mcafee", isCorrect : false},
                {id: 2, text: " Quick heal ", isCorrect : false},
                { id: 3, text: " All of the above ", isCorrect: true}
            ],
        },

        {
            Questions: "Which of the following typically keeps tabs on every online activity the victim engages in, compiles all the data in the background, and sends it to a third party? ",
            options: [
                { id: 0, text: "Adware ", isCorrect : false },
                { id: 1, text: "Malware ", isCorrect : false},
                {id: 2, text: " Spyware ", isCorrect : true},
                { id: 3, text: " All of the above ", isCorrect: false}
            ],
        },

        {
            Questions: " Which of these scanners for ports and IP addresses is most used by users? ",
            options: [
                { id: 0, text: " Cain and Abel ", isCorrect : false },
                { id: 1, text: "Ettercap ", isCorrect : false},
                {id: 2, text: "Snort ", isCorrect : false},
                { id: 3, text: " Angry IP Scanner ", isCorrect: true}
                
            ],
        },

        {
            Questions: " Which of the following describes investigating moral conduct concerning the digital media landscape? ?",
            options: [
                { id: 0, text: "Cyberethics ", isCorrect : true },
                { id: 1, text: " Cyber low ", isCorrect : false},
                {id: 2, text: "Cybersafety ", isCorrect : false},
                { id: 3, text: "Cybersecurity ", isCorrect: false}
            ],
        },
        {
            Questions: "  whether True or False: Data encryption is used to ensure confidentiality?",
            options: [
                { id: 0, text: "true ", isCorrect : true },
                { id: 1, text: "false", isCorrect : false},
                {id: 2, text: " It cannot be understood ", isCorrect : false},
                { id: 3, text: "None  of the above", isCorrect: false}
            ],
        },

        {
            Questions: " Determine the earliest method of free phone calls used by hackers.? ",
            options: [
                { id: 0, text: "Cracking ", isCorrect : false },
                { id: 1, text: "Spamming ", isCorrect : false},
                {id: 2, text: "Phreaking ", isCorrect : true},
                { id: 3, text: "Phishing ", isCorrect: false}
            ],
        },
        {
            Questions: " Which of these methods is used to check the validity of a message? ",
            options: [
                { id: 0, text: "Protocol ", isCorrect : false },
                { id: 1, text: "digital signature", isCorrect : false},
                {id: 2, text: "message digest", isCorrect : true},
                { id: 3, text: "decryption algorithm", isCorrect: false}
            ],
        },

        {
            Questions: " Which of the following is typically used when hacking Wi-Fi? ",
            options: [
                { id: 0, text: "Wireshark ", isCorrect : false },
                { id: 1, text: "Aircrack-ng ", isCorrect : true},
                {id: 2, text: "Norton ", isCorrect : false},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },

        {
            Questions: " The Code Red is similar to a: ",
            options: [
                { id: 0, text: "Photo Editing Software ", isCorrect : false},
                { id: 1, text: "Antivirus Program ", isCorrect : false},
                {id: 2, text: "Video Editing Software ", isCorrect : false},
                { id: 3, text: "Computer Virus ", isCorrect: true}
            ],
        },

        {
            Questions: " Which of these was the first antivirus software ever created? ",
            options: [
                { id: 0, text: "Reaper ", isCorrect : true },
                { id: 1, text: "Ray Tomlinson", isCorrect : false},
                {id: 2, text: "Creeper", isCorrect : false},
                { id: 3, text: "Tinkered ", isCorrect: false}
            ],
        },

        {
            Questions: " The DNS would convert any domain name into: ?",
            options: [
                { id: 0, text: "Hex ", isCorrect : false },
                { id: 1, text: "Binary ", isCorrect : false},
                {id: 2, text: "URL", isCorrect : true},
                { id: 3, text: "IP", isCorrect: false}
            ],
        },

        {
            Questions: " The most important step in system hacking is: _____",
            options: [
                { id: 0, text: "Cracking passwords ", isCorrect : true },
                { id: 1, text: "Covering tracks ", isCorrect : false},
                {id: 2, text: "Information gathering ", isCorrect : false},
                { id: 3, text: "None of the above ", isCorrect: false}
            ],
        },

        {
            Questions: " Pick one of the following methods for hiding information inside a picture",
            options: [
                { id: 0, text: "Image Rendering ", isCorrect : false },
                { id: 1, text: "Steganography ", isCorrect : true},
                {id: 2, text: "Rootkits ", isCorrect : false},
                { id: 3, text: "bitmapping", isCorrect: false}
            ],
        },
        
        {
            Questions: "	Junk e-mail is also called",
            options: [
                { id: 0, text: "spam", isCorrect : true },
                { id: 1, text: "spoof", isCorrect : false},
                {id: 2, text: "sniffer script", isCorrect : false},
                { id: 3, text: "spool", isCorrect: false}
            ],
        },

        {
            Questions: "	Back up of the data files will help to prevent .",
            options: [
                { id: 0, text: "loss of confidentiality", isCorrect : false },
                { id: 1, text: "duplication of data", isCorrect : false},
                {id: 2, text: "virus infection", isCorrect : false},
                { id: 3, text: "loss of data", isCorrect: true}
            ],
        },

        {
            Questions: " What ethical principle involves the responsibility to report security vulnerabilities to appropriate parties?",
            options: [
                { id: 0, text: "Integrity", isCorrect : false },
                { id: 1, text: "Confidentiality", isCorrect : false},
                {id: 2, text: "Responsibility", isCorrect : true},
                { id: 3, text: "Accountability", isCorrect: false}
            ],
        },
//software engineering 100level
                {
            Questions: "Which unit is responsible for converting the data received from the user into computer understandable format?",
            options: [
                { id: 0, text: "memory unit", isCorrect : false },
                { id: 1, text: "arithmetic & logic unit", isCorrect : false},
                {id: 2, text: "input unit", isCorrect : true},
                { id: 3, text: "output unit", isCorrect: false}
            ],
        },
        {
            Questions: " The only language which the computer understands is ______________",
            options: [
                { id: 0, text: "high level language", isCorrect : false },
                { id: 1, text: "BASIC", isCorrect : false},
                {id: 2, text: "binary language", isCorrect : true},
                { id: 3, text: "assembly language",isCorrect: false}
            ],
        },
        {
            Questions: "	The smallest unit of data in computer is ________________?",
            options: [
                { id: 0, text: "byte", isCorrect : false },
                { id: 1, text: "nibble", isCorrect : false},
                {id: 2, text: "bit", isCorrect : true},
                { id: 3, text: "kilobyte", isCorrect: false}
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
            Questions: "The input machine which originated in the United States around 1880s is a ___________?",
            options: [
                { id: 0, text: "bar code reader", isCorrect : false },
                { id: 1, text: "keyboard", isCorrect : true},
                {id: 2, text: "joystick", isCorrect : false},
                { id: 3, text: "mouse ", isCorrect: false}
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
            Questions: "The process of producing useful information for the user is called ___________?",
            options: [
                { id: 0, text: "processing", isCorrect : false },
                { id: 1, text: "inputing", isCorrect : false},
                {id: 2, text: "outputing", isCorrect : true},
                { id: 3, text: "controlling", isCorrect: false}
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
            Questions: "Line Printers that print one line at a time are _________?",
            options: [
                { id: 0, text: "Inkjet Printers", isCorrect : false },
                { id: 1, text: "Laser Printers", isCorrect : false},
                {id: 2, text: "drum printers", isCorrect : true},
                { id: 3, text: "Chain Printers", isCorrect: false}
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
            Questions: " which data structure follows the last in, first out (LIFO) principle?",
            options: [
                { id: 0, text: "queue", isCorrect : false },
                { id: 1, text: "stack", isCorrect : true},
                {id: 2, text: "linked list", isCorrect : false},
                { id: 3, text: "tree", isCorrect: false}
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
            Questions: " what is version control in software engineering used for?",
            options: [
                { id: 0, text: "testing software", isCorrect : false },
                { id: 1, text: "tracking changes in software code ", isCorrect : true},
                {id: 2, text: "writing documentation ", isCorrect : false},
                { id: 3, text: "deploying software", isCorrect: false}
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
            Questions: " what is the binary representation of decimal number 10?",
            options: [
                { id: 0, text: "1010", isCorrect : true },
                { id: 1, text: "1000", isCorrect : false},
                {id: 2, text: "1110", isCorrect : false},
                { id: 3, text: "1100", isCorrect: false}
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
            Questions: " Which of the following best describes software engineering??",
            options: [
                { id: 0, text: "Writing code in multiple programming languages", isCorrect : false },
                { id: 1, text: "The application of a systematic approach to software design", isCorrect : true},
                {id: 2, text: "the study of computer hardware components", isCorrect : false},
                { id: 3, text: "Fixing bugs in a software application", isCorrect: false}
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
            Questions: " which of the following is not a type of computer software?",
            options: [
                { id: 0, text: "operating system", isCorrect : false },
                { id: 1, text: "hardware", isCorrect : true},
                {id: 2, text: "application software", isCorrect : false},
                { id: 3, text: "system software", isCorrect: false}
            ],
        },
        {
            Questions: " which of the following is an example of an operating system?",
            options: [
                { id: 0, text: "microsoft office", isCorrect : false },
                { id: 1, text: "linux", isCorrect : true},
                {id: 2, text: "adobe photoshop", isCorrect : false},
                { id: 3, text: "google chrome", isCorrect: false}
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
            Questions: " data can be a word, number , a picture or a sound?",
            options: [
                { id: 0, text: "false", isCorrect : false },
                { id: 1, text: "true", isCorrect : true},
                {id: 2, text: "not sure", isCorrect : false},
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