import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import { AppProvider } from "@/components/context/context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
