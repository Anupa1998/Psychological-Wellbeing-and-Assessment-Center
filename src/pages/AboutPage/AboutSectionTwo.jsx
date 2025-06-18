import React from 'react'


const AboutSectionTwo = () => {
    return (
        <div className='px-6 lg:px-24 py-16 cursor-default'>
            <div className="">
                {/* Section: Who is it For */}
                <section className=' text-left customShadow p-8  rounded-2xl'>
                    <h2 className="text-3xl font-bold text-cusred mb-4 md:border-b-2 underline lg:no-underline decoration-cuswebyellow border-b-cuswebyellow inline-block ">Who the Centre is For</h2>
                    <p className="text-lg leading-relaxed text-gray-800">
                        The Psychological Wellbeing and Assessment Centre serves the entire University of Peradeniya community, including students, academic staff, and non-academic staff.
                        <br /> <br />
                        It is designed for anyone seeking support for emotional wellbeing, personal development, academic or professional growth, or psychological assessment.


                        <br /> <br />
                        <span className=' font-semibold text-gray-800'>
                            Whether facing immediate challenges, planning for future success, or looking to build resilience and life skills, individuals at all stages of their journey are welcome.
                        </span>
                    </p>
                </section>


                {/* Section: Brief Introduction */}
                <section className=' text-left mt-16 customShadow p-8 rounded-2xl'>
                    <h2 className="text-3xl font-bold text-cusred mb-4 md:border-b-2 underline lg:no-underline decoration-cuswebyellow border-cuswebyellow inline-block">A Brief Introduction</h2>
                    <p className="text-lg leading-relaxed text-gray-800">
                        The Centre is committed to enhancing the emotional, social, and academic wellbeing of the university community. <br /> <br />
                        We offer a range of services including counselling, coaching, skills workshops, and personalized psychological assessments—focusing on both prevention and support. <br /><br />
                        By helping individuals identify their strengths, build resilience, and develop life skills, the centre fosters personal growth while promoting a supportive environment that encourages help-seeking and reduces stigma around mental health. <br /><br />
                        Conveniently located at the heart of the university, we offer confidential services in a welcoming, comfortable setting. Whether it’s crisis support, career counselling, or personal development workshops, we help our university community thrive.

                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutSectionTwo