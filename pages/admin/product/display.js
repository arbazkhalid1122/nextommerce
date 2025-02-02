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
        <div className="max-w-2xl mx-auto mt-10 p-6 rounded-lg ">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            {product?.map((store, index) => (
                <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow">
                    <div className="space-y-4">
                        <div>
                            <strong>Name:</strong> {store.name}
                        </div>
                        <div>
                            <strong>Category:</strong> {store.category}
                        </div>
                        <div>
                            <strong>Price:</strong> ${store.price}
                        </div>
                        <div>
                            <strong>Description:</strong> {store.description}
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
    );
};

export default ProductPreview;
