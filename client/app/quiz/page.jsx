'use client'
import Quiz from '@components/quiz'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import NProgress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'

const page = () => {

    const [currentGame, setCurrentGame] = useState([]);
    let selectedAnswers = []
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    let topic = searchParams.get('topic')
    let array = topic.split('%20');
    topic = ""
    for (let i = 0; i < array.length; i++) {
        topic = topic + array[i] + " "
    }

    Router.events.on('routeChangeStart',(url=>{
        NProgress.start();
    }))
    Router.events.on('routeChangeComplete',(url=>{
        NProgress.done();
    }))

    async function gameData() {
        
        const response = await fetch(`http://localhost:5000/quiz?no=5&topic=${topic}`);
        // const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=cXOOq3g4ZW4UfMSFUVkKoWGOnTOZFbbLhthZnGTv&limit=10&category=linux&tags=linux`);
        const data = await response.json();
        setCurrentGame(data);
        setLoading(false)
    }

    useEffect(() => {
        gameData();
    }, []);
    if (loading) return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            {/* <Image
                src='/loading.png'
                height={37}
                width={37}
            /> */}
        </div>
    )
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            <Quiz data={currentGame} selectedAnswers={selectedAnswers} topic={topic} />
        </>

    )
}

export default page