import React, { Component } from 'react';
import VehicleService from '../../services/VehicleService';

class ListVehicleComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            vehicles: []
        }
        this.addVehicle = this.addVehicle.bind(this);
        this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);
        this.viewVehicle = this.viewVehicle.bind(this);
    }

    componentDidMount(){
        VehicleService.getVehicles()
        .then((res) => {
            this.setState({vehicles: res.data});
        });
    }


    addVehicle(){
        this.props.history.push('/add-vehicle');
    }

    editVehicle(id){
        this.props.history.push(`/update-vehicle/${id}`)
    }

    deleteVehicle(id){
        VehicleService.deleteVehicle(id).then((res) => {
            this.setState({vehicles: this.state.vehicles.filter( vehicle => vehicle.vehicleNo !== id)});
        });
    }

    viewVehicle(id){
        this.props.history.push(`/view-vehicle/${id}`);
    }

    render() { 
        return (
            <div>
                <h2 className="text-center">Vehicle List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addVehicle}>Add Vehicle</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Vehicle Number</th>
                                <th>Parking Number</th>
                                <th>Basement Level</th>
                                <th>Vehicle Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.vehicles.map(
                                    vehicle => 
                                    <tr key= {vehicle.vehicleNo}>
                                        <td>{vehicle.vehicleNo}</td>
                                        <td>{vehicle.parkingNo}</td>
                                        <td>{vehicle.basementLevel}</td>
                                        <td>{vehicle.vehicleType}</td>
                                        <td>
                                            <button onClick = {()=>this.editVehicle(vehicle.vehicleNo)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteVehicle(vehicle.vehicleNo)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewVehicle(vehicle.vehicleNo)} className = "btn btn-info">View</button>
                                        </td>
                                     </tr>  
                                )
                            }


                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}
 
export default ListVehicleComponent;