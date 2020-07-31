import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import SiteContainer from "../components/SiteContainer";

export default function Sites() {
    return (
        <Fragment>
            <Hero hero="roomsHero">
                <Banner title="Select Sites ">
                    <Link to='/' className="btn-primary">
                        return Home
            </Link>
                </Banner>
            </Hero>
            <SiteContainer />
        </Fragment>
    );
};
