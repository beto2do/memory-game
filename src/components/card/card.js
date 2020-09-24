import React from 'react';

function Card(props) {
    const src = props.isToggleOn ? props.imgFrontSrc: props.imgBackSrc;
    return (
        <div className="memory-card">
            <img src={src} className="card-img" alt={props.title}/>
            <div className="overlay">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    );
}

export default Card;