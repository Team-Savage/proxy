import React, { Component } from 'react'

export default function Item (props) {

    return (
      <div className="item">
            <div className="itemName">{props.itemName}</div>
            <div className="price">$ {(props.price * props.quantity).toFixed(2)}</div>
            <div className='qty'>
    <button className='qtyminus' field='quantity' 
    onClick={() => {props.decrementFunction(props.itemName, props.price)}}
    >-</button>
    <span>{props.quantity}</span>
    <button className='qtyplus' field='quantity' 
    onClick={() => {props.incrementFunction(props.itemName, props.price)}}
    >+</button>  
    <button className='deleteItem'
    onClick={()=> {props.deleteItemFunction(props.itemName, props.price)}} 
    >x</button>
      </div>
      </div>

    )
}

