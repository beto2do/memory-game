import React from 'react';
import './card.css'

function Card(props) {
    return (
        <div className="memory-card" style={{order: props.order}}>
            <div className="card-face">
                <img src={props.imgFrontSrc} className="front"/>
            </div>
            <div className="card-face">
                <img src={props.imgBackSrc} />
            </div>
        </div>
    );
}

export default Card;