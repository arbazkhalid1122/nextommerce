import { useRouter } from "next/router";
import React, { useState } from "react";
import ProductGrid from "../../../components/Product";
import { products } from "@/components/data/fakeData";

const Products = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of products per page



  // Calculate the current products to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col justify-start md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Products</h2>
        <div className="flex items-center gap-2">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={() => setIsOpen(true)}>
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
      <div className="flex justify-center mt-6 gap-2">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-3 py-1 border rounded bg-gray-800 text-white"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-gray-800 text-white" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 border rounded bg-gray-800 text-white"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
