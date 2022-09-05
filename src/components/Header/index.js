import React from "react";
import { Link } from "gatsby"
import { AiTwotoneHome, AiOutlineEye } from "react-icons/ai";
import { IoMdContact, IoMdSettings } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { BiMessageAltDots } from "react-icons/bi";
import "./styles.scss";


const Header = () => {
    return(
        <header>
            <nav className="navbar">
                <div className="nav-items">
                    <label className="menu-button-container" htmlFor="menu-check">
                        <div className="menu-button"></div>
                    </label>
                    <div className="menu-items">
                        <div className="nav-link"><Link to="/" activeClassName="active"><AiTwotoneHome/></Link></div>
                        <div className="nav-link"><Link to="/resume/" activeClassName="active"><IoMdContact/></Link></div>
                        <div className="nav-link"><Link to="/projects/" activeClassName="active"><AiFillEye/></Link></div>
                        <div className="nav-link"><Link to="/contact/" activeClassName="active"><BiMessageAltDots/></Link></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export { Header };