import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesItem from "./ServicesItem";

function PopularServices() {
   const services = [
      {
         id: 1,
         name: "Web Design",
         image: "https://cdn.pixabay.com/photo/2016/09/14/08/26/web-1668928_640.png",
         cat:"Web Design"
      },
      {
         id: 3,
         name: "Digital Marketing",
         image: "https://cdn.pixabay.com/photo/2024/03/13/07/41/digital-marketing-8630397_1280.png",
         cat: "Digital Marketing"
      },
      {
         id: 4,
         name: "SEO",
         image: "https://cdn.pixabay.com/photo/2020/08/24/05/43/search-engine-5512814_640.jpg",
         cat: "SEO"
      },
      {
         id: 5,
         name: "Social Media Marketing",
         image: "https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_1280.jpg",
         cat: "Social Media Marketing"
      },
      {
         id: 6,
         name: "graphic design",
         image: "https://img.freepik.com/free-vector/graphic-designer-isometric-landing-page-banner_107791-2564.jpg?uid=R163698922&ga=GA1.1.1899974975.1726507053&semt=ais_hybrid_sidr",
         cat: "graphic design"
      },
      {
         id: 7,
         name: "UI/UX Design",
         image: "https://cdn.pixabay.com/photo/2024/06/13/11/54/ui-8827392_1280.jpg",
         cat: "UI/UX Design"
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
                  populer services
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
