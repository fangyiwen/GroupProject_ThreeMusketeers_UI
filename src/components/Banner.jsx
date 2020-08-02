import React from 'react';

function Banner(props) {
    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <div />
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    );
};

export default Banner;