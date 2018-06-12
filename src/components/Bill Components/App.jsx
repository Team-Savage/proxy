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
    let index;
    let copy = this.state.itemList.slice();

     for(let i = 0; i < copy.length; i++) {
       if(copy[i].item === itemName) {
       index = i;
       }
     }

    copy.splice(index, 1);

    this.setState({
      itemList:copy,
      subtotal: this.state.subTotal - this.state.itemList[index].price
    })
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
        {(this.state.itemList) ?

          this.state.itemList.map((item) => {
            return <Item
            itemName={item.item} 
            deleteItemFunction={this.handleDeleteItem.bind(this)}
            incrementFunction={this.handleIncrement.bind(this)}
            decrementFunction={this.handleDecrement.bind(this)} 
            price={item.price} 
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