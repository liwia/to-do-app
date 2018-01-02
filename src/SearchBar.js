import React, { Component } from 'react';

class SearchBar extends Component {
    state ={
        term: ''
    }
    handleTermChange = (event) => {
        this.setState({
            term: event.target.value
        })
    };

    search= (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.term)
        this.setState({
            term: ''
        })
    };
    render() {
        return (
            <form onSubmit={this.search}>
                <input
                    value={this.state.term}
                    onChange={this.handleTermChange}
                />
                <button>Search task</button>
            </form>
        )
    }
}

export default SearchBar;