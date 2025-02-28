import { useCart } from "@/components/context/context";
import React, { useEffect } from "react";
import { FaStar, FaStripe, FaPaypal } from "react-icons/fa";
import { products } from "@/components/data/fakeData";
import { useRouter } from "next/router";

const ProductPage = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("isAdmin"));
    if (user) {
      setIsAdmin(true);
    }
  }, []);

  const product = products[router.query.id - 1];

  return (
    <div className="">
      {/* Grid layout with responsive behavior */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Image */}
        <div className="flex justify-center items-center bg-white rounded-lg overflow-hidden w-full">
          <img
            src={product.image}
            alt="Product"
            className="w-full h-auto max-h-[450px] lg:max-h-[550px] object-contain"
          />
        </div>

        {/* Right - Product Info */}
        <div className="space-y-6">
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400 text-lg">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
            <span className="text-gray-600 text-sm">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>

          {/* Title & Price */}
          <h1 className="responsive-header">{product.title}</h1>
          <p className="responsive-header">${product.price}</p>

          {/* Color Options */}
          <div>
            <p className="font-medium text-lg mb-3">Color</p>
            <div className="flex space-x-3">
              {["bg-green-200", "bg-gray-200", "bg-gray-300", "bg-gray-400"].map(
                (color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 border-gray-300 hover:ring-2 hover:ring-black transition ${color}`}
                  />
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="font-medium text-lg mb-2">Short Description</p>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Buttons */}
          {isAdmin ? (
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:opacity-80 transition">
              Edit Product
            </button>
          ) : (
            <>
              <button
                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:opacity-80 transition"
                onClick={() => {
                  addToCart(product);
                  router.push("/user/checkout");
                }}
              >
                Buy Now
              </button>
              <button
                className="w-full bg-gray-200 text-black border py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-300 transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </>
          )}

          {/* Payment Methods */}
          <div>
            <p className="font-medium text-lg mb-3">Payment Methods</p>
            <div className="flex items-center space-x-5">
              <FaPaypal className="text-blue-600 text-3xl" />
              <FaStripe className="text-purple-600 text-3xl" />
              <button className="text-sm text-gray-600 hover:underline">
                + Add more methods
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-12">
        <h2 className="font-semibold text-xl mb-4">Additional Details</h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
