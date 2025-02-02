import "../shared/styles/globals.css";
import { ContextProvider } from "../Contexts/globalContext/context";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

console.log("router", router);
if (router.pathname === "/auth/login" || router.pathname === "/auth/signup" || router.pathname === "/auth/forgotPassword") {
  return<ContextProvider>
   <Component {...pageProps} />
  </ContextProvider>
}

return (
  <ContextProvider>
    {router.pathname === "/auth/login" ? <Component {...pageProps} />
    :
    <Layout>
      <Component {...pageProps} />
    </Layout>}
  </ContextProvider>
);
}

export default MyApp;
