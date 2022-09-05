import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import GoogleMaps from "simple-react-google-maps"
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
        <section className="contact">
            <div className="data-contact">
                <h3 className="mb-4">Contact me</h3>

                <p>
                    I am interested in freelance opportunities.
                </p>

                <div className="media-links-container">
                    <div className="media-link-container">
                        <a href="https://www.instagram.com/jasonm._/" target="_blank" rel="noopener noreferrer" className="d-flex gap-4 align-items-center"><BsInstagram /> <p>Instagram</p></a>
                    </div>
                    <div className="media-link-container">
                        <a href="https://github.com/jsonfm" target="_blank" rel="noopener noreferrer" className="d-flex gap-4 align-items-center"><BsGithub /> <p>Github</p></a>
                    </div>
                    <div className="media-link-container">
                        <a href="https://www.linkedin.com/in/jason-francisco-macas-mora-47b938141/" target="_blank" rel="noopener noreferrer" className="d-flex gap-4 align-items-center"><BsLinkedin /> <p>linkedin</p></a>
                        
                    </div>
                </div>
                
                <p>Give me an email:</p>
                <a className="text-orange email" href="https://mail.google.com/mail/?view=cm&fs=1&to=franciscomacas3@gmail.com" target="_blank" rel="noopener noreferrer">franciscomacas3@gmail.com</a>
            </div>
            <div className="map-container">
                <GoogleMaps
                    apiKey={"AIzaSyA_c7KMN1Z7AHIGgXrYOLB2d1vlY6c6VFQ"}
                    mapId={"bfcf9caeb847401d"}
                    style={{height: "100%", minHeight: "110vh", width: "100%", zIndex: "1000"}}
                    zoom={15}
                    center={{lat: -3.996623, lng: -79.201539}}
                    markers={{lat: -3.996623, lng: -79.201539}} //optional
                />
            </div>
        </section>
        </Layout>
    )
}

export default Contact;