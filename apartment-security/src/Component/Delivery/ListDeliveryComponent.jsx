import React, { Component } from 'react';
import DeliveryService from '../../services/DeliveryService';

class ListDeliveryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            deliveries: []
        }
        this.addDelivery = this.addDelivery.bind(this);
        this.editDelivery = this.editDelivery.bind(this);
        this.deleteDelivery = this.deleteDelivery.bind(this);
        this.viewDelivery = this.viewDelivery.bind(this);
    }

    componentDidMount(){
        DeliveryService.getDelivery()
        .then((res) => {
            this.setState({deliveries: res.data});
        });
    }


    addDelivery(){
        this.props.history.push('/add-delivery');
    }

    editDelivery(deliveryId){
        this.props.history.push(`/update-delivery/${deliveryId}`)
    }

    deleteDelivery(deliveryId){
        DeliveryService.deleteDelivery(deliveryId).then((res) => {
            this.setState({deliveries: this.state.deliveries.filter( delivery => delivery.deliveryId !== deliveryId)});
        });
    }

    viewDelivery(deliveryId){
        this.props.history.push(`/view-delivery/${deliveryId}`);
    }

    render() { 
        return (
            <div>
                <h2 className="text-center">Deliveries List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addDelivery}>Add Delivery </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Delivery Id</th>
                                <th>Person Name</th>
                                <th>Delivery Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.deliveries.map(
                                    delivery => 
                                    <tr key= {delivery.deliveryId}>
                                        <td>{delivery.deliveryId}</td>
                                        <td>{delivery.personName}</td>
                                        <td>{new Date(delivery.deliveryDate).toDateString()}</td>
                                        <td>{delivery.status}</td>
                                        <td>
                                            <button onClick = {()=>this.editDelivery(delivery.deliveryId)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteDelivery(delivery.deliveryId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewDelivery(delivery.deliveryId)} className = "btn btn-info">View</button>
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
 
export default ListDeliveryComponent;