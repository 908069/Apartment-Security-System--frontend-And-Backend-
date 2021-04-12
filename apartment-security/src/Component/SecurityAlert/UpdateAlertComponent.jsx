import React, { Component } from 'react';
import AlertService from '../services/AlertService';

class UpdateAlertComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: this.props.match.params.id,
                alertMessage:'',
                alertDate: '',
                alertType: ''
        }
        this.changeAlertMessageHandler= this.changeAlertMessageHandler.bind(this);
        this.changeAlertDateHandler= this.changeAlertDateHandler.bind(this);
        this.changeAlertTypeHandler = this.changeAlertTypeHandler.bind(this);
        this.updateAlert = this.updateAlert.bind(this);
    }  

    componentDidMount(){
        AlertService.getAlertById(this.state.id).then((res)=>{
            let alert =  res.data;
            this.setState({
                id: alert.id,
                alertMessage: alert.alertMessage,
                alertDate: alert.alertDate,
                alertType: alert.alertType
            });
        });
    }

    updateAlert = (e)=>{
        e.preventDefault();
        let alert ={ id: this.state.id, alertMessage: this.state.alertMessage, alertDate: this.state.alertDate,
            alertType: this.state.alertType
        };
        console.log(JSON.stringify(alert));
        AlertService.updateAlert(alert).then((res) =>{
            this.props.history.push('/alerts');
       });
    }  
    
    cancel(){
        this.props.history.push('/alerts');
    }

    changeAlertMessageHandler = (event) =>{
        this.setState({alertMessage: event.target.value});
    }

    changeAlertDateHandler = (event) =>{
        this.setState({alertDate: event.target.value});
    }

    changeAlertTypeHandler = (event) =>{
        this.setState({alertType: event.target.value});
    }

    render() { 
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Security Alert</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter Alert Message</label>
                                        <input placeholder="Alert Message" name="alertMessage"
                                            className="form-control" value = {this.state.alertMessage} 
                                            onChange = {this.changeAlertMessageHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Alert Date(yyyy-mm-dd)</label>
                                        <input placeholder="Alert Date" name="alertDate"
                                            className="form-control" value = {this.state.alertDate} 
                                            onChange = {this.changeAlertDateHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Alert Type</label>
                                        <input placeholder="Alert Type" name="alertType"
                                            className="form-control" value = {this.state.alertType} 
                                            onChange = {this.changeAlertTypeHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateAlert}>Update</button>
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
 
export default UpdateAlertComponent;