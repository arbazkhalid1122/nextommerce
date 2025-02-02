import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

// Fake categories data
const fakeCategories = ["Electronics", "Clothing", "Accessories", "Books", "Home Decor"];

function CreateProduct() {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [finalPro, setFinalPro] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // State for the image preview

  const submitHandler = (form) => {
    const newProduct = {
      name: form.name,
      category: form.category,
      price: form.price,
      description: form.description,
      image: selectedImage, // Store the base64 image string
    };
  
    // Save to localStorage
    const existingProducts = JSON.parse(localStorage.getItem('productData')) || [];
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('productData', JSON.stringify(updatedProducts));
  
    // Reset form and image
    // reset();
    // setSelectedImage(null);
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Store the base64 image string
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen text-black p-6">
      <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="text-2xl font-bold mb-6">Create New Product</h2>

        <label className="block mt-4 font-semibold">Product Name</label>
        <input
          className="w-full bg-gray-200 mt-2 p-2 rounded border border-gray-300"
          type="text"
          placeholder="Product name..."
          {...register("name", { required: "Enter product name" })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <label className="block mt-4 font-semibold">Category</label>
        <select className="w-full bg-gray-200 mt-2 p-2 rounded border border-gray-300" {...register("category", { required: "Select a category" })}>
          <option value="">Select a category</option>
          {fakeCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

        <label className="block mt-4 font-semibold">Price ($)</label>
        <input
          className="w-full bg-gray-200 mt-2 p-2 rounded border border-gray-300"
          type="number"
          placeholder="Price"
          {...register("price", { required: "Enter the price" })}
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

        <label className="block mt-4 font-semibold">Description</label>
        <textarea
          className="w-full bg-gray-200 mt-2 p-2 rounded border border-gray-300"
          placeholder="Product description..."
          {...register("description", { required: "Enter a description" })}
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

        <label className="block mt-4 font-semibold">Product Image</label>
        <input
          className="w-full bg-gray-200 mt-2 p-2 rounded border border-gray-300"
          type="file"
          onChange={handleImageChange} // Handle image change
        />
        {selectedImage && (
          <div className="mt-2">
            <img
              src={selectedImage}
              alt="Image preview"
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        )}
        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

        <button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded">
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
            {finalPro.image && (
              <div>
                <strong>Image:</strong>
                <img src={finalPro.image} alt="Product Image" className="mt-2 w-32 h-32 object-cover rounded" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProduct;
