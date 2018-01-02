import React, { Component } from 'react';
import './App.css';
import TaskMainView from './TaskMainView';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to To Do Task List</h1>
        </header>
        <p className="App-intro">
          To get started, add your tasks!
        </p>
          <SearchBar
              // onSearch={this.onSearch}
          />
        <TaskMainView/>
      </div>
    );
  }
}

export default App;
