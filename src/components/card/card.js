import React from 'react';
import './card.css'

function Card(props) {
    const src = props.isToggleOn ? props.imgFrontSrc: props.imgBackSrc;
    return (
        <div className="memory-card" style={{order: props.order}}>
            <img src={src} className="card-img"/>
        </div>
    );
}

export default Card;