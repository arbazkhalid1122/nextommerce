import { products } from '@/components/data/fakeData';
import { useRouter } from 'next/router';
import React from 'react';
import { FaStar, FaStripe, FaPaypal } from 'react-icons/fa';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  const images = [
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-lg overflow-hidden bg-white">
            <img
              src={images[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === idx ? 'border-green-400' : 'border-gray-200'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))} */}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating.rate) ? '' : 'text-gray-300'} />
              ))}
            </div>
            <span className="text-gray-600">({product.rating.rate}/5)</span>
          </div>

          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>

          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">Color</p>
              <div className="flex space-x-2">
                <button className="w-6 h-6 rounded-full bg-green-200 ring-2 ring-offset-2 ring-green-200" />
                <button className="w-6 h-6 rounded-full bg-gray-200" />
                <button className="w-6 h-6 rounded-full bg-gray-300" />
                <button className="w-6 h-6 rounded-full bg-gray-400" />
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Short Description</p>
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
              Edit Product
            </button>

            <div>
              <p className="font-medium mb-2">Payment Methods</p>
              <div className="flex items-center space-x-4">
                <FaPaypal className="text-blue-600 text-2xl" />
                <FaStripe className="text-purple-600 text-2xl" />
                <button className="text-sm text-gray-600">+ Add more methods</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-medium mb-4">Additional Details</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
