import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Update() {
   const navegate = useNavigate();
   const [startDate, setStartDate] = useState(null);
   const [message, setMessage] = useState('');
   const [data, setData] = useState({});
   const { id } = useParams();

   useEffect(() => {
      axios(`${import.meta.env.VITE_API_URL}/servisee/${id}`)
         .then((res) => {
            setData(res.data);
         })
         .catch((error) => {
            setMessage('Error fetching data');
            console.error(error);
         });
   }, [id]);

   const {
      deadline,
      description,
      price,
      serviceArea,
      serviceImage,
      serviceName,
      userEmail,
      userName
   } = data || {};

   // Ensure deadline is a valid date
   const validDeadline = deadline && !isNaN(new Date(deadline).getTime()) ? new Date(deadline) : null;

   const handleSubmit = (e) => {
      e.preventDefault();

      const updatedData = {
         serviceImage,
         serviceName,
         price,
         serviceArea,
         description,
         deadline: startDate || validDeadline,
         userEmail,
         userName,
      };

      

      try {
         axios.put(`${import.meta.env.VITE_API_URL}/serviseed/${id}`, updatedData)
            .then((res) => {
               e.target.reset();
               if (res.data.modifiedCount > 0) {
               
                  Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "Your work has been saved",
                     showConfirmButton: true,
                     timer: 1500
                  });
                  

                  navegate('/AllService')
               }
            })
            .catch((error) => {
               console.log(error);
               
            });
      } catch (error) {
         console.error("Unexpected error:", error);
         setMessage('Unexpected error occurred');
         alert('Unexpected error occurred');  // Alert for unexpected errors
      }
   };

   // Handle individual field changes and update the state object
   const handleFieldChange = (e) => {
      const { name, value } = e.target;
      setData(prevData => ({
         ...prevData,
         [name]: value
      }));
   };

   return (
      <>
         <div className="py-20">
            <div className="max-w-lg mx-auto p-6 border rounded-lg shadow-lg bg-white">
               <h2 className="text-2xl font-bold mb-4">Update a New Service</h2>

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
                        value={serviceImage || ''}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter image URL"
                        required
                        onChange={handleFieldChange}
                     />
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700">Service Name</label>
                     <select
                        name="serviceName"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={serviceName || ''}
                        required
                        onChange={handleFieldChange}
                     >
                        <option value="">Select a Service</option>
                        <option value="cloud-hosting">AC SERVICE</option>
                        <option value="video-production">Delivery Service</option>
                        <option value="bookkeeping">Toor Service</option>
                        <option value="research">Electronics Service</option>
                        <option value="proofreading-editing">Editing Service</option>
                     </select>
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700">Price</label>
                     <input
                        type="number"
                        name="price"
                        value={price || ''}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                        onChange={handleFieldChange}
                     />
                  </div>

                  <div className="mb-4">
                     <label className="block text-gray-700">Service Area</label>
                     <select
                        name="serviceArea"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={serviceArea || ''}
                        required
                        onChange={handleFieldChange}
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
                        value={description || ''}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                        onChange={handleFieldChange}
                        placeholder="Service description (max 100 characters)"
                     />
                  </div>

                  <div className="mb-4 flex flex-col gap-2">
                     <label className="text-gray-700">Deadline</label>
                     <DatePicker
                        className="shadow-xl shadow-blue-200 text-black text-sm tracking-wider font-medium outline-none border border-blue-600 active:shadow-inner p-2 rounded-md"
                        selected={startDate || validDeadline}
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
                     Edit Service
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}

export default Update;
