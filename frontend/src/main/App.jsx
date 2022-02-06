import React from "react";
import './App.css'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'

const appComponent = props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Home></Home>
        <Footer></Footer>
    </div>


export default appComponent