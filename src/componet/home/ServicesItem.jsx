/* eslint-disable react/prop-types */
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

function ServicesItem({ item }) {
   return (
      <>
         <div
            className="relative bg-white shadow-[#5965E7] hover:shadow-2xl rounded-xl transition-all duration-300"
            data-aos="fade-up" // Add AOS animation on scroll
            data-aos-duration="1000" // Duration for the animation
         >
            <img className="w-full shadow-[#5965E7]" src={item.image} alt="" />
            <button className="absolute right-6 top-6 px-2 py-1 bg-[#FFFFFF] rounded-[6px]">
               Co-Ownership
            </button>
            <div className="p-4">
               <h4 className="text-[26px] p-3">{item.name}</h4>
               <div className="flex justify-between items-center p-3">
                  <span className="text-[20px]">Residencial</span>
                  <span className="text-[16px] flex items-center gap-2">
                     <AiOutlineCheck className="text-[3px] rounded-full bg-[#5965E7] w-5 h-5 text-white" />
                     Funded
                  </span>
               </div>
               <div className="p-3">
                  <div className="bg-gray-300 rounded-full w-full h-2.5">
                     <div className="w-3/4 h-full rounded-full shadow-[#5965E7] bg-[#5965E7]"></div>
                  </div>
               </div>
               <div className="p-3 space-y-3">
                  <div className="flex justify-between items-center">
                     <p className="text-[16px] text-[#3E4A65]">Purchase price</p>
                     <span className="text-[#0E1336] text-[16px] font-bold">CHF 2,540,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <p className="text-[16px] text-[#3E4A65]">Min. investment</p>
                     <span className="text-[#0E1336] text-[16px] font-bold">CHF 25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <p className="text-[16px] text-[#3E4A65]">Expected return on equity</p>
                     <span className="text-[#0E1336] text-[16px] font-bold">7.10%</span>
                  </div>
               </div>

               <Link to={'AllService'}>
                  <div className="text-center mb-7 py-2">
                     <button className="px-5 font-mono p-3 rounded-xl shadow-2xl shadow-[#0554F2] text-white bg-[#0554F2]">
                        More Details
                     </button>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}

export default ServicesItem;
