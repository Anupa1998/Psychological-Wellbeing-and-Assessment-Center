import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../assets/backgroundimage.jpg';
import pic2 from '../../assets/backgroundimage2.jpg';
import Button from '../../components/Button/Button';
import pic3 from '../../assets/backgroundimage3.png';

const bgImages = [pic3 ,pic, pic2];

const FirstSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bgImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-wrapper relative overflow-hidden">
            {bgImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-0' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}


            {/* Text content */}
            <div data-aos="zoom-in"
                
                className="relative z-20 text-center text-cuswhite">
                <h1
                    className="text-4xl font-bold md:text-5xl text-shadow-lg/30"
                >
                    Your Mental Wellness Matters
                </h1>

                <p
                    className="text-xl mt-2.5 text-shadow-lg/30">
                    A safe space for students, staff, and families of the university <br /> to receive compassionate psychological support and care.
                </p>

                

                <div className=' mt-5'>
                        <Button title={'Book an appointment'} color={'#f6bc0c'} to='/appointment' />
                </div>
            </div>
        </section>
    );
};

export default FirstSection;
