import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Color finder - Encontre a cor de qualquer coisa</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
