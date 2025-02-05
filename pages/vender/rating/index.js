import { useRouter } from 'next/router';
import React from 'react';
import { FaChevronRight, FaStar } from 'react-icons/fa';

const ProductRating = () => {
    const router = useRouter();
    const products = [
        {
            id: 1,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
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
            rating: 4,
            image: "/api/placeholder/48/48"
        },
        {
            id: 4,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
            rating: 4,
            image: "/api/placeholder/48/48"
        },
        {
            id: 4,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
            rating: 4,
            image: "/api/placeholder/48/48"
        },
        {
            id: 4,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
            rating: 4,
            image: "/api/placeholder/48/48"
        },
        {
            id: 4,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
            rating: 4,
            image: "/api/placeholder/48/48"
        },
        {
            id: 4,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
            rating: 4,
            image: "/api/placeholder/48/48"
        },
        {
            id: 4,
            name: "Apple watch water resistance with 3000 mAh rechargeable battery",
            rating: 4,
            image: "/api/placeholder/48/48"
        }
    ];

    const RatingStars = ({ rating }) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={`w-4 h-4 ${
                            index < rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="w-full mx-auto">
            <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <h2 className="text-xl font-semibold">Rating</h2>
                    <p className="text-sm text-gray-500">4.9 (100 reviews)</p>
                </div>
                <div className="flex items-center gap-4">
                    <select className="p-2 border rounded-md">
                        <option>4 stars</option>
                        <option>3 stars</option>
                        <option>2 stars</option>
                        <option>1 star</option>
                    </select>
                    <button className="px-4 py-2 text-gray-600">Review</button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-medium mb-2">Products</h3>
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={()=>router.push('/vender/rating/1')}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'}
                                alt="Product"
                                className="w-12 h-12 rounded-lg object-cover"
                            />
                            <span className="text-sm md:text-base">{product.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RatingStars rating={product.rating} />
                            <FaChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductRating;
