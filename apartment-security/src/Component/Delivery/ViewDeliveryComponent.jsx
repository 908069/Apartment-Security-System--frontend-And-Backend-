import React, { Component } from 'react';
import DeliveryService from '../../services/DeliveryService';

class ViewDeliveryComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deliveryId: this.props.match.params.deliveryId,
            delivery: {}
        }

    }

    componentDidMount(){
        DeliveryService.getDeliveryById(this.state.deliveryId).then( res => {
            this.setState({delivery: res.data});
        })
    }

    render() { 
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Delivery Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Person Name: </label>
                            <div>{this.state.delivery.personName}</div>
                        </div>
                        <div className = "row">
                            <label>Delivery Date: </label>
                            <div>{new Date(this.state.delivery.deliveryDate).toDateString()}</div>
                        </div>
                        <div className = "row">
                            <label>Status: </label>
                            <div>{this.state.delivery.status}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}
 
export default ViewDeliveryComponent;