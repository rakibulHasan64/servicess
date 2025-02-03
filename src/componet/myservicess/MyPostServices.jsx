import { useContext } from "react";
import { AuthContext } from "../../context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { Helmet } from "react-helmet-async";

function MyPostServices() {
   const { user } = useContext(AuthContext);

   const { data: servicesss = [], isLoading, error } = useQuery({
      queryKey: user?.email ? ["services", user.email] : ["services"],
      queryFn: async () => {
         if (!user?.email) return [];
         try {
            const { data } = await axios.get(
               `${import.meta.env.VITE_API_URL}/servicesss/${user.email}`
            );
            console.log(data);
            return data || [];
         } catch (err) {
            console.error("Error fetching services:", err);
            return [];
         }
      },
   });

   if (isLoading)
      return (
         <div className="py-7 h-screen flex items-center justify-center">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="w-10 animate-[spin_0.8s_linear_infinite] fill-blue-600 block mx-auto"
               viewBox="0 0 24 24"
            >
               <path
                  d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                  data-original="#000000"
               />
            </svg>
         </div>
      );

   if (error) return <p>Error: {error.message}</p>;

      

   return (
      <>
         
         <Helmet>
            <meta charSet="utf-8" />
            <title>My |❤🧡💛💚 Poat</title>

         </Helmet>
         
         <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-center">My Services</h2>
            {servicesss?.length === 0 ? (
               <p>No services found.</p>
            ) : (
               <div className="overflow-x-auto container mx-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>
                           {/* ইনডেক্স কলাম হেডার */}
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              #
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Image
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Service Name
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Price
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Service Area
                           </th>
                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Deadline
                           </th>
                        </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        {servicesss.map((service, index) => (
                           <tr key={service._id}>
                              {/* ইনডেক্স কলাম */}
                              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <img
                                    src={service.serviceImage}
                                    alt={service.serviceName}
                                    className="w-16 h-16 object-cover rounded"
                                 />
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 {service.serviceName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 ${service.price}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 {service.serviceArea || "Not specified"}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 {service.deadline
                                    ? format(new Date(service.deadline), "dd/MM/yyyy")
                                    : "Not specified"}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            )}
         </div>
      
      
      </>
   );
}

export default MyPostServices;
