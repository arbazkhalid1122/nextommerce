import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "../Product";

export default function GridProducts() {
  const [products, setProducts] = useState([]);

  // Fetching products from local storage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('productData')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 pt-24 px-2">
    {products.length > 0 ? (
      products.map((product, id) => (
        <div key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center ">
          <ProductCard product={product} />
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-lg">No products found.</p>
    )}
  </div>
  
  
  );
}
