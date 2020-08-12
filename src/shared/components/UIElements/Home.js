import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Banner from './Banner';
import Features from './Features';

import './UIComponents.css';

export default function Home() {
  return (
        <React.Fragment>
        <Hero>
           <Banner title="Welcome " subtitle="to a tour of UNESCO sites">
               <Link to="/search" className="btn-primary">
                    View World Heritage Sites on Maps
               </Link>
           </Banner>
        </Hero>
        <Features />
        </React.Fragment>

  );
}
