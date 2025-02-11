import { useRouter } from "next/router";
import ProductCard from "../../../components/Product";
import React from "react";

const Products = () => {
  const router = useRouter();
const [isOpen, setIsOpen] = React.useState(false);
    const products = [
      { img: "../assets/watch.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/phone.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/laptop.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/watch.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/phone.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/laptop.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
    ];
  
    return (
      <div className="">
      <div className="flex flex-col justify-start md:flex-row justify-between items-center">
        <h2 className="text-2xl sm:w-auto w-[100%] md:w-auto lg:w-auto font-bold mb-4 md:mb-0 md:mr-auto text-left md:text-center">Products</h2>
        <div className="flex items-center justify-between w-full md:w-auto gap-2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={() => setIsOpen(true)}>Add Product</button>
        <select className="border px-3 py-2 rounded-lg">
          <option>By Date</option>
        </select>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {products.map((product, index) => (
        <ProductCard product={product} key={index} onClick={() => { router.push(`product/${index}`) }} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button className="px-3 py-1 border rounded bg-gray-800 text-white">1</button>
        <button className="px-3 py-1 border rounded">2</button>
        <button className="px-3 py-1 border rounded">3</button>
        <button className="px-3 py-1 border rounded">4</button>
      </div>
      {/* <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </div>
    );
  };
  
  export default Products;
  