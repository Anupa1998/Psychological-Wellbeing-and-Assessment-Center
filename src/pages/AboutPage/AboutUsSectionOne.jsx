import React from 'react'
import imgOne from '../../assets/backgroundimage.jpg'


const AboutUsSectionOne = () => {
  return (
    // <div className="font-sans text-gray-800">
    //   {/* Hero Banner */}
    //   <div className="relative h-80 lg:h-[400px] mb-16">
    //     <img
    //       src={imgOne}
    //       alt="Wellbeing Support"
    //       className="w-full h-full object-cover rounded-b-2xl shadow"
    //     />
    //     <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    //       <h1 className="text-white text-4xl lg:text-5xl font-bold text-center px-4">
    //         About Us
    //       </h1>
    //     </div>
    //   </div>

    //   <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
    //     {/* Section 1: Who the Centre is For */}
    //     <section className="grid lg:grid-cols-2 gap-12 items-center">
    //       <div>
    //         <h2 className="text-3xl font-bold text-cusred mb-4">Who the Centre is For</h2>
    //         <p className="text-lg leading-relaxed">
    //           The Psychological Wellbeing and Assessment Centre serves the entire University of Peradeniya community,
    //           including students, academic staff, and non-academic staff. It's designed for anyone seeking support for
    //           emotional wellbeing, personal development, academic or professional growth, or psychological assessment.
    //           Whether facing immediate challenges, planning for future success, or building life skills—everyone is welcome.
    //         </p>
    //       </div>
    //       <img src={imgOne} alt="People at the Centre" className="rounded-xl shadow-lg w-full" />
    //     </section>

    //     {/* Section 2: Brief Introduction */}
    //     <section className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
    //       <img src={imgOne} alt="Counselling session" className="rounded-xl shadow-lg w-full" />

    //       <div>
    //         <h2 className="text-3xl font-bold text-cusred mb-4">A Brief Introduction</h2>
    //         <p className="text-lg leading-relaxed">
    //           The Centre is committed to enhancing the emotional, social, and academic wellbeing of the university community.
    //           We offer a range of services including counselling, coaching, workshops, and personalized psychological assessments—focusing
    //           on both prevention and support. We aim to reduce stigma, promote resilience, and foster personal growth in a welcoming, confidential setting.
    //         </p>
    //       </div>
    //     </section>

    //     {/* Call to Action Footer */}
    //   <div className="mt-24 bg-cusred text-white py-12 text-center">
    //     <h2 className="text-2xl lg:text-3xl font-semibold mb-4">We’re here to help you thrive.</h2>
    //     <p className="text-lg">Reach out today and take a step toward your wellbeing.</p>
    //   </div>

    //     {/* Section 3: Overview of the Process */}
    //     <section className=" gap-12 items-center">
    //       <div>
    //         <h2 className="text-3xl font-bold text-cusred mb-4">Overview of the Process</h2>
    //         <p className="text-lg leading-relaxed">
    //           Visitors can walk in or book appointments. After initial contact, individuals may begin with a brief screening or
    //           psychological first aid session. Based on the need, they may be referred to:
    //         </p>
    //         <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
    //           <li>CaPSU – Counselling and Psychological Support Unit</li>
    //           <li>Group sessions or skills-building workshops</li>
    //           <li>Comprehensive psychological assessments</li>
    //           <li>The Psychiatric Unit at Peradeniya Teaching Hospital (for urgent cases)</li>
    //         </ul>
    //         <p className="mt-4 text-lg">
    //           All services are confidential, stigma-free, and tailored to support each individual’s journey.
    //         </p>
    //       </div>
    //       {/* <img src='' alt="Therapy process" className="rounded-xl shadow-lg w-full" /> */}
    //     </section>
    //   </div>

      
    // </div>




    <div className="font-sans text-gray-800">
      {/* Hero Banner */}
      <div className="relative h-80 lg:h-[400px] mb-16">
        <img
          src={imgOne}
          alt="Wellbeing Centre"
          className="w-full h-full object-cover rounded-b-2xl shadow"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-5xl font-bold text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-20">
        {/* Section: Who is it For */}
        <section>
          <h2 className="text-3xl font-bold text-cusred mb-4">Who the Centre is For</h2>
          <p className="text-lg leading-relaxed">
            The Psychological Wellbeing and Assessment Centre serves the entire University of Peradeniya community —
            including students, academic staff, and non-academic staff. It's a space for anyone seeking support for
            emotional wellbeing, personal development, academic or professional growth, or psychological assessment.
          </p>
          <p className="mt-4 text-lg">
            Whether you're facing immediate challenges, planning for future success, or building resilience and life skills,
            you are welcome here.
          </p>
        </section>

        {/* Section: Brief Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-cusred mb-4">A Brief Introduction</h2>
          <p className="text-lg leading-relaxed">
            The Centre enhances emotional, social, and academic wellbeing through counselling, coaching, skill workshops,
            and psychological assessments. Our approach focuses on both prevention and support, helping individuals identify
            their strengths, develop resilience, and grow personally in a stigma-free and compassionate environment.
          </p>
          <p className="mt-4 text-lg">
            Conveniently located in the heart of the university, we offer confidential, welcoming services—from crisis
            support to career coaching and personal development.
          </p>
        </section>

        {/* Section: Process Overview */}
        <section>
          <h2 className="text-3xl font-bold text-cusred mb-4">Overview of the Process</h2>
          <p className="text-lg leading-relaxed">
            You can walk in or schedule an appointment. After your first contact, you might start with a brief screening
            or a psychological first aid session. Based on your needs, we may refer you to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg pl-4">
            <li>CaPSU (Counselling and Psychological Support Unit)</li>
            <li>Group sessions or skill-building workshops</li>
            <li>Comprehensive psychological assessments</li>
            <li>Psychiatric Unit at Peradeniya Teaching Hospital (for urgent cases)</li>
          </ul>
          <p className="mt-4 text-lg">
            All services are confidential, stigma-free, and designed to support your unique journey.
          </p>
        </section>
      </div>

      {/* Simple CTA Footer */}
      <div className="mt-24 bg-cusred text-white py-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-3">Your wellbeing matters.</h2>
        <p className="text-lg">We’re here to support you—anytime, every step of the way.</p>
      </div>
    </div>

  )
}

export default AboutUsSectionOne