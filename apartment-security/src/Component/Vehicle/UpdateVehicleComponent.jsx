import React, { Component } from 'react';
import VehicleService from '../../services/VehicleService';

class UpdateVehicleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                vehicleNo: this.props.match.params.id,
                parkingNo: '',
                basementLevel: '',
                vehicleType: ''
        }
        this.changeVehicleNoHandler= this.changeVehicleNoHandler.bind(this);
        this.changeParkingNoHandler = this.changeParkingNoHandler.bind(this);
        this.changeBasementLevelHandler= this.changeBasementLevelHandler.bind(this);
        this.changeVehicleTypeHandler= this.changeVehicleTypeHandler.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
    }

    componentDidMount(){
        VehicleService.getVehicleById(this.state.vehicleNo).then((res)=>{
            let vehicle =  res.data;
            this.setState({
                vehicleNo: vehicle.vehicleNo,
                parkingNo: vehicle.parkingNo,
                basementLevel: vehicle.basementLevel,
                vehicleType: vehicle.vehicleType
            });
        });
    }
    
    updateVehicle = (e)=>{
        e.preventDefault();
        let vehicle ={ vehicleNo: this.state.vehicleNo, parkingNo: this.state.parkingNo,
            basementLevel: this.state.basementLevel, vehicleType: this.state.vehicleType
        };
        console.log(JSON.stringify(vehicle));
        VehicleService.updateVehicle(vehicle).then((res) =>{
            this.props.history.push('/./vehicles');
       });
    }  
    
    cancel(){
        this.props.history.push('/./vehicles');
    }

    changeVehicleNoHandler = (event) =>{
        this.setState({vehicleNo: event.target.value});
    }

    changeParkingNoHandler = (event) =>{
        this.setState({parkingNo: event.target.value});
    }

    changeBasementLevelHandler = (event) =>{
        this.setState({basementLevel: event.target.value});
    }

    changeVehicleTypeHandler = (event) =>{
        this.setState({vehicleType: event.target.value});
    }

    render() { 
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Vehicle</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter Vehicle Number</label>
                                        <input placeholder="Vehicle Number" name="vehicleNo"
                                            className="form-control" value = {this.state.vehicleNo} 
                                            onChange = {this.changeVehicleNoHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Parking Number</label>
                                        <input placeholder="Parking Number" name="parkingNo"
                                            className="form-control" value = {this.state.parkingNo} 
                                            onChange = {this.changeParkingNoHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Basement Level</label>
                                        <input placeholder="Basement Level" name="basementLevel"
                                            className="form-control" value = {this.state.basementLevel} 
                                            onChange = {this.changeBasementLevelHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Vehicle Type</label>
                                        <input placeholder="Vehicle Type" name="vehicleType"
                                            className="form-control" value = {this.state.vehicleType} 
                                            onChange = {this.changeVehicleTypeHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateVehicle}>Update</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default UpdateVehicleComponent;