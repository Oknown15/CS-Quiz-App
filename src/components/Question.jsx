import React, { useState ,createContext, useContext } from 'react';
import Layout from './layout';

export const userContext = React.createContext()

function Question() {
   
    const [myArray, setMyArray] = useState([
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