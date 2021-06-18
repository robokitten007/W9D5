import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        time: new Date()
        };
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

export default Clock;