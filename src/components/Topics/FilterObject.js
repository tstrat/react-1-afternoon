import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {
                    name:'Bulbasaur',
                    id:1,
                    type:'grass/poison',
                    bestStarter:true
                },
                {
                    name:'Charmander',
                    id:7,
                    type:'NOT A DRAGON',
                    fireStarter:true
                },
                {
                    name:'Squirtle',
                    id:4,
                    type:'water',
                    fireFighter: true
                },
            ],
            userInput: '',
            filteredArray : [],
        }
    }

    changeInput = (e) => this.setState({userInput: e.target.value});

    filterObject = (e) => {
        const filter = this.state.unfilteredArray.filter(element=> {
            return element.hasOwnProperty(this.state.userInput);
        })
        this.setState({
            filteredArray : filter,
        })
    }

    arrayObjectsToStr = (arr) => {
        let rtn = '[';
        for(let i = 0; i < arr.length; i++) {
            rtn += '{'
            for (let key in arr[i]) {
                rtn += `${key}:${arr[i][key]}, `;
            }
            rtn+='}';
            if (i !== arr.length-1) {
                rtn+=', ';
            }
        }
        return rtn + ']';
    }

    render() {
        const {userInput, filteredArray} = this.state;
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{this.arrayObjectsToStr(this.state.unfilteredArray)}</span>
                <input className="inputLine" value={userInput} onChange={this.changeInput}></input>
                <button className="confirmationButton" onClick={this.filterObject}>Filter</button>
                <span className="resultsBox filterObjectRB">{this.arrayObjectsToStr(filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject;