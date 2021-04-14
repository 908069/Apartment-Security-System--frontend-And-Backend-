import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink,Switch} from 'react-router-dom'
function HomeMenu() {
    return (
        <>
        <Switch>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/login"> Login</NavLink>
           <NavLink to="/registration"> Sign Up</NavLink> 
           </Switch>
        </>
    )
}

export default HomeMenu
