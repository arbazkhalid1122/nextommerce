import GridProducts from "../components/product_components/GridProducts";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin) {
      router.push("/vender/product/display");
    }
  }, []);
  return (
    <div className="bg-gray-100 ">
      <GridProducts />
    </div>
  );
}
