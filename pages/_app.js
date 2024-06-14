import "../styles/globals.css";
import Head from "next/head.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
