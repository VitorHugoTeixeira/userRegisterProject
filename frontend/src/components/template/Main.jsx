import React from "react";
import './Main.css'
import Header from './Header'

let mainComponent = props => 
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content">
            Content
        </main>
    </React.Fragment>



export default mainComponent