import { Helmet } from "react-helmet-async";
import AllServicsPageCard from "./AllServicsPageCard";


function AllServesPage() {


   return (
      <>
         
         
         <Helmet>
            <meta charSet="utf-8" />
            <title>All | Servics</title>

         </Helmet>
         <AllServicsPageCard />
         
      </>
   );
}

export default AllServesPage;
