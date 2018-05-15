import React from 'react'

export default function Calculator (props) {
  return (
    <div>
    <div className="calculator-container">
      <div>Subtotal: ${props.subtotal}</div>
      <div>Tax: $ {props.tax}</div>
      <div>Total: $ {(JSON.parse(props.subtotal) + JSON.parse(props.tax)).toFixed(2)}</div>
     </div> 
    </div>
  )
}

