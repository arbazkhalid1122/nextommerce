import { useState, useMemo } from "react";
import { useCart } from "@/components/context/context";
import { productImage } from "@/components/constant";

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState(order?.cart || []);

  const getStatusColor = (status) => ({
    pending: "bg-yellow-400",
    "in-process": "bg-blue-400",
    delivered: "bg-green-400",
  }[status] || "bg-gray-400");

  const updateQuantity = (index, change) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const totalAmount = useMemo(() =>
    items.reduce((total, item) => total + item.price * item.qty, 0),
    [items]
  );

  return (
    <div className="flex border-b items-center justify-between min-w-full flex-wrap gap-2 overflow-hidden">
      {/* Order Header */}
      <div className="flex rounded items-center bg-white justify-between min-w-full flex-nowrap gap-4 overflow-x-auto whitespace-nowrap">
        <span className="text-gray-600">{order.id || "6754327DA23"}</span>
        <span className="text-gray-600">Feb 02, 2025 07:34 pm</span>
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${getStatusColor("delivered")}`}></span>
          <span className="text-green-500">Delivered</span>
        </div>
        <span className="text-gray-600">${totalAmount.toFixed(2)}</span>
        <button onClick={() => setIsExpanded(!isExpanded)} className="p-2">
          <svg
            className={`w-4 h-4 transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded Order Details */}
      {isExpanded && (
        <div className=" w-full py-2 sm:max-h-[400px] max-h-[500px] overflow-auto"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Order Info */}
            <div>
              <h3 className="font-medium text-[#747474] mb-2">Order Details</h3>
              {[
                { label: "Order Placed By:", value: order.fullName },
                { label: "Email:", value: order.email },
                { label: "Phone No:", value: order.phone },
                { label: "Shipping Address:", value: `${order.address}, ${order.city}, ${order.country}` },
                { label: "Shipping Cost:", value: "$7.2" },
                { label: "GST:", value: "$7.2" },
              ].map((detail, i) => (
                <p key={i} className="text-[#747474] font-light mt-2">
                  <span className="font-medium">{detail.label}</span> {detail.value}
                </p>
              ))}
            </div>

            {/* Order Items */}
            <div>
              <h3 className="font-medium mb-2">Items</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center p-3 bg-white rounded-md shadow-sm">
                    <img
                      src={productImage}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="rounded-lg object-contain"
                    />
                    <div>
                      <p className="font-medium text-xs text-center">{item.title}</p>
                      <p className="text-gray-600 text-xs">${item.price.toFixed(2)}</p>
                      <div className="flex items-center border w-fit px-2 rounded-md bg-white gap-2 mt-1 text-xs">
                        <button onClick={() => updateQuantity(idx, -1)} className="text-xs">-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQuantity(idx, 1)} className="text-xs">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MyOrders = ({ ordersData }) => (
  <>
    <h1 className="responsive-header">My Orders</h1>
    <div className="space-y-4 overflow-auto">
      {ordersData.map((order, index) => (
        <OrderItem key={index} order={order} />
      ))}
    </div>
  </>
);

export default function OrdersPage() {
  const { ordersData } = useCart();

  const fakeData = [
    {
      email: "fake@example.com",
      fullName: "John Doe",
      phone: "+1 234 5678 901",
      address: "Street No # House No Town",
      city: "City",
      country: "Zip Code",
      cart: new Array(6).fill({
        title: "Product Name",
        price: 230,
        qty: 1,
        image: "https://via.placeholder.com/50",
      }),
    },
  ];

  const dataToShow = ordersData?.length ? ordersData : fakeData;

  return <MyOrders ordersData={dataToShow} />;
}
