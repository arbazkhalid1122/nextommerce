export default function PaymentModal({setPaymentModal}) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Add payment method</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Expire Date</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div className="w-20">
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-opacity-80" onClick={() => setPaymentModal(false)}>
              Add Payment Method
            </button>
          </form>
        </div>
      </div>
    );
  }
  