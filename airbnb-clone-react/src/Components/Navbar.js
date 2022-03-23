import React from "react";

import MainLogo from "../Images/airbnb-logo.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="mainLogo" src={MainLogo} />
        </div>
    )
}