import React from 'react';

const Box = (props) => {
    /* console.log('props 정보 확인', props); */
    let result;
    let def;
    if (props.title === 'computer' && props.result !== 'Tie' && props.result !== '') {
        result = props.result === 'Win' ? 'Lose' : 'Win';
    } else {
        result = props.result;
    }

    if (props.title === 'computer' || props.title === 'You') {
        def = 'https://cdn-icons-png.flaticon.com/512/6851/6851361.png';
    }
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img className="item-img" src={(props.item && props.item.img) || def} alt="가위바위보이미지"></img>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
