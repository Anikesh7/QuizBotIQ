'use client'
import Link from 'next/link';
import Image from 'next/image'
import {useState, useEffect} from 'react'

const nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)
  const signOut = ()=>{

  }


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/quiz.png"
          alt="QuizBotIQ Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">QuizBotIQ</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Sign In
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Up
            </button>
            <Link href="/profile">
              <Image
                src='/no-user.png'
                width={37}
                height={37}
                unoptimized
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
          <div className="flex">
            <Image
              src='/quiz.png'
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
      </div>
    </nav>
  )
}

export default nav