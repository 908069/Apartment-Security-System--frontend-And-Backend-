
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import LoginPage from '../LoginPage'

   

import React, { Component } from 'react'

export class HomeMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            logout: true
        }
    }
    
    render() {
        return (
            <>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/login"> Login</NavLink>
           <NavLink to="/registration"> Sign Up</NavLink> 
           
           
        </>
        )
    }
}

export default HomeMenu

