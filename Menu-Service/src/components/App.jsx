import React from 'react';
import MenuBox from './MenuBox.jsx'
import BillTab from './BillTab.jsx'
import axios from 'axios';
import style from './App.css';

class App extends React.Component {
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
      extraFoodData: [],
    }
  }

  componentDidMount() {
    const appState = this.state;
    const endpoint = window.location.pathname.slice(3);

    axios.get(`/data/${endpoint}/extra`, {
    }).then(function(response) {
      appState.extraFoodData = response.data;
    });

    axios.get(`/data/${endpoint}/main`, {
    }).then(function(response) {
      appState.mainData = response.data;
    });

    axios.get(`/data/${endpoint}/beverage`, {
    }).then(function(response) {
      appState.beverageData = response.data;
    });

    axios.get(`/data/${endpoint}/appetizer`, {
    }).then(function(response) {
      appState.appetizerData = response.data;
    });
    
    this.forceUpdate();
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
      {(this.state.display) ? <MenuBox 
      appetizerProp={this.state.appetizerData}
      mainProp={this.state.mainData}
      extraProp={this.state.extraFoodData}
      beverageProp={this.state.beverageData}
      /> : <div></div>}
      </div>
    );
  }
}

export default App;
