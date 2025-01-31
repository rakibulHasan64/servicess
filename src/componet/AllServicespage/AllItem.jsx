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

            <div className="px-6 py-4 flex justify-between items-center">
               <div className="flex items-center">
               
                  <img className="w-10 h-10 rounded-full mr-4" src={item.userPhoto} alt={item.userName} />
                  <div className="text-sm">

                     <p className="text-gray-900 leading-none">{item.userName}</p>
                  
                     <p className="text-gray-600">{item.userEmail}</p>
                  </div>
               </div>
         
               <div className="text-lg font-bold">৳{item.price}</div>
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
