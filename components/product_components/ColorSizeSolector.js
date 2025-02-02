


import { useState, useEffect } from "react";
import { useGlobalContext } from "../../Contexts/globalContext/context";
//icons
import { CheckIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router"; // Use Next.js router


export default function ColorSizeSelector({
  store,
  description,
  name,
  price,
  img,
}) {
  const { translate: t, addItem, cartToggler, theme } = useGlobalContext();
  const router = useRouter();
  const { id } = router.query; // Get ID from URL query params
  const [product, setProduct] = useState(null);


  // UI States
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



useEffect(() => {
  if (!id) return; // Wait until id is available

  // Get product data from localStorage
  const storedProducts = localStorage.getItem("productData");

  if (storedProducts) {
    const parsedProducts = JSON.parse(storedProducts);

    // Find the product that matches the id from the URL
    const selectedProduct = parsedProducts.find((item) => item.id === id);

    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }
}, [id]); // Runs when 'id' changes


if (!product) {
  return <p>Loading...</p>;
}

  

  return (
    <div className="py-11 px-5 lg:px-11 lg:pt-2">
      <div>
      <div>
      {/* Now, you can access product properties like product.name, product.price, etc. */}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.img} alt={product.name} />
    </div>
        {/* description */}
        <div
          className={`relative overflow-hidden  mb-16 ${
            readMore ? "max-h-full" : "max-h-24"
          }`}
        >
          <p className="text-third">{description} + description</p>
          <p
            className={`${
              readMore ? "block" : "absolute pl-2"
            } bg-secondary text-xl text-secondary read-more bottom-0 right-0 w-3/4`}
          >
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? t("read_less") : `...${t("read_more")}`}
            </button>
          </p>
        </div>
        {/* add to cart button */}
        <button
          onClick={() => {
            addItem({
              name,
              price,
              amount: 1,
              color,
              colorCode,
              size,
              image: img,
            });
            cartToggler();
          }}
          className="uppercase bg-primarycont text-primarycont w-full text-lg  py-5 mx-auto mb-10 hover:opacity-70"
        >
          {"Add to cart"}
        </button>
        <button
          onClick={() => setIsModalOpen(true)} 
          className="uppercase bg-primarycont text-primarycont w-full text-lg  py-5 mx-auto mb-10 hover:opacity-70"
        >
          {"Buy Now"}
        </button>
        

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

      <h2 className="text-xl font-bold text-center mb-4">
        Enter Payment Details
      </h2>

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
            <option value="" disabled>
              Select a Payment Method
            </option>
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
      <style jsx>{`
        .sub-color::before {
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid ${theme === "dark" ? "#eeeeee" : "#151515"};
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
      
    </div>
  );
}