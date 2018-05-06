import React from 'react'

export default class MenuBox extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      total: 0,
      appetizerDisplay: false
    } 
   }

   handleItemClick(e) {
     console.log(e.target.value)
     this.props.appState.total += JSON.parse(e.target.value);
   }

  render() {
    return (
    <div className="menuContainer">
      <div className="nav-bar">
      <button className="appetizers categoryButton" onClick={(e) => {this.props.menuCategoryClick(e)}} value={"Appetizer"}>Appetizers</button>
      <button className="mains categoryButton" onClick={(e) => {this.props.menuCategoryClick(e)}} value={"Mains"}>Mains</button>
      <button className="beverages categoryButton" onClick={(e) => {this.props.menuCategoryClick(e)}} value={"Beverages"}>Beverages</button>
      <button className="extra categoryButton" onClick={(e) => {this.props.menuCategoryClick(e)}} value={"Extras"}>Extras</button>
      </div>
      <div className="display-items">
      {(this.props.appState.appetizersDisplay) ? this.props.appetizerProp.map((item) => {
        return <button onClick={(e) => {this.handleItemClick(e)}} key={item.item} className="item-button" value={item.price}>{item.item}</button>
      }) : <div></div>}

      {(this.props.appState.mainsDisplay) ? this.props.mainProp.map((item) => {
        return <button onClick={(e) => {this.handleItemClick(e)}} key={item.item} className="item-button" value={item.price}>{item.item}</button>
      }) : <div></div>}

    {(this.props.appState.beveragesDisplay) ? this.props.beverageProp.map((item) => {
        return <button onClick={(e) => {this.handleItemClick(e)}} key={item.item} className="item-button" value={item.price}>{item.item}</button>
      }) : <div></div>}

    {(this.props.appState.extrasDisplay) ? this.props.extraProp.map((item) => {
        return <button onClick={(e) => {this.handleItemClick(e)}} key={item.item} className="item-button" value={item.price}>{item.item}</button>
      }) : <div></div>}
    </div>
    </div>
  )
}
}

