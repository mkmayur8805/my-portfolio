import React from 'react'

const Para = ({ text, className }) => {
  return (
    <p className={`capitalize text-[4.2vw] lg:text-lg font-dm-sans text-zinc-600 cursor-default ${className}`}>
        {text} 
      </p>
  )
}

export default Para