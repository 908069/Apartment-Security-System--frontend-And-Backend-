import React ,{useState} from 'react'
import axios from'axios'
function PostVehicle() {
    const [vehicle, setvehicle] = useState({
        basementLevel :"",
        parkingNo :"",
        vehicleNo :"",
        vehicleType :""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newRecord={...vehicle}
        console.log(newRecord)
        axios.post('http://localhost:8082/springfox/api/owner/vehicle',vehicle)
      .then(response=>{
         console.log(response)
         if(response.status == 200){
         document.getElementById("showSuccessResponsevehicle").innerHTML = "Your data entered successfully."}
         else{
            document.getElementById("showSuccessResponsevehicle").innerHTML = "An error occurred while uploading the data."
         }
      })
      .catch(error=>{
         console.log(error)
     })
    }
    const handleVehicle=(e)=>{
        const name =e.target.name
       const value=e.target.value
       setvehicle({...vehicle,[name] : value})
    }
    
    return (
        <div>
             <form action ="" onSubmit={handleSubmit} >
            <label htmlFor="basementLevel" >BasementLevel</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleVehicle}
                     value={vehicle.basementLevel} 
                     name="basementLevel" id="basementLevel" required/>
                     <br></br>
                     <label htmlFor="parkingNo" 
                    >ParkingNo</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleVehicle}
                     value={vehicle.parkingNo} 
                     name="parkingNo" id="parkingNo" required/>
                    <br></br>
                    <label htmlFor="vehicleNo" >VehicleNo</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleVehicle} 
                    value={vehicle.vehicleNo} 
                    name="vehicleNo" id="vehicleNo" required/>
                    <br></br>
                    <label htmlFor="vehicleType" >VehicleType</label>
                    <br></br>
                    <input type="text" autoComplete="off" onChange={handleVehicle} 
                    value={vehicle.vehicleType} 
                    name="vehicleType" id="vehicleType" required/>
                    <br></br>
                    <button type='submit'>Add</button>
                </form>
                <div id="showSuccessResponsevehicle"></div>
        </div>
    )
}

export default PostVehicle
