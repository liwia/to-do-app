import React, { Component } from 'react';
import './App.css';
import Auth from './Auth';
import TaskMainView from './TaskMainView';
import SearchBar from './SearchBar';
import ToDoFirebase from './ToDoFirebase';

class App extends Component {
    state={
        searchPhrase: ''
    }

    onSearch = (text) => {
        this.setState({
            searchPhrase: text
        })
    }
  render() {
    return (
        <Auth>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to To Do Task List</h1>
        </header>
        <p className="App-intro">
          To get started, add your tasks!
        </p>
          <SearchBar
              onSearch={this.onSearch}
          />
        <TaskMainView
            searchPhrase={this.state.searchPhrase}/>
        <ToDoFirebase/>
      </div>
        </Auth>
    );
  }
}

export default App;
