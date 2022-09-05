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
                {projects.map((project)=>(
                    <CardProject
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        repository={project.repository}
                        demo={project.demo}
                    />
                ))}
            </section>
        </Layout>
    );
}

export default ProjectsPage;