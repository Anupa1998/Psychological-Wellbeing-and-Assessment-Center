import React from 'react'
import TeamCard from '../../components/TeamCard/TeamCard'
import TitleHeader from '../../components/title/TitleHeader'


const Team = () => {
    return (
        <div>
            <TitleHeader>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
                    Compassionate. Qualified. Here for You.
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                    Our team includes experienced psychologists, counsellors, and facilitators. We work collaboratively on a roster basis, ensuring access to a wide range of expertise.
                </p>
            </TitleHeader>

            <section className="py-16 px-6 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    <TeamCard />
                    <TeamCard />
                </div>
            </section>
        </div>




    )
}

export default Team