import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Advantage() {
   useEffect(() => {
      AOS.init({
         duration: 1000, // Animation duration
         once: true, // Trigger the animation once
      });
   }, []);

   return (
      <>
         <div className="bg-[#fff] dark:bg-gray-700 ">
            <div className="container mx-auto py-20">
               <h2 className="text-center font-bold text-[35px] sm:text-[45px] md:text-[60px] p-3 sm:p-2 text-[#5965E7]" data-aos="fade-left">
                  The Advantages,<br />
                  <span className="text-black dark:text-white">Without the Disadvantages</span>
               </h2>
               <p className="text-center p-3 dark:text-white text-sm" data-aos="fade-right" data-aos-delay="100">
                  Our unique solution allows everyone to build wealth, in a few clicks, from 10 €. Investing<br /> your savings finally becomes simple and really remunerative.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-12 p-4">
                  <div className="bg-[#FFFFFF] shadow-2xl px-5 py-12 rounded-[16px] space-y-4 w-1/1" data-aos="fade-up" data-aos-delay="200">
                     <div className="w-[87px] h-[87px] mx-auto rounded-2xl bg-[#DAE6FF] flex items-center justify-center">
                        <img src="/public/logo.png" alt="" />
                     </div>
                     <h4 className="text-center text-2xl font-bold">Accessibility</h4>
                     <p className="text-center text-[15px]">Invest in stone from only<br /> CHF 20'000.-</p>
                  </div>

                  <div className="bg-[#FFFFFF] shadow-2xl px-5 py-12 rounded-[16px] space-y-4 w-1/1" data-aos="fade-up" data-aos-delay="400">
                     <div className="w-[87px] h-[87px] mx-auto rounded-2xl bg-[#DAE6FF] flex items-center justify-center">
                        <img src="/public/Group (1).png" alt="" />
                     </div>
                     <h4 className="text-center text-2xl font-bold">Flexibility</h4>
                     <p className="text-center text-[15px]">Possibility of multiplying<br /> investments in several properties</p>
                  </div>

                  <div className="bg-[#FFFFFF] shadow-2xl px-5 py-12 rounded-[16px] space-y-4 w-1/1" data-aos="fade-up" data-aos-delay="600">
                     <div className="w-[87px] h-[87px] mx-auto rounded-2xl bg-[#DAE6FF] flex items-center justify-center">
                        <img src="/public/Group (2).png" alt="" />
                     </div>
                     <h4 className="text-center text-2xl font-bold">High efficiency</h4>
                     <p className="text-center text-[15px]">6% average return with<br /> monthly distributed income</p>
                  </div>

                  <div className="bg-[#FFFFFF] shadow-2xl px-5 py-12 rounded-[16px] space-y-4 w-1/1" data-aos="fade-up" data-aos-delay="800">
                     <div className="w-[87px] h-[87px] mx-auto rounded-2xl bg-[#DAE6FF] flex items-center justify-center">
                        <img src="/public/real-estate 1.png" alt="" />
                     </div>
                     <h4 className="text-center text-2xl font-bold">Security</h4>
                     <p className="text-center text-[15px]">Real estate investment is safe,<br /> transparent and profitable</p>
                  </div>

               </div>

            </div>
         </div>
      </>
   );
}

export default Advantage;
