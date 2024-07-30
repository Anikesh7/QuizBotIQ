import React from 'react'

function Card(props) {
  return (
    <div class="h-60 flex">

      <card class="relative h-[30rem] sm:h-52 w-[15rem] rounded-lg cursor-pointer">

    {/* Background image*/}
        <img src={props.url} class="object-cover w-full h-full rounded-lg" />

    {/* Content */}
        <div class="absolute w-full h-full bottom-0 hover:bg-gradient-to-r from-fuchsia-700/30 to-violet-700 rounded-lg flex flex-col items-center justify-center text-center">

        {/* Title */}
          <p class="text-base font-bold px-14 text-gray-300 mt-3">
            {props.title}
          </p>

        </div>

      </card>

    </div>
  )
}

export default Card