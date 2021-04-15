
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
            <div className="hhm">
                <div >
            <div className="sm">
                <h>SECURITY MANAGEMENT</h>
            </div>
            <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <a class="navbar-brand" href="#Navbar">
            <a class="navbar-brand" href="position: sticky">
            <NavLink activeStyle to="/"> Home </NavLink>
          
            
            <NavLink activeStyle to="/login"> Login</NavLink>
            
           <NavLink activStyle to="/registration"> Sign Up</NavLink> 
           </a>
           </a>
          
           </div>
           </div>
           </div>
           
       
        )
    }
}

export default HomeMenu

