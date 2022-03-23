import React from "react";

import HeroImage from "../Images/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero">
            <img className="heroImg" src={HeroImage} />
            <h1 className="heroTitle">Online Experiences</h1>
            <p className="heroDesc">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}