import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            isPalindrome: ''
        }
    }

    updateInput = e => this.setState({userInput: e.target.value});

    palindromeFinder = (e) => {
        const str = this.state.userInput
        const p = str.split("").reverse().join("") === str;
        this.setState({
            isPalindrome : (p) ? 'true':'false'
        })
    }
    render() {
        const { userInput, isPalindrome } = this.state;
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" value={userInput} onChange={this.updateInput} />
                <button className="confirmationButton" onClick={this.palindromeFinder}>Find Palindrome</button>
                <span className="resultsBox">Palindrome: {isPalindrome}</span>

            </div>
        );
    }
}

export default Palindrome;