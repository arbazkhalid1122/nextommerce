import React, { useState } from 'react';
import { productImage } from '../../../components/constant';
import { reviewsData } from '@/components/data/fakeData';

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
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Leave a Review</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
                    className={`w-8 h-8 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
    <div className="border-b py-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded">
            <img src={productImage} alt={item.productName} className="w-full h-full object-cover" />
          </div>
          <span className="flex-1 h-12 max-w-[280px] overflow-hidden text-ellipsis line-clamp-2">
            {item.productName}
          </span>
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
            className="px-2 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap"
          >
            Leave a review
          </button>
        )}
      </div>

      {isExpanded && item.review && (
        <div className="mt-4 pl-0 sm:pl-16">
          <div className="bg-gray-50 p-2 sm:p-4 rounded">
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


  const [selectedRating, setSelectedRating] = useState('all');
  const [reviews, setReviews] = useState(reviewsData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddReview = (productId, review) => {
    setReviews(reviews.map(item =>
      item.id === productId
        ? { ...item, review }
        : item
    ));
  };
  const filteredReviews = selectedRating === 'all'
    ? reviews
    : reviews.filter(item => item.review && item.review.rating === parseInt(selectedRating));

  const reviewsPerPage = 5; // Updated to show 5 items per page
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="flex w-full justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Reviews</h1>
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

      <div className="mb-6 w-full max-w-6xl">
        {currentReviews.map((item) => (
          <ReviewItem
            key={item.id}
            item={item}
            onAddReview={handleAddReview}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded ${index + 1 === currentPage ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
