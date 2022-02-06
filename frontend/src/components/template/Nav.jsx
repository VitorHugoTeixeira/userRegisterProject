import React from "react";
import NavItem from "./NavItem";
import './Nav.css'

const navComponent = props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" name="Start"></NavItem>
            <NavItem icon="users" name="Users"></NavItem>
        </nav>
    </aside>

export default navComponent