import React from 'react';

const Box = (props) => {
    /* console.log('props 정보 확인', props); */
    let result;
    if (props.title === 'computer' && props.result !== 'Tie' && props.result !== '') {
        result = props.result === 'Win' ? 'Lose' : 'Win';
    } else {
        result = props.result;
    }
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img}></img>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
