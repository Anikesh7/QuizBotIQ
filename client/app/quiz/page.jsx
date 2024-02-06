'use client'
import Quiz from '@components/quiz'
import Query from '@components/query'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef } from 'react'
import Image from 'next/image'
import NProgress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'

const page = () => {

    const [currentGame, setCurrentGame] = useState([]);
    let selectedAnswers = [];
    const [loading, setLoading] = useState(true);
    const [gotTopic, setGotTopic] = useState(false)
    const router = useRouter();
    const [topic, setTopic] = useState("");
    const effectRan = useRef(false);

    Router.events.on('routeChangeStart', (url => {
        NProgress.start();
    }))
    Router.events.on('routeChangeComplete', (url => {
        NProgress.done();
    }))
    async function gameData() {

        const response = await fetch(`http://localhost:5000/quiz?no=5&topic=${topic}`);
        // const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=cXOOq3g4ZW4UfMSFUVkKoWGOnTOZFbbLhthZnGTv&limit=10&category=linux&tags=linux`);
        const data = await response.json();
        setCurrentGame(data);
        setLoading(false);
       
    }

    useEffect(() => {
        if(gotTopic){
            gameData();
        }
    }, [topic]);

    if (loading) return (
        //     <div>
        //         <Head>
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        //         </Head>
        //         {/* <Image
        //             src='/loading.png'
        //             height={37}
        //             width={37}
        //         /> */}
        //     </div>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Query setTopic={setTopic} setGotTopic={setGotTopic} />
        </Suspense>
        
    )
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            {!loading && <Quiz data={currentGame} selectedAnswers={selectedAnswers} topic={topic} />}
        </>

    )
}

export default page