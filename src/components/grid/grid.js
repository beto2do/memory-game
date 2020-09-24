import React from 'react';
import Card from '../card';

function turnCard(e) {
    e.preventDefault();
    console.log('turn card');
}

function Grid(props) {
    return (
        <div className="memory-grid">
            <Card isToggleOn={false} imgFrontSrc="" imgBackSrc="" title="" onClick={turnCard}/>
        </div>
    );
}

export default Grid;