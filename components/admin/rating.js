import React from 'react';

const RatingComponent = () => {
  const products = [
    { id: 1, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 2, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 3, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 4, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 5, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 6, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 7, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 8, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
    { id: 9, image: '/api/placeholder/40/40', name: 'Apple watch, water resistance with 3000 mAh rechargeable battery', rating: 4.5 },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="responsive-header">Rating</h2>
          <p className="text-gray-500 text-sm">4.5/1100 reviews</p>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-gray-500">Products</span>
          <div className="relative">
            <select className="appearance-none border rounded-md px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-blue-500">
              <option>4 stars</option>
              <option>3 stars</option>
              <option>2 stars</option>
              <option>1 star</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          <span className="text-gray-500">Review</span>
        </div>
      </div>

      {/* Products List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 object-cover rounded-md"
              />
              <span className="text-gray-700">{product.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <StarRating rating={product.rating} />
              <button className="text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button className="px-3 py-1 bg-gray-200 rounded text-gray-700">1</button>
        <button className="px-3 py-1 hover:bg-gray-100 rounded text-gray-700">2</button>
        <button className="px-3 py-1 hover:bg-gray-100 rounded text-gray-700">3</button>
        <button className="px-3 py-1 hover:bg-gray-100 rounded text-gray-700">4</button>
      </div>
    </div>
  );
};

export default RatingComponent;