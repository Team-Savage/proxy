import React, { Component } from 'react'

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemName: this.props.item,
        price: this.props.price,
        quantity: 1,
        worth: this.props.price
    }

    this.handleQuantityIncrement.bind(this);
  }

  componentWillMount() {
     this.props.incrementFunction(this.state.price);
  }

  handleQuantityIncrement() {
    let quantityIncrement = this.state.quantity + 1;
    this.setState({quantity: quantityIncrement});
  }

  handleQuantityDecrement() {
    let quantityDecrement = this.state.quantity - 1;
    this.setState({quantity: quantityDecrement});
  }

  render() {
    return (
      <div>
            <td>{this.state.itemName}</td>
            <td>$ {(this.state.worth * this.state.quantity).toFixed(2)}</td>
            <td>
    <input type='button' value='-' className='qtyminus' field='quantity' onClick={() => { this.props.decrementFunction(this.state.worth);
    this.handleQuantityDecrement();
    }} />
    <input type="text" value={this.state.quantity} />
    <input type='button' value='+' className='qtyplus' field='quantity' onClick={() => { this.props.incrementFunction(this.state.worth);
    this.handleQuantityIncrement();
    }}/>
    <input type='button' value='x' className='deleteItem' onClick={() => {this.props.deleteItemFunction(this.state.itemName)}}/>
      </td>
      </div>
    )
  }
}

export default Item;
