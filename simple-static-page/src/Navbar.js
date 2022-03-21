import React from "react";
import ReactDOM from "react-dom";
import ReactLogo from "./images/react-icon-small.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="mainContent">
                <img src={ReactLogo} className="mainLogo" />
                <h1>ReactFacts</h1>
            </div>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}