import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Color finder - Encontre a cor de qualquer coisa</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
