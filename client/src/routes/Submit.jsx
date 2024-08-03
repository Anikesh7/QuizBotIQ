import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Submit({ final, topic }) {
    const navigate = useNavigate();
    function change() {
        navigate('/');
    }
    let date = new Date().toLocaleDateString()
        .split("/")
        .map((d) => (d.length <= 1 ? "0" + d : d));

    let newDate = `${date[1]}/${date[0]}/${date[2]}`;
    let score = {correct : final, total : 10, topic : topic, date : newDate};
    async function updateScore() {
        const e = localStorage.getItem('loggedInEmail')
        const url = `${import.meta.env.VITE_API_URL}:4000/user/updateScore?email=${e}`;
        
        const response = await fetch(url, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(score)
          });
        const result = await response.json();
    }

    useEffect(()=>{
        updateScore();
    },[])

    return (
        <>
            <Navbar />
            <div class='flex items-center flex-col'>
                <div class='shadow-lg h-auto mt-32 w-60 flex justify-center p-3'>
                    <h1 class='text-2xl text-teal-500 '>Your Score:   </h1>
                    <h2 class='text-2xl text-orange-500 '>{final}/10</h2>
                </div>
                <div class='mt-10'>
                    {/* <button onClick={again} class='mx-6 bg-green-400 border hover:bg-white hover:border-green-500 hover:text-green-500 rounded-lg p-3 delay-100'>Try Again</button> */}
                    <button onClick={change} class='mx-6 bg-green-400 border hover:bg-white hover:border-green-500 hover:text-green-500 rounded-lg p-3 delay-100'>Change Topic</button>
                </div>
                <div class='mt-10'>
                    {/* <button onClick={again} class='mx-6 bg-green-400 border hover:bg-white hover:border-green-500 hover:text-green-500 rounded-lg p-3 delay-100'>Try Again</button> */}
                    <button onClick={()=> navigate('/profile')} class='mx-6 bg-green-400 border hover:bg-white hover:border-green-500 hover:text-green-500 rounded-lg p-3 delay-100'>Check Previous Scores</button>
                </div>
            </div>
        </>
    )
}

export default Submit