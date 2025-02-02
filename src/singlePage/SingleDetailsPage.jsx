import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function ServiceDetailsPage() {
   const { id } = useParams(); // URL থেকে service ID নেওয়া
   const [service, setService] = useState(null); // সার্ভিস ডাটা স্টেট
   const [error, setError] = useState(null); // Error handle করার জন্য state

   useEffect(() => {
      axios(`${import.meta.env.VITE_API_URL}/services/${id}`)
         .then((res) => {
            setService(res.data);
         })
         .catch((err) => {
            console.error("Error fetching service:", err);
            setError("Failed to load service details.");
         });
   }, [id]);

   if (error) {
      return (
         <p className="text-red-600 text-center font-semibold py-10">
            {error}
         </p>
      );
   }

   if (!service) {
      return (
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
      );
   }

   // ডেডলাইন ফরম্যাটিং
   const formattedDeadline = new Date(service.deadline).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });

   return (
      <>
         {/* নীচের অংশ: ২ নম্বর ডিজাইনের মতো অতিরিক্ত বিস্তারিত ও রিভিউ সেকশন */}
         <section className="py-12 sm:py-16">
            <div className="container mx-auto px-8 mt-5 p-4 bg-white shadow-2xl">
               {/* ব্রেডক্রাম্বস */}
               <nav className="flex">
                  <ol role="list" className="flex items-center">
                     <li className="text-left">
                        <div className="-m-1">
                           <Link
                              to="/"
                              className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                           >
                              Home
                           </Link>
                        </div>
                     </li>
                     <li className="text-left">
                        <div className="flex items-center">
                           <span className="mx-2 text-gray-400">/</span>
                           <div className="-m-1">
                              <a
                                 href="#"
                                 className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                              >
                                 Services
                              </a>
                           </div>
                        </div>
                     </li>
                     <li className="text-left">
                        <div className="flex items-center">
                           <span className="mx-2 text-gray-400">/</span>
                           <div className="-m-1">
                              <a
                                 href="#"
                                 className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                 aria-current="page"
                              >
                                 {service?.serviceName || "Service Details"}
                              </a>
                           </div>
                        </div>
                     </li>
                  </ol>
               </nav>

               <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3">
                     {/* এখানে আপনি সার্ভিসের আরও ছবি বা গ্যালারি যোগ করতে পারেন */}
                     <div className="lg:flex lg:items-start">
                        <div className="lg:order-2 lg:ml-5">
                           <div className="max-w-xl overflow-hidden rounded-lg">
                              <img
                                 className="h-full w-full object-cover"
                                 src={service?.serviceImage || "https://via.placeholder.com/400"}
                                 alt={service?.serviceName || "Service Image"}
                              />
                           </div>
                        </div>
                        <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                           <div className="flex flex-row items-start lg:flex-col">
                              {/* নানারকম থাম্বনেইল বাটন যোগ করা যেতে পারে */}
                              <button
                                 type="button"
                                 className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                              >
                                 <img
                                    className="h-full w-full object-cover"
                                    src={service?.serviceImage || "https://via.placeholder.com/400"}
                                    alt={service?.serviceName || "Service Image"}
                                 />
                              </button>
                              <button
                                 type="button"
                                 className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                              >
                                 <img
                                    className="h-full w-full object-cover"
                                    src={service?.serviceImage || "https://via.placeholder.com/400"}
                                    alt={service?.serviceName || "Service Image"}
                                 />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-2">
                     {/* সার্ভিস সম্পর্কে বিস্তারিত তথ্য, রিভিউ ইত্যাদি */}
                     <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        {service?.serviceName || "Service Title"}
                     </h1>

                     <div className="mt-5 flex items-center">
                        {/* উদাহরণ স্বরূপ পাঁচটি স্টার */}
                        <div className="flex items-center">
                           {[...Array(5)].map((_, index) => (
                              <svg
                                 key={index}
                                 className="block h-4 w-4 align-middle text-yellow-500"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                              >
                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                           ))}
                        </div>
                        <p className="ml-2 text-sm font-medium text-gray-500">
                           {service?.reviewsCount || 0} Reviews
                        </p>
                     </div>

                     <div className="mt-8">
                        <h2 className="text-base text-gray-900">Service Details</h2>
                        <p className="mt-4 text-gray-700">
                           {service?.description || "No additional details available."} consectetur adipisicing elit. Aut, reprehenderit optio excepturi itaque, ut voluptas possimus amet eius earum beatae molestiae 
                        </p>
                     </div>

                     <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                        <div className="flex items-end">
                           <h1 className="text-3xl font-bold">৳{service?.price || "N/A"}</h1>
                           <span className="text-base">/service</span>
                        </div>

                        <button
                           type="button"
                           className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                        >
                           {/* কার্টে যোগ করার আইকন */}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="shrink-0 mr-3 h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              />
                           </svg>
                           confrom
                        </button>
                     </div>

                     <ul className="mt-8 space-y-2">
                        <li className="flex items-center text-sm font-medium text-gray-600">
                           <svg
                              className="mr-2 block h-5 w-5 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945"
                              />
                           </svg>
                           Free shipping worldwide
                        </li>
                        



                        <li className="flex items-center text-sm font-medium text-gray-600">
                           <svg
                              className="mr-2 block h-5 w-5 text-gray-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                           </svg>
                           Deadline: {formattedDeadline}
                        </li>
                     </ul>
                     <div className="px-6 py-4 flex justify-between items-center">
                           <div className="flex items-center">
                           {/* Provider Image */}
                              <img
                                 className="w-12 h-12 rounded-full mr-4"  
                                  src={service?.byer?.userPhoto || "https://via.placeholder.com/48"}
                                 alt={service?.byer?.userName || "Unknown"}
                                        />
                              <div className="text-sm">
                                 <p className="font-semibold text-gray-900">
                                     {service?.byer?.userName || "Unknown"}
                              </p>
                               <p className="text-gray-600 ">
                                     {service?.byer?.userEmail || "Not Provided"}
                               </p>
                            </div>
                         </div>
                                     {/* সার্ভিস প্রাইস */}
                        <div className="text-xl font-bold text-blue-600 dark:text-white">
                                 
                         </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default ServiceDetailsPage;
