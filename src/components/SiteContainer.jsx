import React, { Component } from 'react';
import Title from './Title';
import pic1 from '../images/site-1.jpeg';
import pic2 from '../images/site-2.jpeg';
import pic3 from '../images/site-3.jpeg';
import pic4 from '../images/site-4.jpeg';

export default class SiteContainer extends Component {
    state = {
        sites: [
            {
                photoLink: pic1,
                title: "Pyramid",
                info: "Lorem Ipsum"
            },
            {
                photoLink: pic2,
                title: "The Great Wall",
                info: "Lorem Ipsum"
            },
            {
                photoLink: pic3,
                title: "Taj Mahal",
                info: "Lorem Ipsum"
            },
            {
                photoLink: pic4,
                title: "Colosseum",
                info: "Lorem Ipsum"
            }
        ]
    }
    render() {
        return (
            <section className="site-container">
                <Title title="Popular Heritage Sites" />
                <div className="site-container-center">
                    {this.state.sites.map((item, index) => {
                        return (
                            <article key={index} className="site-container">
                                <span>
                                    <img src={item.photoLink} alt="photos" />\
                                    <!-- Google static map
                                    <img src={"https://maps.googleapis.com/maps/api/staticmap?center=The+Great+Pyramid+of+Giza&zoom=13&size=600x300&maptype=roadmap\n" +
                                    "&markers=color:blue%7Clabel:S%7C40.702147,-74.015794\n" +
                                    "&key=AIzaSyB2GEsGixSm9xrawPeXgzMmfoGjCkRS2WA"} /> -->
                                </span>
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
