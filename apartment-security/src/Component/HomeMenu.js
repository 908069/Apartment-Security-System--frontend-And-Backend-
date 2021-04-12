import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
function HomeMenu() {
    return (
        <>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/login"> Login</NavLink>
           <NavLink to="/registration"> Sign Up</NavLink> 
           
        </>
    )
}

export default HomeMenu
