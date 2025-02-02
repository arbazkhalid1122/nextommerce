import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Contexts/globalContext/context";

export default function SingleProduct() {
  const { query } = useRouter();
  const { name } = query; // This will give you the product name from the URL

  const [product, setProduct] = useState(null);

  const { translate: t, addItem, cartToggler, theme } = useGlobalContext();
  const [readMore, setReadMore] = useState(false);
  const [color, setColor] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [size, setSize] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [paymentMethod, setPaymentMethod] = useState(""); // Payment method state
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    cardHolderName: "",
    deliveryAddress: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    postalCode: "",
  });

  const handlePaymentMethodSelect = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save payment data to localStorage
    localStorage.setItem("paymentDetails", JSON.stringify(formData));
    localStorage.setItem("paymentMethod", paymentMethod);

    // Close the modal
    setIsModalOpen(false);
    alert("Payment details saved successfully!");
  };

  useEffect(() => {
    if (name) {
      const data = JSON.parse(localStorage.getItem('productData'));
      const productData = data ? data[name] : null;
      setProduct(productData);
    }
  }, [name]);

  if (!product) return <div className="text-center text-white">Loading...</div>;

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-8 text-white">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-400 mb-2">{product.category}</p>
          <p className="text-2xl font-bold text-green-400 mb-6">${product.price}</p>
          
          {/* Description Section */}
          <div className={`relative overflow-hidden mb-6 ${readMore ? "max-h-full" : "max-h-24"}`}>
            <p className="text-gray-300">{product.description}</p>
            <button 
              onClick={() => setReadMore(!readMore)} 
              className="absolute bottom-0 right-0 text-blue-500 font-medium"
            >
              {readMore ? "Read Less" : "Read More..."}
            </button>
          </div>
          
          {/* Add to Cart and Buy Now Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => cartToggler()}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Add to Cart
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-primarycont hover:bg-opacity-80 text-primarycont py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primarycont"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Close on outside click
        >
          <div 
            className="bg-white rounded-lg p-8 w-3/4 relative sm:w-1/2 lg:w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-center mb-4">Enter Payment Details</h2>
            
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
              {/* Payment Method Dropdown */}
              <div className="mb-4">
                <label className="block text-sm font-semibold">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={paymentMethod}
                  onChange={handlePaymentMethodSelect}
                  className="w-full p-2 border border-gray-400 rounded-md"
                  required
                >
                  <option value="" disabled>Select a Payment Method</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Stripe">Stripe</option>
                </select>
              </div>

              {/* Card Number and CVC */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Enter card number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">CVC</label>
                  <input
                    type="text"
                    name="cardCVC"
                    value={formData.cardCVC}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Enter CVC"
                    required
                  />
                </div>
              </div>

              {/* Card Expiry and Card Holder Name */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold">Card Expiry</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Card Holder's Name</label>
                  <input
                    type="text"
                    name="cardHolderName"
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Enter name"
                    required
                  />
                </div>
              </div>

              {/* Delivery Address and Postal Code */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold">Delivery Address</label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Enter address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Postal code"
                    required
                  />
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">Alternate Phone Number</label>
                  <input
                    type="text"
                    name="alternatePhoneNumber"
                    value={formData.alternatePhoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                    placeholder="Enter alternate number"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-primarycont text-white rounded-md hover:bg-opacity-80"
              >
                Submit Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
