import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  // Fake data for testing
  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 59.99,
        rating: 4.5,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 39.99,
        rating: 4.0,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Smart Watch",
        category: "Wearables",
        price: 149.99,
        rating: 5,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Running Shoes",
        category: "Footwear",
        price: 89.99,
        rating: 4.2,
        image: "https://via.placeholder.com/150",
      },
    ];

    // Set fake data as favourites
    setFavourites(fakeData);
  }, []);

  const renderStars = (rating) => {
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

  const handleRemoveFromFavourites = (productId) => {
    const updatedFavourites = favourites.filter(
      (item) => item.id !== productId
    );
    setFavourites(updatedFavourites);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Your Favourites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favourites.length === 0 ? (
            <p className="text-center text-gray-500">No favourites added yet</p>
          ) : (
            favourites.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={'https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">{product.category}</p>
                  <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                  </div>
                  <p className="text-xl font-bold text-green-500">${product.price}</p>
                  <button
                    onClick={() => handleRemoveFromFavourites(product.id)}
                    className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Remove from Favourites
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
