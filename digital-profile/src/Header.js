import React from "react";
import ReactDOM from "react-dom";

import MainImage from "./Images/Parth.jpg";


export default function Header() {
    return (
        <div>
            <img className="mainImage" src={MainImage} />
            <div className="mainTitle">Parth Varde</div>
            <div className="desg">Blockchain Developer</div>
            <div className="website">parthvarde.website</div>
            <div className="details">
                <a className="email">
                    <img className="emailIcon" />
                </a>
                <a className="linkedin">
                    <img className="linkedinIcon" />
                </a>
            </div>
        </div>
    )
}