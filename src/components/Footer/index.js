import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./styles.scss";


const Footer = () => {
    return(
        <footer>
            <div className="author-container">
                Coded by @jsonfm
            </div>
            <div class="copyright-container">
                Copyright © 2022. All rights reserved.
            </div>
            <div class="media-links-container">
                <div class="media-link-container">
                    <a href="https://www.instagram.com/jasonm._/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                </div>
                <div class="media-link-container">
                    <a href="https://github.com/jsonfm" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                </div>
                <div class="media-link-container">
                    <a href="https://www.linkedin.com/in/jason-francisco-macas-mora-47b938141/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                </div>
            </div>
        </footer>
    )
}

export { Footer };