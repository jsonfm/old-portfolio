import React from "react";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import "./styles.scss";


const CardProject = ({name, description, image, repository, demo}) => {
    return(
        <div className="card-container ease-out duration-300">
            <div className="card-image-container">
                <img loading="lazy" className="card-image" src={image} alt="image-project"/>
            </div>
            <div className="card-content-container">
                <div className="card-text">
                    <h3 className="card-title text-center">{name}</h3>
                    <p className="truncated">
                       {description}
                    </p>
                </div>
                <div className="card-links">
                    {repository &&
                    <a href={repository} target="_blank" rel="noopener noreferrer" className="card-button github-button ease-out duration-300">
                        <BsGithub />
                        <p>Source</p>
                    </a>
                    }
                    {demo &&
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="card-button demo-button ease-out duration-300">
                        <BsFillEyeFill/>
                        <p>Demo</p>
                    </a>
                    }
                </div>
            </div>
        </div>
    )
}

export { CardProject };