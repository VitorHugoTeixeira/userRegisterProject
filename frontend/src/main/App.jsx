import React from "react";
import './App.css'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'

const appComponent = props => 
    <div className="app">
        <Logo></Logo>
        <Nav></Nav>
        <Main icon="home" title="Start" subtitle="Second Project of the React Chapter"></Main>
        <Footer></Footer>
    </div>


export default appComponent