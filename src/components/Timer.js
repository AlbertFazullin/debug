import React from 'react';
import styled from 'styled-components';

const Spaced = styled.div`
    margin: 7px 0;
`;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.timer,
        };
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1,
            })
        }, 1000);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.onEnds(this.props.index);
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Spaced>{this.state.time} s.</Spaced>
        )
    }
}

export default Timer;
