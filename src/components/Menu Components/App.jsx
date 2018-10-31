import React from 'react';
import MenuBox from './MenuBox.jsx'
import axios from 'axios';
import style from './App.css';
import { clickMenuItem } from '../../actions/menuActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import onClickOutside from "react-onclickoutside";
import { Button, ButtonToolbar } from 'react-bootstrap';

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
      extraFoodData: []
    }
    this.handleMenuCategoryClick = this.handleMenuCategoryClick.bind(this);
  }
  
  handleMouseDown = () => {
    if(!this.state.display) {
      this.setState({display: true});
    } 
  }

  handleMouseLeave = () => {
    if(this.state.display) {
      this.setState({display: false});
    }
  }

  handleClickOutside() {
    this.setState({display: false})
  }

  handleMenuCategoryClick = (e) => { 
    let appState = this;  
    const endpoint = window.location.pathname.slice(3);

    if(e.currentTarget.value === 'Appetizer' && !this.state.appetizersDisplay) {
    axios.get(`/data/${endpoint}/appetizer`, {
    }).then(function(response) {
      appState.setState({appetizerData: response.data, mainData: [],
        beverageData: [],
        extraFoodData: [], 
        appetizersDisplay: true,
        mainsDisplay: false,
        beveragesDisplay: false,
        extrasDisplay: false
      });
    });
    } 

    if(e.currentTarget.value === 'Mains' && !this.state.mainsDisplay) {
      axios.get(`/data/${endpoint}/main`, {
      }).then(function(response) {
        appState.setState({appetizerData: [], mainData: response.data,
          beverageData: [],
          extraFoodData: [], 
          appetizersDisplay: false,
          mainsDisplay: true,
          beveragesDisplay: false,
          extrasDisplay: false
        });
      });
      this.setState({mainsDisplay: true, appetizersDisplay: false, beveragesDisplay: false, extrasDisplay: false});
    } 

    if(e.currentTarget.value === 'Mains' && !this.state.mainsDisplay) {
      this.setState({mainsDisplay: true, appetizersDisplay: false, beveragesDisplay: false, extrasDisplay: false});
    } 
    
    if(e.currentTarget.value === 'Beverages' && !this.state.beveragesDisplay) {
      axios.get(`/data/${endpoint}/beverage`, {
      }).then(function(response) {
        appState.setState({appetizerData: [], mainData: [],
          beverageData: response.data,
          extraFoodData: [], 
          appetizersDisplay: false,
          mainsDisplay: false,
          beveragesDisplay: true,
          extrasDisplay: false
        });
      });
    } 

    if(e.currentTarget.value === 'Extras' && !this.state.extrasDisplay) {
      axios.get(`/data/${endpoint}/extra`, {
      }).then(function(response) {
        appState.setState({appetizerData: [], 
          mainData: [],
          beverageData: [],
          extraFoodData: response.data, 
          appetizersDisplay: false,
          mainsDisplay: false,
          beveragesDisplay: false,
          extrasDisplay: true,
        });
      });
    } 
  }

  render() {
    console.log(this.state)
    return (
      <div className="menu-service">
      <Button 
      color="primary"
      onMouseEnter={this.handleMouseDown.bind(this)}
      >Menu</Button>
      {(this.state.display) ? <MenuBox
      onMouseLeave = {this.handleMouseLeave.bind(this)}
      itemClick = {this.props.clickItem}
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

export default onClickOutside(App);