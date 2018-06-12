import React, { Component } from 'react'

export default function Item (props) {

  // componentWillMount() {
  //    this.props.incrementFunction(this.state.price);
  // }

  // handleQuantityIncrement() {
  //   let quantityIncrement = this.state.quantity + 1;
  //   this.setState({quantity: quantityIncrement});
  // }

  // handleQuantityDecrement() {
  //   let quantityDecrement = this.state.quantity - 1;
  //   this.setState({quantity: quantityDecrement});
  // }
    return (
      <div className="item">
            <td>{props.itemName}</td>
            <td>$ {props.price}</td>
            <td>
    <input type='button' value='-' className='qtyminus' field='quantity' />
    <input type="text" value="1" />
    <input type='button' value='+' className='qtyplus' field='quantity' 
    />
    <input type='button' value='x' className='deleteItem'
    onClick={()=> {props.deleteItemFunction(props.itemName)}} 
    />
      </td>
      </div>
    )
}

