import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GridProducts() {
  const [products, setProducts] = useState([]);

  // Fetching products from local storage
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('productData')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 pt-28">
      {products.length > 0 ? (
        products.map((product, id) => (
          <Link key={id} href={`/product/${id}`} passHref>
            <motion.div
              initial={{ zIndex: -100, opacity: 0, y: 0 }}
              whileInView={{ zIndex: 0, opacity: 1, y: -100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              transition={{
                opacity: { ease: "easeOut", duration: 1 },
                y: { ease: "easeOut", duration: 1 },
                scale: { ease: "easeIn", duration: 0.3 },
              }}
              className="group bg-white rounded-sm shadow-lg overflow-hidden transition-colors duration-300 transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 bg-gray-200">
  {product.image ? (
    product.image.startsWith("data:image") ? ( // Check if it's a base64 image
      <img
        alt={product.name}
        src={product.image}
        className="object-cover w-full h-full"
      />
    ) : (
      <Image
        alt={product.name}
        src={product.image || "/fallback-image.jpg"} // Use fallback image if necessary
        width={300}
        height={300}
        className="object-cover w-full h-full"
        placeholder="blur"
        blurDataURL={product.image}
      />
    )
  ) : (
    <Image
      alt={product.name}
      src="/fallback-image.jpg" // Fallback image if no image is available
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  )}
</div>


              {/* Text Section (Name and Price) */}
              <div className="px-4 py-3">
                <div className="flex flex-col">
                  {/* Product Name */}
                  <p className="text-lg font-semibold text-primary mb-1">
                    {product.name.replace(/_/g, " ")}
                  </p>
                  {/* Product Price */}
                  <p className="text-md text-gray-500 font-medium">  ${product.price}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))
      ) : (
        <p className="col-span-full text-center text-lg">No products found.</p>
      )}
    </div>
  );
}
