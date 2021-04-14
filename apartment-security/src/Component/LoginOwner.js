import React ,{useState}from 'react'
import ReactDOM from 'react-dom'
import {NavLink,Switch} from 'react-router-dom'
import LoginPage from '../LoginPage'

function OwnerLoginMenu() {
    const [logout, setlogout] = useState(true)
 const HandleLogout=()=>{
    setlogout(false)
}
<LoginPage name={logout}/>
    return (
        <>
        
            {/* <NavLink to="/"> Details </NavLink> */}
            <div>
            <Switch>
            <NavLink to="/./visitors"> Visitors</NavLink>
           <NavLink to="/./helps"> DomesticHelp </NavLink> 
           <NavLink to="/./alerts"> Security Alert </NavLink>
           <NavLink to="/./vehicles"> Vehicle </NavLink>
           <NavLink to="/./deliveries"> Delivery </NavLink>
           </Switch>
           </div>
           <button onClick={HandleLogout} > Logout</button>
        </>
    )
}

export default OwnerLoginMenu
