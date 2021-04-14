import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
import { withRouter,redirect ,Route} from "react-router";
import axios from 'axios';
import OwnerLoginMenu from "./Component/LoginOwner";
import GuardLoginMenu from "./Component/GuardLoginMenu";

class Login extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            emailId:'',
            password:'',
            role:'',
            msg:'',
            loggedIn:false

        };
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleRole=this.handleRole.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleEmail(e)
    {
        this.setState({emailId :e.target.value});
        
    }
    handlePassword(e)
    {
        this.setState({password : e.target.value})
        
    }
    handleRole(e)
    {
        this.setState({role : e.target.value})
        
    }
    handleSubmit(e)
    {
        e.preventDefault();
        let data={
            emailId : this.state.emailId,
            password : this.state.password,
            role: this.state.role
        };
        console.log(data);
        axios.get('http://localhost:8082/springfox/api/user/users')
      .then(response=>{
         if(response.status == 200){
         const check= response.data.filter(user=>user.emailId===data.emailId);
        console.log(check);
        if(check[0].password===data.password && check[0].role===data.role)
        {
            this.setState({msg : 'Authentication Complete' });
            this.setState({loggedIn:true})
            if(data.role==='owner'){
                this.props.history.push('/.')
            }

            
        }
        else{
            this.setState({msg : 'Invalid Password or Role'});
        }
        }
         else{
            this.setState({msg : 'Authentication error'});
            document.getElementById("showSuccessResponse").innerHTML = "An error occurred while uploading the data."
         }
      })
      .catch(error=>{
        this.setState({msg : 'Invalid Username'});
         console.log(error)
     })
        
    }
    
   
    render(){
        const {history} = this.props
        
        return(
            <div>
                <h1>login</h1>
                <form action ="" onSubmit={this.handleSubmit}>

                <div>
                    <label>Email</label>
                    <br></br>
                    <input type="email" value={this.state.emailId} onChange={this.handleEmail} />
                </div>

                <div>
                    <label>Password</label>
                    <br></br>
                    <input type="password" value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <div >
               <input type="radio" id="Guard" name="Role" value="guard" onClick={this.handleRole}></input>
               <label htmlFor="Guard">Guard  </label>
               
               <input type="radio" id="Owner" name="Role" value="owner" onClick={this.handleRole}></input>
               <label htmlFor="Owner">Owner</label>
                </div>

                <button type="submit" value="Submit">Submit</button>
                <button type="submit" onClick={()=>history.push('/registration')}>New User Signup</button>
                <br></br>
                <h6>{this.state.msg}</h6>
            </form>
            
            </div>
            
        );
    }

}
export default withRouter(Login)