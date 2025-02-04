import React from "react";

const Order = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold">Orders</h2>
        <div className="relative">
          <select className="border rounded-md p-2 outline-none cursor-pointer">
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Order#</th>
              <th className="p-2">Placed Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Total amount</th>
              <th className="p-2">Items</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((_, i) => (
              <tr key={i} className="border-b hover:bg-gray-100">
                <td className="p-2">6754327DA23</td>
                <td className="p-2">Feb 02, 2025 07:34 pm</td>
                <td className="p-2 flex items-center">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  Delivered
                </td>
                <td className="p-2">$2034.00</td>
                <td className="p-2 flex items-center gap-2">
                  <img src="/watch.png" alt="watch" className="h-6" />
                  <img src="/phone.png" alt="phone" className="h-6" />
                  <img src="/laptop.png" alt="laptop" className="h-6" />
                  <span className="text-gray-600">+3</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center mt-4">
        <button className="px-3 py-1 mx-1 bg-gray-800 text-white rounded">1</button>
        <button className="px-3 py-1 mx-1 bg-gray-200 rounded">2</button>
        <button className="px-3 py-1 mx-1 bg-gray-200 rounded">3</button>
        <button className="px-3 py-1 mx-1 bg-gray-200 rounded">4</button>
      </div>
    </div>
  );
};

export default Order;
