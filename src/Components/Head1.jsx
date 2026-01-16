import React from 'react'

const Head1 = ({ text, className }) => {
    return (
        <h3 className={`text-5xl text-black font-semibold font-dm-sans mt-5 capitalize leading-14 cursor-default ${className}`}>
            {text}
        </h3>
    )
}

export default Head1