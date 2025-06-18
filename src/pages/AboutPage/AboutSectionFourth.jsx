import React from 'react'

const AboutSectionFourth = () => {
    return (
        <section className='px-6 lg:px-24 py-16 cursor-default'>
            <div className='customShadow p-8 rounded-2xl'>
                <h2 className="text-3xl font-bold text-cusred mb-4 md:border-b-2 underline lg:no-underline decoration-cuswebyellow border-cuswebyellow inline-block">Overview of the Process</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                    You can walk in or schedule an appointment. After your first contact, you might start with a brief screening
                    or a psychological first aid session. Based on your needs, we may refer you to:
                </p>
                <ul className="list-[square] list-inside mt-4 space-y-2 text-lg pl-4 text-gray-800 marker:text-cuswebyellow">
                    <li>CaPSU (Counselling and Psychological Support Unit)</li>
                    <li>Group sessions or skill-building workshops</li>
                    <li>Comprehensive psychological assessments</li>
                    <li>Psychiatric Unit at Peradeniya Teaching Hospital (for urgent cases)</li>
                </ul>
                <p className="mt-4 text-lg text-gray-800">
                    All services are confidential, stigma-free, and designed to support your unique journey.
                </p>
            </div>
        </section>
    )
}

export default AboutSectionFourth