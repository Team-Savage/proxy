import React, { Component } from 'react';
import style from './App.css';
import Calculator from './Calculator.jsx';

export default class App extends Component {
constructor(props){
    super(props)
    this.state = {
        items: [{name: 'Locomoco', price: 13.95, quantity: 1}],
        subtotal: 0,
        tax: 0,
        total: 0
    }
}

  render() {
    return (
      <div>
        <div className="bill-container">
        <div className="header">
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
        </div>
        {this.state.items.map((item) => {
            return <div className="item">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            </div>
        })}
        <Calculator subtotal={this.state.subtotal} tax={this.state.tax} total={this.state.total}/>
        </div>
      </div>
    )
  }
}

