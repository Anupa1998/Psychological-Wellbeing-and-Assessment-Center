import React from 'react'
import logo from '../../assets/uoplogo.png';

const Footer = () => {
    

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


        // <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 font-sans">
        //     <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        //         {/* Logo & Contact */}
        //         <div className="flex-1 min-w-[250px]">
        //             {logo && (
        //                 <img
        //                     src={logo}
        //                     alt="Logo"
        //                     className="w-36 mb-4 object-contain"
        //                 />
        //             )}
        //             <h3 className="text-xl font-semibold mb-1">
        //                 Psychological Wellbeing and Assessment Center
        //             </h3>
        //             <p className="mb-1">University of Peradeniya</p>
        //             <p className="mb-1">Phone: <a href="tel:0812392816" className="hover:text-white">0812392816</a></p>
        //             <p>
        //                 Email:{" "}
        //                 <a
        //                     href="mailto:hod.psy@arts.pdn.ac.lk"
        //                     className="text-blue-400 hover:underline"
        //                 >
        //                     hod.psy@arts.pdn.ac.lk
        //                 </a>
        //             </p>
        //         </div>

        //         {/* Quick Links */}
        //         <div className="flex-1 min-w-[200px]">
        //             <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
        //             <ul className="space-y-2">
        //                 <li>
        //                     <a href="#about" className="hover:text-white transition">
        //                         About Us
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#services" className="hover:text-white transition">
        //                         Services
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#resources" className="hover:text-white transition">
        //                         Resources
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#gallery" className="hover:text-white transition">
        //                         Gallery
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#faqs" className="hover:text-white transition">
        //                         FAQs
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>

        //         {/* Map */}
        //         <div className="flex-1 min-w-[300px] rounded-lg overflow-hidden shadow-lg">
        //             <iframe
        //                 title="location-map"
        //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.019984282839!2d-122.0842496846923!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f2b9e3b%3A0x2b0b7e1b2b0b7e1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        //                 width="100%"
        //                 height="200"
        //                 style={{ border: 0 }}
        //                 allowFullScreen=""
        //                 loading="lazy"
        //                 referrerPolicy="no-referrer-when-downgrade"
        //             ></iframe>
        //         </div>
        //     </div>

        //     {/* Bottom Bar */}
        //     <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        //         © {new Date().getFullYear()} Psychological Wellbeing and Assessment Center, University of Peradeniya. All rights reserved.
        //     </div>
        // </footer>



        // <footer className="px-24 py-12">
        //     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        //         {/* About Us */}
        //         <div>
        //             <img src={logo} alt="University of Peradeniya Logo" className=" mb-4 border-b border-cusred" />



        //             <p className=" mt-4">
        //                  Psychological Wellbeing and Assessment Center,<br />
        //                  University of Peradeniya.<br />
        //              <a href="mailto:info@up.ac.lk" className="hover:text-cusred transition underline">info@up.ac.lk</a><br />
        //             <a href="tel:+94123456789" className="hover:text-cusred transition underline">+94 123 456 789</a>
        //          </p>
        //         </div>

        //         {/* Contact Us */}
        //         <div>

        //            <ul className="space-y-3 text-gray-600">
        // <li><a href="#" className="hover:text-cusred transition">About Us</a></li>
        // <li><a href="#" className="hover:text-cusred transition">Services</a></li>
        //     <li><a href="#" className="hover:text-cusred transition">Resources</a></li>
        //     <li><a href="#" className="hover:text-cusred transition">Gallery</a></li>
        //     <li><a href="#" className="hover:text-cusred transition">FAQs</a></li>
        // </ul>

        //         </div>

        //         {/* Visit Us (Map) */}
        //         <div>

        //             <div className="w-full h-40 md:h-56 rounded overflow-hidden shadow-lg">
        //                 <iframe
        //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.019984282839!2d-122.0842496846923!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2f2b9e3b%3A0x2b0b7e1b2b0b7e1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
        //                     width="100%"
        //                     height="100%"
        //                     style={{ border: 0 }}
        //                     allowFullScreen=""
        //                     loading="lazy"
        //                     referrerPolicy="no-referrer-when-downgrade"
        //                     title="Google Map"
        //                     className="w-full h-full"
        //                 ></iframe>
        //             </div>
        //         </div>
        //     </div>

        //     {/* <div className="mt-8 text-center text-gray-400 text-sm">
        //         &copy; {year} Your Company Name. All rights reserved.
        //     </div> */}
        // </footer>










        // <footer className="bg-gray-50 lg:px-24 px-6 pt-12 pb-8 text-gray-700">

        //     <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto ">
        //         {/* Logo & Description */}
        //         <div className=' col-span-5 '>
        //             <img src={logo} alt="University of Peradeniya Logo" className="h-16 mb-4" />

        //             <p className="text-gray-600 leading-relaxed mt-4">
        //                 Psychological Wellbeing and Assessment Center,<br />
        //                 University of Peradeniya.<br />
        //                 <a href="mailto:info@up.ac.lk" className="hover:text-cusred transition underline">info@up.ac.lk</a><br />
        //                 <a href="tel:+94123456789" className="hover:text-cusred transition underline">+94 123 456 789</a>
        //             </p>
        //         </div>

        //         {/* Quick Links */}
        //         <div className=' col-span-3 bg-amber-700'>

        //             <ul className="space-y-3 text-gray-600">
        //                 <li><a href="#" className="hover:text-cusred transition">About Us</a></li>
        //                 <li><a href="#" className="hover:text-cusred transition">Services</a></li>
        //                 <li><a href="#" className="hover:text-cusred transition">Resources</a></li>
        //                 <li><a href="#" className="hover:text-cusred transition">Gallery</a></li>
        //                 <li><a href="#" className="hover:text-cusred transition">FAQs</a></li>
        //             </ul>
        //         </div>

        //         {/* Contact Info */}
        //         <div className=' col-span-4'>
        //             <iframe
        //                 title="University of Peradeniya Location"
        //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8081162564236!2d80.59596941477723!3d7.253365115608043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3657f16f1b1e1%3A0x4261902d0a8aa7de!2sUniversity%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1688644905084!5m2!1sen!2slk"
        //                 width="100%"
        //                 height="100%"
        //                 style={{ border: 0 }}
        //                 allowFullScreen=""
        //                 loading="lazy"
        //                 referrerPolicy="no-referrer-when-downgrade"
        //             ></iframe>

        //         </div>
        //     </div>

        //     {/* Bottom copyright */}
        //     <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 font-medium text-sm">
        //         Psychological Wellbeing and Assessment Center — 2025
        //     </div>
        // </footer>


        // <footer className="bg-white border-t border-gray-200 w-full lg:px-24">
        //   <div className=" py-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-700 bg-amber-200">

        //     {/* Logo & Description */}
        //     <div className="md:col-span-2 bg-blue-100">
        //       <img src={logo} alt="University of Peradeniya Logo" className="h-16 mb-4" />
        //       <p className="text-gray-600 leading-relaxed mt-4 text-sm">
        //         Psychological Wellbeing and Assessment Center,<br />
        //         University of Peradeniya.<br />
        //         <a href="mailto:info@up.ac.lk" className="hover:text-cusred transition underline">info@up.ac.lk</a><br />
        //         <a href="tel:+94123456789" className="hover:text-cusred transition underline">+94 123 456 789</a>
        //       </p>
        //     </div>

        //     {/* Quick Links */}
        //     <div className=' bg-blue-400'>
        //       <h6 className="text-xl font-semibold text-cusred mb-4">Quick Links</h6>
        //       <ul className="space-y-2 text-sm">
        //         <li><a href="#" className="hover:text-cusred transition">About Us</a></li>
        //         <li><a href="#" className="hover:text-cusred transition">Services</a></li>
        //         <li><a href="#" className="hover:text-cusred transition">Resources</a></li>
        //         <li><a href="#" className="hover:text-cusred transition">Gallery</a></li>
        //         <li><a href="#" className="hover:text-cusred transition">FAQs</a></li>
        //       </ul>
        //     </div>

        //     {/* Map Location */}
        //     <div className=' bg-blue-800'>
        //       <h6 className="text-xl font-semibold text-cusred mb-4">Our Location</h6>
        //       <div className="rounded-xl overflow-hidden shadow-md">
        //         <iframe
        //           title="University of Peradeniya Location"
        //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8081162564236!2d80.59596941477723!3d7.253365115608043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3657f16f1b1e1%3A0x4261902d0a8aa7de!2sUniversity%20of%20Peradeniya!5e0!3m2!1sen!2slk!4v1688644905084!5m2!1sen!2slk"
        //           width="100%"
        //           height="200"
        //           style={{ border: 0 }}
        //           allowFullScreen=""
        //           loading="lazy"
        //           referrerPolicy="no-referrer-when-downgrade"
        //         ></iframe>
        //       </div>
        //     </div>
        //   </div>

        //   {/* Footer Bottom */}
        //   <div className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        //     © 2025 Psychological Wellbeing and Assessment Center. All rights reserved.
        //   </div>
        // </footer>

    )
}

export default Footer