import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function OrderPage() {
   const { user } = useContext(AuthContext);
   const { id } = useParams();

   const [datas, setDatas] = useState();
   const [deadline, setDeadline] = useState(null);
   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
   const navigate = useNavigate();

   useEffect(() => {
      axios(`${import.meta.env.VITE_API_URL}/services/${id}`)
         .then((res) => setDatas(res.data))
         .catch((err) => console.error("Error fetching service:", err));
   }, [id]);

   useEffect(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
   }, [theme]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const orderDetails = {
         name: e.target.name.value,
         email: e.target.email.value,
         phone: e.target.phone.value,
         address: e.target.address.value,
         price: e.target.price.value,
         serviceArea: e.target.serviceArea.value,
         serviceName: e.target.serviceName.value,
         deadline: deadline ? deadline.toISOString() : "",
      };

      axios
         .post(`${import.meta.env.VITE_API_URL}/order`, orderDetails)
         .then(() => {
            Swal.fire({
               title: "Success!",
               text: "Order successfully placed!",
               icon: "success",
               confirmButtonColor: "#3085d6",
               confirmButtonText: "OK",
            });

            navigate("/");
            e.target.reset();
         })
         .catch(() => {
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
      <div className={`max-w-lg mx-auto p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
         {/* Theme Toggle Button */}
         <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 mb-4 bg-gray-700 text-white rounded-md"
         >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
         </button>

         <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>
         {id && <p className="mb-4 text-center">Order ID: {datas?._id}</p>}

         <form onSubmit={handleSubmit}>
            <div className="mb-4">
               <label className="block">Name</label>
               <input type="text" name="name" placeholder="Enter your name" className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label className="block">Email</label>
               <input type="email" name="email" defaultValue={user?.email} readOnly className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label className="block">Service Name</label>
               <input type="text" name="serviceName" value={datas?.serviceName || "Loading..."} readOnly className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label className="block">Price</label>
               <input type="number" name="price" value={datas?.price || "Loading..."} readOnly className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label className="block">Phone</label>
               <input type="text" name="phone" placeholder="Enter your phone number" className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
               <label className="block">Address</label>
               <textarea name="address" placeholder="Enter your address" className="mt-1 w-full border rounded p-2" required></textarea>
            </div>

            <div className="mb-4">
               <label className="block">Service Area</label>
               <select name="serviceArea" className="w-full p-2 border border-gray-300 rounded-md" required>
                  <option value="">Select Service Area</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
               </select>
            </div>

            <div className="mb-4">
               <label className="block">Deadline</label>
               <DatePicker
                  className="w-full p-2 border border-blue-600 rounded-md"
                  dateFormat="MMMM d, yyyy"
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  required
               />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200">
               Submit Order
            </button>
         </form>
      </div>
   );
}

export default OrderPage;
