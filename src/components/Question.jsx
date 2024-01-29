import React, { useState ,createContext, useContext } from 'react';
// import Page from './Page';
import Layout from './layout';
// import Images from './Images/coding.png';

export const userContext = React.createContext()


function Question() {

    
    const myArray = [
        {
            Questions: "which of the following device is used only in LAN (local area network)?",
            options: [
                { id: 0, text: "modem", isCorrect : false },
                { id: 1, text: "router", isCorrect : false},
                {id: 2, text: "NIC", isCorrect : true},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },
        {
            Questions: "what is the output of the following code? def calculate (num1,num2); res= num1 * num2 print(res) calculate(5,6)",
        
            options: [
                { id: 0, text: "20", isCorrect : false },
                { id: 1, text: "30", isCorrect : true},
                {id: 2, text: "11", isCorrect : false},
                { id: 3, text: "null", isCorrect: false}
            ],
        },

        {
            Questions: "what does the term software development stand for?",
            options: [
                { id: 0, text: "designing computer networks", isCorrect : false },
                { id: 1, text: "creating hardware components of a computer system", isCorrect : false},
                {id: 2, text: "learning how to trade online", isCorrect : false},
                { id: 3, text: "creating solutions to problems using models and programs that are programmed", isCorrect: true}
            ],
        },

        {
            Questions: "what is the output of the following x = 24/8 * (3+3)* 4+2 print(x)?",
            options: [
                { id: 0, text: "108.0", isCorrect : true },
                { id: 1, text: "32", isCorrect : false},
                {id: 2, text: "105", isCorrect : false},
                { id: 3, text: "10.8", isCorrect: false}
            ],
        },

        {
            Questions: "the term _______ designates a piece of software that might be added to a computer system to enhance its functionality?",
            options: [
                { id: 0, text: "cable", isCorrect : false },
                { id: 1, text: "peripheral device", isCorrect : false},
                {id: 2, text: "an add-on", isCorrect : true},
                { id: 3, text: "all of the above", isCorrect: false}
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
            Questions: "what is the use of a compiler in programming?",
            options: [
                { id: 0, text: "used to convert numbers to text", isCorrect : false },
                { id: 1, text: "converts user written code to what a computer can understand", isCorrect : true},
                {id: 2, text: "none of the above", isCorrect : false},
                { id: 3, text: "error checking", isCorrect: false}
            ],
        },

        {
            Questions: "Pick one that is not a programming language?",
            options: [
                { id: 0, text: "HTML", isCorrect : true },
                { id: 1, text: "Javascript", isCorrect : false},
                {id: 2, text: "Ada", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: "which of the following statement is not correct?",
            options: [
                { id: 0, text: "HTML and javaScript are programming languages", isCorrect : true },
                { id: 1, text: "SQL is used in dbms", isCorrect : false},
                {id: 2, text: "Python is a good language to learn as a beginner", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: "in programming, what are comments used for?",
            options: [
                { id: 0, text: "used to explain a piece of code ", isCorrect : true },
                { id: 1, text: "an abstraction in a piece of code", isCorrect : false},
                {id: 2, text: "helps in looping code", isCorrect : false},
                { id: 3, text: "is a function", isCorrect: false}
            ],
        },

        {
            Questions: "_______ is an immutable data structure?",
            options: [
                { id: 0, text: "lists", isCorrect : false },
                { id: 1, text: "array", isCorrect : false},
                {id: 2, text: " relative database", isCorrect : false},
                { id: 3, text: "maps", isCorrect: true}
            ],
        },

        {
            Questions: "which of the following is not a backend development language?",
            options: [
                { id: 0, text: "JavaScript", isCorrect : false },
                { id: 1, text: "SQL", isCorrect : false},
                {id: 2, text: "Python", isCorrect : false},
                { id: 3, text: "Ada", isCorrect: true}
                
            ],
        },

        {
            Questions: "which of the following is a compiled programming language ?",
            options: [
                { id: 0, text: "python", isCorrect : false },
                { id: 1, text: "HTML", isCorrect : false},
                {id: 2, text: "Javascript", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: true}
            ],
        },
        {
            Questions: "what is message passing in OOP?",
            options: [
                { id: 0, text: "involves specifying the name of an object and name of the variable to be sent ", isCorrect : false },
                { id: 1, text: "interaction and exchanging informations across components", isCorrect : true},
                {id: 2, text: "sending message across computers", isCorrect : false},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },

        {
            Questions: "what is looping in programming?",
            options: [
                { id: 0, text: "data that changes over time", isCorrect : false },
                { id: 1, text: "cycling through set of instructions until a condition is met", isCorrect : false},
                {id: 2, text: "putting information into the computer and generating an output display", isCorrect : true},
                { id: 3, text: "i don't know!", isCorrect: false}
            ],
        },
        {
            Questions: "what is the output of the following code?",
            code: "var1 = 1, var2 = 2, var3 = '3', print(var1 + var2 + var3)",
            options: [
                { id: 0, text: "6", isCorrect : false },
                { id: 1, text: "2", isCorrect : false},
                {id: 2, text: "123", isCorrect : false},
                { id: 3, text: "null", isCorrect: true}
            ],
        },

        {
            Questions: "which of the following is not a loop?",
            options: [
                { id: 0, text: "for loop", isCorrect : false },
                { id: 1, text: "while loop", isCorrect : false},
                {id: 2, text: "if loop", isCorrect : true},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: "which of the following defines the term array in programming?",
            options: [
                { id: 0, text: "an array is a data structure, which can store a fixed collection of elements of the same data type", isCorrect : true},
                { id: 1, text: "an array is a HTML keyword", isCorrect : false},
                {id: 2, text: "is a type of loop", isCorrect : false},
                { id: 3, text: "is not used in javascript", isCorrect: false}
            ],
        },

        {
            Questions: "who developed c++?",
            options: [
                { id: 0, text: "your mom", isCorrect : false },
                { id: 1, text: "jason statham", isCorrect : false},
                {id: 2, text: "terry crews", isCorrect : false},
                { id: 3, text: "bjarne stroustrup", isCorrect: true}
            ],
        },

        {
            Questions: "I need to create website for my friend to use for selling shoes. which of the following programming languages am i likely to use?",
            options: [
                { id: 0, text: "context-based markup language and Javascript", isCorrect : true },
                { id: 1, text: "PHP and SQL", isCorrect : false},
                {id: 2, text: "PHP and Javascript", isCorrect : false},
                { id: 3, text: "none of the above", isCorrect: false}
            ],
        },

        {
            Questions: "what is namespace in C++?",
            options: [
                { id: 0, text: "brings all the identifiers in std to the current global scope", isCorrect : true },
                { id: 1, text: "it is used to start a c++ program ", isCorrect : false},
                {id: 2, text: "it is a function used to identify a certain codespace", isCorrect : false},
                { id: 3, text: "all of the above", isCorrect: false}
            ],
        },

        {
            Questions: "who is the first female programmer?",
            options: [
                { id: 0, text: "grace hopper", isCorrect : false },
                { id: 1, text: "ada lovelace", isCorrect : true},
                {id: 2, text: "maria mitchell", isCorrect : false},
                { id: 3, text: "L.F Menabrea", isCorrect: false}
            ],
        },
        
        {
            Questions: "which of the following has to do with java?",
            options: [
                { id: 0, text: "iostream", isCorrect : false },
                { id: 1, text: "jsx", isCorrect : false},
                {id: 2, text: "print()", isCorrect : false},
                { id: 3, text: "public class main", isCorrect: true}
            ],
        },

        {
            Questions: "what system is most popular among cyber security?",
            options: [
                { id: 0, text: "windows", isCorrect : false },
                { id: 1, text: "macOs", isCorrect : false},
                {id: 2, text: "linux/unix", isCorrect : true},
                { id: 3, text: "alienware", isCorrect: false}
            ],
        },

        {
            Questions: "what aspect of somputer science is quite popular in this age?",
            options: [
                { id: 0, text: "data analysis", isCorrect : false },
                { id: 1, text: "software development", isCorrect : false},
                {id: 2, text: "cyber secuirty", isCorrect : false},
                { id: 3, text: "all of the above", isCorrect: true}
            ],
             greetings : "Thank you for  coming this far"

        }
        
    ]

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