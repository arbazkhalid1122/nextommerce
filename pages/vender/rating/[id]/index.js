import React from 'react';

const ReviewSystem = () => {
  const ratingStats = [
    { rating: 5, count: 60 },
    { rating: 4, count: 20 },
    { rating: 3, count: 10 },
    { rating: 2, count: 8 },
    { rating: 1, count: 2 }
  ];

  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'John Doe',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'John Doe',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat.'
    }
  ];

  const totalReviews = ratingStats.reduce((sum, stat) => sum + stat.count, 0);
  const averageRating = ratingStats.reduce((sum, stat) => sum + (stat.rating * stat.count), 0) / totalReviews;

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
    <div className="w-full mx-auto">
      {/* Rating Summary */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
          <span className="text-gray-600">/ 5</span>
        </div>
        <div className="text-sm text-gray-600 mb-4">{totalReviews} reviews</div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingStats.map((stat) => (
            <div key={stat.rating} className="flex items-center gap-2">
              <span className="w-3">{stat.rating}</span>
              <div className="flex-grow h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400"
                  style={{ width: `${(stat.count / totalReviews) * 100}%` }}
                />
              </div>
              <span className="w-8 text-sm text-gray-600">{stat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">{review.name}</span>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSystem;