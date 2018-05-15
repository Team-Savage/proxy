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
    render() {
      return (
        <div>
          <Menu clickItem ={this.handleItemClick} />
          <Bill itemList={this.props.items} subtotal={this.state.subtotal}/>
        </div>
      )
    }
  }

  const mapStateToProps = (state, props) => {
      console.log(state, 'from mapStateToProps')
   return { items: state.selectedItems }
  };
   
   const mapActionsToProps = (dispatch, props) => {
     return bindActionCreators({
       onItemClick: clickMenuItem
     }, dispatch);
   };

export default connect(mapStateToProps, mapActionsToProps)(App);