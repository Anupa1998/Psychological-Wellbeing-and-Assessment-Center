import React from 'react'
import { useParams } from "react-router-dom";
import { data } from '../../datasets/newseventData'

const SingleNewsEvent = () => {
    const { newsid } = useParams();
    const news = data.find((news) => news.id === newsid);

    if (!news) {
        <h2>Couldnt find</h2>
    }

    return (
        <section className='py-16 px-6 lg:px-24'>

            <div>
                <div className=' grid md:grid-cols-2 grid-cols-1  gap-8'>
                    <div className=' max-h-80 w-full overflow-hidden bg-amber-50' >
                        <img src={news.img} alt="" className=' object-cover' />
                    </div>

                    <div className=' flex items-center'>
                        <h2 className=' text-2xl lg:text-3xl font-semibold  text-gray-800'>{news.name}</h2>
                    </div>
                </div>

                <div className=' mt-8'>
                    <p>{news.description}</p>
                </div>
            </div>

        </section>
    )
}

export default SingleNewsEvent