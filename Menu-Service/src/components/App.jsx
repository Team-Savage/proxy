import React, { Component } from 'react';
import MenuBox from './MenuBox.jsx'
import BillTab from './BillTab.jsx'
import axios from 'axios';
import style from './App.css';

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
      <button onClick={this.handleClick.bind(this)}>Display Menu</button>
      {(this.state.display) ? <MenuBox /> : <div></div>}
      </div>
    );
  }
}

export default App;
