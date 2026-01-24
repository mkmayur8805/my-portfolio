import React from 'react'

const Head1 = ({ text, className }) => {
    return (
        <h3 className={`text-[8.5vw] lg:text-5xl text-black font-semibold dm-sans mt-5 capitalize leading-tight cursor-default ${className}`}>
            {text}
        </h3>
    )
}

export default Head1