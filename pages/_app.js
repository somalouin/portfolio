import "../styles/globals.css";
import "../public/global/darkmode.js";
import Head from "next/head.js";
import Home from "./index.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <link rel='shortcut icon' href='icons/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
