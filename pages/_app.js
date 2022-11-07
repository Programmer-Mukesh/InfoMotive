import "../styles/globals.css";
import "../styles/Header.scss";
import "../styles/Home.scss";
import "../styles/AdminForm.scss";
import "../styles/singlePost.scss";
import "../styles/loader.scss";
import Layout from "../components/layout";
import Context from "../context/PostContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </>
  );
}

export default MyApp;
