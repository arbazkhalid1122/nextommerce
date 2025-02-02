import { server } from "../config";
import Intro from "../components/home_components/Intro";
import { motion } from "framer-motion";
import GridProducts from "../components/product_components/GridProducts";
import Moto1 from "../components/home_components/Moto1";
import Link from "next/link";
import { useGlobalContext } from "../Contexts/globalContext/context";
export default function Home() {


  const { translate } = useGlobalContext();
return (
    <div className="bg-secondary">
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
  </div>
);
}

