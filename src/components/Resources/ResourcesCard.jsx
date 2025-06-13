import React from 'react'

const ResourcesCard = ({name}) => {
  return (
    <div className='p-4 w-full customShadow rounded-2xl border-l-4 border-l-cuswebyellow cursor-pointer'>
        <h3 className=' text-lg font-medium text-gray-800  inline-block duration-300 transition-all'>{name}</h3> 
    </div>
  )
}

export default ResourcesCard