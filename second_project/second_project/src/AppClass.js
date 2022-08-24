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
        console.log('constructor 확인용!');
    }
    increase = () => {
        //전달할 객체 안에 this 붙여서 작성한다
        this.setState({ counter2: this.state.counter2 + 1, value: this.state.value + 1 });
        console.log('increase 함수는 잘 되고 있는가?', this.state);
    };
    //렌더로 ui를 그려주고 난 다음에 componentDidMount 함수를 호출한다
    componentDidMount() {
        console.log('componentDidMount 확인용!', counter2);
    }
    //
    componentDidUpdate() {
        console.log('componentDidUpdate 확인용!', this.state);
    }
    render() {
        console.log('render 확인용!!');
        return (
            <div className="App">
                <div>state : {this.counter2}</div>
                <button onClick={this.increase}>클릭!</button>
                {this.state.counter2 < 3 && <BoxClass num={this.state.value} />}
            </div>
        );
    }
}
