import React, { Component } from 'react';
import HelpService from '../../services/HelpService';
class UpdateHelpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                arrivalTime:"",
                departureTime: "",
                   helpDate: "",
                   helpId: this.props.match.params.helpId,
                   helpType: "",
                   personName: "",
        }
        this.changearrivalTimeHandler= this.changearrivalTimeHandler.bind(this);
        this.changedepartureTimeHandler= this.changedepartureTimeHandler.bind(this);
        this.changehelpDateHandler = this.changehelpDateHandler.bind(this);
        this.changehelpTypeHandler = this.changehelpTypeHandler.bind(this);
        this.changepersonNameHandler = this.changepersonNameHandler.bind(this);
        this.updateHelp = this.updateHelp.bind(this);
    }  

    componentDidMount(){
        HelpService.getHelpById(this.state.helpId).then((res)=>{
            let domestichelp =  res.data;
            this.setState({
                helpId: domestichelp.helpId,
               
                arrivalTime:domestichelp.arrivalTime,
                departureTime: domestichelp.departureTime,
                   helpDate: domestichelp.helpDate,
                   
                   helpType: domestichelp.helpType,
                   personName: domestichelp.personName,
            });
        });
    }

    updateHelp = (e)=>{
        e.preventDefault();
        let domestichelp ={ helpId: this.state.helpId, arrivalTime: this.state.arrivalTime, helpDate: this.state.helpDate,
            helpType: this.state.helpType, departureTime: this.state.departureTime, personName: this.state.personName
        };
        console.log(JSON.stringify(domestichelp));
        HelpService.updateHelp(domestichelp).then((res) =>{
            this.props.history.push('/helps');
       });
    }  
    
    cancel(){
        this.props.history.push('/helps');
    }

    changearrivalTimeHandler = (event) =>{
        this.setState({arrivalTime: event.target.value});
    }

    changedepartureTimeHandler = (event) =>{
        this.setState({departureTime: event.target.value});
    }

    changehelpDateHandler = (event) =>{
        this.setState({helpDate: event.target.value});
    }
    changehelpTypeHandler= (event) =>{
        this.setState({helpType: event.target.value});
    }
    changepersonNameHandler = (event) =>{
        this.setState({personName: event.target.value});
    }

    render() { 
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Help</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Person Name</label>
                                        <input placeholder="Person Name" name="personName"
                                           
                                            value={this.state.personName}

                                            onChange={this.changepersonNameHandler, this.formValChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Help Date(yyyy-mm-dd)</label>
                                        <input placeholder="Help Date" name="helpDate"
                                           
                                            value={this.state.helpDate}
                                            onChange={this.changeHelpDateHandler, this.formValChange} />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Help Type</label>
                                        <input placeholder="Help Type" name="helpType"
                                           
                                            value={this.state.helpType}
                                            onChange={this.changeHelpDateHandler, this.formValChange} />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Arrival Timee</label>
                                        <input placeholder="Arrival Time" name="arrivalTime"
                                           
                                            value={this.state.arrivalTime}

                                            onChange={this.changeArrivalTimeHandler, this.formValChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Departure Time</label>
                                        <input placeholder="Departure Time" name="departureTime"
                                           
                                            value={this.state.departureTime}

                                            onChange={this.changeDepartureTimeHandler, this.formValChange} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveHelp}>Save</button>
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
 
export default UpdateHelpComponent;