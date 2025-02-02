import React from "react";
// product images component
import ImageSelectore from "./ImagesSecelctor";
// selece color size and add to cart component
import ColorSizeSelector from "./ColorSizeSolector";

function SingleProduct() {
  const fakeProduct = {
    name: "Sample Product",
    price: 99.99,
    store: [
      {
        color: "Red",
        imgUrls: [
          "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
          "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg"
        ]
      },
      {
        color: "Blue",
        imgUrls: [
          "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
          "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg"
        ]
      }
    ]
  };
  const { name, price, store, description } = fakeProduct;

  // take out all image urls from store and push into images[]
  var images = [];
  store.forEach((color) => {
    color["imgUrls"].forEach((url) => images.push(url));
  });

  return (
    <div className="grid gridy">
      {/* column 1 */}
      <ImageSelectore name={name} price={price} images={images} />
      {/* column 2 */}
      <ColorSizeSelector
        store={store}
        description={description}
        name={name}
        price={price}
        img={'https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg'}
      />
      <style jsx>{`
        @media screen and (min-width: 1024px) {
          .gridy {
            grid-template-columns: 65vw 35vw;
          }
        }
      `}</style>
    </div>
  );
}

export default SingleProduct;
