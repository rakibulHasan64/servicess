import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context";
import Swal from "sweetalert2";

function OrderPage() {
   const { user } = useContext(AuthContext);
   const { id } = useParams();
   const [datas, setDatas] = useState();

   useEffect(() => {
      axios(`${import.meta.env.VITE_API_URL}/services/${id}`)
         .then((res) => {
            setDatas(res.data);
         })
         .catch((err) => {
            console.error("Error fetching service:", err);
         });
   }, [id]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const orderDetails = {
         name: e.target.name.value,
         email: e.target.email.value,
         phone: e.target.phone.value,
         address: e.target.address.value,
         price: e.target.price.value,
         serviceArea: e.target.serviceArea.value,
      };

      console.log("Order Submitted:", orderDetails);
      axios
         .post(`${import.meta.env.VITE_API_URL}/order`, orderDetails)
         .then((response) => {
            console.log("Order Placed:", response.data);

            Swal.fire({
               title: "Success!",
               text: "Order successfully placed!",
               icon: "success",
               confirmButtonColor: "#3085d6",
               confirmButtonText: "OK",
            });

            e.target.reset();
         })
         .catch((error) => {
            console.error("Error placing order:", error);

            Swal.fire({
               title: "Error!",
               text: "Failed to place order. Please try again.",
               icon: "error",
               confirmButtonColor: "#d33",
               confirmButtonText: "Try Again",
            });
         });
   };

   return (
      <div className="max-w-lg mx-auto p-4">
         <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>
         {id && <p className="mb-4 text-center">Order ID: {datas?._id}</p>}
         <form onSubmit={handleSubmit}>
            <div className="mb-4">
               <label htmlFor="name" className="block text-gray-700">Name</label>
               <input type="text" id="name" name="name" placeholder="Enter your name" className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label htmlFor="email" className="block text-gray-700">Email</label>
               <input type="email" id="email" name="email" defaultValue={user?.email} readOnly className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label htmlFor="price" className="block text-gray-700">Price</label>
               <input type="number" id="price" name="price" defaultValue={datas?.price} readOnly className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label htmlFor="phone" className="block text-gray-700">Phone</label>
               <input type="text" id="phone" name="phone" placeholder="Enter your phone number" className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label htmlFor="address" className="block text-gray-700">Address</label>
               <textarea id="address" name="address" placeholder="Enter your address" className="mt-1 w-full border rounded p-2" required></textarea>
            </div>

            <div className="mb-4">
               <label className="block text-gray-700">Service Area</label>
               <select name="serviceArea" className="w-full p-2 border border-gray-300 rounded-md" required>
                  <option value="">Select Service Area</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
               </select>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200">
               Submit Order
            </button>
         </form>
      </div>
   );
}

export default OrderPage;
