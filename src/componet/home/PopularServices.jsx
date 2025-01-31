import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesItem from "./ServicesItem";

function PopularServices() {
   const services = [
      {
         id: 1,
         name: "নিগরানি সেবা",
         image: "https://www.easterslock.com/wp-content/uploads/2022/06/Video-Surveillance.jpg",
      },
      {
         id: 3,
         name: "প্রতারণা তদন্ত",
         image: "https://asginvestigations.com/wp-content/uploads/2021/08/Fraud-Investigation.jpg",
      },
      {
         id: 4,
         name: "সাইবার সিকিউরিটি",
         image: "https://www.digitalforensics.com/images/cyber-security.jpg",
      },
      {
         id: 5,
         name: "আইনি সহায়তা",
         image: "https://www.globalinvestigations.co.uk/wp-content/uploads/2020/01/Legal-Support.jpg",
      },
      {
         id: 6,
         name: "ফরেনসিক হিসাবরক্ষণ",
         image: "https://media.istockphoto.com/id/1171446282/photo/spreadsheet-table-paper-with-pencil-finance-development-banking-account-statistics-investment.jpg?s=612x612&w=0&k=20&c=QFU_Dj1XycaKdqfokhRPauc9RV2iog2TUW4iKNcoHqs=",
      },
      {
         id: 7,
         name: "নিখোঁজ ব্যক্তির অনুসন্ধান",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD__pWjLTKjBRLsz2qXdbDDtR2c9c7w8FEg&s",
      },
   ];

   useEffect(() => {
      AOS.init({
         duration: 1000, // Animation duration
         once: true, // Trigger the animation once
      });
   }, []);

   return (
      <>
         <div className="bg-[#F5F9FF] dark:bg-black">
            <div className="container mx-auto py-16">
               <h3 className="text-center dark:text-white text-[#0E1336] text-4xl sm:text-6xl" data-aos="fade-up">
                  Discover Our <span className="text-[#5965E7]">latest offers</span>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 p-4 sm:p-3 mt-16">
                  {
                     services.map((item, index) => (
                        <ServicesItem
                           key={item.id}
                           item={item}
                           data-aos="fade-right"
                           data-aos-delay={index * 200} // Stagger animation
                        />
                     ))
                  }
               </div>

               <div className="text-center mb-7 mt-14">
                  <button className="px-5 font-mono text-[20px] p-3 rounded-xl shadow-2xl shadow-red-600 text-white bg-red-600" data-aos="fade-up" data-aos-delay="1200">
                     Explore more
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default PopularServices;
