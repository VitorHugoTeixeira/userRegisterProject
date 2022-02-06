import React from "react";
import './NavItem.css'

const navItem = props => <a href="/" className="item-nav"><i className={`fa fa-${props.icon}`}></i>{props.name}</a>

export default navItem