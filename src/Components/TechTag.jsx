import React from 'react'

const TechTag = ({tag}) => {
  return (
    <div className='border border-(--primery-color) rounded-full px-3 py-1 hover:bg-(--primery-color) hover:text-white transition-colors duration-300 cursor-pointer'>{tag}</div>
  )
}

export default TechTag