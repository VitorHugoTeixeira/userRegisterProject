import React from "react";


const userFormComponent = props => 
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name={props.name} placeholder="Type your name..." value={props.value} className="form-control" onChange={props.callbackUpdate} />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name={props.nameEmail} value={props.valueEmail} placeholder="Type your email..." className="form-control" onChange={props.callbackUpdate} />
                </div>
            </div>
        </div>

        <hr />

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" onClick={props.callbackSave}>Salvar</button>
                <button className="btn btn-secondary ml-2" onClick={props.callbackClear}>Cancelar</button>
            </div>
        </div>
    </div>

export default userFormComponent