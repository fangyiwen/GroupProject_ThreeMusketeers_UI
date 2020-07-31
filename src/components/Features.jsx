import React, { Component } from 'react'
import { FaMapMarkedAlt, FaSignInAlt, FaDigitalTachograph } from 'react-icons/fa';
import Title from './Title'

export default class Features extends Component {
    state = {
        features: [
            {
                icon: <FaMapMarkedAlt />,
                title: "Visualize Site Locations",
                info: "View world heritage site locations on Google Maps."
            },
            {
                icon: <FaSignInAlt />,
                title: "Login and Logout",
                info: "User can edit and bookmark site of interest."
            },
            {
                icon: <FaDigitalTachograph />,
                title: "Heritage Sits Statistics",
                info: "Looking into detailed information on various heritage sites."
            }
        ]
    }
    render() {
        return (
            <section className="features">
                <Title title="FEATURES" />
                <div className="features-center">
                    {this.state.features.map((item, index) => {
                        return (
                            <article key={index} className="features">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
