import React from "react";
import { Link } from "gatsby"
import "./styles.scss";


const Header = () => {
    return(
        <header>
            <nav className="navbar">
                <div className="nav-brand">
                    <div className="nav-link"><Link to="/">Portfolio</Link></div>                  
                </div>
                <div className="nav-items">
                    <input id="menu-check" className="menu-check d-none" type="checkbox"/>
                    <label className="menu-button-container" htmlFor="menu-check">
                        <div className="menu-button"></div>
                    </label>
                    <div className="menu-items">
                        <div className="nav-link"><Link to="/">About</Link></div>
                        <div className="nav-link"><Link to="/resume/">Resume</Link></div>
                        <div className="nav-link"><Link to="/projects/">Projects</Link></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Header };