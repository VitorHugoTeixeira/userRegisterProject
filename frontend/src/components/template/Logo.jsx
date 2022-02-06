import React from "react";
import logo from '../../assets/imgs/logo.png'
import './Logo.css'

import {Link} from 'react-router-dom'


const logoCompoent = props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="" />
        </Link>
    </aside>


export default logoCompoent