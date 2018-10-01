import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                "Bulbasaur",
                "Ivysaur",
                "Venosaur",
                "Squirtle",
                "Wartortle",
                "Blastoise",
                "Charmander",
                "Charmeleon",
                "Charizard",
            ],
            userInput: '',
            filteredArray : [],
        }
    }

    changeInput = (e) => this.setState({userInput: e.target.value});

    filterString = (e) => {
        this.setState({
            filteredArray : this.state.unfilteredArray.filter(el => el.includes(this.state.userInput)),
        })
    }

    arrayObjectsToStr = (arr) => {
        let rtn = '[';
        for(let i = 0; i < arr.length; i++) {
            rtn += `"${arr[i]}"`
            if (i !== arr.length-1) {
                rtn += ', ';
            }
        }
        return rtn + ']';
    }

    render() {
        const {userInput, filteredArray} = this.state;
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{this.arrayObjectsToStr(this.state.unfilteredArray)}</span>
                <input className="inputLine" value={userInput} onChange={this.changeInput}></input>
                <button className="confirmationButton" onClick={this.filterString}>Filter</button>
                <span className="resultsBox filterObjectRB">{this.arrayObjectsToStr(filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;