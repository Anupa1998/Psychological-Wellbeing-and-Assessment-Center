import React from 'react'

const ResourcesCard = ({name}) => {
  return (
    <div className=' w-full bg-gray-100 rounded-lg p-4 border-l-4 border-cuswebyellow cursor-pointer'>
        <h3 className=' text-lg font-medium'>{name}</h3> 
    </div>
  )
}

export default ResourcesCard