import React ,{useState,useEffect}from 'react'
import axios from 'axios'


    function UserRegistration(props) {
    const [userregistration, setuserregistration] = useState({
        username :"",
        password :"",
        uniqueKey :"",
        mobilenumber :"",
        email:"",
        role :""
    })
    
    const [role, setrole] = useState()
    
    const handleInput=(e)=>{
       const name =e.target.name
       const value=e.target.value
       setuserregistration({...userregistration,[name] : value})
        
    }
  
   const handleSubmit=(e)=>{
        e.preventDefault()
        const newRecord={...userregistration}
        let data = {
                "emailId": newRecord.email,
                "mobileNo": newRecord.mobilenumber,
                "name": newRecord.username,
                "password": newRecord.password,
                "role": newRecord.role,
                "userId": newRecord.uniqueKey
        }
        //console.log(userregistration)
    axios.post('http://localhost:8082/springfox/api/user/users',data)
      .then(response=>{
         console.log(response)
         
         if(response.status == 200){
        
            console.log(userregistration.role)
            if(userregistration.role=='owner'){
                props.history.push('/addflatdetails')
             }
             else if(userregistration.role=='guard'){
               props.history.push('/addGuardShift')
             }
            //props.history.push('/login')
        }
         //document.getElementById("showSuccessResponse").innerHTML = "Your data entered successfully."}
         else{
             alert("Invalid UserName or Password")
            //document.getElementById("showSuccessResponse").innerHTML = "An error occurred while uploading the data."
         }
      }).then(response=>{
          if(response){
              props.history.replace('/addflatdetails')
          }
      }
        )
      .catch(error=>{
         console.log(error)
     })
     
    }
    
    
    return (
        <div>
            <h1>Registration</h1>
            <form action ="" onSubmit={handleSubmit}>
                <label htmlFor="username" 
                >Username</label>
                <br></br>
                <input type="text" autoComplete="off" onChange={handleInput}
                 value={userregistration.username} name="username" id="username" required/>
                
                <br></br>
                <label htmlFor="password" 
                > Password</label>
                <br></br>
                <input type="password" autoComplete="off" onChange={handleInput}
                 value ={userregistration.password} name="password" id="password" required/>
                
                <br></br>
                <label htmlFor="mobilenumber" 
                > Mobile Number</label>
                <br></br>
                <input type="tel" autoComplete="off" onChange={handleInput}
                 value ={userregistration.mobilenumber} name="mobilenumber" id="mobilenumber" 
                pattern="[0-9]{10}" required/>
                
                <br></br>
                <label htmlFor="uniqueKey" 
                > Unique Key</label>
                <br></br>
                <input type="tel" autoComplete="off" onChange={handleInput} 
                value ={userregistration.uniqueKey} name="uniqueKey" id="uniqueKey" 
                pattern="[0-9]{5}" required/>
                
                <br></br>
                
                
                <br></br>
                <label htmlFor="email" 
                >email</label>
                <br></br>
                <input type="email" id="email"  onChange={handleInput} 
                value ={userregistration.email} autoComplete="off" name="email" required></input>
                
                <br></br>
                <br></br>
                <label> Owner:</label>
                <input type="radio"  
                onChange={() =>setrole("owner"),handleInput} name="role" value="owner" required/>
                <label> Guard:</label>
                <input type="radio" 
                onChange={()=> setrole("guard"),handleInput} name="role" value="guard" />
                <br></br>
                <br></br>
                
                <button type="submit" > Next</button>
            </form>
<div id="showSuccessResponse"></div>



        </div>
    )
}

export default UserRegistration
