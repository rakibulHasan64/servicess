// import { useQuery } from "@tanstack/react-query";
// import axios from "axios"; // অথবা import axiosSecur from "../../api/axiosSecur"; যদি সেটি থাকে

// import { Link } from "react-router-dom";
// import { format } from "date-fns";
// import { useContext } from "react";
// import { AuthContext } from "../../context";


// function MyPostServices() {

//    const { user } = useContext(AuthContext);


//    const { data: services } = useQuery({
//       queryKey: ["services", user?.email],
//       queryFn: async () => {
//          const { data } = await axios(
//             `${import.meta.env.VITE_API_URL}/services/${userEmail?.email}`
//          );
   
//          console.log(data);
//          return data;
         
//       }
//    })

//    return (
//       <section className='container px-4 mx-auto pt-12'>
//          <div className='flex items-center gap-x-3'>
//             <h2 className='text-lg font-medium text-gray-800'>My Posted Jobs</h2>
//             <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
//                {/* {service?.length} Job{service.length !== 1 && "s"} */}
//             </span>
//          </div>

//          <div className='flex flex-col mt-6 shadow-xl shadow-purple-200 rounded-xl border border-purple-600'>
//             <div className='overflow-x-auto'>
//                <div className='inline-block min-w-full py-2 align-middle'>
//                   <div className='overflow-hidden border border-gray-200 rounded-lg'>
//                      <table className='min-w-full divide-y divide-gray-200'>
//                         <thead className='bg-gray-50'>
//                            <tr>
//                               <th className='py-3.5 px-4 text-sm font-normal text-left text-gray-500'>Title</th>
//                               <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>Deadline</th>
//                               <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>Price Range</th>
//                               <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>Category</th>
//                               <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>Description</th>
//                               <th className='px-4 py-3.5 text-sm font-normal text-left text-gray-500'>Edit</th>
//                            </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                            {services?.map((service) => (
//                               <tr key={service._id}>
//                                  <td className="px-4 py-4 text-sm text-gray-500">{service.serviceName}</td>
//                                  <td className="px-4 py-4 text-sm text-gray-500">
//                                     {format(new Date(service.deadline), "P")}
//                                  </td>
//                                  <td className="px-4 py-4 text-sm text-gray-500">name</td>
//                                  <td className="px-4 py-4 text-sm text-gray-500">
//                                     <p className="px-3 py-1 text-blue-500 bg-blue-100/60 text-xs rounded-full">
//                                        {service?.serviceArea}
//                                     </p>
//                                  </td>
//                                  <td className="px-4 py-4 text-sm text-gray-500">{service.description}</td>
//                                  <td className="px-4 py-4 text-sm">
//                                     <Link to={`/update/${service._id}`} className="text-gray-500 hover:text-yellow-500">
//                                        ✏️ Edit
//                                     </Link>
//                                  </td>
//                               </tr>
//                            ))}
//                         </tbody>
//                      </table>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// }

// export default MyPostServices;
{/* <div className="bg-gray-50 dark:bg-gray-700 py-20">
         <div className="container mx-auto p-6 rounded-xl shadow-lg bg-white dark:bg-gray-500">
            <Link to={-1} className="text-4xl text-black dark:text-red-600">
               <IoArrowBackCircle />
            </Link>

            <div className="flex flex-col md:flex-row items-center gap-6">
               {/* সার্ভিস ইমেজ */}
      //          <img
      //             className="w-full md:w-1/2 rounded-lg shadow-md"
      //             src={service?.serviceImage || "https://via.placeholder.com/400"}
      //             alt={service?.serviceName || "Service Image"}
      //          />

      //          <div className="md:w-1/2">
      //             <div className="px-6 py-4">
      //                {/* সার্ভিস নাম */}
      //                <div className="font-bold text-3xl text-gray-800 mb-4 dark:text-white">
      //                   {service?.serviceName || "Unknown Service"}
      //                </div>
      //                {/* সার্ভিস বিবরণ */}
      //                <p className="text-gray-700 text-lg mb-4 dark:text-white">
      //                   {service?.description
      //                      ? service.description.length > 200
      //                         ? `${service.description.substring(0, 200)}...`
      //                         : service.description
      //                      : "No description available."}
      //                </p>
      //                {/* ডেডলাইন */}
      //                <p className="text-sm text-gray-500 dark:text-white">
      //                   Deadline: <span className="font-semibold">{formattedDeadline}</span>
      //                </p>
      //             </div>

      //             <div className="px-6 py-4 flex justify-between items-center">
      //                <div className="flex items-center">
      //                   {/* Provider Image */}
      //                   <img
      //                      className="w-12 h-12 rounded-full mr-4"
      //                      src={service?.byer?.userPhoto || "https://via.placeholder.com/48"}
      //                      alt={service?.byer?.userName || "Unknown"}
      //                   />
      //                   <div className="text-sm">
      //                      <p className="font-semibold text-gray-900 dark:text-white">
      //                         {service?.byer?.userName || "Unknown"}
      //                      </p>
      //                      <p className="text-gray-600 dark:text-white">
      //                         {service?.byer?.userEmail || "Not Provided"}
      //                      </p>
      //                   </div>
      //                </div>
      //                {/* সার্ভিস প্রাইস */}
      //                <div className="text-xl font-bold text-blue-600 dark:text-white">
      //                   ৳{service?.price || "N/A"}
      //                </div>
      //             </div>

      //             <div className="px-6 py-4">
      //                <button className="w-full py-2 rounded-xl bg-red-600 text-white font-semibold shadow-xl transform transition-all hover:bg-red-700">
      //                   View Full Details
      //                </button>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // </div> */}