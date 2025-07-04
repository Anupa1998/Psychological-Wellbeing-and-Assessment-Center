import React from 'react'
import logo from '../../assets/uoplogo.png';



const FooterNew = () => {
  return (
     <footer className=' w-full border-t-2 border-cusred'>
                <div className='lg:px-24 px-6  lg:flex lg:space-x-4 space-y-8 pt-16 pb-16' >
                    <div className='  lg:w-2/5'>
    
                        <img src={logo} alt="University of Peradeniya Logo" className="h-16 mb-4" />
    
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Psychological Wellbeing and Assessment Center,<br />
                            University of Peradeniya.<br />
                            <a href="mailto:info@up.ac.lk" className="hover:text-cusred transition underline">hod.psy@arts.pdn.ac.lk</a><br />
                            <a href="tel:+94123456789" className="hover:text-cusred transition underline">+94 81 239 2816</a>
                        </p>
                    </div>
    
                    <div className='  lg:w-1/5'>
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

                    <div className='lg:w-2/5'>
                        
                        <iframe
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.876075700776!2d80.59739019999999!3d7.254942199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368deaaaaaaab%3A0xb5476b88282d47fb!2z4La04Lea4La74LeP4Lav4LeZ4Lar4LeS4La64oCNIOC3gOC3kuC3geC3iuC3gOC3gOC3kuC2r-C3iuKAjeC2uuC3j-C2veC2ug!5e0!3m2!1ssi!2slk!4v1750133494802!5m2!1ssi!2slk"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
    
                <div className=' py-4 border-t-2  text-center '>
                    © {new Date().getFullYear()} Psychological Wellbeing and Assessment Centre, University of Peradeniya. All rights reserved. Developed by the IT Center.

                </div>
            </footer>
  )
}



export default FooterNew