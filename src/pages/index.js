import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

import "../styles/index.scss";
import "../components/Footer/styles.scss";


const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home | Portfolio"
        image="https://github.com/jsonfm/portfolio/blob/master/src/assets/images/me.jpeg?raw=true"
        description="This is my personal portfolio, here I put information about me, and my skills, and I show to people my work."
        url="https://jsonfm.github.io/portfolio/"
      />
      <section className="home">
        <div className="title">
          <span>H</span>
          <span>i,</span>
          <br/>
          <span>I</span>
          <span>'</span>
          <span>m </span>
          <span className="ml-1"> J</span>
          <span>a</span>
          <span>s</span>
          <span>o</span>
          <span>n</span>
          <br />
          <span className="mt-2">W</span>
          <span>e</span>
          <span>b</span>
          <span className="ml-1">d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </div>

        <div className="subtitle text-turquoise">
          Fullstack - Python/Node
        </div>
        <div className="cubes">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
