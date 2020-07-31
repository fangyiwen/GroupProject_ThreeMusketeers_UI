import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";


export default function Sites() {
    return <Hero hero="roomsHero">
        <Banner title="Select Sites ">
            <Link to='/' className="btn-primary">
                return Home
            </Link>
        </Banner>
    </Hero>
}
