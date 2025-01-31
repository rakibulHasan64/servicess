import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function UseCarts() {
   const { data: servicses = [], isLoading, error,refetch } = useQuery({
      queryKey: ["services"],  // Unique key for this query
      queryFn: async () => {
         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/servicses`);
         return data;  // Return data to be used in the component
      },
   });

   // If error occurs, return a default message or null
   if (error) {
      console.error('Error fetching servicses:', error);
   }

   return [servicses, isLoading, error, refetch];
}

export default UseCarts;
