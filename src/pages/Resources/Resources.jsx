import React from 'react'
import TitleHeader from '../../components/title/TitleHeader'
import ResourcesCard from '../../components/Resources/ResourcesCard'

const Resources = () => {
    return (
        <div>
            <TitleHeader>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                    Resources
                </h2>
            </TitleHeader>

            <section className="py-16 px-6 lg:px-24">
                <div className=' space-y-4'>
                    <ResourcesCard name={'Mental health tips.'} />
                    <ResourcesCard name={'Downloadable self-help materials.'} />
                    <ResourcesCard name={'Recommended books, videos, or apps.'} />
                </div>
            </section>
        </div>
    )
}

export default Resources