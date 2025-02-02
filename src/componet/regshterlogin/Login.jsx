import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";
import Swal from "sweetalert2";


function Login() {
   const { signIn, signInWithGoogle } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from || "/";

   const handleGoogleSignIn = async () => {
      try {
         await signInWithGoogle();
         // Using sweetalert for success
         Swal.fire({
            icon: 'success',
            title: 'সাইন ইন সফল হয়েছে',
            showConfirmButton: false,
            timer: 1500
         });
         navigate(from, { replace: true });
      } catch (err) {
         console.log(err);
         // Using sweetalert for error
         Swal.fire({
            icon: 'error',
            title: 'কিছু ভুল হয়েছে',
            text: err?.message || "অনুগ্রহ করে আবার চেষ্টা করুন",
            showConfirmButton: true
         });
      }
   };


   



   const handleSubmit = async (e) => {
      e.preventDefault();

      
      const formData = new FormData(e.target);
      const datas = Object.fromEntries(formData);
      const { email, password } = datas;

      console.log(datas);

      try {
         await signIn(email, password,);
         // Using sweetalert for success
         Swal.fire({
            icon: 'success',
            title: 'সাইন ইন সফল হয়েছে',
            showConfirmButton: false,
            timer: 1500
         });
         navigate(from, { replace: true });
      } catch (err) {
         console.log(err);
         // Using sweetalert for error
         Swal.fire({
            icon: 'error',
            title: 'কিছু ভুল হয়েছে',
            text: err?.message || "অনুগ্রহ করে আবার চেষ্টা করুন",
            showConfirmButton: true
         });
      }
   };


   return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">লগইন</h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">ইমেইল</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="আপনার ইমেইল দিন"
                     required
                  />
               </div>

               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700">পাসওয়ার্ড</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                     placeholder="আপনার পাসওয়ার্ড দিন"
                     required
                  />
               </div>

               <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none"
               >
                  লগইন
               </button>
            </form>

            <div onClick={handleGoogleSignIn} className="mt-6">
               <button
                  type="button"
                  className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none flex items-center justify-center space-x-2"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                  >
                     <path d="M21.35 11.1h-9.17v2.72h5.82c-.36 1.85-2.1 2.72-3.57 2.72-2.06 0-3.72-1.76-3.72-3.92 0-2.15 1.66-3.91 3.72-3.91 1.02 0 1.95.4 2.67 1.04l2.04-2.04C15.95 6.18 14.54 5.6 13 5.6c-3.85 0-6.91 3.12-6.91 6.96 0 3.84 3.06 6.96 6.91 6.96 3.9 0 6.87-2.78 6.87-6.74 0-.56-.08-.98-.16-1.38z" />
                  </svg>
                  <span>গুগল দিয়ে সাইন ইন করুন</span>
               </button>
            </div>

            <p className="mt-4 text-center text-gray-600">
               একাউন্ট নেই?{" "}
               <Link
                  to="/register"
                  className="text-blue-500 hover:underline"
               >
                  এখানে রেজিস্টার করুন
               </Link>
            </p>
         </div>
      </div>
   );
}

export default Login;
