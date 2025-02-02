import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

// Fake categories data
const fakeCategories = ["Electronics", "Clothing", "Accessories", "Books", "Home Decor"];

function CreateProduct() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [storeSt, setStoreSt] = useState([
    { color: "Red", colorCode: "#ff0000", sizeAmnt: [{ size: "M", amount: 10 }], imgUrls: [] },
  ]);
  
  const [finalPro, setFinalPro] = useState({});
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (form) => {
    const newProduct = {
      ...form,
      store: storeSt,
    };
    setFinalPro(newProduct);
    const existingProducts = JSON.parse(localStorage.getItem('productData')) || [];
    const updatedProducts = Array.isArray(existingProducts) ? [...existingProducts, newProduct] : [newProduct];
    localStorage.setItem('productData', JSON.stringify(updatedProducts));
  };

  const handleImageChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedStoreSt = [...storeSt];
    updatedStoreSt[index].imgUrls = files.map(file => URL.createObjectURL(file));
    setStoreSt(updatedStoreSt);
  };

  return (
    <div className="z-10 bg-gray-100 text-secondary px-5 relative w-full">
      <form className="my-5 sm:mx-3 p-6 sm:p-10 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="text-2xl text-black/90 font-bold mb-6">Create New Product</h2>

        <label className="block mt-4 text-black/90 font-semibold">Product Name</label>
        <input
          className="w-full bg-gray-100 mt-2 p-2 rounded border border-gray-300 text-lg font-medium text-black"
          type="text"
          placeholder="Product name..."
          {...register("name", { required: "Enter product name" })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <label className="block mt-4 text-black/90 font-semibold">Category</label>
        <select className="w-full bg-gray-100 mt-2 p-2 rounded border border-gray-300 text-lg font-medium text-black" {...register("category", { required: "Select a category" })}>
          <option value="">Select a category</option>
          {fakeCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

        <label className="block mt-4 text-black/90 font-semibold">Price ($)</label>
        <input
          className="w-full bg-gray-100 mt-2 p-2 rounded border border-gray-300 text-lg font-medium text-black"
          type="number"
          placeholder="Price"
          {...register("price", { required: "Enter the price" })}
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        <div className="p-4 rounded mt-6 bg-gray-50 border border-gray-300">
          {storeSt.map((store, index) => (
            <div key={index} className="mt-4">
              <label className="block mt-4 text-black/90 font-semibold">Images</label>
              <input
                className="w-full bg-gray-100 mt-2 p-2 rounded border border-gray-300 hidden"
                type="file"
                multiple
                onChange={(e) => handleImageChange(e, index)}
                id={`fileInput-${index}`}
              />
              <button
                type="button"
                className="mt-2 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded"
                style={{ width: 'fit-content' }}
                onClick={() => document.getElementById(`fileInput-${index}`).click()}
              >
                Select Images
              </button>
              <div className="mt-4 flex flex-wrap gap-2">
                {store.imgUrls.map((url, i) => (
                  <img key={i} src={url} alt={`Product Image ${i}`} className="w-24 h-24 object-cover rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <label className="block mt-4 text-black/90 font-semibold">Description</label>
        <textarea
          className="w-full bg-gray-100 mt-2 p-2 rounded border border-gray-300 text-lg font-medium text-black"
          placeholder="Product description..."
          {...register("description", { required: "Enter a description" })}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

        <button type="submit" className="mt-6 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded" style={{ width: 'fit-content', height: '2.5rem' }}>
          Submit
        </button>
      </form>

      {/* Displaying the preview of the final product */}
      {finalPro.name && (
        <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Product Preview</h3>
          <div className="space-y-4">
            <div>
              <strong>Name:</strong> {finalPro.name}
            </div>
            <div>
              <strong>Category:</strong> {finalPro.category}
            </div>
            <div>
              <strong>Price:</strong> ${finalPro.price}
            </div>
            <div>
              <strong>Description:</strong> {finalPro.description}
            </div>
            <div className="flex flex-wrap gap-4">
              {finalPro.store?.map((store, index) => (
                <div key={index} className="flex flex-col">
                  <div className="font-semibold">Color: {store.color}</div>
                  <div className="flex flex-wrap gap-2">
                    {store.imgUrls.map((url, i) => (
                      <img key={i} src={url} alt={`Product Image ${i}`} className="w-24 h-24 object-cover rounded" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProduct;
