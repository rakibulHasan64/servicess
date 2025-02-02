import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // datepicker এর স্টাইল
import { useNavigate } from "react-router-dom";

function AddService() {
   const { user } = useContext(AuthContext);
   const nagvate = useNavigate();
   const [startDate, setStartDate] = useState(null); // ডেট স্টেট
   const [message, setMessage] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const serviceData = {
         serviceName: formData.get("serviceName"),
         serviceImage: formData.get("serviceImage"),
         price: parseFloat(formData.get("price")),  // Ensure it's a number
         byer: {
            userName: user?.displayName || "Unknown",
            userEmail: user?.email || "Unknown",
            userPhoto: user?.photoURL || "",
         },
         serviceArea: formData.get("serviceArea"),
         description: formData.get("description"),
         deadline: new Date(formData.get("deadline")),  // Ensure it's a Date object
      };

   
   
      

      axios.post(`${import.meta.env.VITE_API_URL}/servic`, serviceData)
         .then((response) => {
            console.log('Service Added:', response.data);
            setMessage("Service successfully added!");
            e.target.reset(); 
            nagvate("/AllService")
         })
         .catch((error) => {
            console.error('Error adding service:', error);
            setMessage("Error adding service. Please try again.");
         });
   };

   return (
      <div className="py-20">
         <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Add a New Service</h2>

            {message && (
               <div className="mb-4 p-3 rounded bg-green-100 text-green-800">
                  {message}
               </div>
            )}

            <form onSubmit={handleSubmit}>
               

               <div className="mb-4">
                  <label className="block text-gray-700">Image URL of the Service</label>
                  <input
                     type="text"
                     name="serviceImage"
                     className="w-full p-2 border border-gray-300 rounded-md"
                     placeholder="Enter image URL"
                     required
                  />
               </div>

               <div className="mb-4">
                  <label className="block text-gray-700">Service Name</label>
                  <select
                     name="serviceName"
                     className="w-full p-2 border border-gray-300 rounded-md"
                     required
                  >
                     <option value="">Select a Service</option>
                     <option value="Web Design">Web Design</option>
                     <option value="Digital Marketing">Digital Marketing</option>
                     <option value="Social Media Marketing">Social Media Marketing</option>
                     <option value="UI/UX Design">UI/UX Design</option>
                     <option value="SEO">SEO</option>
                  </select>

               </div>


               <div className="mb-4">
                  <label className="block text-gray-700">Price</label>
                  <input
                     type="number"
                     name="price"
                     className="w-full p-2 border border-gray-300 rounded-md"
                     required
                  />
               </div>

               <div className="mb-4">
                  <label className="block text-gray-700">Service Area</label>
                  <select
                     name="serviceArea"
                     className="w-full p-2 border border-gray-300 rounded-md"
                     required
                  >
                     <option value="">Select Service Area</option>
                     <option value="Dhaka">Dhaka</option>
                     <option value="Chittagong">Chittagong</option>
                     <option value="Sylhet">Sylhet</option>
                     <option value="Rajshahi">Rajshahi</option>
                  </select>
               </div>

               <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <textarea
                     name="description"
                     maxLength={100}
                     className="w-full p-2 border border-gray-300 rounded-md"
                     required
                     placeholder="Service description (max 100 characters)"
                  />
               </div>

               <div className="mb-4 flex flex-col gap-2">
                  <label className="text-gray-700">Deadline</label>
                  <DatePicker
                     className="shadow-xl shadow-blue-200 text-red-500 text-sm tracking-wider font-medium outline-none border border-blue-600 active:shadow-inner p-2 rounded-md"
                     selected={startDate}
                     onChange={(date) => setStartDate(date)}
                     name="deadline"
                     dateFormat="MMMM d, yyyy"
                     required
                  />
               </div>

               <button
                  type="submit"
                  className="w-full shadow-2xl shadow-red-500 text-white bg-red-500 p-2 rounded-md hover:bg-blue-700"
               >
                  Add Service
               </button>
            </form>
         </div>
      </div>
   );
}

export default AddService;
