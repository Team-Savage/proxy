import React, { Component } from 'react';
import Axios from 'axios';
import Bill from './Bill Components/App.jsx';
import Menu from './Menu Components/App.jsx';
import Proxy_Table from './Proxy-Table-Component/App.jsx';

export default class App extends Component {
  constructor(props) {
  super(props)
  }

  render() {
    return (
      <div>
      <Proxy_Table />
      </div>
    )
  }
}


