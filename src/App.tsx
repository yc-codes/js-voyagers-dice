import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

function getRandom(max: number, min: number) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}

const timing = 1 * 1000

const data: Item[] = [
  {
    "question": "What is JavaScript?",
    "options": [
      "A programming language for creating presentations",
      "A markup language for structuring web content",
      "A scripting language for adding interactivity to web pages",
      "A database management system"
    ],
    "answer": 2
  },
  {
    "question": "What is the correct way to declare a variable in JavaScript?",
    "options": [
      "var = myVariable;",
      "variable myVariable;",
      "const myVariable;",
      "let myVariable;"
    ],
    "answer": 3
  },
  {
    "question": "Which of the following is NOT a valid JavaScript data type?",
    "options": [
      "string",
      "boolean",
      "float",
      "object"
    ],
    "answer": 2
  },
  {
    "question": "What does the \"===\" operator do in JavaScript?",
    "options": [
      "Checks if two values are equal, irrespective of their data types",
      "Assigns a value to a variable",
      "Checks if two values are equal and have the same data type",
      "Performs a logical OR operation between two values"
    ],
    "answer": 2
  },
  {
    "question": "What is the purpose of the \"addEventListener\" method in JavaScript?",
    "options": [
      "It creates a new HTML element on the page",
      "It modifies the CSS styles of an element",
      "It adds event handlers to HTML elements",
      "It changes the page URL"
    ],
    "answer": 2
  },
  {
    "question": "What is the output of the following code?\n\nvar x = 5;\nconsole.log(x + 2 + \"3\");",
    "options": [
      "523",
      "7",
      "57",
      "\"73\""
    ],
    "answer": 3
  },
  {
    "question": "Which statement is used to exit or end a loop prematurely in JavaScript?",
    "options": [
      "return",
      "continue",
      "break",
      "exit"
    ],
    "answer": 2
  },
  {
    "question": "How do you create a function in JavaScript?",
    "options": [
      "function = myFunction() {}",
      "create myFunction() {}",
      "new function myFunction() {}",
      "function myFunction() {}"
    ],
    "answer": 3
  },
  {
    "question": "What does the \"localStorage\" object in JavaScript do?",
    "options": [
      "Allows you to store files on the user's local machine",
      "Provides access to the user's webcam and microphone",
      "Enables communication with the server in real-time",
      "Allows you to store data on the user's web browser locally"
    ],
    "answer": 3
  },
  {
    "question": "How can you convert a string to an integer in JavaScript?",
    "options": [
      "int(\"42\")",
      "parseInt(\"42\")",
      "toInt(\"42\")",
      "\"42\".toInteger()"
    ],
    "answer": 1
  }
]

function getRandomElementFromArray(): Item {
  return data[Math.floor(Math.random() * data.length)];
}

interface Item {
  question: string;
  options: string[];
  answer: number;
}

function App() {

  const [question, setQuestion] = useState<Item | undefined>(undefined)

  const reGenerate = () => {
    setQuestion(undefined)
    var x = getRandom(24, 3);
    var y = getRandom(24, 3);

    const cube = document.getElementById("cube")
    if (cube) cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`

    setTimeout(() => {
      setQuestion(getRandomElementFromArray())
    }, timing);
  }

  return (
    <div className="w-full flex pt-[10vh] lg:pt-[16vh] h-screen">

      <div className='container mx-auto'>
        <div id="cube" onClick={reGenerate}>
          <div className="front">
            <span className="dot dot1"></span>
          </div>
          <div className="back">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
          </div>
          <div className="right">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>
          <div className="left">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
          </div>
          <div className="top">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
          </div>
          <div className="bottom">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
            <span className="dot dot6"></span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl left-1/2 -translate-x-1/2 absolute px-4 w-full top-1/2 text-white">
        <AnimatePresence>
          {question &&
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className='text-4xl font-extrabold mb-6'>{question.question}</h2>
              <ol className='list-decimal text-xl font-medium space-y-2 pl-6'>
                {question.options.map((v, i) => <li key={i} className=''>{v}</li>)}
              </ol>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
