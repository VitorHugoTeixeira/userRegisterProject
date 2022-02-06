import React from "react";

const userTableComponent = props =>
    <table className="table mt-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.callbackRender}
        </tbody>
    </table>

export default userTableComponent