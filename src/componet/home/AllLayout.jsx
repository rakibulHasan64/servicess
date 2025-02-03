import { Helmet } from "react-helmet-async";
import Advantage from "./Advantage";
import Banner from "./Banner";
import Contact from "./Contact";
import Customar from "./Customar";
import PopularServices from "./PopularServices";


function AllLayout() {
   return (
      <>
         

            
         <Helmet>
            <meta charSet="utf-8" />
            <title>Home | ❤🧡💛💚💚💥</title>

         </Helmet>
          <Banner /> 
         <PopularServices />
         <Customar />
         <Advantage /> 
         <Contact />
      </>
   );
}

export default AllLayout;