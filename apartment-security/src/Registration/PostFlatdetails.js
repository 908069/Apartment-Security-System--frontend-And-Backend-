import React,{useState}from 'react'
import axios from 'axios'
function PostFlatdetails(props) {
    const [flatDetails, setFlatDetails] = useState({
        flatNo:"",
        floorNo:"",

    })
    const handleFlatDetails=(e)=>{
        const name =e.target.name
       const value=e.target.value
       setFlatDetails({...flatDetails,[name] : value})
    } 
    const handleSubmitd=(e)=>{
        e.preventDefault()
        const newRecord={...flatDetails}
        console.log(newRecord)

        axios.post('http://localhost:8082/springfox/api/owner/flatDetails',flatDetails)
        .then(response=>{
           console.log(response)
           if(response.status == 200){
           document.getElementById("showSuccessResponseflatdetails").innerHTML = "Your data entered successfully."
           alert("SignUp Successfully")
           props.history.replace('/login')}
           else{
              document.getElementById("showSuccessResponseflatdetails").innerHTML = "An error occurred while uploading the data."
           }
        })
        .catch(error=>{
           console.log(error)
       })
    }
    return (
        <div>
            <h3> Flat Details</h3>
            <form action ="" onSubmit={handleSubmitd} >
                     <label htmlFor="flatNo" 
                    >Flat Number</label>
                    <br></br>
                    <input type="text"  autoComplete="off" onChange={handleFlatDetails}
                     value={flatDetails.flatNo} 
                     name="flatNo" id="flatNo" required/>
                    <br></br>
                    <label htmlFor="floorNo" 
                    >Floor Number</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleFlatDetails}
                    value={flatDetails.floorNo} 
                    name="floorNo" id="floorNo" required/>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
                <div id="showSuccessResponseflatdetails"></div>
        </div>
    )
}

export default PostFlatdetails
