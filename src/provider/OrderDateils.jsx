import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

function OrderDetails() {
   const { data: orders = [], isLoading, error, refetch } = useQuery({
      queryKey: ["orders"],
      queryFn: async () => {
         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/order`);
         return data;
      },
   });

   const deleteOrderMutation = useMutation({
      mutationFn: async (orderId) => {
         await axios.delete(`${import.meta.env.VITE_API_URL}/order/${orderId}`);
      },
      onSuccess: () => {
         refetch(); // Refetch the order list after deletion
      },
   });

   const handleDelete = (id) => {
      console.log(id);
      
   };

   if (isLoading) return <p className="text-center">Loading...</p>;
   if (error) return <p className="text-center text-red-500">Failed to load orders</p>;

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Order</title>
         </Helmet>

         <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Order List</h2>
            <table className="w-full border-collapse border border-gray-300">
               <thead>
                  <tr className="bg-gray-200 dark:bg-white">
                     <th className="p-2 border">#</th>
                     <th className="p-2 border">Name</th>
                     <th className="p-2 border">Email</th>
                     <th className="p-2 border">Phone</th>
                     <th className="p-2 border">Address</th>
                     <th className="p-2 border">Price</th>
                     <th className="p-2 border">Service Area</th>
                     <th className="p-2 border">Actions</th>
                  </tr>
               </thead>
               <tbody className="bg-gray-200 dark:bg-white">
                  {orders.map((order, index) => (
                     <tr key={order._id} className="border">
                        <td className="p-2 border text-center">{index + 1}</td>
                        <td className="p-2 border">{order.name}</td>
                        <td className="p-2 border">{order.email}</td>
                        <td className="p-2 border">{order.phone}</td>
                        <td className="p-2 border">{order.address}</td>
                        <td className="p-2 border text-center">${order.price}</td>
                        <td className="p-2 border text-center">{order.serviceArea}</td>
                        <td className="p-2 border text-center">
                           <button
                              onClick={() => handleDelete(order._id)}
                              className="text-red-500 hover:text-red-700"
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
}

export default OrderDetails;
