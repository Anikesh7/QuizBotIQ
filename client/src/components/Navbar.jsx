import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/quiz.png'
import { handleSuccess } from '../../utils';

function Navbar() {
    const [loggedInUser, setLoggedInUser] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    })

    const logout = (e)=>{
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('loggedInEmail');
        handleSuccess('User Loggedout');
        setTimeout(()=>{
            navigate('/login');
        },1500)
    }

    return (
        <>
            <nav class="flex items-center bg-gray-800 p-3 px-20 flex-wrap">
                <p class="p-2 mr-4 inline-flex items-center">
                    <img class='h-8 mr-2' src={logo} alt="logo" />
                    <span class="text-xl text-white font-bold uppercase tracking-wide"
                    >QuizBotIQ</span
                    >
                </p>
                {/* <button
                    class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                    data-target="#navigation"
                >
                    <i class="material-icons">menu</i>
                </button> */}
                <div
                    class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                    id="navigation"
                >
                    <div
                        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                    >
                        <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/">Home</NavLink>
                        </p>
                        {/* <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/">About</NavLink>
                        </p>
                        <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/contact">Contact Us</NavLink>
                        </p> */}
                        <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/profile">Hi, {loggedInUser}</NavLink>
                        </p>
                        <button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white" onClick={()=> logout()}>Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar