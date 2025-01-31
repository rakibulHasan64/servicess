import Advantage from "./Advantage";
import Banner from "./Banner";
import Contact from "./Contact";
import Customar from "./Customar";
import PopularServices from "./PopularServices";


function AllLayout() {
   return (
      <>
         <Banner />
         <PopularServices />
         <Customar />
         <Advantage />
         <Contact />
      </>
   );
}

export default AllLayout;