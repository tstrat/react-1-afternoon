import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evens: [],
            odds: [],
            userInput: '',
        }
    }
    updateInput = e => {
        this.setState ({
            userInput: e.target.value
        })
    }

    split = (e) => {
        const splitNum = this.state.userInput.split(',');
        this.setState( {
            evens: splitNum.filter(n => n%2 === 0),
            odds: splitNum.filter(n => n%2 !== 0),
            userInput: '',
        })
    }

    stringArrayElement = (el,i, arr) => (i !== arr.length-1) ? `${el}, ` : `${el}`;

    render() {
        const {userInput, evens, odds} = this.state;
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input className="inputLine" value={userInput} onChange={this.updateInput}></input>
                <button className="confirmationButton" onClick={this.split}>Split</button>
                <span className="resultsBox">Evens: [{evens.map(this.stringArrayElement)}]</span>
                <span className="resultsBox">Odds: [{odds.map(this.stringArrayElement)}]</span>
            </div>
        );
    }
}

export default EvenAndOdd;
