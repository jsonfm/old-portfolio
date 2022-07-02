import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { ShootingStars } from "../components/ShootingStars";
import "../styles/resume.scss";


const ResumePage = () => {
    return(
        <Layout>
            <SEO
                title="Resume"
                description="Here is some extra info about me."
            />      
            {/* <ShootingStars/> */}
            <section class="text-white d-flex flex-column justify-content-center align-items-center it mx-3" stlye={{paddingTop: '5rem'}}>
                <div>
                    <img class="">

                    </img>
                </div>
                <div class="text-justify" style={{maxWidth: '500px'}}>   
                    <p>
                        My name is Jason Francisco Macas Mora, I am from Loja, Ecuador. Here I studied electronic engineering at UTPL. I am a curious person, and I really enjoy self-taught learning. I am passionate about the various fields of knowledge, and I am interested in being able to apply my problem-solving skills in my environment.
                    </p>
                    <p class="mt-3">
                        Specifically, my interests are close to bioinformatics and web development. I have worked on projects related to artificial intelligence, signal and image processing, frontend design, databases and some backend languages. This is how I have also worked in the development of IoT systems.
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default ResumePage;