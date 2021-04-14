import React, { Component } from 'react';
import VehicleService from '../../services/VehicleService';

const regExp1 = RegExp(
    /^-?[0-9]+$/
)

const regExp2 = RegExp(
    /^[A-Z]{2}\s[0-9]{2}\s[A-Z]{1,2}\s[0-9]{4}$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid1 = false;
    let isValid2 = false;


    var temp1 = 0;
    Object.values(rest).forEach(val => {
        if (val.length === 0) {
            isValid1 = false
        } else {
            isValid1 = true
            temp1++;
        }
    });

    var temp2 = 0;
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid2 = false
        } else {
            isValid2 = true
            temp2++;
        }
    });
    if (isValid1 && temp1 === 4 && isValid2 && temp2 === 4) {
        return true;
    }
    return false;
};

class CreateVehicleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleNo: '',
            parkingNo: '',
            basementLevel: '',
            vehicleType: '',
            isError:
            {
                vehicleNo: '',
                parkingNo: '',
                basementLevel: '',
                vehicleType: ''
            }
        }
        this.changeVehicleNoHandler = this.changeVehicleNoHandler.bind(this);
        this.changeParkingNoHandler = this.changeParkingNoHandler.bind(this);
        this.changeBasementLevelHandler = this.changeBasementLevelHandler.bind(this);
        this.changeVehicleTypeHandler = this.changeVehicleTypeHandler.bind(this);
        this.saveVehicle = this.saveVehicle.bind(this);
    }

    saveVehicle = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            // console.log(this.state)
            let vehicle = {
                vehicleNo: this.state.vehicleNo, parkingNo: this.state.parkingNo, basementLevel: this.state.basementLevel,
                vehicleType: this.state.vehicleType
            };
            console.log(JSON.stringify(vehicle));
            VehicleService.createVehicle(vehicle).then(res => {
                this.props.history.push('/./vehicles');
            })
        }
        else {
            console.log("Form is invalid!");
        }
    }

    cancel() {
        this.props.history.push('/./vehicles');
    }

    changeVehicleNoHandler = (event) => {
        this.setState({ visitorNo: event.target.value });
    }

    changeParkingNoHandler = (event) => {
        this.setState({ parkingNo: event.target.value });
    }

    changeBasementLevelHandler = (event) => {
        this.setState({ basementLevel: event.target.value });
    }

    changeVehicleTypeHandler = (event) => {
        this.setState({ vehicleType: event.target.value });
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "vehicleNo":
                isError.vehicleNo =
                    regExp2.test(value) ? "":"Invalid Vehicle Number" ;
                break;
            case "parkingNo":
                isError.parkingNo = regExp1.test(value) ? "":"Number is Invalid";
                break;
            case "basementLevel":
                isError.basementLevel = regExp1.test(value)
                    ? ""
                    : "Number is invalid";
                break;
            case "vehicleType":
                isError.vehicleType = value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({
            isError,
            [name]: value
        })
    };

    render() { 
        const { isError } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Vehicle</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Vehicle Number (AA 00 AA 0000)</label>
                                        <input placeholder="Vehicle Number" name="vehicleNo"
                                            className={isError.vehicleNo.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.vehicleNo}

                                            onChange={this.changeVehicleNoHandler, this.formValChange} />

                                        {isError.vehicleNo.length > 0 && (
                                            <span className="invalid-feedback">{isError.vehicleNo}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Parking Number</label>
                                        <input placeholder="Parking No" name="parkingNo"
                                            className={isError.parkingNo.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.parkingNo}
                                            onChange={this.changeParkingNoHandler, this.formValChange} />
                                        {isError.parkingNo.length > 0 && (
                                            <span className="invalid-feedback">{isError.parkingNo}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Basement Level</label>
                                        <input placeholder="Basement Level" name="basementLevel"
                                            className={isError.basementLevel.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.basementLevel}
                                            onChange={this.changeBasementLevelHandler, this.formValChange} />
                                        {isError.basementLevel.length > 0 && (
                                            <span className="invalid-feedback">{isError.basementLevel}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Vehicle Type</label>
                                        <input placeholder="vehicle Type" name="vehicleType"
                                            className={isError.vehicleType.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.vehicleType}
                                            onChange={this.changeVehicleTypeHandler, this.formValChange} />
                                        {isError.vehicleType.length > 0 && (
                                            <span className="invalid-feedback">{isError.vehicleType}</span>
                                        )}
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveVehicle}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default CreateVehicleComponent;