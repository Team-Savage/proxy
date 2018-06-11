import React, { Component } from 'react';
import style from './App.css';
import Calculator from './Calculator.jsx';
import Menu from '../Menu Components/App.jsx';
import Item from './Item.jsx';

export class Bill extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subTotal: 0
    }
  }

  handleIncrement(itemWorth) {
   let newSubTotal = this.state.subTotal += JSON.parse(itemWorth);
   this.setState({subTotal: newSubTotal})
  }

  handleDecrement(itemWorth) {
  let newSubTotal = this.state.subTotal -= JSON.parse(itemWorth);
  this.setState({subTotal: newSubTotal});
  }

  render() {
  return (
      <div className="bill-service">
        <table className="bill-container">
        <div className="header">
        <div className="menu">
        <Menu clickItem={this.props.clickItem}/>
        </div>
        <tr className="bill-category">
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
        </div>
        {(this.props.itemList) ? this.props.itemList.items.map((item) => {
            return <Item 
            deleteItemFunction={this.props.deleteItem}
            incrementFunction={this.handleIncrement.bind(this)}
            decrementFunction={this.handleDecrement.bind(this)} 
            item={item.item} price={item.price} 
            billSubTotal={this.state.subTotal.toFixed(2)}/>
        }) : <div></div>}

        <Calculator 
        subtotal={
          this.state.subTotal.toFixed(2)
        }
        tax={
          (this.state.subTotal * 0.085).toFixed(2)
        }
        />
        </table>
      </div>
    )
  } 
}

export default Bill;