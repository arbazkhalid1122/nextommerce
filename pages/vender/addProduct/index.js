'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCart } from '@/components/context/context';

export default function AddProduct() {
    const {addProduct} = useCart();
    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            productTitle: '',
            productDescription: '',
            salePrice: '',
            stock: '',
            paymentMethod: 'PayPal',
            featureImage: null,
            gallery: []
        }
    });
    const [gallery, setGallery] = useState([]);
    const [featureImage, setFeatureImage] = useState(null);

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        addProduct(data);

    };

    const handleFeatureImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFeatureImage(url);
            setValue('featureImage', url);
        }
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        const urls = files.map(file => URL.createObjectURL(file));
        setGallery([...gallery, ...urls]);
        setValue('gallery', [...watch('gallery'), ...urls]);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Add Product</h1>
                <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded">Add Product</button>
            </div>
            <hr className="mb-4" />
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <label className="block text-sm font-medium">Product Title</label>
                    <input {...register('productTitle')} type="text" className="w-full p-2 border rounded mb-4" />

                    <label className="block text-sm font-medium">Product Description</label>
                    <textarea {...register('productDescription')} className="w-full p-2 border rounded mb-4 h-32"></textarea>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">Sale Price</label>
                            <input {...register('salePrice')} type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Item in Stock</label>
                            <input {...register('stock')} type="text" className="w-full p-2 border rounded" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-md">
                    <label className="block text-sm font-medium mb-2">Add Feature Image</label>
                    <input type="file" onChange={handleFeatureImageChange} className="hidden" id="featureImageInput" />
                    <div className="w-full h-32 bg-gray-300 rounded mb-4 flex items-center justify-center cursor-pointer" onClick={() => document.getElementById('featureImageInput').click()}>
                        {featureImage ? <img src={featureImage} alt="Feature" className="w-full h-full object-cover" /> : <span>+</span>}
                    </div>

                    <label className="block text-sm font-medium mb-2">Product Gallery</label>
                    <input type="file" multiple onChange={handleGalleryChange} className="hidden" id="galleryInput" />
                    <div className="w-full h-32 bg-gray-300 rounded mb-4 flex items-center justify-center cursor-pointer" onClick={() => document.getElementById('galleryInput').click()}>
                        <span>+</span>
                    </div>
                    <div className="flex gap-2 mb-4">
                        {gallery.map((img, index) => (
                            <img key={index} src={img} alt="Gallery" className="w-16 h-16 bg-gray-300 rounded" />
                        ))}
                    </div>

                    <label className="block text-sm font-medium mb-2">Select Payment Method</label>
                    <div className="space-y-2">
                        {['Stripe', 'PayPal'].map((method) => (
                            <label key={method} className="flex items-center space-x-2">
                                <input
                                    {...register('paymentMethod')}
                                    type="radio"
                                    value={method}
                                />
                                <span>{method}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    );
}