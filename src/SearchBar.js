import React, { Component } from 'react';

class SearchBar extends Component {
    state ={
        term: ''
    }
    render() {
        return (
            <div>
                <Input
                    value={this.state.term}
                    placeholder='Search...'
                    // onClick={this.search}
                    // onChange={this.handleTermChange}
                />
            </div>
        )
    }
}

export default SearchBar;