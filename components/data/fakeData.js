// export const products = [
//     { img: "../assets/watch.png", title: "Product 1", price: 24.00, rating: 2.0 },
//     { img: "../assets/phone.png", title: "Product 2", price: 334.00, rating: 5.0 },
//     { img: "../assets/laptop.png", title: "Product 3", price: 234.00, rating: 2.0 },
//     { img: "../assets/watch.png", title: "Product 4", price: 2334, rating: 4.0 },
//     { img: "../assets/phone.png", title: "Product 5", price: 234.0, rating: 5.0 },
//     { img: "../assets/laptop.png", title: "Product 6", price: 234.0, rating: 3.0 },
//     { img: "../assets/laptop.png", title: "Product 7", price: 234.0, rating: 2.0 },
//     { img: "../assets/laptop.png", title: "Product 8", price: 234.0, rating: 3.0 },
//     { img: "../assets/laptop.png", title: "Product 9", price: 234.0, rating: 5.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 4234.0, rating: 1.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 2534.0, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 2354.0, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 2345.0, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 234.50, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 23434.0, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 23444.0, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 234.0, rating: 4.0 },
//     { img: "../assets/laptop.png", title: "Product 10", price: 234.0, rating: 4.0 },
//   ];
const productsRaw = [
  {
    "id": 1,
    "title": "Fjallraven -",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "id": 10,
    "title": "SanDisk SSD ",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "id": 11,
    "title": "Silicon Power ",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  }
]
export const products = productsRaw

// export const products = productsRaw

export const orderData = [
  {
    id: '6754327DA23',
    date: 'Feb 2025',
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
    date: 'Feb 2025',
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
    date: 'Feb 2025',
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
    date: 'Feb 2025',
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


export const reviewsData = [
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