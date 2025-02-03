import { useState } from "react";
import AllItem from "./AllItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



function AllServicesPageCard() {
   
   const [filter, setFilter] = useState("");

   const { data: services = [], isLoading, refetch } = useQuery({
      queryKey: ["services", filter],
      queryFn: async () => {
         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-services`, {
            params: { filter }
         });
         return data;
      }
   });

   return (
      <div className="bg-[#F5F9FF] dark:bg-gray-600">
         <div className="container mx-auto py-16">
            <h3 className="text-center font-bold text-[#0E1336] text-4xl sm:text-6xl">
               Our <span className="text-[#5965E7]">All Services</span>
            </h3>

            <div className="mt-14 text-center">
               <input
                  className="w-1/2 max-h-auto text-black bg-white outline-1 outline-amber-400 p-3 shadow-2xl py-4 rounded-4xl"
                  type="text"
                  placeholder="Search..."
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
               />
            </div>

            {isLoading ? (
               <div className="text-center h-screen flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 animate-[spin_0.8s_linear_infinite] fill-blue-600 block mx-auto"
                     viewBox="0 0 24 24">
                     <path
                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                        data-original="#000000" />
                  </svg>
               </div>
            ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 p-4 sm:p-3 mt-12">
                  {services?.map(item => (
                     <AllItem key={item.id} item={item} />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

export default AllServicesPageCard;
