import { useEffect, useState } from "react";

const ProductPreview = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('productData') || '[]')
        console.log("storedProducts", storedProducts)
        if (storedProducts) {
            setProduct(storedProducts)
        }
    }, []);

    if (!product) {
        return <p>No product found.</p>;
    }

    return (
        <div className="z-10 bg-gray-100 text-black/90 px-5 relative w-full">
            <div className="my-5 sm:mx-3 p-6 sm:p-10">
                <h3 className="text-2xl font-bold mb-4">🛍️ Products</h3>
                {product?.map((store, index) => (
                    <div key={index} className="bg-white p-6 mb-6 rounded-lg shadow-lg">
                        <div className="space-y-4">
                            <div className="text-lg font-semibold">
                                <strong>📛 Name:</strong> <span className="font-medium text-black/80">{store.name}</span>
                            </div>
                            <div className="text-lg font-semibold">
                                <strong>📂 Category:</strong> <span className="font-medium text-black/80">{store.category}</span>
                            </div>
                            <div className="text-lg font-semibold">
                                <strong>💲 Price:</strong> $<span className="font-medium text-black/80">{store.price}</span>
                            </div>
                            <div className="text-lg font-semibold">
                                <strong>📝 Description:</strong> <span className="font-medium text-black/80">{store.description}</span>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex flex-col">
                                    <div className="flex flex-wrap gap-2">
                                        {/* {store?.store?.imgUrls.map((url, i) => (
                                            <img key={i} src={url} alt={`Product Image ${i}`} className="w-24 h-24 object-cover rounded" />
                                        ))} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPreview;
