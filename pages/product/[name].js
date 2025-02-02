import { server } from "../../config/index";
import GridProducts from "../../components/product_components/GridProducts";
import SingleProduct from "../../components/product_components/SingleProduct";
import Link from "next/link";
import { useGlobalContext } from "../../Contexts/globalContext/context";

export default function id({ product, relateds }) {

console.log("product", product);  const { translate: t } = useGlobalContext();
  return (
    <>
      <article className="bg-secondary text-secondary">
        {/* single product section */}
        <section style={{ zIndex: 2 }}>
          <SingleProduct product={product} />
        </section>
        {/* related section */}
        {/* <section
          style={{ zIndex: 0 }}
          className="border-t-[1px] border-gray-300 mt-10"
        >
          <h4 className="text-3xl text-primary text-center capitalize py-16">
            {t("other_products")}
          </h4>
          <div className="w-[85%] sm:w-[75%] mx-auto">
            <GridProducts products={relateds} limit="10" />
          </div>
        </section>
        <div className="w-full flex justify-center py-10">
          <button className="py-2 px-5 bg-third text-primary rounded-full hover:scale-105 transition-transform">
            <Link href="/search">
              <a>{t("All_Products")}</a>
            </Link>
          </button>
        </div> */}
      </article>
    </>
  );
}

export async function getServerSideProps(cnx) {
var cat = cnx.query?.cat;
if (
  cat === "hat" ||
  cat === "accessory" ||
  cat === null ||
  cat === undefined
) {
  cat = "t-shirt";
}

const data = {
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "scope": "/",
  "start_url": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
  "name": "nextommerce",
  "short_name": "nextommerce",
  "description": "PWA next.js e-commerce",
  "icons": [
      {
          "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
          "sizes": "192x192",
          "type": "image/png"
      },
      {
          "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
          "sizes": "256x256",
          "type": "image/png"
      },
      {
          "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
          "sizes": "384x384",
          "type": "image/png"
      },
      {
          "src": "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
          "sizes": "512x512",
          "type": "image/png"
      }
  ]
}

const product = data;
const relateds = data;

  return {
    props: {
      product,
      relateds,
    },
    // revalidate: 900, //every 15 minutes
  };
}

// export async function getStaticPaths() {

//   const allProductRes =  await fetch(`${server}/api/product/crud`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const allProducts = await allProductRes.json();

//   const paths = allProducts.map((item)=>({params:{name: item.name}}))

//   return { paths, fallback: 'blocking' }
// }
