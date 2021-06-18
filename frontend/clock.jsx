import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ time: newDate()});
    }

//     class WordInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       word: ""
//     };
//     this.updateWord = this.updateWord.bind(this);
//   }

//   updateWord(event) {
//     this.setState({ word: event.currentTarget.value });
//   }


    componentDidMount() {
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

//  stack overflow set interval
//  var handle = setInterval(drawAll, 20);

// When you want to cancel it:
// clearInterval(handle);
// handle = 0; // I just do this so I know I've cleared the interval
    

    render() {
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        return (
            <div>
                <h1>What Time Is It?</h1> 
                <p>{hours}:{minutes}:{seconds}</p>
            </div>
        );
    }

}

export default Clock;

// var handle = setInterval(drawAll, 20);

// // When you want to cancel it:
// clearInterval(handle);
// handle = 0; // I just do this so I know I've cleared the interval