import React, { useState } from 'react';
// import { X } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose, onSubmit, productName }) => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  
  const handleSubmit = () => {
    if (rating === 0) return;
    onSubmit({
      rating,
      userName: "Customer Name", // In a real app, this would come from user context
      text: description
    });
    setRating(0);
    setDescription('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Leave a Review</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            {/* <X size={24} /> */}
            X
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">{productName}</h3>
          <div className="mb-4">
            <p className="mb-2">Rate the Product</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-8 h-8 ${
                      star <= rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Description (optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md p-2 min-h-[100px]"
              placeholder="Write your review here..."
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-400"
          disabled={rating === 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const StarRating = ({ rating }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewItem = ({ item, onAddReview }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded"></div>
          <span className="flex-1">{item.productName}</span>
        </div>
        {item.review ? (
          <div className="flex items-center gap-4">
            <StarRating rating={item.review.rating} />
            <button onClick={() => setIsExpanded(!isExpanded)}>
              <svg 
                className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Leave a review
          </button>
        )}
      </div>

      {isExpanded && item.review && (
        <div className="mt-4 pl-16">
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium">{item.review.userName}</h3>
              <StarRating rating={item.review.rating} />
            </div>
            <p className="text-gray-600">{item.review.text}</p>
          </div>
        </div>
      )}

      <ReviewModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(review) => onAddReview(item.id, review)}
        productName={item.productName}
      />
    </div>
  );
};

const MyReviews = () => {

    const reviewsData = [
        {
          id: 1,
          productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
          productImage: "/watch.jpg",
          review: {
            rating: 4,
            userName: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        },
        {
          id: 2,
          productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
          productImage: "/watch.jpg",
          review: null
        },
        {
          id: 3,
          productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
          productImage: "/watch.jpg",
          review: {
            rating: 5,
            userName: "Jane Smith",
            text: "Great product, highly recommended!"
          }
        }
      ];


  const [selectedRating, setSelectedRating] = useState('all');
  const [reviews, setReviews] = useState(reviewsData);

  const handleAddReview = (productId, review) => {
    setReviews(reviews.map(item => 
      item.id === productId 
        ? { ...item, review }
        : item
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Reviews</h1>
        <select 
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All stars</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 star</option>
        </select>
      </div>

      <div className="mb-6 max-w-6xl">
        {/* <div className="grid grid-cols-6 gap-4 py-2 border-b">
          <div className="col-span-4">Products</div>
          <div className="col-span-2 text-right">Review</div>
        </div> */}

        {reviews.map((item) => (
          <ReviewItem 
            key={item.id} 
            item={item} 
            onAddReview={handleAddReview}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded ${
              page === 1 ? 'bg-gray-200' : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;