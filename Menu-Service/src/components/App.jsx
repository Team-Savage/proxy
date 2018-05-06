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
      extrasDisplay: false,
      appetizerData: [],
      mainData: [],
      beverageData: [],
      extraFoodData: [],
      total: 0
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

  handleMenuCategoryClick(e) {
    if(e.currentTarget.value === 'Appetizer' && !this.state.appetizersDisplay) {
      this.setState({appetizersDisplay: true, mainsDisplay: false});
    } else if(this.state.appetizersDisplay) {
      this.setState({appetizersDisplay: false});
    }

    if(e.currentTarget.value === 'Mains' && !this.state.mainsDisplay) {
      this.setState({mainsDisplay: true, appetizersDisplay: false, beveragesDisplay: false});
    } else if(this.state.mainsDisplay) {
      this.setState({mainsDisplay: false});
    }

    if(e.currentTarget.value === 'Mains' && !this.state.mainsDisplay) {
      this.setState({mainsDisplay: true, appetizersDisplay: false, beveragesDisplay: false});
    } else if(this.state.mainsDisplay) {
      this.setState({mainsDisplay: false});
    }
    
    if(e.currentTarget.value === 'Beverages' && !this.state.beveragesDisplay) {
      this.setState({beveragesDisplay: true, appetizersDisplay: false, mainsDisplay: false});
    } else if(this.state.beveragesDisplay) {
      this.setState({beveragesDisplay: false});
    }

    if(e.currentTarget.value === 'Extas' && !this.state.extrasDisplay) {
      this.setState({extrasDisplay: true, appetizersDisplay: false, mainsDisplay: false, beveragesDisplay: false});
    } else if(this.state.extrasDisplay) {
      this.setState({beveragesDisplay: false});
    }
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
      <div>Total: {this.state.total}</div>
      <button onClick={this.handleClick.bind(this)}>Display Menu</button>
      {(this.state.display) ? <MenuBox
      menuCategoryClick={this.handleMenuCategoryClick.bind(this)}
      appState={this.state} 
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
