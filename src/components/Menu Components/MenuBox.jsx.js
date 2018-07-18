import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'; 

export default function MenuBox (props) {

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
      {(props.appState.appetizersDisplay) ? props.appetizerProp.map((item) => {
        return <button 
        key={item.item}
        onClick={props.itemClick(item)}
        className="item-button display-item">{item.item}</button>
      }) : <div></div>}
     
      {(props.appState.mainsDisplay) ? props.mainProp.map((item) => {
        return <button 
        onClick={props.itemClick(item)}
       key={item.item} className="item-button" >{item.item}</button>
      }) : <div></div>}

    {(props.appState.beveragesDisplay) ? props.beverageProp.map((item) => {
        return <button 
        onClick={props.itemClick(item)}
        key={item.item} className="item-button" >{item.item}</button>
      }) : <div></div>}

    {(props.appState.extrasDisplay) ? props.extraProp.map((item) => {
        return <button 
        onClick={props.itemClick(item)}
        key={item.item} className="item-button" >{item.item}</button>
      }) : <div></div>}
    </div>

    </div>
    </CSSTransitionGroup>
  )

}

