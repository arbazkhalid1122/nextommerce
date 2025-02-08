import { useRouter } from "next/router";
import ProductCard from "../../../components/Product";

const Products = () => {
  const router = useRouter();

    const products = [
      { img: "../assets/watch.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/phone.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/laptop.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/watch.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/phone.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/laptop.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
    ];
  
    return (
      <div className="flex  flex-col  overflow-scroll">
        <div className="flex justify-between items-center w-[90%]">
          <h2 className="text-2xl font-bold">Products</h2>
          <div className="flex items-center gap-2">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" 
            // onClick={()=>setIsOpen(true)}
            >Add Product</button>
            <select className="border px-3 py-2 rounded-lg">
              <option>By Date</option>
            </select>
          </div>
        </div>
  
        <div className="flex flex-wrap justify-center gap-10 mt-6">
          {products.map((product, index) => (
            <ProductCard  product={product} key={index} type={'buyer'} onClick={()=>{router.push(`product/${index}`)}}/>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button className="px-3 py-1 border rounded bg-gray-800 text-white">1</button>
          <button className="px-3 py-1 border rounded mx-2">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4</button>
        </div>
        {/* <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </div>
    );
  };
  
  export default Products;
  