import React from 'react'
import logo from '../../assets/uoplogo.png';



const FooterNew = () => {
  return (
     <footer className='lg:px-24 px-6 w-full border-t-2 border-cusred'>
                <div className='  flex space-x-4 pt-16 pb-8' >
                    <div className='  w-2/5'>
    
                        <img src={logo} alt="University of Peradeniya Logo" className="h-16 mb-4" />
    
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Psychological Wellbeing and Assessment Center,<br />
                            University of Peradeniya.<br />
                            <a href="mailto:info@up.ac.lk" className="hover:text-cusred transition underline">info@up.ac.lk</a><br />
                            <a href="tel:+94123456789" className="hover:text-cusred transition underline">+94 123 456 789</a>
                        </p>
                    </div>
    
    
                    <div className='  w-1/5'>
                            <h4 className="text-lg font-semibold mb-3 border-b-2  border-cusred inline-block">Quick Links</h4>
    
                            <ul className="space-y-2">
                             <li>
                                 <a href="#about" className=" transition">
                                     About Us
                                 </a>
                             </li>
                             <li>
                                 <a href="#services" className=" transition">
                                     Services
                                 </a>
                             </li>
                             <li>
                                 <a href="#resources" className=" transition">
                                     Resources
                                 </a>
                             </li>
                             <li>
                                 <a href="#gallery" className="transition">
                                     Gallery
                                 </a>
                             </li>
                             <li>
                                 <a href="#faqs" className=" transition">
                                     FAQs
                                 </a>
                             </li>
                         </ul>
    
                        
                    </div>
                    <div className='w-2/5'>
                        
                        <iframe
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.019984282839!2d-122.0842496846923!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f2b9e3b%3A0x2b0b7e1b2b0b7e1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
    
                <div className=' py-8 border-t-2 border-cusred text-center'>
                    © {new Date().getFullYear()} Psychological Wellbeing and Assessment Center, University of Peradeniya. All rights reserved.
                </div>
            </footer>
  )
}

export default FooterNew