import { Outlet } from "react-router-dom";
import Navar from "./Naver";
import Footer from "./Footer";


function AllOutlate() {
   return (
      <>
         <Navar />
         <Outlet />
         <Footer />
         
      </>
   );
}

export default AllOutlate;