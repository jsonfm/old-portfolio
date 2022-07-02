import * as React from "react";
import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import "../styles/404.scss";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <section className="not-found-section">
        <h2 className="title">404</h2>
        <p>Page not found.</p>
      </section>

    </Layout>
  )
}

export default NotFoundPage
