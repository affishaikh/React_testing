import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onClick() {
    this.setState(state => {
      const newCount = state.count + 1;
      return { count: newCount };
    });
  }

  render() {
    return (
      <div className="App">
        <div data-test="display-box" />
        <div data-test="display-box" />
        <div data-test="display-count">The count is {this.state.count}</div>
        <button onClick={this.onClick.bind(this)} data-test="inc-button">
          Increment
        </button>
      </div>
    );
  }
}

export default App;
