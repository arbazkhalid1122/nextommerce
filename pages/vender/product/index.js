import { useRouter } from "next/router";
import React, { useState } from "react";
import ProductGrid from "../../../components/Product";
import { products } from "@/components/data/fakeData";
import { useCart } from "@/components/context/context";

const Products = () => {
  const { newlyProducts } = useCart();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of products per page

  const allProducts = [...products, ...newlyProducts];



  // Calculate the current products to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col  md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Products</h2>
        <div className="flex items-center gap-2">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={() => router.push("/vender/addProduct")}>
            Add Product
          </button>
          <select className="border px-3 py-2 rounded-lg">
            <option>By Date</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <ProductGrid products={currentProducts} onClick={() => router.push(`product/1`)} />
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded ${index + 1 === currentPage ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
