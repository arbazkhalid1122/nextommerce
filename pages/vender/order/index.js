import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TableOrder from "../../../components/product_components/TableOrder";
import { TruckIcon, ReplyIcon, CalendarIcon, SearchIcon } from "@heroicons/react/outline";
import DatePicker from "../../../components/admin/DatePicker";
import format from "date-fns/format";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // For rating stars

export default function OrderPage() {
  const router = useRouter();

  // Static orders data with user ratings for the products
  const staticOrders = [
    {
      _id: "1",
      name: "Ali",
      lastname: "Khan",
      phone: "123456789",
      address: "Street 123, Karachi",
      createdAt: new Date().toISOString(),
      sent: false,
      cart: [
        { name: "Product_A", color: "Red", amount: 2, price: 100, rating: 4.5 },
      ],
    },
    {
      _id: "2",
      name: "Sara",
      lastname: "Ahmed",
      phone: "987654321",
      address: "Street 456, Lahore",
      createdAt: new Date().toISOString(),
      sent: true,
      cart: [
        { name: "Product_C", color: "Blue", amount: 1, price: 150, rating: 3.5 },
      ],
    },
  ];

  const [ordSt, setOrdSt] = useState(staticOrders);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [sent, setSent] = useState("undefined");
  const [dateQuery, setDateQuery] = useState("");
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState([{ startDate: new Date(), endDate: null, key: "selection" }]);


  // Simulating order update
  const UpdateSent = (id) => {
    setOrdSt((prevOrders) =>
      prevOrders.map((order) => (order._id === id ? { ...order, sent: !order.sent } : order))
    );
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      return (
        <>
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
          <FaRegStar className="text-yellow-400" />
        </>
      );
    }

    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <FaStarHalfAlt key={`half-${i}`} className="text-yellow-400" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
      </>
    );
  };

  return (
    <div className="z-10 bg-gray-100 text-secondary px-5 relative w-full">
      <ul className="my-5 sm:mx-3 p-6 sm:p-10">
        {ordSt.map((order, i) => (
          <li
            key={i}
            className={`relative px-9 py-6 my-4 rounded-2xl w-full shadow-lg transition-all duration-300 bg-white
              ${order.sent ? "bg-[#2ea3fa]/40 hover:bg-[#2ea3fa]/60" : "bg-[#f1970e]/40 hover:bg-[#f1970e]/60"} 
              backdrop-blur-md border border-white/10 text-black`}
          >
            {/* Status Button */}
            <div className="absolute top-5 right-5">
              <button
                onClick={() => UpdateSent(order._id)}
                className="p-2 bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300 shadow-md"
              >
                {order.sent ? (
                  <ReplyIcon className="text-gray-500" width={22} />
                ) : (
                  <TruckIcon className="text-gray-500" width={22} />
                )}
              </button>
            </div>

            {/* Order Details */}
            <div className="space-y-2 text-gray-200">
              <h2 className="text-xl font-semibold text-black/90">
                {order.name} {order.lastname}
              </h2>
              <p className="text-md">
                📞 <span className="font-medium text-black/80">{order.phone}</span>
              </p>
              <p className="text-md">
                📍 <span className="font-medium text-black/80">{order.address}</span>
              </p>
              <p className="text-md">
                🕒 <span className="font-medium text-black/80">{format(new Date(order.createdAt), "dd-MMM-yyyy")}</span>
              </p>
            </div>

            {/* Ratings */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">Product Ratings</h3>
              {order.cart.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center">{renderStars(item.rating)}</div>
                </div>
              ))}
            </div>

            {/* Order Items */}
            <div className="mt-4 border-t border-white/10 pt-4">
              <TableOrder cart={order.cart} />
            </div>
          </li>
        ))}
      </ul>

      {showCalender && (
        <div className="z-50 absolute flex flex-col justify-center w-full h-screen bg-[#000000e3] top-0">
          <div className="w-min mx-auto">
            <DatePicker state={date} setState={setDate} />
          </div>
          <button
            className="mt-8 px-6 py-2 bg-success mx-auto text-center rounded-full text-black text-xl"
            onClick={() => {
              setDateQuery(
                `${format(new Date(date[0].startDate), "yyyy-MM-dd'T'HH:mm:ss.SSS")}to${format(new Date(date[0].endDate), "yyyy-MM-dd'T'HH:mm:ss.SSS")}`
              );
              setShowCalender(false);
            }}
          >
            Set Date
          </button>
        </div>
      )}
    </div>
  );
}
