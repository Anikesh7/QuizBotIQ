import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
let selectedAnswers = [];

function Test({ final, topic }) {
    // To store current questions
    const [currentGame, setCurrentGame] = useState([]);
    // To store all answer option
    const [currentAnswer, setCurrentAnswer] = useState({});
    // To store correct answer
    //const [correctAnswer, setCorrectAnswer] = useState();
    // To store current question
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // To store player score
    //const [currentScore, setCurrentScore] = useState(0);
    // to store the index of the answer user selected
    const [userAnswer, setUserAnswer] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    // to stop running currentQuestion useEffect first time
    const effectRan = useRef(false);

    // To get the data from api
    async function gameData() {
        try {
            const url = `${import.meta.env.VITE_API_URL}quiz?topic=${topic}`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const data = await response.json();
            setCurrentGame(data);
            setCurrentAnswer(data[currentQuestion].options);
            //setCorrectAnswer(data[currentQuestion].correct_answer_index);
            effectRan.current = true;
        } catch (error) {
            navigate('/error_500');
        }

    }

    // To run fetch the api once and reset the user selected answer array  
    useEffect(() => {
        gameData();
        selectedAnswers = [];
        effectRan.current = false;
    }, [topic]);

    // To store the correct answer and answers when the question is changed
    useEffect(() => {
        if (effectRan.current === true) {
            setCurrentAnswer(currentGame[currentQuestion].options);
            //setCorrectAnswer(currentGame[currentQuestion].correct_answer_index);    
        }
    }, [currentQuestion]);

    // To move the the question forward and if the answer is correct, increment the score
    function onNext() {
        setCurrentQuestion((prevValue) => (prevValue + 1) % 10);
        // if (userAnswer === correctAnswer) {
        //     setCurrentScore(prevValue => prevValue + 1);
        // }
    }

    // To move the question backward and if the answer is correct, increment the score
    function onPrevious() {
        if (currentQuestion === 0) {
            setCurrentQuestion(9);
        } else {
            setCurrentQuestion((prevValue) => prevValue - 1);
        }
        // if (userAnswer === correctAnswer) {
        //     setCurrentScore(prevValue => prevValue + 1);
        // }
    }

    // To highlight the div user has selected
    function activeDiv(index) {
        if (index === selectedAnswers[currentQuestion]) {
            return 'border-black border p-1 container cursor-pointer my-2 flex rounded-2xl hover:bg-green-400 hover:text-white items-center delay-50 bg-green-400'
        } else {
            return 'border-black border p-1 container cursor-pointer my-2 flex rounded-2xl hover:bg-green-400 hover:text-white items-center delay-50'
        }
    }

    // To store the answer selected by the user and its index
    function updateScore(ans, index) {
        setUserAnswer(ans);
        selectedAnswers[currentQuestion] = index;
    }

    // To store the current score in the final state to be passed to the submit page
    function submit() {
        let score = 0;
        for(let i=0;i<10;i++){
            if(selectedAnswers[i]==currentGame[i].correct_answer_index){
                  score+=1;
            }
        }
        final(score);
        navigate('/submit');
    }
    return (
        <>
            <div class='flex justify-center mt-10'>
                <h1>{topic}</h1>
            </div>
            <div>
                {/* <h1>{props.title}</h1> */}
                <div class='mx-32 my-10 shadow-lg p-14'>
                    <p class='float-right ml-6'>{currentQuestion + 1}/10 questions</p>
                    <p class='text-xl'>Q.{currentQuestion + 1} <span class='ml-3'>{currentGame[currentQuestion]?.question}</span></p>
                    <div >
                        {Object.keys(currentAnswer).map((answer, index) => {
                            if (currentAnswer[answer] !== null) {
                                return (
                                    <div key={index} onClick={(el) => updateScore(answer, index)} class={activeDiv(index)}>
                                        <div class='py-2 px-4 bg-cyan-400 rounded-2xl'>
                                            <p>{index + 1}</p>
                                        </div>
                                        <div class='ml-6'>{currentAnswer[answer]}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div class='flex justify-center mt-10'>
                        <button onClick={onPrevious} class='mx-4 p-3 bg-green-400 rounded-lg border hover:bg-white hover:border-green-500 hover:text-green-500 delay-100'>Previous</button>
                        <button onClick={onNext} class='mx-4 p-3 bg-green-400 rounded-lg border hover:bg-white hover:border-green-500 hover:text-green-500 delay-100'>Next</button>
                        <button onClick={submit} class='mx-4 p-3 bg-green-400 rounded-lg border hover:bg-white hover:border-green-500 hover:text-green-500 delay-100'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test