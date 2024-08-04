import React,{useState, useEffect} from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import linuxLogo from '../assets/linux-svgrepo-com.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import { ToastContainer } from 'react-toastify'

function Home({ setTopic }) {

  return (
    <>
      <Navbar />
      <div class='py-36 px-20 flex justify-center bg-gray-800'>
        <div>
          <h1 class='text-white font-semibold text-5xl'>Animesh MADARCHOD</h1>
        </div>
        <div>
          <p class="mt-4 text-lg text-gray-100">
            Sala Harami
          </p>
        </div>
      </div>
      <div class='mt-24'>
        <h1 class='flex justify-center mt-8 text-3xl'>Our Topics</h1>
        <h1 class='flex justify-center my-14  text-lg'>Test your skills with our top topics with a variaty of questions set for beginners and seniors alike!</h1>
      </div>
      <Feed setTopic={setTopic} />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Home