import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { SkillsBoard } from "../components/SkillsBoard";
import "../styles/resume.scss";


const ResumePage = () => {
    return(
        <Layout>
            <SEO
                title="Resume"
                description="Here is some extra info about me."
            />      
            {/* <ShootingStars/> */}
            <section className="text-white d-flex flex-column md-flex-row justify-content-center align-items-center px-4 pt-4 gap-2 info">
                <div className="text-justify content">  
                    <h3 className="title">About Me</h3> 
                    <p className="mb-4">
                        My name is Jason Francisco Macas Mora, I am from Loja, Ecuador. Here I studied electronic engineering at UTPL. My interests are close to bioinformatics and web development.
                    </p>
                    <a className="button-cv" href={`/CV.pdf`} target='_blank' rel='noopener noreferrer'>Download CV</a>
                </div>  
                <div className="data gap-2">
                    {/* <h3>Hello</h3> */}
                    <div className="d-flex flex-column">
                        <h4 className="mb-2">Frontend</h4>
                        <div className="h-bar">
                            <div className="h-status bg-turquoise" style={{width: "70%"}}></div>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <h4 className="mb-2">Backend</h4>
                        <div className="h-bar">
                            <div className="h-status bg-orange" style={{width: "65%"}}></div>
                        </div>
                    </div>
                </div>      
            </section>

            <section className="skills">
                {/* <h3>Skills</h3> */}
                <SkillsBoard />
            </section>

        </Layout>
    )
}

export default ResumePage;