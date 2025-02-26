import React, { useState } from "react";
import ProductGrid from "../../../components/Product";
import { products } from "@/components/data/fakeData";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of products per page



  // Calculate the current products to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-col justify-between md:flex-row  items-center">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Products</h2>
        <div className="flex items-center gap-2">
          <select className="border px-3 py-2 rounded-lg">
            <option>By Date</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <ProductGrid products={currentProducts}
        // onClick={(id) => router.push(`product/${id}`)} 
        />
      </div>

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
