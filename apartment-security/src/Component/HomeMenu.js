
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
                <h4>SECURITY MANAGEMENT</h4>
            </div>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        
            <a className="navbar-brand" href="#Navbar">
            <a className="navbar-brand" href="position: sticky">
            <NavLink  to="/"> Home </NavLink>
          
            
            <NavLink  to="/login"> Login</NavLink>
            
           <NavLink  to="/registration"> Sign Up</NavLink> 
           </a>
           </a>
          
           </div>
           </div>
           </div>
           
       
        )
    }
}

export default HomeMenu

