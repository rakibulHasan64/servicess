import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function OrderDetails() {
   const { data: orders = [], isLoading, error, refetch } = useQuery({
      queryKey: ["orders"],
      queryFn: async () => {
         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/order`);
         return data;
      },
   });

   if (isLoading) return <p className="text-center">Loading...</p>;
   if (error) return <p className="text-center text-red-500">Failed to load orders</p>;

   return (
      <div className="max-w-4xl mx-auto p-4">
         <h2 className="text-2xl font-bold mb-4 text-center">Order List</h2>
         <table className="w-full border-collapse border border-gray-300">
            <thead>
               <tr className="bg-gray-200">
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Address</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Service Area</th>
               </tr>
            </thead>
            <tbody>
               {orders.map((order, index) => (
                  <tr key={order._id} className="border">
                     <td className="p-2 border text-center">{index + 1}</td>
                     <td className="p-2 border">{order.name}</td>
                     <td className="p-2 border">{order.email}</td>
                     <td className="p-2 border">{order.phone}</td>
                     <td className="p-2 border">{order.address}</td>
                     <td className="p-2 border text-center">${order.price}</td>
                     <td className="p-2 border text-center">{order.serviceArea}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default OrderDetails;
