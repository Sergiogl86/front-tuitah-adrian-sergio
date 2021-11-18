import { useEffect } from "react";
import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es.json";
import Header from "../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TimeAgo.addDefaultLocale(es);
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
