import React from 'react'
import backgroundImage from '../../assets/backgroundimage.jpg'


const Quotes = () => {
    return (
        <div
            className="bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center h-[50vh]"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Or use a URL directly
        >
            <div className=" p-8 rounded-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et laboriosam, molestiae autem, impedit placeat, maxime aspernatur provident repudiandae quaerat itaque alias? Temporibus, sint non delectus quam sequi id eius rem.
            </div>
        </div>

    )
}

export default Quotes