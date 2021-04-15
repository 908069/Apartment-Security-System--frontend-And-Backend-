import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import home from './HomeImage.png';
function OwnerLoginMenu() {
    return (
        <>
            {/* <NavLink to="/"> Details </NavLink> */}
            <div>
            
            <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="position: sticky">
            <a className="navbar-brand" href="#Navbar">
            <NavLink to="/./visitors"> Visitors</NavLink>
           <NavLink to="/./helps"> DomesticHelp </NavLink> 
           <NavLink to="/./alerts"> Security Alert </NavLink>
           <NavLink to="/./vehicles"> Vehicle </NavLink>
           <NavLink to="/./deliveries"> Delivery </NavLink>
           
           </a>
           </a>
           </div>
           <button onClick={()=>window.location = "/login"}>Logout</button>
           
           </div>
           
        </>
    )
}

export default OwnerLoginMenu
