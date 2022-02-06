import React from "react";
import './NavItem.css'

import {Link} from 'react-router-dom'

const navItem = props => <Link to={props.link} className="item-nav"><i className={`fa fa-${props.icon}`}></i>{props.name}</Link>

export default navItem