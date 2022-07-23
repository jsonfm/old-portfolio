import React from "react";
import { Layout } from "../components/Layout";
import { CardProject } from "../components/CardProject";
import { SEO } from "../components/SEO";
import { projects } from "../api/projects"
import "../styles/projects.scss";


const ProjectsPage = () =>{
    return(
        <Layout>
            <SEO
                title="Projects | Portfolio"
                description="Here are the main projects I worked on."
            />            
            <section class="projects-section">
                <h2 class="text-center mt-2">Here you can check some projects I've worked.</h2>
                <hr class="projects-hr"/>
                <div class="projects-grid">
                    <div class="projects-row">
                        {projects.map((project)=>(
                        <div class="projects-col">
                            <CardProject
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                repository={project.repository}
                                demo={project.demo}
                            />
                        </div>
                        ))}
                    </div>
                </div>

            </section>
        </Layout>
    );
}

export default ProjectsPage;