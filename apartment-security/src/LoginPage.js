import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
import axios from 'axios';
import {NavLink,withRouter} from 'react-router-dom'
class Login extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            emailid:'',
            password:'',
            role:''

        };
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleRole=this.handleRole.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.HandleSignUp=this.HandleSignUp(this)
    }
    handleEmail(e)
    {
        this.setState({emailid :e.target.value});
        
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
            emailid : this.state.emailid,
            password : this.state.password,
            role: this.state.role
        };
        console.log(data);
    //     axios.post('http://localhost:8082/springfox/api/user/users',data)
    //   .then(response=>{
    //      console.log(response)
    //      if(response.status == 200){
    //      document.getElementById("showSuccessResponse").innerHTML = "Your data entered successfully."}
    //      else{
    //         document.getElementById("showSuccessResponse").innerHTML = "An error occurred while uploading the data."
    //      }
    //   })
    //   .catch(error=>{
    //      console.log(error)
    //  })
        
    }
   
    
    
    render(){
        const {history} = this.props
        return(
            <div>
                
                <h1>login</h1>
                <form action ="" onSubmit={this.handleSubmit}>

                <div>
                    <label>Email</label><br></br>
                    <input type="email" value={this.state.emailid} onChange={this.handleEmail} required />
                <br></br>
                </div>

                <div>
                    <label>Password</label>
                    <br></br>
                    <input type="password" value={this.state.password} onChange={this.handlePassword} required/>
                    <br></br>
                    </div>
                <div >
                    
               <input type="radio" id="Guard" name="Role" value="Guard" onClick={this.handleRole} required></input>
               
               <label htmlFor="Guard">Guard  </label>
               
               <input type="radio" id="Owner" name="Role" value="Owner" onClick={this.handleRole}required></input>
               <label htmlFor="Owner">Owner</label>
                </div>

                <button type="submit" value="Submit">Submit</button>
                <button type="submit" onClick={() =>history.push('/registration')}>New User Signup</button>
            </form>
            
            </div>
            
        );
    }

}
export default withRouter(Login);