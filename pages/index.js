
import GridProducts from "../components/product_components/GridProducts";

import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
 
 
return (
    <div className="bg-gray-100 ">
     
          <GridProducts  />
       
  </div>
);
}

