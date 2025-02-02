import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { useRouter } from "next/router";

// Fake categories data
const fakeCategories = ["Electronics", "Clothing", "Accessories", "Books", "Home Decor"];

function CreateProduct() {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const submitHandler = (form) => {
    const newProduct = {
      name: form.name,
      category: form.category,
      price: form.price,
      description: form.description,
      image: selectedImage,
    };

    const existingProducts = JSON.parse(localStorage.getItem('productData')) || [];
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('productData', JSON.stringify(updatedProducts));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="z-10 bg-gray-50 text-secondary px-5 w-full flex justify-center items-center min-h-screen">
      <form
        className="my-10 w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 sm:p-12 border border-gray-200 transform transition-all duration-300 hover:scale-105"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className="text-3xl text-gray-800 font-semibold mb-8 text-center">Create New Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium text-sm">Product Name</label>
            <input
              className="w-full bg-gray-100 mt-1 p-3 rounded-lg border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="text"
              placeholder="Product name..."
              {...register("name", { required: "Enter product name" })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Category</label>
            <select
              className="w-full bg-gray-100 mt-1 p-3 rounded-lg border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("category", { required: "Select a category" })}
            >
              <option value="">Select a category</option>
              {fakeCategories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Price ($)</label>
            <input
              className="w-full bg-gray-100 mt-1 p-3 rounded-lg border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="number"
              placeholder="Price"
              {...register("price", { required: "Enter the price" })}
            />
            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium text-sm">Product Image</label>
            <div className="relative">
              <input
                className="w-full bg-gray-100 mt-1 p-2 rounded-lg border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer opacity-0 absolute"
                type="file"
                onChange={handleImageChange}
                id="imageInput"
              />
              <label
                htmlFor="imageInput"
                className="w-full flex items-center justify-center p-3 mt-1 bg-gray-200 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-300 transition-all"
              >
                <FaImage className="mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">Choose Image</span>
              </label>
            </div>
            {selectedImage && (
              <div className="mt-3 flex justify-center">
                <img
                  src={selectedImage}
                  alt="Image preview"
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 font-medium text-sm">Description</label>
          <textarea
            className="w-full bg-gray-100 mt-1 p-3 rounded-lg border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Product description..."
            {...register("description", { required: "Enter a description" })}
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300 transform"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
