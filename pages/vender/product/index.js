const Products = () => {
    const products = [
      { img: "../assets/watch.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/phone.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/laptop.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/watch.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/phone.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
      { img: "../assets/laptop.png", title: "Title of the Product will be here", price: "$234.00", rating: 4.0 },
    ];
  
    return (
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Products</h2>
          <div className="flex items-center gap-2">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Add Product</button>
            <select className="border px-3 py-2 rounded-lg">
              <option>By Date</option>
            </select>
          </div>
        </div>
  
        <div className="grid grid-cols-3 gap-6 mt-6">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
              <img className="w-full h-32 object-cover" src={'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600'} alt={product.title} />
              <div className="mt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  ⭐ {product.rating} (218)
                </div>
                <p className="mt-2 font-semibold">{product.title}</p>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button className="px-3 py-1 border rounded bg-gray-800 text-white">1</button>
          <button className="px-3 py-1 border rounded mx-2">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4</button>
        </div>
      </div>
    );
  };
  
  export default Products;
  