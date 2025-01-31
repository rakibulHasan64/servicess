import UseCarts from "../../hook/UseCarts";
import AllItem from "./AllItem";

function AllServicesPageCard() {
   const [servicses, isLoading, error] = UseCarts();  
   // Handle loading state
   if (isLoading) return <div>Loading...</div>;

   // Handle error state
   if (error) return <div>Error fetching services: {error.message}</div>;

   return (
      <>
         <div className="bg-[#F5F9FF] dark:bg-gray-600">
            <div className="container mx-auto py-16">
               <h3 className="text-center font-bold text-[#0E1336] text-4xl sm:text-6xl">
                  Our <span className="text-[#5965E7]">All Services</span>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 p-4 sm:p-3 mt-12">
                  {servicses.map(item => (
                     <AllItem key={item.id} item={item} />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default AllServicesPageCard;
