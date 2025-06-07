import React from 'react'

const ImageSet = () => {
  return (
    <section className="h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="w-full h-[50vh] overflow-hidden">
        <img
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Image 1"
        />
      </div>

      <div className="w-full h-[50vh] overflow-hidden">
        <img
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1536748212969-6f77feeff225?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Image 2"
        />
      </div>

      <div className="w-full h-[50vh] overflow-hidden">
        <img
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1592311675507-00555370829d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
          alt="Image 3"
        />
      </div>

      <div className="w-full h-[50vh] flex flex-col">
        <div className="h-1/2 overflow-hidden">
          <img
            className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
            src="https://images.unsplash.com/photo-1521727696769-849d83dd59db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Image 4"
          />
        </div>
        <div className="h-1/2 flex items-center justify-center bg-amber-300 text-lg font-semibold text-gray-800 hover:bg-amber-400 transition duration-300">
          Explore More
        </div>
      </div>
    </section>
  )
}

export default ImageSet