import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Banner() {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000
   };

   return (
      <div className="banner-container">
         <Slider {...settings}>
            <div className="bg-[#F6F9FC] dark:bg-gray-700 py-20">
               <div className="container m-auto pt-[50px] pb-[120px] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div className="w-full text-center sm:text-left">
                     <h3 className="text-3xl dark:text-white sm:text-4xl md:text-6xl font-bold">
                        Corporate & Fraud <br /> Investigation Services
                     </h3>
                     <p className="text-lg sm:text-xl mt-4 dark:text-gray-300">
                        Get free shipping on all orders over $99.00
                     </p>
                     <Link to="#" className="rounded-xl shadow-2xl shadow-red-500 text-white bg-red-500 py-3 px-6 inline-block mt-4">
                        Learn More
                     </Link>
                  </div>
                  <div className="w-full text-center">
                     <img className="max-w-full mx-auto" src='https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg' alt="Corporate Investigation" />
                  </div>
               </div>
            </div>

            <div className="bg-[#F6F9FC] dark:bg-gray-700">
               <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div className="w-full text-center sm:text-left">
                     <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
                        Background Checks & <br /> Surveillance Services
                     </h3>
                     <p className="text-lg sm:text-xl mt-4 dark:text-gray-300">
                        Ensuring security and trust with in-depth analysis.
                     </p>
                     <Link to="/" className="rounded-xl shadow-2xl shadow-[#0554F2] text-white bg-[#0554F2] py-3 px-6 inline-block mt-4 ">
                        Learn More
                     </Link>
                  </div>
                  <div className="w-full text-center">
                     <img className="max-w-full mx-auto" src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg" alt="Background Check" />
                  </div>
               </div>
            </div>

            <div className="bg-[#F6F9FC] dark:bg-gray-700">
               <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div className="w-full text-center sm:text-left">
                     <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold dark:text-white">
                        Cyber Security & <br /> Forensic Investigation
                     </h3>
                     <p className="text-lg sm:text-xl mt-4 dark:text-gray-300">
                        Protect your digital assets with expert analysis.
                     </p>
                     <Link to="/" className="rounded-xl shadow-2xl shadow-[#0554F2] text-white bg-[#0554F2] py-3 px-6 inline-block mt-4">
                        Learn More
                     </Link>
                  </div>
                  <div className="w-full text-center">
                     <img className="max-w-full mx-auto" src="https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg" alt="Cyber Security" />
                  </div>
               </div>
            </div>
         </Slider>
      </div>
   );
}

export default Banner;
