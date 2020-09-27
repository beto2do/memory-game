import React from 'react';
import Grid from './components/grid';
import { v4 as uuidv4 } from 'uuid';

function getImages() {
    const images = [
        'https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/10/25/14/43/bucket-1005891_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/10/05/21/21/spider-3726881_960_720.png',
        'https://cdn.pixabay.com/photo/2013/07/07/13/49/train-143847_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/02/26/21/04/owl-3184032_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/11/18/13/47/apple-1834639_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/03/13/12/03/lego-671593_960_720.jpg',
        'https://cdn.pixabay.com/photo/2017/01/30/17/37/balloon-2021525_960_720.jpg',
    ];

    //TODO it should have a real request.
    return new Promise((resolve, reject) => {
        setTimeout(function(){ resolve(images); }, 100);
    });
}

function createCard(imgUrl) {
    const imgBackSrc = "https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_960_720.png";
    return {
        cardId: uuidv4(),
        isToggleOn: true,
        imgFrontSrc:  imgUrl,
        imgBackSrc: imgBackSrc
    }
}

function createDataCards() {
    const images = getImages();
    return images.then(imgList => imgList.map(imgUrl => createCard(imgUrl)));
}

class MemoryGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        createDataCards().then(cards => this.setState({cards: cards}));
    }
    
    render() {
        return (
            <Grid cards={this.state.cards}/>
        );
    }
}

export default MemoryGame;