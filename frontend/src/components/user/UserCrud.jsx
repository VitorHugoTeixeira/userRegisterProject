import React, { Component } from "react";
import Main from '../template/Main'
import UserForm from './UserForm'
import UserTable from './UserTable'
import axios from 'axios'

const headerProps = {
    icon: "users",
    title: "Users",
    subtitle: "User Register: Insert, Select, Update and Delete"
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}


export default class UserCrud extends Component {

    state = initialState

    constructor(props) {
        super(props)

        this.save = this.save.bind(this)
        this.clear = this.clear.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    componentDidMount(){
        axios.get(baseUrl).then(resp => {
            this.setState({ list: resp.data}) 
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdateList(user, add = true) {
        const list = this.state.list.filter(e => e.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`)
        const list = this.getUpdateList(user, false)
        this.setState({ list })
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning btn-sm" onClick={() => this.load(user)}><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger btn-sm ml-1" onClick={() => this.remove(user)}><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                <UserForm callbackSave={this.save}
                    callbackClear={this.clear} callbackUpdate={this.updateField}
                    name="name" value={this.state.user.name}
                    nameEmail="email" valueEmail={this.state.user.email}>
                </UserForm>
                <UserTable callbackRender={this.renderRows()}></UserTable>
            </Main>
        )
    }
}