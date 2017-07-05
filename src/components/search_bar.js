import React, { Component } from 'react';

//Below is Functional Component
// const SearchBar = () => { 
//     return <input/>;
// };

//Below is Class component of the above Functional Component
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }
    }

    //even simpler render function using ES6 syntax
    render() {
        return (
            //this.state.inp = event.target.value; 
            //above is bad, because react will unable to know that state is changed to new value
            //always modify the components value using this.setState();
            <div>
                <input 
                value={this.state.term} 
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }


    //alternative rendering 
    //==========================================//
    // render() {
    //     return <input onChange={this.onInputChange} />;
    // }
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
    //===========================================//

    //simpler render function using ES6 syntax
    // render() {
    //     return <input onChange={(event) => { return console.log(event.target.value) }} />;
    // }    
}


export default SearchBar;