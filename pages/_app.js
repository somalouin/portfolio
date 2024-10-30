import "../styles/globals.css";
import Head from "next/head.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icons/favicon.ico" />
        <title>portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
