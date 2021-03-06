import React from 'react';
import './grid.css';
import Card from '../card';
import { v4 as uuidv4 } from 'uuid';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function Grid(props) {
    let cardsClone = [...props.cards];
    let duplicatedCards = cardsClone.concat(cardsClone).sort();
    const listCards = duplicatedCards.map((card) => {
        return <Card 
        imgFrontSrc={card.imgFrontSrc} 
        imgBackSrc={card.imgBackSrc} 
        order={getRandomInt(duplicatedCards.length)}
        key={uuidv4()}/>
    });
    return (
        <div className="memory-grid">{listCards}</div>
    );
}

export default Grid;