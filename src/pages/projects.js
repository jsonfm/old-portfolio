import React from "react";
import { Layout } from "../components/Layout";
import { CardProject } from "../components/CardProject";
import "../styles/projects.scss";


const ProjectsPage = () =>{
    return(
        <Layout>
            <section class="projects-section d-flex flex-column v-center h-center">
                <h2 class="text-center mt-1">Here you can check some projects I've worked.</h2>
                <hr class="projects-hr"/>
                <div class="projects-grid">
                    <CardProject />
                </div>
            </section>
        </Layout>
    );
}

export default ProjectsPage;