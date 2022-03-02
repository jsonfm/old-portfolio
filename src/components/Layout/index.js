import React from "react";

import "./styles.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({children}) => {
    return(
        <>
            <Header/>
                <main class="main">
                    {children}
                </main>
            <Footer/>
        </>
    )
}

export { Layout };