import React from "react";
import Main from '../template/Main'


const homeComponent = props =>
    <Main icon="home" title="Start" subtitle="Second Project of the React Chapter">
        <div className="display-4">Welcome</div>
        <hr />
        <p className="mb-0">System developed to demonstrate the build of a register in React.js</p>
    </Main>

export default homeComponent