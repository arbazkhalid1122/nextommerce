import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: 'Customer Name',
    email: 'customer@email.com',
    phone: '+1 234 5678 901',
    address: 'Street no 2 house no 2 town',
    city: 'New York',
    zipCode: '100001',
    country: 'United State of America',
    useForShipping: true
  });

  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone || !/^\+?\d{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Valid phone number is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
<div className="flex-1 p-6 ">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-semibold mb-8">Profile</h1>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-medium mb-4">Personal Detail</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.fullName ? 'border-red-500' : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-medium mb-4">Contact detail</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </section>

              <div>
                <label className="block text-sm mb-2">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="useForShipping"
                  checked={formData.useForShipping}
                  onChange={handleChange}
                  className="rounded"
                />
                <label className="text-sm">Use this Address for shipping</label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Profile Image Section */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full aspect-square bg-gray-100 rounded-md overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-gray-400"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M12 16l4-4h-3V8h-2v4H8z" />
              </svg>
            )}
          </div>
          <label className="block mt-4 text-center cursor-pointer bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">
            Select Profile Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
