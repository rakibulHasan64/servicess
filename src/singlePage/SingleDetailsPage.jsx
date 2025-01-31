import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

function ServiceDetailsPage() {
   const { id } = useParams(); // Get service ID from URL
   const [service, setService] = useState(null); // State for holding the service data

   useEffect(() => {
      // Fetch service data from backend
      axios(`${import.meta.env.VITE_API_URL}/services/${id}`)
         .then((res) => {
            setService(res.data); // Set the service data
         })
         .catch((error) => console.error("Error fetching service:", error)); // Error handling
   }, [id]);

   if (!service) {
      return <div>Loading...</div>; // Show loading until the data is fetched
   }

   // Format the deadline to a readable string
   const formattedDeadline = new Date(service.deadline).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });

   return (
      <div className="bg-gray-50 dark:bg-gray-700 py-20">

         
         <div className="container mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-500">
            <Link to={-1} className="text-4xl text-black dark:text-red-600 "><IoArrowBackCircle /></Link>
            <div className="flex flex-col md:flex-row items-center gap-6">
               {/* Service Image */}
               <img className="w-full md:w-1/2 rounded-lg shadow-md" src={service.serviceImage} alt={service.name} />

               <div className="md:w-1/2">
                  <div className="px-6 py-4">
                     {/* Service Name */}
                     <div className="font-bold text-3xl text-gray-800 mb-4 dark:text-white">{service.serviceName}</div>
                     {/* Service Description */}
                     <p className="text-gray-700 text-lg mb-4 dark:text-white">
                        {service.description.length > 200 ? `${service.description.substring(0, 200)}...` : service.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perferendis voluptates totam minus in. Quos velit sequi quae repellendus explicabo voluptatibus qui perspiciatis perferendis obcaecati ipsam, eum odit aperiam nobis.
                     </p>

                     {/* Deadline */}
                     <p className="text-sm text-gray-500 dark:text-white">Deadline: <span className="font-semibold">{formattedDeadline}</span></p>
                  </div>

                  <div className="px-6 py-4 flex justify-between items-center">
                     <div className="flex items-center">
                        {/* Provider Image */}
                        <img className="w-12 h-12 rounded-full mr-4" src={service.userPhoto} alt={service.userName} />
                        <div className="text-sm">
                           <p className="font-semibold text-gray-900 dark:text-white">{service.userName}</p>
                           {/* Email (optional) */}
                           <p className="text-gray-600 dark:text-white">{service.userEmail}</p>
                        </div>
                     </div>
                     {/* Service Price */}
                     <div className="text-xl font-bold text-blue-600 dark:text-white">৳{service.price}</div>
                  </div>

                  <div className="px-6 py-4">
                     <button className="w-full py-2 rounded-xl bg-red-600 text-white font-semibold shadow-xl transform transition-all hover:bg-red-700">
                        View Full Details
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ServiceDetailsPage;
