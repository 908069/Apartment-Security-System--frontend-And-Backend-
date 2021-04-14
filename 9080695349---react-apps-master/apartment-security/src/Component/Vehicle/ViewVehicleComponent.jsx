import React, { Component } from 'react';
import VehicleService from '../../services/VehicleService';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicleNo: this.props.match.params.id,
            vehicle: {}
        }

    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.vehicleNo).then( res => {
            this.setState({vehicle: res.data});
        })
    }

    render() { 
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Vehicle Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Vehicle Number: </label>
                            <div>{this.state.vehicle.vehicleNo}</div>
                        </div>
                        <div className = "row">
                            <label>Parking No: </label>
                            <div>{this.state.vehicle.parkingNo}</div>
                        </div>
                        <div className = "row">
                            <label>Basement Level: </label>
                            <div>{this.state.vehicle.basementLevel}</div>
                        </div>
                        <div className = "row">
                            <label>Vehicle Type: </label>
                            <div>{this.state.vehicle.vehicleType}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}
 
export default ViewVehicleComponent;