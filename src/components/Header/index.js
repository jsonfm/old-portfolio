import React from "react";
import { Link } from "gatsby"
import "./styles.scss";


const Header = () => {
    return(
        <header>
            <nav class="navbar">
                <div class="nav-brand">
                    <div class="nav-link"><Link to="/">About</Link></div>                  
                </div>
                <div class="nav-items">
                    <label class="menu-button-container" for="menu-check">
                        <div class="menu-button"></div>
                    </label>
                    <input id="menu-check" class="menu-check d-none" type="checkbox"/>
                    <div class="menu-items">
                        <div class="nav-link"><Link to="/">About</Link></div>
                        <div class="nav-link"><Link to="/projects/">Projects</Link></div>
                        {/* <div class="nav-link"><Link to="/resume/">Resume</Link></div> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Header };