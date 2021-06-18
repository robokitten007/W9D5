import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        time: new Date()
        };
    }

    tick() {
        seconds += 1;
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        return (
            <div>
                <h1>What Time Is It?</h1> 
                <p>{hours}:{minutes}:{seconds}</p>
            </div>
        )
    }

}
