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
                mapLink: "https://maps.googleapis.com/maps/api/staticmap?center=The+Great+Pyramid+of+Giza&zoom=16&size=500x500&maptype=satellite\n" +
                    "&markers=color:blue%7Clabel:T%7C29.9792345,31.1320132\n" +
                    "&key=AIzaSyB2GEsGixSm9xrawPeXgzMmfoGjCkRS2WA",
                title: "Pyramid",
                info: "Lorem Ipsum"
            },
            {
                photoLink: pic2,
                mapLink: "https://maps.googleapis.com/maps/api/staticmap?center=Great+Wall+of+China&zoom=13&size=500x500&maptype=satellite\n" +
                    "&markers=color:blue%7Clabel:T%7C40.4322953,116.5650018\n" +
                    "&key=AIzaSyB2GEsGixSm9xrawPeXgzMmfoGjCkRS2WA",
                title: "The Great Wall",
                info: "Lorem Ipsum"
            },
            {
                photoLink: pic3,
                mapLink: "https://maps.googleapis.com/maps/api/staticmap?center=Taj+Mahal&zoom=16&size=500x500&maptype=satellite\n" +
                    "&markers=color:blue%7Clabel:T%7C27.1751448,78.0399535\n" +
                    "&key=AIzaSyB2GEsGixSm9xrawPeXgzMmfoGjCkRS2WA",
                title: "Taj Mahal",
                info: "Lorem Ipsum"
            },
            {
                photoLink: pic4,
                mapLink: "https://maps.googleapis.com/maps/api/staticmap?center=Colosseum&zoom=16&size=500x500&maptype=satellite\n" +
                    "&markers=color:blue%7Clabel:T%7C41.8906874,12.4909819\n" +
                    "&key=AIzaSyB2GEsGixSm9xrawPeXgzMmfoGjCkRS2WA",
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

                                    <img src={item.mapLink} />
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
