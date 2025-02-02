import { useEffect, useState } from "react";

const ProductPreview = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('productData') || '[]');
        if (storedProducts.length) {
            setProduct(storedProducts);
        }
    }, []);

    if (product.length === 0) {
        return <p className="text-center text-lg text-gray-500 mt-10">No products available.</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">🛍️ Your Products</h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.map((store, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300"
                        >
                            {store?.store?.imgUrls?.length > 0 && (
                                <img 
                                    src={store.store.imgUrls[0]} 
                                    alt="Product" 
                                    className="w-full h-40 object-cover rounded-lg mb-4 border"
                                />
                            )}

                            <div className="space-y-2">
                                <h4 className="text-xl font-semibold flex items-center gap-2">
                                    📛 {store.name}
                                </h4>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    📂 <span className="font-medium">{store.category}</span>
                                </p>
                                <p className="text-lg font-bold text-blue-600 flex items-center gap-2">
                                    💲 ${store.price}
                                </p>
                                <p className="text-sm text-gray-700 flex items-center gap-2">
                                    📝 {store.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPreview;
