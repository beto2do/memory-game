import React from 'react';
import './grid.css';
import Card from '../card';

function turnCard(e) {
    e.preventDefault();
    console.log('turn card');
}

function Grid(props) {
    const listCards = props.cards.map((card) => {
        return <Card 
        isToggleOn={card.isToggleOn} 
        imgFrontSrc={card.imgFrontSrc} 
        imgBackSrc={card.imgBackSrc} 
        onClick={turnCard}
        key={card.id}/>
    });
    return (
        <div className="memory-grid">{listCards}</div>
    );
}

export default Grid;