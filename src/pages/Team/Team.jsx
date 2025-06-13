import React, { useState } from 'react'
import TeamCard from '../../components/TeamCard/TeamCard'
import TitleHeader from '../../components/title/TitleHeader'
import { FaTimes } from 'react-icons/fa'

import imgAsanka from '../../assets/dr-asanka.jpg';
import imgKanthi from '../../assets/dr-kanthi.jpg';

const Team = () => {
    const [aboutShow, setAboutShow] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleAboutShow = (member) => {
        setSelectedMember(member);
        setAboutShow(!aboutShow);
    }

    const data = [
        {
            name: "Dr. Asanka Bulatwatta",
            position: "Head of the Department, Department of Psychology",
            expertise: "Organizational Psychology, Rehabilitation, Counselling",
            about: "Dr. Asanka Bulatwatta is the Head of the Department of Psychology at the University of Peradeniya. He brings a rich blend of academic insight and practical experience in organizational psychology and counselling. He’s actively involved in community mental health and is passionate about fostering psychological wellbeing in institutional settings.",
            email: "asankabulathwatta@gmail.com",
            img: imgAsanka,
        },
        {
            name: "Dr. Kanthi Hettigoda",
            position: "Clinical Psychologist | Lecturer | Mental Health Advocate",
            expertise: "",
            about: " Dr. Kanthi Hettigoda is a Clinical Psychologist and senior academic at the Department of Psychology. Her expertise includes emotional intelligence, resilience, and student mental health.She played a pivotal role in establishing the Centre and is dedicated to creating a supportive, stigma-free environment through evidence-based care, psychoeducation, and empowerment.",
            email: "kanthihettigoda@gmail.com",
            img: imgKanthi,
        }

    ]

    return (
        <div>
            <TitleHeader>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
                    Compassionate. Qualified. Here for You.
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                    Our team includes experienced psychologists, counsellors, and facilitators. We work collaboratively on a roster basis, ensuring access to a wide range of expertise.
                </p>
            </TitleHeader>

            <section className="py-16 px-6 lg:px-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {
                        data.map((ele, index) => (
                            <TeamCard key={index} onClick={() => handleAboutShow(ele)} name={ele.name} position={ele.position} img={ele.img} email={ele.email} />
                        ))
                    }
                </div>
            </section>

            {aboutShow && selectedMember && (
                <div className="h-[100vh] w-full fixed top-0 inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm z-100 flex items-center justify-center p-8 transition duration-500">
                    <div className="bg-white max-w-xl w-full rounded-lg shadow-xl p-6 relative">
                        <button onClick={() => setAboutShow(false)} className="absolute top-2 right-2 text-sm text-red-600"><FaTimes className=' text-lg cursor-pointer'/></button>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h2>
                        <p className="text-sm text-gray-700 mb-4 italic">{selectedMember.position}</p>
                        <p className="text-gray-800 mt-2 leading-relaxed">{selectedMember.about}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Team