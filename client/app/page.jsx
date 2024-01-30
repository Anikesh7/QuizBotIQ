'use client'

import Feed from '../components/feed'
import Nav from '../components/nav'

function page() {
  const handleSearchChange = () =>{

  }

  return (
    <>
    <Nav />
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Your Knowledge Playground
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
                "Unleash Your Quiz Genius"
            </span>
        </h1>
        <p className="desc text-center">
        Welcome to QuizGenius, where knowledge meets excitement! Immerse yourself in a world of engaging quizzes powered by ChatGPT, covering a spectrum of fascinating topics. Unleash your curiosity, challenge your intellect, and embark on a journey of discovery. Let the quiz quest begin – because brilliance starts with a question!
        </p>
        <Feed />
    </section>
    </>
  )
}

export default page