import React, { Component } from 'react';
import AlertService from '../services/AlertService';

class ViewAlertService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            alert: {}
        }

    }

    componentDidMount(){
        AlertService.getAlertById(this.state.id).then( res => {
            this.setState({alert: res.data});
        })
    }

    render() { 
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Security Alert Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Alert Message: </label>
                            <div>{this.state.alert.alertMessage}</div>
                        </div>
                        <div className = "row">
                            <label>Alert Date: </label>
                            <div>{new Date(this.state.alert.alertDate).toDateString()}</div>
                        </div>
                        <div className = "row">
                            <label>Alert Type: </label>
                            <div>{this.state.alert.alertType}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}
 
export default ViewAlertService;