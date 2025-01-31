
function Footer() {
   return (
      <>
         <footer className="font-[sans-serif] tracking-wide bg-[#213343] py-10 px-10">
            <div className="max-w-screen-xl mx-auto">
               <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <li>
                     <h3 className="text-[#FFA726] text-4xl">25+</h3>
                     <p className="text-gray-400 text-sm mt-2">Years of Experience</p>
                  </li>
                  <li>
                     <h3 className="text-[#FFA726] text-4xl">99%</h3>
                     <p className="text-gray-400 text-sm mt-2">Happy Customers</p>
                  </li>
                  <li>
                     <h3 className="text-[#FFA726] text-4xl">150+</h3>
                     <p className="text-gray-400 text-sm mt-2">Successful projects</p>
                  </li>
                  <li>
                     <h3 className="text-[#FFA726] text-4xl">50+</h3>
                     <p className="text-gray-400 text-sm mt-2">Team Members</p>
                  </li>
               </ul>

               <hr className="my-10 border-gray-500" />

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                  <div>
                     <h4 className="text-[#FFA726] text-lg mb-4">Quick Links</h4>
                     <ul className="space-y-3">
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Our Story</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Newsroom</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Careers</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Blog</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="text-[#FFA726] text-lg mb-4">Services</h4>
                     <ul className="space-y-3">
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Web Development</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Testing Automation</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">AWS Development Services</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Mobile App Development</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="text-[#FFA726] text-lg mb-4">Platforms</h4>
                     <ul className="space-y-3">
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Hubspot</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Marketo Integration
                              Services</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Marketing Glossary</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">UIPath</a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h4 className="text-[#FFA726] text-lg mb-4">Company</h4>
                     <ul className="space-y-3">
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Accessibility</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">About</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Contact</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-[#FFA726] text-gray-400 text-sm">Learn more</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;