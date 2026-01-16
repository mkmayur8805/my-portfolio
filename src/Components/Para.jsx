import React from 'react'

const Para = ({ text, className }) => {
  return (
    <p className={`capitalize text-lg font-dm-sans text-zinc-600 ${className}`}>
        {text} 
      </p>
  )
}

export default Para