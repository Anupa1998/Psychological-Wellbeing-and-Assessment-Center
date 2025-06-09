import React from 'react'
import {
    HeartHandshake,
    HeartPulse,
    ClipboardCheck,
    UsersRound,
} from "lucide-react";
import ServiceCard from '../../components/ServicesCard/ServiceCard';




const Servicse = () => {
    const services = [
        {
            icon: <HeartHandshake className="h-10 w-10" />,
            title: "Psychological First Aid",
            subtitle: "Immediate support without judgment.",
            description:
                "Brief, one-on-one sessions by trained professionals to help manage distress, stabilize emotions, and identify next steps. Often the first point of contact in times of emotional crisis.",
        },
        {
            icon: <HeartPulse className="h-10 w-10" />,
            title: "Mental Health Screening & Referrals",
            subtitle: "Get clarity and direction.",
            description:
                "Initial confidential screening helps us understand your emotional state and immediate concerns. Based on this, clients may be referred to:",
            bullets: [
                "Counselling and Psychological Services Unit (CaPSU)",
                "Psychiatric Unit – Teaching Hospital Peradeniya",
                "Group therapy, workshops, or assessments",
            ],
        },
        {
            icon: <ClipboardCheck className="h-10 w-10" />,
            title: "Psychological Assessments",
            subtitle: "Understand yourself better.",
            description: "We offer structured assessments for:",
            bullets: [
                "IQ and cognitive abilities",
                "Emotional and behavioural functioning",
                "Stress, anxiety, depression, ADHD",
                "Personality and career interests",
                "Specific learning disabilities",
            ],
            closing:
                "These assessments support academic planning, therapy, and personal insight.",
        },
        {
            icon: <UsersRound className="h-10 w-10" />,
            title: "Wellbeing Workshops & Programs",
            subtitle: "Grow with others. Learn life-enhancing skills.",
            description: "We host sessions on:",
            bullets: [
                "Stress management & emotional regulation",
                "Resilience building",
                "Mindfulness & relaxation",
                "Communication & relationship skills",
                "Financial & time management",
                "Work–life balance",
                "Music, dance & art therapy",
                "Smartphone addiction",
                "Parenting skills",
                "Movie discussions, and more",
            ],
            closing: "Open to all university members and families.",
        },
    ];


    return (
        <section className="py-16 px-6 lg:px-24">

            <h2 className="text-4xl font-bold text-center  mb-16">
                Services Offered
            </h2>


            <div className='grid grid-cols-2 gap-8'>
                {
                    services.map((ele, index) => (

                        <ServiceCard key={index}
                            title={ele.title}
                            icon={ele.icon}
                            subtitle={ele.subtitle}
                            description={ele.description}
                            bullets={ele.bullets}
                            closing={ele.closing}
                        />

                    ))
                }

            </div>
        </section>

    )
}

export default Servicse