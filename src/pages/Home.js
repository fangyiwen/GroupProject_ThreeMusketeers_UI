import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Features from '../components/Features'

export default function Home() {
    return (
        <React.Fragment>
        <Hero>
           <Banner title="Welcome " subtitle="to a tour of UNESCO sites">
               <Link to="/sites" className="btn-primary">
                    View Select World Heritage Sites
               </Link>
           </Banner>
        </Hero>
        <Features />
        
        // Google Maps API
        </React.Fragment>
        
    );

}
