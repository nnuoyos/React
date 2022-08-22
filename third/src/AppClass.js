import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
    rock: {
        name: 'Rock',
        img: 'https://cdn-icons-png.flaticon.com/512/1527/1527445.png',
    },
    scissor: {
        name: 'Scissor',
        img: 'https://cdn-icons.flaticon.com/png/512/4958/premium/4958318.png?token=exp=1660905885~hmac=37608b675e9087a866260f1bec296283',
    },
    paper: {
        name: 'Paper',
        img: 'https://cdn-icons-png.flaticon.com/512/1828/1828248.png',
    },
};

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: '',
        };
    }
    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
        });
    };
    judgement = (user, computer) => {
        if (user.name === computer.name) {
            //user == computer 이렇게 작성하면 비교가 안된다, 이 값들은 객체이므로
            return 'Tie';
        } else if (user.name === 'Rock') return computer.name === 'Scissor' ? 'Win' : 'Lose';
        else if (user.name === 'Scissor') return computer.name === 'Paper' ? 'Win' : 'Lose';
        else if (user.name === 'Paper') return computer.name === 'Rock' ? 'Win' : 'Lose';
    };
    randomChoice = () => {
        let itemArray = Object.keys(choice); //키값을 배열화 한다
        console.log('배열 만들기!', itemArray);
        //랜덤한 숫자값 들고오기
        let randomItem = Math.floor(Math.random() * itemArray.length); //랜덤값을 소수점 버리고 0,1,2 로 만들어준다
        let final = itemArray[randomItem];
        return choice[final];
    };
    render() {
        return (
            <div>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass title="computer" item={this.state.computerSelect} result={this.state.result} />
                </div>
                <div className="main">
                    <button onClick={() => this.play('scissor')}>가위</button>
                    <button onClick={() => this.play('rock')}>바위</button>
                    <button onClick={() => this.play('paper')}>보</button>
                </div>
            </div>
        );
    }
}
