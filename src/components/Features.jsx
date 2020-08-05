import React, { Component } from 'react'
import { FaMapMarkedAlt, FaSignInAlt, FaDigitalTachograph } from 'react-icons/fa';
import Title from './Title'

export default class Features extends Component {
    state = {
        features: [
            {
                icon: <FaMapMarkedAlt />,
                title: "Visualize Site Locations",
                info: "View world heritage sites and descriptions on interactive maps."
            },
            {
                icon: <FaSignInAlt />,
                title: "Login and Logout",
                info: "User can login and logout to access more functionalities."
            },
            {
                icon: <FaDigitalTachograph />,
                title: "Heritage Sits Statistics",
                info: "User can edit comments and details for select heritage sites"
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
                                <h5>{item.title}</h5>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
