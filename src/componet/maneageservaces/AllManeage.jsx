
import Swal from "sweetalert2";
import UseCarts from "../../hook/UseCarts";
import axios from "axios";
import { Link } from "react-router-dom";

function AllManeage() {
   const [servicses, isLoading, error, refetch] = UseCarts();








   if (isLoading) {
      return <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-screen bg-amber-100 animate-[spin_0.8s_linear_infinite] fill-blue-600 block mx-auto"
         viewBox="0 0 24 24">
         <path
            d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
            data-original="#000000" />
      </svg>
   }

   if (error) {
      return <div>Error: {error.message}</div>;
   }




   const handleDelete = async (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/servicess/${id}`);

               if (data.deletedCount > 0) {
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success"
                  });

                  
                  refetch();
               }
            } catch (error) {
               console.error("Delete failed:", error);
               Swal.fire({
                  title: "Error!",
                  text: "Something went wrong while deleting.",
                  icon: "error"
               });
            }
         }
      });
   };

   



   return (
      <div className="container mx-auto py-20">
         <div className="font-sans overflow-x-auto">
            <table className="min-w-full bg-white">
               <thead className="bg-gray-100 whitespace-nowrap">
                  <tr>
                     <th className="p-4 text-left text-xs font-semibold text-gray-800">#</th>
                     <th className="p-4 text-left text-xs font-semibold text-gray-800">Name</th>
                     <th className="p-4 text-left text-xs font-semibold text-gray-800">Email</th>
                     <th className="p-4 text-left text-xs font-semibold text-gray-800">Price</th>
                     <th className="p-4 text-left text-xs font-semibold text-gray-800">Joined At</th>
                     <th className="p-4 text-left text-xs font-semibold text-gray-800">Actions</th>
                  </tr>
               </thead>
               <tbody className="whitespace-nowrap">
                  {servicses.map((service, index) => (
                     <tr key={index} className="hover:bg-gray-50">
                        <td className="p-4 text-[15px] text-gray-800">{index + 1}</td>
                        <td className="p-4 text-[15px] text-gray-800">{service.serviceName}</td>
                        <td className="p-4 text-[15px] text-gray-800">{service.byer.userEmail}</td>
                        <td className="p-4 text-[15px] text-gray-800">{service.price}</td>
                        <td className="p-4 text-[15px] text-gray-800">{service.userName}</td>
                        <td className="p-4">
                           <Link to={`/Update/${service._id}`}>
                              <button className="mr-4" title="Edit">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-blue-500 hover:fill-blue-700" viewBox="0 0 348.882 348.882">
                                    <path d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418z" />
                                    <path d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z" />
                                 </svg>
                              </button>
                           </Link>
                           <button onClick={() => handleDelete(service._id)} className="mr-4" title="Delete">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                 <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                                 <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                              </svg>
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

   );
}

export default AllManeage;
