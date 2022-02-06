import React from "react";
import NavItem from "./NavItem";
import './Nav.css'

const navComponent = props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link="/" icon="home" name="Start"></NavItem>
            <NavItem link="/users" icon="users" name="Users"></NavItem>
        </nav>
    </aside>

export default navComponent