import React from "react";
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from "./Routes";
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'

const appComponent = props =>
    <div className="app">
        <BrowserRouter>
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </BrowserRouter>
    </div>


export default appComponent