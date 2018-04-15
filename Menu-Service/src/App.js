import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBox from './MenuBox.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
  }

  handleClick() {
    if(!this.state.display) {
      this.setState({display: true});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <button onClick={this.handleClick.bind(this)}>Display Menu</button>
      {(this.state.display) ? <MenuBox /> : <div></div>}
      </div>
    );
  }
}

export default App;
