import React from "react";
import { FaPython, FaDigitalOcean, FaReact, FaLinux, FaNode } from "react-icons/fa";
import { DiJavascript1, DiDocker, DiGit, DiVisualstudio, DiHeroku, DiDjango } from "react-icons/di";
import { SiGoland, SiArduino, SiPostgresql, SiTensorflow, SiMongodb, SiPostman, SiPytorch} from "react-icons/si";
import "./styles.scss";

const SkillsBoard = () => {
    return(
        <div class="skillsboard-container">
            
            <div class="skills-languages">
                <div class ="skill-card">
                    <FaPython />
                </div>
                <div class ="skill-card">
                    <DiJavascript1/>
                </div>
                <div class ="skill-card">
                    <SiGoland />
                </div>
                <div class ="skill-card">
                    <SiArduino />
                </div>
                <div class ="skill-card">
                    <SiPostgresql />
                </div>
                <div class ="skill-card">
                    <FaReact />
                </div>
            </div>
            <div class="skills-tools mt-2">
                <div class ="skill-card">
                    <SiTensorflow />
                </div>
                <div class ="skill-card">
                    <SiPytorch />
                </div>
                <div class ="skill-card">
                    <DiDjango />
                </div>
                <div class ="skill-card">
                    <SiMongodb />
                </div>
                <div class ="skill-card">
                    <FaNode />
                </div>
                <div class ="skill-card">
                    <SiPostman />
                </div>
            </div>
            <div class ="skills-tools mt-2">
                <div class ="skill-card">
                    <FaLinux />
                </div>
                <div class ="skill-card">
                    <DiGit />
                </div>
                <div class ="skill-card">
                    <DiDocker />
                </div>
                <div class ="skill-card">
                    <FaDigitalOcean/>
                </div>
                <div class ="skill-card">
                    <DiVisualstudio/>
                </div>
                <div class ="skill-card">
                    <DiHeroku />
                </div>
            </div>
        </div>
    )
}

export { SkillsBoard };