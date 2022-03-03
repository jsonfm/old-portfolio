import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { SkillsBoard } from "../components/SkillsBoard";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import "../styles/index.scss";



const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
      />
      <section className="d-flex flex-column v-center h-center main-section">
        <h1 className="h1">Greetings,</h1>
        <p>I'm <b>J</b><b className="pinky-word">A</b><b>SON</b></p>
        <hr className="neon-hr"/>
        <em className="mt-2">
          This is my personal portfolio.
        </em>
      </section>
      <section className="d-flex flex-column v-center about-section">
        <h2 className="title"> 
          Let me <b className="title-introduce">introuduce</b> myself
        </h2>
        <div className="myself-container">
          <div className="myself-image-container">
            <StaticImage className="profile-image" src="../assets/images/me.jpeg" alt="profile-image"/>
          </div>
          <div className="myself-info-container">
            <p>I am passionate about the abstract, as such, I love programming. ⚡ 🥰 💻</p>
            <p>I studied electronics and telecommunications <b>engineering</b> and in the process I learned to use various tools. 📚 ⚙ 📡</p>
            <p>Below is my skills set, but if you want to know a little more about me, <Link to="/">Click here</Link>.</p>
          </div>
        </div>
      </section>
      <section className="skills-section">
        <h2 className="text-center">Skills</h2>
        <SkillsBoard />
      </section>
    </Layout>
  )
}

export default IndexPage
