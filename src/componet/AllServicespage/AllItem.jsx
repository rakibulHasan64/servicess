import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function AllItem({ item }) {

   return (
      <Link to={`/singlePage/${item._id}`}>  
         
         <div className="w-full bg-[#fff] rounded overflow-hidden shadow-xl">
      
            <img className="w-full" src={item.serviceImage} alt={item.serviceName} />

            <div className="px-6 py-4">
               
               <div className="font-bold text-xl mb-2">{item.

                  serviceName}</div>
         
               <p className="text-gray-700 text-base">
                  {item.description.length > 100
                     ? `${item.description.slice(0, 100)}...`
                     : item.description}
               </p>

            </div>

            <div className="px-6 py-4 sm:flex justify-between items-center">
               <div className="flex items-center">
                  {/* Provider Image */}
                  <img
                     className="w-12 h-12 rounded-full mr-4"
                     src={item?.byer?.userPhoto || "https://via.placeholder.com/48"}
                     alt={item?.byer?.userName || "Unknown User"}
                  />
                  <div className="text-sm">
                     <p className="font-semibold text-gray-900 ">{item?.byer?.userName || "Unknown"}</p>
                     {/* Email (optional) */}
                     <p className="text-gray-600 ">{item?.byer?.userEmail || "Not Provided"}</p>
                  </div>
               </div>
               {/* Service Price */}
               <div className="text-xl font-bold text-blue-600 ">৳{item?.price || "N/A"}</div>
            </div>


            <div className="px-6 py-4 mb-3 text-center">
               <button className="rounded-xl shadow-2xl shadow-red-600 text-white bg-red-600 px-4 py-2 hover:bg-blue-700">
                  View Details
               </button>
            </div>
         </div>
      
      
      </Link>
   );
}

export default AllItem;
