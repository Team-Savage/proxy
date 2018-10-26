import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'; 

export default function MenuBox (props) {
  let buttons;

  if (props.appState.appetizersDisplay && !props.appState.mainsDisplay && !props.appState.beveragesDisplay && !props.appState.extraDisplay) {
    buttons = props.appetizerProp.map((item) => {
      return <button 
      key={item.item}
      onClick={props.itemClick(item)}
      className="item-button display-item">{item.item}</button>}) 
      } else if(props.appState.mainsDisplay && !props.appState.appetizerDisplay && !props.appState.beveragesDisplay && !props.appState.beveragesDisplay && !props.appState.extraDisplay) {
      buttons = props.mainProp.map((item) => {
        return <button 
        onClick={props.itemClick(item)}
        key={item.item} className="item-button" >{item.item}</button>
        }) 
    } else if (props.appState.beveragesDisplay && !props.appState.appetizerDisplay && !props.appState.mainsDisplay && !props.appState.extraProp) {
      buttons = props.beverageProp.map((item) => {
        return <button 
        onClick={props.itemClick(item)}
        key={item.item} className="item-button">{item.item}</button>
        })
    } else if (props.appState.extrasDisplay && !props.appState.beveragesDisplay && !props.appState.appetizerDisplay && !props.appState.mainsDisplay) {
      buttons = props.extraProp.map((item) => {
        return <button 
        onClick={props.itemClick(item)}
        key={item.item} className="item-button" >{item.item}</button>
        })
    }

    return (
      <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div className="menuContainer">
        <div className="nav-bar">
          <button className="appetizers categoryButton" onClick={(e) => {props.menuCategoryClick(e)}} value={"Appetizer"}>Appetizers</button> 
          <button className="mains categoryButton" onClick={(e) => {props.menuCategoryClick(e)}} value={"Mains"}>Mains</button>
          <button className="beverages categoryButton" onClick={(e) => {props.menuCategoryClick(e)}} value={"Beverages"}>Beverages</button>
          <button className="extra categoryButton" onClick={(e) => {props.menuCategoryClick(e)}} value={"Extras"}>Extras</button>
        </div>
        <div className="display-wrapper">   
        {buttons} 
          </div>

      </div>
    </CSSTransitionGroup>
  )
}


