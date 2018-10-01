import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            firstInput: '',
            secondInput: '',
            sum: ''
        }

    }

    updateFirstInput = (e) => this.setState({firstInput: e.target.value});

    updateSecondInput = (e) => this.setState({secondInput: e.target.value});

    addInputs = () => {
        const {firstInput, secondInput} = this.state;
        this.setState({
            sum: parseInt(firstInput,10) + parseInt(secondInput, 10)
        })
    }

    render() {
        const {firstInput, secondInput, sum } = this.state;
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Sum</h4>
                <input className="inputLine" value={firstInput} onChange={this.updateFirstInput} />
                <input className="inputLine" value={secondInput} onChange={this.updateSecondInput} />
                <button className="confirmationButton" onClick={this.addInputs}>Sum</button>
                <span className="resultsBox">Sum: {sum}</span>
            </div>
        );
    }
}

export default Sum;