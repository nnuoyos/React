import React, { Component } from 'react';
import BoxClass from './component/BoxClass';
export default class AppClass extends Component {
    //컴포넌트가 실행되자마자 바로 호출 된다
    constructor(props) {
        super(props);
        this.state = {
            counter2: 0,
            num: 1,
            value: 0,
        };
    }
    increase = () => {
        //전달할 객체 안에 this 붙여서 작성한다
        this.setState({ counter2: this.state.counter2 + 1, value: this.state.value + 1 });
    };
    render() {
        return (
            <div className="App">
                <div>state : {this.counter2}</div>
                <button onClick={this.increase}>클릭!</button>
                <BoxClass num={this.state.value} />
            </div>
        );
    }
}
