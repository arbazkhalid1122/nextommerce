import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { CartProvider } from "@/components/context/context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
};

export default MyApp;
