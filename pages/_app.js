import "../styles/globals.css";
import "../public/global/darkmode.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
