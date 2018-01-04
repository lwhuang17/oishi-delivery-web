import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    this.state = {
      name: ''
    };
  }

  handleChange(event) {
    const name = event.target.value;
    this.setState({ name });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello {this.state.name}, welcome to Oishi Delivery</h1>
        </header>
        <p className="App-intro">
          Your orders will be quickly processed. Enjoy!
        </p>
        Name: <input autoFocus type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
      </div>
    );
  }
}

export default App;
