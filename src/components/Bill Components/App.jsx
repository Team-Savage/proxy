import React, { Component } from 'react';
import style from './App.css';
import Calculator from './Calculator.jsx';
import Menu from '../Menu Components/App.jsx';
import Item from './Item.jsx';

export class Bill extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subTotal: 0,
      itemList: []
    }
  }

  handleItemClick(item) {
    return () => {
        this.state.itemList.push(item)
        this.props.itemClickFn(this.state.itemList);
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

  handleDeleteItem(itemName) {
     for(let i = 0; i < this.state.itemList.length; i++) {
       if(this.state.itemList[i].item === itemName) {
       this.state.subTotal = this.state.subTotal - this.state.itemList[i].price;
       this.state.itemList.splice(i, 1);
       }
     }
     this.setState({itemList: this.state.itemList});
   }

  render() {

  return (
      <div className="bill-service">
        <table className="bill-container">
        <div className="header">
        <div className="menu">
        <Menu clickItem={this.handleItemClick.bind(this)}/>
        </div>
        <tr className="bill-category">
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        </tr>
        </div>
        {(this.state.itemList) ? this.state.itemList.map((item) => {
            return <Item 
            deleteItemFunction={this.handleDeleteItem.bind(this)}
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