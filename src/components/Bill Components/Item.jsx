import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from 'react-bootstrap';

export default function Item (props) {

    return (
      <div className="item">
            <div className="itemName item-category">{props.itemName}</div>
            <div className="price item-category">$ {(props.price * props.quantity).toFixed(2)}</div>
            <div className='qty item-category'>
            <div>{props.quantity}</div> 
            <div className="item-buttons">
      <Button size="small" variant="outlined" color="secondary" onClick={() => {props.decrementFunction(props.itemName, props.price)}}>
        Subtract
      </Button>
    <Button size="small" variant="outlined" color="primary" onClick={() => {props.incrementFunction(props.itemName, props.price)}}>
        Add
      </Button>
      <Button size="small" variant="outlined" color="primary" onClick={()=> {props.deleteItemFunction(props.itemName, props.price)}}>
        Delete
      </Button>
      </div>
      </div>
      </div>
    )
}

