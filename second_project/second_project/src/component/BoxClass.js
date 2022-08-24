import React, { Component } from 'react';

export default class BoxClass extends Component {
    componentWillUnmount() {
        console.log('아디오스');
    }
    render() {
        return <div>Box{this.props.num}</div>;
    }
}
