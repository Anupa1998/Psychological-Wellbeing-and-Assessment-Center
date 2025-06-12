import React, { useState } from 'react'
import Faqcard from '../../components/faq/faqcard'

const Faq = () => {
    const data = [
        {
            "question": "Who can access services at the Psychological Wellbeing Centre?",
            "answer": "Our services are open to all students, university staff, and their immediate family members."
        },
        {
            "question": "What is psychological first aid?",
            "answer": "It’s a supportive, compassionate first response to someone in emotional distress. It helps stabilize the person and guide them toward further support if needed."
        },
        {
            "question": "Do I need a referral to book an appointment?",
            "answer": "No referral is needed. You can book an appointment directly through our website or by contacting our team."
        },
        {
            "question": "Is there a cost involved?",
            "answer": "All our services—including assessments, workshops, and first aid sessions—are provided free of charge."
        },
        {
            "question": "Is my information kept confidential?",
            "answer": "Yes. All sessions and personal information are strictly confidential and handled in accordance with professional ethical guidelines."
        },
        {
            "question": "Can I attend a workshop without a referral or appointment?",
            "answer": "Yes! Most workshops are open to walk-ins, but prior registration is encouraged to reserve your spot."
        },
        {
            "question": "What kind of assessments do you offer?",
            "answer": "We offer assessments for cognitive abilities (e.g., IQ), emotional wellbeing, stress levels, and personality, Career, Attention Deficit Hyper-Active Disorder (ADHD), Depression etc."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className='py-16 px-6 lg:px-24'>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg mb-16 text-center">
                Frequently Asked Questions
            </h2>

            <div className=' '>
                {
                    data.map((ele, index) => (
                        <Faqcard key={index}
                            title={ele.question}
                            description={ele.answer}
                            index={index}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))

                }
            </div>
        </section>



    )
}

export default Faq