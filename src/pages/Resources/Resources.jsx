import React from 'react'
import TitleHeader from '../../components/title/TitleHeader'
import ResourcesCard from '../../components/Resources/ResourcesCard'

const Resources = () => {
    return (
        <div>
            <TitleHeader>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
                    Mental Health Resources
                </h2>

                <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                    Practical advice to help you stay emotionally balanced and mentally strong.
                </p>
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