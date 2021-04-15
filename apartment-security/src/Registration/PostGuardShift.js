import React ,{useState}from 'react'
import axios from 'axios'
function PostGuardShift(props) {
    const [guardShiftDetails,setGuardShiftDetails] = useState({
        guardDate :"",
        guardShift:""

    })
    const handleGuardShift=(e)=>{
        const name =e.target.name
       const value=e.target.value
       setGuardShiftDetails({...guardShiftDetails,[name] : value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newRecord={...guardShiftDetails}
        console.log(newRecord)

        axios.post('http://localhost:8082/springfox/api/guard/guardShift',guardShiftDetails)
        .then(response=>{
           console.log(response)
           if(response.status == 200){
           document.getElementById("showSuccessResponseGuardShiftDetails").innerHTML = "Your data entered successfully."
           alert("SignUp Successfully")
           props.history.replace('/login')
        }
           else{
              document.getElementById("showSuccessResponseGuardShiftDetails").innerHTML = "An error occurred while uploading the data."
           }
        })
        .catch(error=>{
           console.log(error)
       })
    }
    return (
        <div class = "gh">
            <div className="container">
                    
                    <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3>Guard Shift Details</h3>
             <form action ="" onSubmit={handleSubmit}>
             <div className="form-group">
            <label htmlFor="guardDate" 
                    >Guard Joining Date(yyyy-mm-dd)</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleGuardShift}
                     value={guardShiftDetails.guardDate} 
                     name="guardDate" id="guardDate" required/>
                     <br></br>
                     <label htmlFor="guardShift" 
                    >Shift Timing</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleGuardShift}
                     value={guardShiftDetails.guardShift} 
                     name="guardShift" id="guardShift" required/>
                    <br></br>
                    <button class="btn btn-outline-success my-2 my-sm-0" type='submit'>Submit</button>
                    </div>
                </form>
                <div id="showSuccessResponseGuardShiftDetails"></div>
                </div></div>
        </div>
    )
}

export default PostGuardShift
