import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import AOS styles

function Customar() {
   const [activeIndex, setActiveIndex] = useState(null); // Track which accordion is open

   const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle the accordion
   };

   useEffect(() => {
      AOS.init({
         duration: 1000, // Optional: Adjust animation duration
         once: true, // Optional: Make the animation trigger only once
      });
   }, []);

   return (
      <div className="bg-[#F5F9FF] shadow-2xl p-4">
         <div className="container mx-auto py-20">
            {/* Header */}
            <div>
               <h3 className="text-[70px] text-center font-bold" data-aos="fade-up">Frequently Asked Questions</h3>
               <p className="text-center mt-3 text-[20px] font-bold" data-aos="fade-up" data-aos-delay="100">
                  Support - <span className=" text-red-600">FAQ</span>
               </p>
            </div>

            {/* Sub-header */}
            <h3 className="text-[45px] text-center mt-10" data-aos="fade-up" data-aos-delay="200">
               Customer <span>Support</span>
            </h3>

            {/* Accordion Section */}
            <div className="w-[75%] mx-auto mt-14">
               <div className="grid md:grid-cols-1 gap-5 text-2xl">
                  {[
                     "Are there any special discounts or promotions available during the event?",
                     "What are the dates and locations for the product launch events?",
                     "Can I bring a guest with me to the product launch event?",
                     "Can I purchase the product at the launch event?",
                     "What is the refund policy for the purchased product?",
                     "What is the refund policy for the purchased product?",
                     "What is the refund policy for the purchased product?",
                  ].map((question, index) => (
                     <div
                        key={index}
                        role="accordion"
                        className="bg-white rounded-lg shadow-md p-8"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // Delay each accordion with a different timing
                     >
                        {/* Accordion Button */}
                        <button
                           type="button"
                           onClick={() => toggleAccordion(index)}
                           className={`w-full text-3xl text-left font-semibold ${activeIndex === index ? "text-blue-600" : "text-gray-800"
                              } flex items-center transition-all`}
                        >
                           <span className="mr-4">{question}</span>
                           <span
                              className={`ml-auto text-2xl font-bold transition-transform ${activeIndex === index ? "rotate-0" : "rotate-45"
                                 }`}
                           >
                              {activeIndex === index ? "-" : "+"}
                           </span>
                        </button>

                        {/* Accordion Content */}
                        <div
                           className={`mt-3 text-xl text-gray-600 leading-relaxed transition-all ${activeIndex === index ? "block" : "hidden"
                              }`}
                        >
                           Turpis pulvinar sed vivamus neque consectetur semper sollicitudin. Etiam diam tellus ullamcorper eget. Semper varius ornare tristique aliquam. Sollicitudin dui mi vitae vulputate orci amet nullam sit eget. Eu augue fermentum tincidunt sapien aliquam.
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Customar;
