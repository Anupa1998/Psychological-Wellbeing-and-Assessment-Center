import React, { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Question 01?",
    answer: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tenetur reprehenderit architecto perspiciatis cum libero nam animi error ea nostrum maxime harum dolores quod commodi rem doloremque, quos nemo iure.</p>`
  },
  {
    question: "Question 02?",
    answer: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tenetur reprehenderit architecto perspiciatis cum libero nam animi error ea nostrum maxime harum dolores quod commodi rem doloremque, quos nemo iure.</p>`
  },
  {
    question: "Question 03?",
    answer: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tenetur reprehenderit architecto perspiciatis cum libero nam animi error ea nostrum maxime harum dolores quod commodi rem doloremque, quos nemo iure.</p>`
  },{
    question: "Question 04?",
    answer: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tenetur reprehenderit architecto perspiciatis cum libero nam animi error ea nostrum maxime harum dolores quod commodi rem doloremque, quos nemo iure.</p>`
  },{
    question: "Question 05?",
    answer: `<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi tenetur reprehenderit architecto perspiciatis cum libero nam animi error ea nostrum maxime harum dolores quod commodi rem doloremque, quos nemo iure.</p>`
  },
  
  
];


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='py-24 px-6 lg:px-24'>
      <h2 className=' text-center text-3xl lg:text-3xl mb-16 font-semibold  text-gray-800'>Frequently asked questions</h2>
      
      <div className="max-w-full mx-auto px-4">
        <div className="">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-cuswhite border border-gray-200  shadow-sm transition hover:shadow-md"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left text-lg font-medium focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  <div
                    className="px-5 pb-5 text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
          
    </section>

  )
}

export default Faq