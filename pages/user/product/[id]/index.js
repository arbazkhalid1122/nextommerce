import { useCart } from '@/components/context/context';
import React, { useEffect } from 'react';
import { FaStar, FaStripe, FaPaypal } from 'react-icons/fa';
import { products } from "@/components/data/fakeData";
import { useRouter } from 'next/router';

const ProductPage = (prodsuct) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const { addToCart } = useCart(); // Access cart context
const router = useRouter();

console.log("router", router);  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('isAdmin'));
    if (user) {
      setIsAdmin(true);
    }
  }, []);

  const images = [
    '/api/placeholder/400/400',
    '/api/placeholder/400/400',
    '/api/placeholder/400/400'
  ];

  const product = products[router.query.id];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-lg overflow-hidden bg-gray-100">
            <img
              // src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600'}
              src={product.image}
              alt="Product"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === idx ? 'border-green-400' : 'border-gray-200'
                }`}
              >
                <img src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600'} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
            <span className="text-gray-600">{product.rating.rate}({product.rating.count})</span>
          </div>

          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-3xl font-bold">${product.price}</p>

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
                {/* Elevate your style with our stunning product. Whether you prefer classic shades or bold hues, 
                this set offers a diverse palette to suit any style and occasion. Each piece is crafted for 
                durability and a flawless finish, ensuring that quality meets style. */}
                {product.description}
              </p>
            </div>

           {isAdmin ? <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
              Edit Product
            </button>:
            <><button className="w-full bg-black text-white py-3 rounded-lg font-medium" onClick={() =>{
              addToCart(product);
              router.push('/user/checkout');
            }}>
                Buy Now
              </button>   <button
                className="w-full bg-white text-black border py-3 rounded-lg font-medium"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button></>}

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