import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bill from '../Bill Components/App.jsx';
import Menu from '../Menu Components/App.jsx';
import { bindActionCreators } from 'redux';
import Redux from 'redux';
import { clickMenuItem } from '../../actions/menuActions.js';

class App extends Component {
    constructor(props) {
    super(props)

    this.state = {
        itemList: [],
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    }
  
    handleItemClick(item) {
        return () => {
            this.state.itemList.push(item)
            this.props.onItemClick(this.state.itemList);
        }
    }

    handleDeleteItem(itemName) {
     let sortedItemList = this.state.itemList.sort((a, b) => {
        if (a.item < b.item) {
          return - 1;
        }
        if (a.item > b.item) {
          return 1;
        }
        return 0;
      });
     
      for(let i = 0; i < sortedItemList.length; i++) {
        if(sortedItemList[i].item === itemName) {
        sortedItemList.splice(i, 1);
        this.setState({itemList: this.state.itemList});
        }
      }
    }

    render() {
      return (
        <div>
          <Bill 
          deleteItem = {this.handleDeleteItem.bind(this)}
          clickItem ={this.handleItemClick} itemList={this.props.items} subtotal={this.state.subtotal}/>
        </div>
      )
    }
  }

  const mapStateToProps = (state, props) => {
   return { items: state.selectedItems }
  };
   
   const mapActionsToProps = (dispatch, props) => {
     return bindActionCreators({
       onItemClick: clickMenuItem
     }, dispatch);
   };

export default connect(mapStateToProps, mapActionsToProps)(App);