import { server } from "../config";
import Intro from "../components/home_components/Intro";
import { motion } from "framer-motion";
import GridProducts from "../components/product_components/GridProducts";
import Moto1 from "../components/home_components/Moto1";
import Link from "next/link";
import { useGlobalContext } from "../Contexts/globalContext/context";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      router.push("/admin/product/display");
    }
  }, []);
  const sales = {
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone",
    "scope": "/",
    "start_url": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
    "name": "nextommerce",
    "short_name": "nextommerce",
    "description": "PWA next.js e-commerce",
    "icons": [
        {
            "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
  } 
  const { translate } = useGlobalContext();
return (
    <div className="bg-gray-100 ">
      <Intro />
        <div className="w-[85%] sm:w-[75%] mx-auto mt-36 mb-20">
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="capitalize text-3xl text-secondary text-center"
          >
            {translate("latest_arivals")}
          </motion.p>
          <GridProducts  />
        </div>
      
      {/* <Moto1 /> */}
      {sales.length > 0 ? (
        <div className="w-[85%] sm:w-[75%] mx-auto mt-36 mb-10">
          <motion.h4
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: -40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="capitalize text-3xl text-secondary text-center"
          >
            {translate("sales")}
          </motion.h4>
          <GridProducts products={sales} limit={6} />
        </div>
      ) : null}
     
  </div>
);
}

