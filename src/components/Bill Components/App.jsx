import React, { Component } from 'react';
import style from './App.css';
import Calculator from './Calculator.jsx';
import Menu from '../Menu Components/App.jsx';
import Item from './Item.jsx';
import _ from 'underscore';

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
        let itemExists = false;

        for(let i = 0; i < this.state.itemList.length; i++) {
          if(this.state.itemList[i].item === item.item) {
            itemExists = true;
            if(!this.state.itemList[i].quantity) {
              this.state.itemList[i].quantity = 2;
            } else {
              this.state.itemList[i].quantity++;
            }
          }
        }
        
        if(!itemExists) {
        this.state.itemList.push(item);  
        }
        this.setState({subTotal: this.state.subTotal + JSON.parse(item.price)});
        this.props.itemClickFn(this.state.itemList);
    }
  }

  handleIncrement(itemName, itemWorth) {
    for(let i = 0; i < this.state.itemList.length; i++) {
      if(this.state.itemList[i].item === itemName) {
        if(!this.state.itemList[i].quantity) {
          this.state.itemList[i].quantity = 2;
        } else {
          this.state.itemList[i].quantity++;
        }      
        break;
      }
    }

    let newSubTotal = this.state.subTotal += JSON.parse(itemWorth);
    this.setState({subTotal: newSubTotal})
  }

  handleDecrement(itemName, itemWorth) {

    for(let i = 0; i < this.state.itemList.length; i++) {
      if(this.state.itemList[i].item === itemName) {
        if(this.state.itemList[i].quantity && this.state.itemList[i].quantity > 1) {
          this.state.itemList[i].quantity--;        
          let newSubTotal = this.state.subTotal -= JSON.parse(itemWorth);
          this.setState({subTotal: newSubTotal})
        }     
        break;
      }
    }

  }

  handleDeleteItem(itemName, itemPrice) { 
    let index;
    let copy = this.state.itemList.slice();
    let totalItemValue = JSON.parse(itemPrice);

     for(let i = 0; i < copy.length; i++) {
       if(copy[i].item === itemName) {
       index = i;
        if(copy[i].quantity) {
          totalItemValue = copy[i].quantity * JSON.parse(copy[i].price);
        } 
       }
     }

    copy.splice(index, 1);

    this.setState({
      itemList:copy,
      subTotal: this.state.subTotal - totalItemValue
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
            quantity={(item.quantity) ? item.quantity : 1}
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