import React from "react";
import {BsFillArrowDownCircleFill} from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { SkillsBoard } from "../components/SkillsBoard";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import scrollTo from 'gatsby-plugin-smoothscroll';


import "../styles/index.scss";
import "../components/Footer/styles.scss";


const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home | Portfolio"
        image="https://github.com/Hikki12/portfolio/blob/master/src/assets/images/me.jpeg?raw=true"
        description="This is my personal portfolio, here I put information about me, and my skills, and I show to people my work."
        url="https://hikki12.github.io/portfolio/"
      />
      <section className="d-flex flex-column v-center h-center main-section">
        <h1 className="h1">Greetings,</h1>
        <p>I'm <b>J</b><b className="pinky-word">A</b><b>SON</b></p>
        <div className="neon-hr">
          <div className="neon-light"></div>
        </div>
        <em className="mt-2">
          This is my personal portfolio.
        </em>
        <div class="mt-5 text-6xl pulse" onClick={() => scrollTo('#me-section')}>
          <BsFillArrowDownCircleFill/>
        </div>
      </section>
      <section id="me-section" className="d-flex flex-column justify-content-center align-items-center v-center about-section">
        <h2 className="title"> 
          Let me <b className="title-introduce">introuduce</b> myself
        </h2>
        <div className="myself-container">
          <div className="myself-image-container">
            <StaticImage className="profile-image" src="../assets/images/me.jpeg" alt="profile-image"/>
          </div>
          <div className="myself-info-container text-justify">
            <p class="self-start mb-4 font-bold">README.md</p>
            <h3 class="text-4xl font-bold text-center mb-2 text-orange-100">Fullstack Developer Python/React</h3>
            <p class="mt-2">My name is Jason Macas Mora, and I work as fullstack developer. I handle programming languages like Python, Javascript, Typescript, Golang, frameworks like ReactJS, NextJS, TailwindCSS and others.</p>
            <p>My professional goals are focused on solving problems in the most efficient way possible, following good practices and standards.</p>
            <p class="self-start">- Here you could check some of <Link class="text-orange" to="/projects">my projects.</Link></p>
            <p class="self-start">- If you scroll down, you could find my <b class="text-violet cursor-pointer" onClick={() => scrollTo('#skills-section')} >skillsboard</b>.</p>
            <p class="self-start">- If you needed, check my <a class="text-pink" href={`CV.pdf`} target='_blank' rel='noopener noreferrer'>CV</a>.</p>
            <p class="self-start">Write me at <a class="text-gray" href="https://mail.google.com/mail/?view=cm&fs=1&to=franciscomacas3@gmail.com" target="_blank" rel="noopener noreferrer">franciscomacas3@gmail.com</a> and follow me on my social networks:</p>
            <div class="d-flex gap-4 mt-1">
                <div class="text-2xl text-gray">
                    <a class="text-gray text-4xl" href="https://www.instagram.com/jasonm._/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                </div>
                <div class="text-2xl text-gray">
                    <a class="text-gray text-4xl" href="https://github.com/Hikki12" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                </div>
                <div class="text-2xl text-gray">
                    <a class="text-gray text-4xl"  href="https://www.linkedin.com/in/jason-francisco-macas-mora-47b938141/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills-section" className="skills-section d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">Skills</h2>
        <SkillsBoard />
      </section>
    </Layout>
  )
}

export default IndexPage
