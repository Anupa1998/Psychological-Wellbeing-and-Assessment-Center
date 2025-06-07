import React from 'react'


const AboutUs = () => {
  return (
    <section className='py-24 px-6 lg:px-24'>
      {/* 3rd type */}
      <div className=" px-4 md:px-12 lg:px-20">
        <div className="space-y-12">

          {/* Who We Are */}
          <div data-aos="zoom-in" className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 relative inline-block after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cuswebyellow after:mt-1">
              Who We Are
            </h3>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The Psychological Wellbeing and Assessment Centre is a space within the University of Peradeniya that promotes emotional and mental wellness for students, staff, and their families. We believe early psychological support and preventive care build resilience in individuals and communities.
            </p>
          </div>

          {/* What We Do */}
          <div data-aos="zoom-in" className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 relative inline-block after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cuswebyellow after:mt-1">
              What We Do
            </h3>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We provide psychological first aid by trained professionals, and offer screenings, assessments, and referrals to the university’s CaPSU. We also host programs and workshops to promote mental health.
            </p>
          </div>

          {/* Our Mission */}
            <div data-aos="zoom-in" className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 relative inline-block after:block after:h-[2px] after:w-12 after:mx-auto after:bg-cuswebyellow after:mt-1">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                To create a mentally healthy campus through accessible, confidential psychological support, and empower individuals through education and wellbeing programs.
              </p>
            </div>
        </div>
      </div>
    </section>



  )
}

export default AboutUs