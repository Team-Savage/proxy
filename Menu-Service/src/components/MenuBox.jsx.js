import React from 'react'

export default class MenuBox extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      total: 0
    } 
   }

  render() {
  return (
    <div className="menuContainer">
      <div className="appetizers categoryButton">Appetizers</div>
      {this.props.appetizerProp.map((item) => {
        return <div className="item-button" value={item.price}>{item.item}</div>
      })}
      <div className="mains categoryButton">Mains</div>
      <div className="beverages categoryButton">Beverages</div>
      <div className="extra categoryButton">Extra</div>
    </div>
  )
}
}

