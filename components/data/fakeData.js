export const products = [
    { img: "../assets/watch.png", title: "Product 1", price: "$234.00", rating: 4.0 },
    { img: "../assets/phone.png", title: "Product 2", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 3", price: "$234.00", rating: 4.0 },
    { img: "../assets/watch.png", title: "Product 4", price: "$234.00", rating: 4.0 },
    { img: "../assets/phone.png", title: "Product 5", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 6", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 7", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 8", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 9", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
    { img: "../assets/laptop.png", title: "Product 10", price: "$234.00", rating: 4.0 },
  ];


 export const ordersData = [
    {
      id: '6754327DA23',
      date: 'Feb 02, 2025 07:34 pm',
      status: 'pending',
      amount: 2034.00,
      items: [
        { id: 1, name: 'Product Name', price: 230.00, image: '/product1.jpg', quantity: 1 },
        { id: 2, name: 'Product Name', price: 230.00, image: '/product2.jpg', quantity: 1 },
        { id: 3, name: 'Product Name', price: 230.00, image: '/product3.jpg', quantity: 1 }
      ],
      customerDetails: {
        name: 'Coach Name',
        email: 'coachemail@gmail.com',
        phone: '+1 234 5678 901',
        address: 'Street No # House No Town, City, Zip Code',
        shipping: 7.2,
        gst: 7.2
      }
    },
    {
      id: '6754327DA23',
      date: 'Feb 02, 2025 07:34 pm',
      status: 'pending',
      amount: 2034.00,
      items: [
        { id: 1, name: 'Product Name', price: 230.00, image: '/product1.jpg', quantity: 1 },
        { id: 2, name: 'Product Name', price: 230.00, image: '/product2.jpg', quantity: 1 },
        { id: 3, name: 'Product Name', price: 230.00, image: '/product3.jpg', quantity: 1 }
      ],
      customerDetails: {
        name: 'Coach Name',
        email: 'coachemail@gmail.com',
        phone: '+1 234 5678 901',
        address: 'Street No # House No Town, City, Zip Code',
        shipping: 7.2,
        gst: 7.2
      }
    },
    {
      id: '6754327DA23',
      date: 'Feb 02, 2025 07:34 pm',
      status: 'delivered',
      amount: 2034.00,
      items: [
        { id: 1, name: 'Product Name', price: 230.00, image: '/product1.jpg', quantity: 1 },
        { id: 2, name: 'Product Name', price: 230.00, image: '/product2.jpg', quantity: 1 },
        { id: 3, name: 'Product Name', price: 230.00, image: '/product3.jpg', quantity: 1 }
      ],
      customerDetails: {
        name: 'Coach Name',
        email: 'coachemail@gmail.com',
        phone: '+1 234 5678 901',
        address: 'Street No # House No Town, City, Zip Code',
        shipping: 7.2,
        gst: 7.2
      }
    },
    {
      id: '6754327DA23',
      date: 'Feb 02, 2025 07:34 pm',
      status: 'in-process',
      amount: 2034.00,
      items: [
        { id: 1, name: 'Product Name', price: 230.00, image: '/product1.jpg', quantity: 1 },
        { id: 2, name: 'Product Name', price: 230.00, image: '/product2.jpg', quantity: 1 },
        { id: 3, name: 'Product Name', price: 230.00, image: '/product3.jpg', quantity: 1 }
      ],
      customerDetails: {
        name: 'Coach Name',
        email: 'coachemail@gmail.com',
        phone: '+1 234 5678 901',
        address: 'Street No # House No Town, City, Zip Code',
        shipping: 7.2,
        gst: 7.2
      }
    }
  ];


  export  const reviewsData = [
    {
      id: 1,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 4,
        userName: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    },
    {
      id: 2,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    {
      id: 3,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 5,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 4,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 2,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 5,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    ,
    {
      id: 6,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    {
      id: 7,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 1,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 8,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 2,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 9,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    {
      id: 10,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    {
      id: 11,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 5,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 12,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 3,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 13,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    {
      id: 14,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    },
    {
      id: 15,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 5,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 16,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: {
        rating: 2,
        userName: "Jane Smith",
        text: "Great product, highly recommended!"
      }
    },
    {
      id: 17,
      productName: "Apple watch water resistance with 3000 mAh rechargeable battery",
      productImage: "/watch.jpg",
      review: null
    }
  ];


  export const cartData = [
    { id: 1, name: 'Product 1', price: 200.00, image: '/cart-item', qty: 1 },
    { id: 2, name: 'Product 2', price: 200.00, image: '/placeholder.jpg', qty: 1 },
    { id: 3, name: 'Product 2', price: 200.00, image: '/placeholder.jpg', qty: 1 },
    { id: 4, name: 'Product 5', price: 200.00, image: '/placeholder.jpg', qty: 1 },
    { id: 5, name: 'Product 3', price: 200.00, image: '/placeholder.jpg', qty: 1 }
  ];