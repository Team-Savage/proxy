import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBox from './MenuBox.js'
import BillTab from './BillTab.js'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
      appetizersDisplay: false,
      mainsDisplay: false,
      beveragesDisplay: false,
      appetizerData: [],
      mainData: [],
      beverageData: [],
      extraFoodData: []
    }
  }

  componentDidMount() {
    
  }

  handleClick() {
    if(!this.state.display) {
      this.setState({display: true});
    } else if(this.state.display) {
      this.setState({display: false});
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
