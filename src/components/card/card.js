import React, { useState } from 'react';
import './card.css'

function Card(props) {
    const [showFront, setShowFront] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        setShowFront(!showFront);
    }

    return (
        <div className={'memory-card ' + (showFront ? 'is-flip': '')} style={{order: props.order}} onClick={handleClick}>
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