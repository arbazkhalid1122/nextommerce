import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";
import { useCart } from "./context/context";

const ProductCard = ({ product }) => {
  console.log("product", product);
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div
      className="border rounded-lg shadow-md bg-white flex flex-col relative cursor-pointer p-2 sm:p-4"
      onClick={() => router.push(`product/${product.id}`)}
    >
      {/* Image Container with Min and Max Height */}
      <div className="flex justify-center items-center min-h-32 max-h-40 sm:max-h-64">
        <img
          src={product?.featureImage || product.image}
          alt={product.title}
          className="h-full w-full object-contain bg-white"
        />
      </div>
      {/* Product Details */}
      <div className="mt-2 sm:mt-4 w-full text-center">
        <div className="flex justify-center items-center text-yellow-500 text-xs sm:text-sm">
          {[...Array(5)].map((_, index) => (
            <span key={index}>{index < Math.floor(product?.rating?.rate) ? "★" : "☆"}</span>
          ))}
          <span className="ml-1 text-gray-700 text-xs font-semibold">
            {product?.rating?.rate}
          </span>
        </div>

        <h3 className="text-gray-800 font-medium mt-1 text-xs sm:text-sm truncate w-full">
          {product.title || product?.productTitle}
        </h3>

        <p className="text-sm sm:text-lg font-semibold mt-1 mb-2">
          ${product.price || '200'}
        </p>
        {/* Cart Button (Smaller size on very small screens) */}
        <button className="absolute bottom-4 right-2 sm:right-4 w-5 h-5 sm:w-10 sm:h-10 bg-gray-100 rounded flex justify-center items-center shadow">
          <FaShoppingCart className="text-gray-500 text-xs sm:text-base" onClick={() => addToCart(product)} />
        </button>
      </div>

    </div>
  );
};

const ProductGrid = ({ onClick, products }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onClick={() => onClick(product.id)} />
      ))}
    </div>
  );
};

export default ProductGrid;
