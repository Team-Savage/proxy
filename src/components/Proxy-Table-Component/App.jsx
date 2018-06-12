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

    }

    render() {
      return (
        <div>
          <Bill 
          itemClickFn ={this.props.onItemClick} />
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