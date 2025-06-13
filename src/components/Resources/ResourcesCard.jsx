import React from 'react'

const ResourcesCard = ({name}) => {
  return (
    <div className='group item w-full customShadow rounded-lg p-4 border-l-4 border-l-cuswebyellow cursor-pointer'>
        <h3 className=' text-lg font-medium text-gray-800  inline-block group-hover:text-gray-50 duration-300 transition-all'>{name}</h3> 
    </div>
  )
}

export default ResourcesCard