import React from "react";
import { FaPython, FaDigitalOcean, FaReact, FaLinux, FaNode } from "react-icons/fa";
import { DiJavascript1, DiDocker, DiGit, DiVisualstudio, DiHeroku, DiDjango } from "react-icons/di";
import { SiGoland, SiArduino, SiPostgresql, SiTensorflow, SiMongodb, SiPostman, SiPytorch} from "react-icons/si";
import "./styles.scss";

const SkillsBoard = () => {
    return(
        <div className="skillsboard-container">     
            <div className="skills-languages">
                <div className="skill-card">
                    <FaPython />
                </div>
                <div className="skill-card">
                    <DiJavascript1/>
                </div>
                <div className="skill-card">
                    <SiGoland />
                </div>
                <div className="skill-card">
                    <SiArduino />
                </div>
                <div className="skill-card">
                    <SiPostgresql />
                </div>
                <div className="skill-card">
                    <FaReact />
                </div>
            </div>
            <div className="skills-tools mt-2">
                <div className="skill-card">
                    <SiTensorflow />
                </div>
                <div className="skill-card">
                    <SiPytorch />
                </div>
                <div className="skill-card">
                    <DiDjango />
                </div>
                <div className="skill-card">
                    <SiMongodb />
                </div>
                <div className="skill-card">
                    <FaNode />
                </div>
                <div className="skill-card">
                    <SiPostman />
                </div>
            </div>
            <div className="skills-tools mt-2">
                <div className="skill-card">
                    <FaLinux />
                </div>
                <div className="skill-card">
                    <DiGit />
                </div>
                <div className="skill-card">
                    <DiDocker />
                </div>
                <div className="skill-card">
                    <FaDigitalOcean/>
                </div>
                <div className="skill-card">
                    <DiVisualstudio/>
                </div>
                <div className="skill-card">
                    <DiHeroku />
                </div>
            </div>
        </div>
    )
}

export { SkillsBoard };