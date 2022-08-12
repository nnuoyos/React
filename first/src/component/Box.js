import React from 'react';

const box = (props) => {
    console.log('프롭스가 뭘까', props);
    return (
        <div className="Box">
            Box{props.num}
            <p>{props.name}💕</p>
        </div>
    );
};

export default box;
