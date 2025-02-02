import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import Swal from "sweetalert2";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);  
   const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("darkMode") === "true";  
   });
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const { user, logOut } = useContext(AuthContext);

   useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
   }, [darkMode]);

   const toggleDarkMode = () => {
      setDarkMode(prevMode => {
         const newMode = !prevMode;
         localStorage.setItem("darkMode", newMode);
         return newMode;
      });
   };


   const handleLogout = async () => {
      try {
         await logOut();
         Swal.fire({
            icon: 'success',
            title: 'Logout Successful!',
            text: 'You have successfully logged out.',
            showConfirmButton: false,
            timer: 1500,
         });
      } catch (err) {
         console.error(err);
         Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong!',
            text: err.message || 'Please try again.',
            showConfirmButton: true,
         });
      }
   };

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);  
   };

   return (
      <div className={darkMode ? "dark" : ""}>
         <div className="container mx-auto">
            <nav className="flex justify-between items-center p-5 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
               <div className="text-xl font-bold text-purple-600 dark:text-white">
                  <Link to="/">
                     <img src="https://cdn.pixabay.com/photo/2017/01/08/21/58/golden-swing-1964101_640.png" alt="Screder Logo" className="h-8" />
                  </Link>
               </div>

               <div className="hidden md:flex space-x-9">
                  <Link to="/" className="text-gray-600 dark:text-gray-200 hover:text-purple-600">
                     HOME
                  </Link>
                  <Link to="/AllService" className="block dark:text-white  text-gray-700">
                     All Service Page
                  </Link>
                  



                  {user && (
                     <div className="relative">
                        <span
                           className="dark:text-white text-gray-700 text-[15px] font-bold block cursor-pointer"
                           onClick={toggleDropdown}
                        >
                           Dashboard
                           <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block dark:text-white" viewBox="0 0 24 24">
                              <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                           </svg>
                        </span>

                        
                        <ul className={`absolute shadow-lg bg-white dark:text-white space-y-3 top-full left-0 min-w-[250px] z-50 px-6 pb-4 pt-6 transition-all duration-500 ${isDropdownOpen ? "block" : "hidden"}`}>
                           <Link to="/Addservices" className="text-gray-600  hover:text-purple-600">Add Services</Link>
                           <li><Link to="/ManageService" className="block py-2 text-gray-600">Manage Service</Link></li>
                           <li><Link to="/Booked-Services" className="block py-2 text-gray-600">Booked Services</Link></li>
                           <li><Link to="/signup" className="block py-2 text-gray-600">Services To-Do</Link></li>
                           <li><Link to="/mypost" className="block py-2 text-gray-600">MyPostServices</Link></li>
                        </ul>
                     </div>
                  )}

               </div>

               <div className="hidden md:flex space-x-4 items-center">
                  {user ? (
                     <div title={user.displayName} className="ml-3 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                        <img
                           referrerPolicy="no-referrer"
                           alt={user.displayName || "User Profile"}
                           src={user.photoURL || "https://via.placeholder.com/150?text=No+Image"}
                           className="w-full h-full object-cover"
                        />
                     </div>
                  ) : (
                     <Link to="/login" className="text-black dark:text-white hover:underline">Log In</Link>
                  )}

                  {user && (
                     <span onClick={handleLogout} className="cursor-pointer text-black dark:text-white hover:underline">
                        LOG OUT
                     </span>
                  )}

                  <button
                     onClick={toggleDarkMode}
                     className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-1 px-3 rounded-lg flex items-center"
                  >
                     {darkMode ? (
                        <FaSun className="mr-2" /> // Sun icon for Light Mode
                     ) : (
                        <FaMoon className="mr-2" /> // Moon icon for Dark Mode
                     )}
                     {darkMode ? "Light Mode" : "Dark Mode"}
                  </button>
               </div>

               <button className="md:hidden text-purple-600 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  ☰
               </button>
            </nav>

            {isMenuOpen && (
               <div className="md:hidden bg-white dark:bg-gray-800 shadow-md p-5 space-y-4">
                  <Link to="/" className="block text-gray-600 dark:text-gray-200 hover:text-purple-600">HOME</Link>
                  <Link to="/services" className="block text-gray-600 dark:text-gray-200 hover:text-purple-600">Services</Link>
                  <Link to="/AllService" className="block  text-gray-600">
                     All Service Page
                  </Link>
                  <div className="relative">
                     <span
                        className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block cursor-pointer"
                        onClick={toggleDropdown}  // Toggle dropdown for mobile menu
                     >
                        Dashboard
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                           <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                        </svg>
                     </span>
                     {isDropdownOpen && (
                        <ul className="absolute shadow-lg bg-white space-y-3 top-5 -left-6 min-w-[250px] z-50  px-6 pb-4 pt-6 transition-all duration-500 ease-in-out">
                           <li>
                              <Link to="/Addservices" className="text-gray-600 dark:text-gray-200 hover:text-purple-600">Add Services</Link>
                           </li>
                           <li>
                              <Link to="/ManageService" className="block py-2 hover:text-[#007bff] text-gray-600">
                                 Manage Service
                              </Link>
                           </li>
                           <li>
                              <Link to="/Booked-Services" className="block py-2 hover:text-[#007bff] text-gray-600">
                                 Booked Services
                              </Link>
                           </li>
                           <li>
                              <Link to="/signup" className="block py-2 hover:text-[#007bff] text-gray-600">
                                 Services To-Do
                              </Link>
                           </li>
                           <li>
                              <Link to="/mypost" className="block py-2 hover:text-[#007bff] text-gray-600">
                                 MyPostServices
                              </Link>
                           </li>
                        </ul>

                     )}
                  </div>
                  {user ? (
                     <div className="ml-3 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                        <img
                           referrerPolicy="no-referrer"
                           alt={user.displayName || "User Profile"}
                           src={user.photoURL || "https://via.placeholder.com/150?text=No+Image"}
                           className="w-full h-full object-cover"
                        />
                     </div>
                  ) : (
                     <Link to="/login" className="text-black dark:text-white hover:underline">Log In</Link>
                  )}
                  <div className="flex flex-col space-y-3 mt-3">
                     {user ? (
                        <Link to="/login" className="text-black dark:text-white hover:underline">Log In</Link>
                     ) : (
                        <span onClick={handleLogout} className="cursor-pointer text-black dark:text-white hover:underline">
                           LOG OUT
                        </span>
                     )}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default Navbar;
