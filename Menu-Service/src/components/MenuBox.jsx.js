import React from 'react'

function MenuBox(props) {
  return (
    <div className="menuContainer">
      <div className="appetizers categoryButton">Appetizers</div>
      <div className="mains categoryButton">Mains</div>
      <div className="beverages categoryButton">Beverages</div>
      <div className="extra categoryButton">Extra</div>
    </div>
  )
}

export default MenuBox;
