import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "../styles/contact.scss";


const Contact = () => {
    return (
        <Layout>
        <SEO
          title="Home | Portfolio"
          image="https://github.com/jsonfm/portfolio/blob/master/src/assets/images/me.jpeg?raw=true"
          description="This is my personal portfolio, here I put information about me, and my skills, and I show to people my work."
          url="https://jsonfm.github.io/portfolio/"
        />
        <section class="contact">
            <p>Follow me at:</p>
            <div class="media-links-container">
                    <div class="media-link-container">
                        <a href="https://www.instagram.com/jasonm._/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                    </div>
                    <div class="media-link-container">
                        <a href="https://github.com/jsonfm" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                    </div>
                    <div class="media-link-container">
                        <a href="https://www.linkedin.com/in/jason-francisco-macas-mora-47b938141/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                    </div>
            </div>
        </section>
        </Layout>
    )
}

export default Contact;