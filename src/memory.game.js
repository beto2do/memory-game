import React from 'react';
import Grid from './components/grid'

const cards = [
    {
        id: "1",
        isToggleOn: true,
        imgFrontSrc: "https://cdn.pixabay.com/photo/2018/10/05/21/21/spider-3726881_960_720.png",
        imgBackSrc: "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_960_720.png"
    },
    {
        id: "2",
        isToggleOn: true,
        imgFrontSrc: "https://cdn.pixabay.com/photo/2018/10/05/21/21/spider-3726881_960_720.png",
        imgBackSrc: "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_960_720.png"
    },
    {
        id: "3",
        isToggleOn: false,
        imgFrontSrc: "https://cdn.pixabay.com/photo/2018/10/05/21/21/spider-3726881_960_720.png",
        imgBackSrc: "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_960_720.png"
    }
];

function MemoryGame(props) {
    return (
        <Grid cards={cards}/>
    );
}

export default MemoryGame;