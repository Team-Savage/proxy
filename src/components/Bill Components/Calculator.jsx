import React from 'react'

export default function Calculator (props) {
  return (
    <div>
    <div className="calculator-container">
      <div>Subtotal: ${JSON.parse(props.subtotal).toFixed(2)}</div>
      <div>Tax: $ {JSON.parse(props.tax).toFixed(2)}</div>
      <div>Total: $ {(JSON.parse(props.subtotal) + JSON.parse(props.tax)).toFixed(2)}</div>
     </div> 
    </div>
  )
}

