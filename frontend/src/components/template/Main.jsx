import React from "react";
import './Main.css'
import Header from './Header'

let mainComponent = props => 
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>



export default mainComponent