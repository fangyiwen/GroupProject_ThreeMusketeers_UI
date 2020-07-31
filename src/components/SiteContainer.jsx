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
                title: "Heritage Sits Statistics",
                info: "Lorem Ipsum"
            }
        ]
    }
    render() {
        return (
            <section className="features">
                <Title title="FEATURES" />
                <div className="features-center">
                    {this.state.sites.map((item, index) => {
                        return (
                            <article key={index} className="features">
                                <span><img src={item.photoLink}  alt="photos" /></span>
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
