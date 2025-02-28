import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaChevronRight, FaStar } from 'react-icons/fa';

const ProductRating = () => {
  const router = useRouter();
  const [selectedRating, setSelectedRating] = useState(0);
  const products = [
    {
      id: 1,
      name: "Apple watch water resistance with 3000 mAh battery",
      rating: 4,
      image: "/api/placeholder/48/48"
    },
    {
      id: 2,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 4,
      image: "/api/placeholder/48/48"
    },
    {
      id: 3,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 4,
      image: "/api/placeholder/48/48"
    },
    {
      id: 4,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 3,
      image: "/api/placeholder/48/48"
    },
    {
      id: 5,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 6,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 5,
      image: "/api/placeholder/48/48"
    },
    {
      id: 7,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 4,
      image: "/api/placeholder/48/48"
    },
    {
      id: 8,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 3,
      image: "/api/placeholder/48/48"
    },
    {
      id: 9,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 2,
      image: "/api/placeholder/48/48"
    },
    {
      id: 10,
      name: "Apple watch water resistance with 3000 mAh rechargeable battery",
      rating: 1,
      image: "/api/placeholder/48/48"
    }
  ];

  const filteredProducts = selectedRating
    ? products.filter(product => product.rating === selectedRating)
    : products;

  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <div>
          <h2 className="responsive-header">Rating</h2>
          <p className="text-xs sm:text-sm text-gray-500">4.9 (100 reviews)</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <select
            className="p-1 sm:p-2 border rounded-md text-xs sm:text-sm"
            value={selectedRating}
            onChange={(e) => setSelectedRating(Number(e.target.value))}
          >
            <option value={0}>All</option>
            <option value={4}>4⭐</option>
            <option value={3}>3⭐</option>
            <option value={2}>2⭐</option>
            <option value={1}>1⭐</option>
          </select>
          <button className="px-2 py-1 sm:px-4 sm:py-2 text-gray-600 text-xs sm:text-sm">Review</button>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-4 mt-2">
        <h3 className="font-medium text-sm sm:text-base">Products</h3>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push('/vender/rating/1')}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'}
                alt="Product"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
              />
              <span className="text-xs sm:text-sm truncate max-w-[180px] sm:max-w-none">{product.name}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <RatingStars rating={product.rating} />
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRating;
