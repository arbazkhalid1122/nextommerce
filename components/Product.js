import { FaShoppingCart } from "react-icons/fa";
import { productImage } from "./constant";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white flex flex-col relative cursor-pointer" onClick={onClick}>
      <div className="flex justify-center items-center">
        <img src={productImage} alt={product.title} className="h-full object-contain" />
      </div>
      <div className="mt-4 w-full text-center">
        <div className="flex justify-center items-center text-yellow-500 text-sm">
          {[...Array(5)].map((_, index) => (
            <span key={index}>{index < Math.floor(product.rating) ? "★" : "☆"}</span>
          ))}
          <span className="ml-1 text-gray-700 text-xs font-semibold">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <h3 className="text-gray-800 font-medium mt-2 text-sm truncate w-full">{product.title}</h3>
        <p className="text-lg font-semibold mt-1">${product.price}</p>
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
        <ProductCard key={index} product={product} onClick={onClick} />
      ))}
    </div>
  );
};

export default ProductGrid;
