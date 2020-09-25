import React from 'react';
import './grid.css';
import Card from '../card';

function turnCard(e) {
    e.preventDefault();
    console.log('turn card');
}

function Grid(props) {
    const imgBackSrc = "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_960_720.png";
    const imgFrontSrc = "https://cdn.pixabay.com/photo/2018/10/05/21/21/spider-3726881_960_720.png";
    return (
        <div className="memory-grid">
            <Card isToggleOn={true} imgFrontSrc={imgFrontSrc} imgBackSrc={imgBackSrc} onClick={turnCard}/>
            <Card isToggleOn={false} imgFrontSrc={imgFrontSrc} imgBackSrc={imgBackSrc} onClick={turnCard}/>
        </div>
    );
}

export default Grid;