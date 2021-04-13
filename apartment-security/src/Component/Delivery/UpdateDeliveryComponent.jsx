import React, { Component } from 'react';
import DeliveryService from '../../services/DeliveryService';

class UpdateDeliveryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                deliveryId: this.props.match.params.deliveryId,
                deliveryDate:'',
                personName: '',
                status: ''
        }
        this.changeDeliveryDateHandler= this.changeDeliveryDateHandler.bind(this);
        this.changePersonNameHandler= this.changePersonNameHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateDelivery= this.updateDelivery.bind(this);
    }  

    componentDidMount(){
        DeliveryService.getDeliveryById(this.state.deliveryId).then((res)=>{
            let delivery =  res.data;
            this.setState({
                deliveryId: delivery.deliveryId,
                deliveryDate: delivery.deliveryDate,
                personName: delivery.personName,
                status: delivery.status
            });
        });
    }

    updateDelivery = (e)=>{
        e.preventDefault();
        let delivery ={ deliveryId: this.state.deliveryId, personName: this.state.personName, deliveryDate: this.state.deliveryDate,
            status: this.state.status
        };
        console.log(JSON.stringify(delivery));
        DeliveryService.updateDelivery(delivery).then((res) =>{
            this.props.history.push('/deliveries');
       });
    }  
    
    cancel(){
        this.props.history.push('/deliveries');
    }

    changeDeliveryDateHandler= (event) =>{
        this.setState({deliveryDate: event.target.value});
    }

    changePersonNameHandler = (event) =>{
        this.setState({personName: event.target.value});
    }

    changeStatusHandler = (event) =>{
        this.setState({status: event.target.value});
    }

    render() { 
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Delivery</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter Person Name</label>
                                        <input placeholder="Person Name" name="personName"
                                            className="form-control" value = {this.state.personName} 
                                            onChange = {this.changePersonNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Delivery Date(yyyy-mm-dd)</label>
                                        <input placeholder="Delivery Date" name="deliveryDate"
                                            className="form-control" value = {this.state.deliveryDate} 
                                            onChange = {this.changeDeliveryDateHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Status</label>
                                        <select name="status" id="status" onChange={this.changeStatusHandler} >
                                     <option value="Delivered">Delivered</option>
                                     <option value="Pending" selected>Pending</option>
                                    </select>  
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateDelivery}>Update</button>
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
 
export default UpdateDeliveryComponent;