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
        <div>
            <h3>Guard Shift Details</h3>
             <form action ="" onSubmit={handleSubmit}>
            <label htmlFor="guardDate" 
                    >Guard Joining Date</label>
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
                    <button type='submit'>Submit</button>
                </form>
                <div id="showSuccessResponseGuardShiftDetails"></div>
        </div>
    )
}

export default PostGuardShift
