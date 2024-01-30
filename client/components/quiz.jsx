"use client";

import { useState, useEffect } from 'react'
import axios from 'axios'

const quiz = ({data, selectedAnswers, topic}) => {
    
    // To store all answer option
    const [currentAnswer, setCurrentAnswer] = useState([]);
    // To store correct answer
    const [correctAnswer, setCorrectAnswer] = useState();
    // To store current question
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // To store player score
    const [currentScore, setCurrentScore] = useState(0);
    // to store the index of the answer user selected
    const [userAnswer, setUserAnswer] = useState();

    let questionNumber = data.length;
    useEffect(()=>{
        setCurrentAnswer(data[currentQuestion].options);
        setCorrectAnswer(data[currentQuestion].correct_answer_index);
    },[])

    useEffect(() => {
        setCurrentAnswer(data[currentQuestion].options);
        setCorrectAnswer(data[currentQuestion].correct_answer_index);    
    }, [currentQuestion]);

    function onNext() {
        setCurrentQuestion((prevValue) => (prevValue + 1) % questionNumber);
        if (userAnswer === correctAnswer) {
            setCurrentScore(prevValue => prevValue + 1);
        }
    }

    function onPrevious() {
        if (currentQuestion === 0) {
            setCurrentQuestion(questionNumber-1);
        } else {
            setCurrentQuestion((prevValue) => prevValue - 1);
        }
        if (userAnswer === correctAnswer) {
            setCurrentScore(prevValue => prevValue + 1);
        }
    }

    function activeDiv(index) {
        if (index === selectedAnswers[currentQuestion]) {
            return 'border-black border p-1 container cursor-pointer my-2 flex rounded-2xl hover:bg-green-400 hover:text-white items-center delay-50 bg-green-400'
        } else {
            return 'border-black border p-1 container cursor-pointer my-2 flex rounded-2xl hover:bg-green-400 hover:text-white items-center delay-50'
        }
    }

    function updateScore(ans, index) {
        setUserAnswer(ans);
        selectedAnswers[currentQuestion] = index;
    }
    
    function submit() {
        final(currentScore);
        navigate('/submit');
    }

    return (
        <>
            <div class='flex justify-center mt-10'>
                <h1>{topic}</h1>
            </div>
            <div>
                {/* <h1>{props.title}</h1> */}
                <div class='mx-15 my-10 shadow-lg p-7'>
                    <p class='float-right ml-6'>{currentQuestion + 1}/{questionNumber} questions</p>
                    <p class='text-xl'>Q.{currentQuestion + 1} <span class='ml-3'>{data[currentQuestion].question}</span></p>
                    <div >
                        {Object.keys(currentAnswer).map((answer, index) => {
                            if (currentAnswer[answer] !== null) {
                                return (
                                    <div key={index} onClick={(el) => updateScore(answer, index)} class={activeDiv(index)}>
                                        <div class='py-2 px-4 bg-cyan-400 rounded-2xl'>
                                            <p>{index + 1}</p>
                                        </div>
                                        <div class='ml-6'>{currentAnswer[answer].text}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div class='flex justify-center mt-10'>
                        <button onClick={onPrevious} class='mx-4 p-3 bg-green-400 rounded-lg border hover:bg-white hover:border-green-500 hover:text-green-500 delay-100'>Previous</button>
                        <button onClick={onNext} class='mx-4 p-3 bg-green-400 rounded-lg border hover:bg-white hover:border-green-500 hover:text-green-500 delay-100'>Next</button>
                        <button onClick={submit} class='mx-4 p-3 bg-amber-500 rounded-lg border text-white hover:bg-white hover:border-amber-500 hover:text-amber-500 delay-100'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default quiz