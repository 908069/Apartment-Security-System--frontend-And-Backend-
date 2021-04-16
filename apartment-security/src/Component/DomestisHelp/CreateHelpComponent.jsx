import React, { Component } from 'react'
import HelpService from '../../services/HelpService';
const regExp = RegExp(/^((19|2[0-9])[0-9]{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)

const formValid = ({ isError, ...rest }) => {
    let isValid1 = false;
    let isValid2 = false;


  
    Object.values(rest).forEach(val => {
        if (val.length === 0) {
            isValid1 = false
        } else {
            isValid1 = true
           
        }
    });

  
    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid2 = false
        } else {
            isValid2 = true
            
        }
    });
    if (isValid1 && isValid2 ) {
        return true;
    }
    return false;
};

class CreateHelpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrivalTime:"",
         departureTime: "",
            helpDate: "",
            helpId: 0,
            helpType: "",
            personName: "",
            isError:
            {
                
            helpDate: "",
            helpType: "",
            }
        }
        this.changeArrivalTimeHandler = this.changeArrivalTimeHandler.bind(this);
        this.changeDepartureTimeHandler = this.changeDepartureTimeHandler.bind(this);
        this.changeHelpDateHandler = this.changeHelpDateHandler.bind(this);
        this.changeHelpTypeHandler = this.changeHelpTypeHandler.bind(this);
        this.changepersonNameHandler = this.changepersonNameHandler.bind(this);
        this.saveHelp = this.saveHelp.bind(this);
    }
    saveHelp = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(this.state)
            let domestichelp = {
                id: null, arrivalTime : this.state.arrivalTime, departureTime: this.state.departureTime,
                helpDate: this.state.helpDate,helpType:this.state.helpType,personName:this.state.personName
            };
            console.log(JSON.stringify(domestichelp));
            HelpService.createHelp(domestichelp).then(res => {
                this.props.history.push('/./helps');
            })
        }
        else {
            console.log(this.state)
            console.log("Form is invalid!");
        }
    }

    cancel() {
        this.props.history.push('/./helps');
    }

    changeArrivalTimeHandler = (event) => {
        this.setState({ arrivalTime: event.target.value });
    }

    changeDepartureTimeHandler = (event) => {
        this.setState({ departureTime: event.target.value });
    }

    changeHelpDateHandler= (event) => {
        this.setState({ helpDate: event.target.value });
    }
    changeHelpTypeHandler= (event) => {
        this.setState({ helpType: event.target.value });
    }
    changepersonNameHandler= (event) => {
        this.setState({ personName: event.target.value });
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "helpDate":
                isError.helpDate=
                regExp.test(value)
                ? ""
                : "Date is invalid";
                break;
            case "helpType":
                isError.helpType = value.length < 4 ? "Atleast 4 characaters required" : "";
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
                            <h3 className="text-center">Add Help</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Person Name</label>
                                        <input placeholder="Person Name" name="personName"
                                           
                                            value={this.state.personName}

                                            onChange={this.changepersonNameHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Help Date(yyyy-mm-dd)</label>
                                        <input placeholder="Help Date" name="helpDate"
                                            className={isError.helpDate.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.helpDate}
                                            onChange={this.changeHelpDateHandler, this.formValChange} />
                                        {isError.helpDate.length > 0 && (
                                            <span className="invalid-feedback">{isError.helpDate}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Help Type</label>
                                        <input placeholder="Help Type" name="helpType"
                                           
                                            value={this.state.helpType}
                                            onChange={this.changeHelpDateHandler, this.formValChange} />
                                        {isError.helpType.length > 0 && (
                                            <span className="invalid-feedback">{isError.helpType}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Arrival Time</label>
                                        <input placeholder="Arrival Time" name="arrivalTime"
                                           
                                            value={this.state.arrivalTime}

                                            onChange={this.changeArrivalTimeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Departure Time</label>
                                        <input placeholder="Departure Time" name="departureTime"
                                           
                                            value={this.state.departureTime}

                                            onChange={this.changeDepartureTimeHandler} />
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

export default CreateHelpComponent
