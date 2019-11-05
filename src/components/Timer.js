import React from 'react';
import styled from 'styled-components';

const Spaced = styled.div`
    margin: 7px 0;
`;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.timer = setInterval(() => {
            this.props.onIncr(this.props.index, this.props.timer - 1);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Spaced>{this.props.timer} s.</Spaced>
        )
    }
}

export default Timer;
