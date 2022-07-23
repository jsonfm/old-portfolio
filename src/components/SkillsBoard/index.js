import React from "react";
import { FaPython, FaDigitalOcean, FaReact, FaLinux, FaNode } from "react-icons/fa";
import { DiJavascript1, DiDocker, DiGit, DiVisualstudio, DiHeroku, DiDjango } from "react-icons/di";
import { SiGoland, SiArduino, SiPostgresql, SiTensorflow, SiMongodb, SiPostman, SiPytorch} from "react-icons/si";
import "./styles.scss";

const SkillsBoard = () => {
    return(
        <div className="skillsboard-container">     
            <div className="skills-languages">
                <div className="skill-card ease-out duration-300">
                    <FaPython />
                </div>
                <div className="skill-card ease-out duration-300">
                    <DiJavascript1/>
                </div>
                <div className="skill-card ease-out duration-300">
                    <SiGoland />
                </div>
                <div className="skill-card ease-out duration-300">
                    <SiArduino />
                </div>
                <div className="skill-card ease-out duration-300">
                    <SiPostgresql />
                </div>
                <div className="skill-card ease-out duration-300">
                    <FaReact />
                </div>
            </div>
            <div className="skills-tools mt-2">
                <div className="skill-card ease-out duration-300">
                    <SiTensorflow />
                </div>
                <div className="skill-card ease-out duration-300">
                    <SiPytorch />
                </div>
                <div className="skill-card ease-out duration-300">
                    <DiDjango />
                </div>
                <div className="skill-card ease-out duration-300">
                    <SiMongodb />
                </div>
                <div className="skill-card ease-out duration-300">
                    <FaNode />
                </div>
                <div className="skill-card ease-out duration-300">
                    <SiPostman />
                </div>
            </div>
            <div className="skills-tools mt-2 ease-out duration-300">
                <div className="skill-card">
                    <FaLinux />
                </div>
                <div className="skill-card ease-out duration-300">
                    <DiGit />
                </div>
                <div className="skill-card ease-out duration-300">
                    <DiDocker />
                </div>
                <div className="skill-card ease-out duration-300">
                    <FaDigitalOcean/>
                </div>
                <div className="skill-card ease-out duration-300">
                    <DiVisualstudio/>
                </div>
                <div className="skill-card ease-out duration-300">
                    <DiHeroku />
                </div>
            </div>
        </div>
    )
}

export { SkillsBoard };