import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
function OwnerLoginMenu() {
    return (
        <>
            {/* <NavLink to="/"> Details </NavLink> */}
            <NavLink to="/visitors"> Visitors</NavLink>
           <NavLink to="/helps"> DomesticHelp </NavLink> 
           <NavLink to="/alerts"> Security Alert </NavLink>
           <NavLink to="/vehicles"> Vehicle </NavLink>
           <NavLink to="/deliveries"> Delivery </NavLink>

           
        </>
    )
}

export default OwnerLoginMenu
