import React, { Component } from 'react';

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = '';
        this.def = '';
    }
    getResult = () => {
        if (this.props.title === 'computer' && this.props.result !== 'Tie' && this.props.result !== '') {
            this.result = this.props.result === 'Win' ? 'Lose' : 'Win';
        } else {
            this.result = this.props.result;
        }
        if (this.props.title === 'computer' || this.props.title === 'You') {
            this.def = 'https://cdn-icons-png.flaticon.com/512/6851/6851361.png';
        }
    };
    render() {
        this.getResult();
        return (
            <div>
                <div className={`box ${this.result}`}>
                    <h1>{this.props.title}</h1>
                    <img className="item-img" src={(this.props.item && this.props.item.img) || this.def} alt="가위바위보이미지"></img>
                    <h2>{this.result}</h2>
                </div>
            </div>
        );
    }
}
