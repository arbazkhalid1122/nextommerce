import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Contexts/globalContext/context";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";

export default function SingleProduct() {
  const { query } = useRouter();
  const { name } = query;
const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);  // Track if the product is favorite
  const { translate: t, addItem, cartToggler, theme } = useGlobalContext();
  const [readMore, setReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (name) {
      const data = JSON.parse(localStorage.getItem("productData"));
      const productData = data ? data[name] : null;
      setProduct(productData);
    }
  }, [name]);

  const renderStars = (rating) => {
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
      return (
        <>
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
        </>
      );
    }
  
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
  
    const stars = [
      ...Array(fullStars).fill(<FaStar className="text-yellow-400" />),
      ...Array(halfStars).fill(<FaStarHalfAlt className="text-yellow-400" />),
      ...Array(emptyStars).fill(<FaRegStar className="text-yellow-400" />),
    ];
  
    return stars;
  };

  const handleFavoriteClick = () => {
    // You can add your logic to store this in local storage or in a database
    setIsFavorite(!isFavorite);
    // Example: Update localStorage or make API call to save favorite status
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(id => id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      favorites.push(product.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  if (!product) return <div className="text-center text-gray-700 font-medium">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={"https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop"}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8 text-gray-800 space-y-4">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-lg text-gray-500 mb-2 font-medium">{product.category}</p>

          {/* Vendor Name */}
          <p className="text-md text-gray-600 mb-3 font-medium">Vendor: <span className="text-gray-800">{product.vendor}</span></p>

          <p className="text-2xl font-extrabold text-green-500 mb-6">${product.price}</p>

          {/* Rating Stars */}
          <div className="flex items-center mb-4">
            {renderStars(product.rating)}
          </div>

          {/* Delivery Details */}
          <div className="mb-6">
            <p className="text-gray-600 font-medium">Delivery Fee: <span className="text-gray-800">${product.deliveryFee}</span></p>
            <p className="text-gray-600 font-medium">Stock Status: <span className="text-gray-800">{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
            <p className="text-gray-600 font-medium">Estimated Delivery: <span className="text-gray-800">{product.estimatedDelivery}</span></p>
          </div>

          {/* Description */}
          <div className={`relative overflow-hidden mb-6 ${readMore ? "max-h-full" : "max-h-24"}`}>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            <button
              onClick={() => setReadMore(!readMore)}
              className="text-blue-600 font-semibold mt-2"
            >
              {readMore ? "Read Less" : "Read More..."}
            </button>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => cartToggler()}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Add to Cart
            </button>
            <button
              onClick={() => router.push("/user/cart")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Buy Now
            </button>
            {/* Add to Favorites Button */}
            <button
              onClick={handleFavoriteClick}
              className={`w-full flex items-center justify-center py-2 rounded-lg focus:outline-none focus:ring-2 ${
                isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {isFavorite ? <FaHeart className="mr-2 text-white" /> : <FaRegHeart className="mr-2 text-gray-800" />}
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
