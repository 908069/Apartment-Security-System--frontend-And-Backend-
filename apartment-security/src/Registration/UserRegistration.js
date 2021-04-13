import React ,{useState,useEffect}from 'react'
import axios from 'axios'


    function UserRegistration(props) {
    const [userregistration, setuserregistration] = useState({
        username :"",
        password :"",
        uniqueKey :"",
        mobilenumber :"",
        email:"",
        role :"",
        msg:""
        
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
        



        axios.get('http://localhost:8082/springfox/api/user/users')
        .then(response=>{
           if(response.status == 200){
            const check2= response.data.filter(user=>user.userId===data.userId);
           const check1= response.data.filter(user=>user.emailId===data.emailId);
           
           console.log(check2)
         // console.log(check1);
          if(check1.length!=0||check2.length!=0){
              setuserregistration({...userregistration,msg : 'Email is already exist'});
          }
          else if(check2.length!=0){
            setuserregistration({...userregistration,msg : ' Unique Key is already exist'});
          }
          else{
              console.log(data)
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
                   }}
              else{
                   alert("Invalid UserName or Password")
                  
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
          
          }
           else{
              this.setState({...userregistration,msg : 'Authentication error'});
              document.getElementById("showSuccessResponse").innerHTML = "An error occurred while uploading the data."
           }
        })
        .catch(error=>{
           

           console.log(error)
       })

     

    }
    return (
        <div>
            <h1>Registration</h1>
            <form action ="" onSubmit={handleSubmit}>
                <label htmlFor="username" 
                >Name</label>
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
                <br></br><br></br>
                <label htmlFor="email" 
                >email</label>
                <br></br>
                <input type="email" id="email"  onChange={handleInput} 
                value ={userregistration.email} autoComplete="off" name="email" required></input>
                <br></br><br></br>
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
            <h1>{userregistration.msg}</h1>
<div id="showSuccessResponse"></div>
        </div>
    )}
export default UserRegistration
