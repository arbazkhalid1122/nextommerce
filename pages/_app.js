import "../shared/styles/globals.css";
import { ContextProvider } from "../Contexts/globalContext/context";
import React from "react";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    // <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </ContextProvider>
  );
};

export default MyApp;
