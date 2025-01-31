import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   // লোডিং স্টেটের জন্য
   if (loading) {
      return (
         <div className="flex justify-center items-center py-20">
            <div className="text-5xl text-gray-500 dark:text-white">Loading...</div>
         </div>
      );
   }

   // যদি ব্যবহারকারী লগইন থাকে, তাহলে চাইল্ড কম্পোনেন্ট দেখান
   if (user) {
      return children;
   }

   // যদি ব্যবহারকারী লগইন না থাকে, লগইন পেজে রিডিরেক্ট করুন
   // বর্তমান পাথ (location.pathname) state হিসেবে পাঠানো হচ্ছে
   return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
