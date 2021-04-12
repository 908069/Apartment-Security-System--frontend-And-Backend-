import axios from 'axios'
import React,{useState,useEffect} from 'react'

function GetVehicle() {
    const [vehicleGet, setVehicleGet] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8082/springfox/api/owner/vehicle')
        .then(res=>{
        console.log(res)
        setVehicleGet(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    return (
        <div>
            <ul>{
                vehicleGet.map(post=> <li key={post.id}>{post.vehicleNo}</li> )
            }
            </ul>
        </div>
    )
}

export default GetVehicle
