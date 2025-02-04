export default function AddProductModal({isOpen, setIsOpen}) {
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-6 rounded-lg shadow-md z-10 max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-semibold">Add Product</h1>
                            <button
                                onClick={closeModal}
                                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                            >
                                Close
                            </button>
                        </div>

                        {/* Form Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left Column */}
                            <div className="md:col-span-2 space-y-4">
                                <div>
                                    <label className="block font-medium">Product Title</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-gray-300"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">Product Description</label>
                                    <textarea
                                        rows="5"
                                        className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-gray-300"
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium">Sale Price</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium">Item in Stock</label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-4">
                                {/* Feature Image Upload */}
                                <div>
                                    <label className="block font-medium">Add Feature Image</label>
                                    <div className="w-full h-36 bg-gray-200 rounded-md flex items-center justify-center">
                                        <span className="text-gray-500">Upload Image</span>
                                    </div>
                                </div>

                                {/* Product Gallery */}
                                <div>
                                    <label className="block font-medium">Product Gallery</label>
                                    <div className="flex space-x-2">
                                        <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                                        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                                            + Add
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div>
                                    <label className="block font-medium">Select Payment Method</label>
                                    <div className="space-y-2">
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="payment" className="text-gray-700" />
                                            <span>Stripe</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="payment" className="text-gray-700" />
                                            <span>PayPal</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input type="radio" name="payment" className="text-gray-700" />
                                            <span>All Above</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}