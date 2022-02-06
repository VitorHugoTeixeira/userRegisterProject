import React from "react";
import logo from '../../assets/imgs/logo.png'
import './Logo.css'

const logoCompoent = props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="Logo Image" />
        </a>
    </aside>


export default logoCompoent