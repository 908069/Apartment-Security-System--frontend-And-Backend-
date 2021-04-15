import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import home from './HomeImage.png';
function OwnerLoginMenu() {
    return (
        <>
            {/* <NavLink to="/"> Details </NavLink> */}
            <div>
            
            <div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="position: sticky">
            <a class="navbar-brand" href="#Navbar">
            <NavLink to="/./visitors"> Visitors</NavLink>
           <NavLink to="/./helps"> DomesticHelp </NavLink> 
           <NavLink to="/./alerts"> Security Alert </NavLink>
           <NavLink to="/./vehicles"> Vehicle </NavLink>
           <NavLink to="/./deliveries"> Delivery </NavLink>
           
           </a>
           </a>
           </div>
           <button onClick={()=>window.location = "/login"}>Logout</button>
           {/* <div>
           <img src={home} alt="" className="hhh"/>
           </div> */}
           </div>
           
        </>
    )
}

export default OwnerLoginMenu
