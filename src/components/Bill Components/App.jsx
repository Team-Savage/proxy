import React, { Component } from 'react';
import style from './App.css';
import Calculator from './Calculator.jsx';

export default function Bill (props) {
  return (
      <div className="bill-service">
        <div className="bill-container">
        <div className="header">
        <span>Item</span>
        <span>Price</span>
        
        </div>
        {(props.itemList) ? props.itemList.items.map((item) => {
            return <div className="item" >
            <span>{item.item}</span>
            <span>{item.price}</span>
            </div>
        }) : <div></div>}

        <Calculator subtotal={
          (props.itemList) ? 
            props.itemList.items.reduce((startingValue, itemValue) => {
              return startingValue + JSON.parse(itemValue.price)
            }, 0).toFixed(2) : 0.00
        }
        tax={
          (props.itemList) ?
          (props.itemList.items.reduce((startingValue, itemValue) => {
            return startingValue + JSON.parse(itemValue.price)
          }, 0) * 0.085).toFixed(2) : 0.00
        }
        />
        </div>
      </div>
    )
}
