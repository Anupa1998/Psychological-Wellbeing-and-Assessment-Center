import React from 'react'

const AboutSectionFourth = () => {
    return (
        <section className='px-6 lg:px-24 py-16'>
            <h2 className="text-3xl font-bold text-cusred mb-4 ">Overview of the Process</h2>
            <p className="text-lg leading-relaxed">
                You can walk in or schedule an appointment. After your first contact, you might start with a brief screening
                or a psychological first aid session. Based on your needs, we may refer you to:
            </p>
            <ul className="list-[square] list-inside mt-4 space-y-2 text-lg pl-4">
                <li>CaPSU (Counselling and Psychological Support Unit)</li>
                <li>Group sessions or skill-building workshops</li>
                <li>Comprehensive psychological assessments</li>
                <li>Psychiatric Unit at Peradeniya Teaching Hospital (for urgent cases)</li>
            </ul>
            <p className="mt-4 text-lg">
                All services are confidential, stigma-free, and designed to support your unique journey.
            </p>
        </section>
    )
}

export default AboutSectionFourth