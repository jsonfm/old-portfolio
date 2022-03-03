import React from "react";
import { Layout } from "../components/Layout";
import { CardProject } from "../components/CardProject";
import { SEO } from "../components/SEO";
import "../styles/projects.scss";


const ProjectsPage = () =>{
    return(
        <Layout>
            <SEO
                title="Projects"
            />            
            <section class="projects-section d-flex flex-column v-center h-center">
                <h2 class="text-center mt-2">Here you can check some projects I've worked.</h2>
                <hr class="projects-hr"/>
                <div class="projects-grid">
                    <CardProject />
                </div>
            </section>
        </Layout>
    );
}

export default ProjectsPage;