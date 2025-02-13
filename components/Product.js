import { FaShoppingCart } from "react-icons/fa";
import { productImage } from "./constant";
import { useRouter } from "next/router";

const ProductCard = ({ product, onClick }) => {
  const router = useRouter()
console.log("product", product);
  
  return (
    <div className="border rounded-lg shadow-md bg-white flex flex-col relative cursor-pointer" onClick={()=>router.push(`product/${product.id}`)}>
      <div className="flex justify-center items-center h-64">
        <img src={product?.featureImage || product.image} alt={product.title} className="h-full w-full object-contain bg-gray-100" />
      </div>
      <div className="mt-4 w-full text-center">
        <div className="flex justify-center items-center text-yellow-500 text-sm">
          {[...Array(5)].map((_, index) => (
            <span key={index}>{index < Math.floor(product.rating) ? "★" : "☆"}</span>
          ))}
          <span className="ml-1 text-gray-700 text-xs font-semibold">
            {product.rating.rate}
          </span>
        </div>
        <h3 className="text-gray-800 font-medium mt-1 text-sm truncate w-full">{product.title || product?.productTitle}</h3>
        <p className="text-lg font-semibold mt-1 mb-2">${product.price || '200'}</p>
      </div>
      <button className="absolute bottom-2 right-2 sm:right-4 w-6 h-6 sm:w-10 sm:h-10 bg-gray-100 rounded flex justify-center items-center shadow">
        <FaShoppingCart className="text-gray-500" />
      </button>
    </div>
  );
};

const ProductGrid = ({ onClick,products }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onClick={()=>onClick(product.id)} />
      ))}
    </div>
  );
};

export default ProductGrid;
