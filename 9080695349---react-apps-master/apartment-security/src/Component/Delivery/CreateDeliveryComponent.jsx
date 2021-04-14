import React, { Component } from 'react';
import DeliveryService from '../../services/DeliveryService';

const regExp = RegExp(/^((19|2[0-9])[0-9]{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)


class CreateDeliveryComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            deliveryDate:"",
            deliveryId:"",
            personName: "",
            status: "",
            isError:
            {
                deliveryDate:"",
                status: ""
            }
        }
        this.changeDeliveryDateHandler = this.changeDeliveryDateHandler.bind(this);
        this.changePersonNameHandler = this.changePersonNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveDelivery = this.saveDelivery.bind(this);
    }

    saveDelivery = (e) => {
        e.preventDefault();
        
        let delivery = {
            deliveryId: null, deliveryDate: this.state.deliveryDate, personName: this.state.personName,
            status: this.state.status
        };
        console.log(JSON.stringify(delivery));
            DeliveryService.createDelivery(delivery).then(res => {
                this.props.history.push('/./deliveries');
            })
        
    }

    cancel() {
        this.props.history.push('/./deliveries');
    }

    changeDeliveryDateHandler = (event) => {
        this.setState({ deliveryDate: event.target.value });
    }

    changePersonNameHandler = (event) => {
        this.setState({ personName: event.target.value });
    }

    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "deliveryDate":
                isError.deliveryDate = regExp.test(value)
                    ? ""
                    : "Date is invalid";
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
                            <h3 className="text-center">Add Delivery</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Person Name</label>
                                        <input placeholder="Person Name" name="personName"
                                            value={this.state.personName}

                                            onChange={this.changePersonNameHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Delivery Date(yyyy-mm-dd)</label>
                                        <input placeholder="Delivery Date" name="deliveryDate"
                                            className={isError.deliveryDate.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.deliveryDate}
                                            onChange={this.changeDeliveryDateHandler} />
                                       
                                    </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <select name="status" id="status" onChange={this.changeStatusHandler} >
                                            <option value="Delivered">Delivered</option>
                                            <option value="Pending" selected>Pending</option>
                                            </select>  
                                       
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveDelivery}>Save</button>
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
 
export default CreateDeliveryComponent;
