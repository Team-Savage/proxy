import React, { Component } from 'react'

export default function Item (props) {

    return (
      <div className="item">
            <td>{props.itemName}</td>
            <td>$ {(props.price * props.quantity).toFixed(2)}</td>
            <td>
    <input type='button' value='-' className='qtyminus' field='quantity' 
    onClick={() => {props.decrementFunction(props.itemName, props.price)}}
    />
    <input type="text" value={props.quantity} />
    <input type='button' value='+' className='qtyplus' field='quantity' 
    onClick={() => {props.incrementFunction(props.itemName, props.price)}}
    />  
    <input type='button' value='x' className='deleteItem'
    onClick={()=> {props.deleteItemFunction(props.itemName, props.price)}} 
    />
      </td>
      </div>
    )
}

