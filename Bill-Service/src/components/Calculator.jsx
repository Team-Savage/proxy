import React from 'react'

export default function Calculator (props) {
  return (
    <div>
    <div className="calculator-container">
      <div>Subtotal: $ {props.subtotal}</div>
      <div>Tax: $ {props.tax}</div>
      <div>Total: $ {props.total}</div>
     </div> 
    </div>
  )
}

