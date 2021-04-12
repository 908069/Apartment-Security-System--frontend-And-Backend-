import React, { Component } from 'react';
import AlertService from '../../services/AlertService';

class ListAlertComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            alerts: []
        }
        this.addAlert = this.addAlert.bind(this);
        this.editAlert = this.editAlert.bind(this);
        this.deleteAlert = this.deleteAlert.bind(this);
        this.viewAlert = this.viewAlert.bind(this);
    }

    componentDidMount(){
        AlertService.getAlerts()
        .then((res) => {
            this.setState({alerts: res.data});
        });
    }


    addAlert(){
        this.props.history.push('/add-alert');
    }

    editAlert(id){
        this.props.history.push(`/update-alert/${id}`)
    }

    deleteAlert(id){
        AlertService.deleteAlert(id).then((res) => {
            this.setState({alerts: this.state.alerts.filter( alert => alert.id !== id)});
        });
    }

    viewAlert(id){
        this.props.history.push(`/view-alert/${id}`);
    }

    render() { 
        return (
            <div>
                <h2 className="text-center">Security Alert List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addAlert}>Add Security Alert</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Alert Id</th>
                                <th>Alert Message</th>
                                <th>Alert Date</th>
                                <th>Alert Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.alerts.map(
                                    alert => 
                                    <tr key= {alert.id}>
                                        <td>{alert.id}</td>
                                        <td>{alert.alertMessage}</td>
                                        <td>{new Date(alert.alertDate).toDateString()}</td>
                                        <td>{alert.alertType}</td>
                                        <td>
                                            <button onClick = {()=>this.editAlert(alert.id)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteAlert(alert.id)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewAlert(alert.id)} className = "btn btn-info">View</button>
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
 
export default ListAlertComponent;