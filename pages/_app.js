import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Header from "../components/Header/Header";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
