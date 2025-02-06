// import { server } from "../config";
// import Intro from "../components/home_components/Intro";
// import { motion } from "framer-motion";
import GridProducts from "../components/product_components/GridProducts";
// import Moto1 from "../components/home_components/Moto1";
// import Link from "next/link";
// import { useGlobalContext } from "../Contexts/globalContext/context";
// import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   const isAdmin = localStorage.getItem("isAdmin");
  //   if (isAdmin) {
  //     router.push("/vender/product/display");
  //   }
  // }, []);
 
return (
    <div className="bg-gray-100 ">
     
          <GridProducts  />
       
  </div>
);
}

