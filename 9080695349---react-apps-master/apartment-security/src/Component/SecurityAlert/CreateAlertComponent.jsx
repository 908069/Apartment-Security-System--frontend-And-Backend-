import React, { Component } from 'react';
import AlertService from '../../services/AlertService';



const regExp = RegExp(/^((19|2[0-9])[0-9]{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)

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
    if (isValid1 && temp1 == 3 && isValid2 && temp2 == 3) {
        return true;
    }
    return false;
};

class CreateAlertComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            alertMessage: '',
            alertDate: '',
            alertType: '',
            isError:
            {
                alertMessage: "",
                alertDate: "",
                alertType: ""
            }
        }
        this.changeAlertMessageHandler = this.changeAlertMessageHandler.bind(this);
        this.changeAlertDateHandler = this.changeAlertDateHandler.bind(this);
        this.changeAlertTypeHandler = this.changeAlertTypeHandler.bind(this);
        this.saveAlert = this.saveAlert.bind(this);
    }

    saveAlert = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            // console.log(this.state)
            let alert = {
                id: null, alertMessage: this.state.alertMessage, alertDate: this.state.alertDate,
                alertType: this.state.alertType
            };
            console.log(JSON.stringify(alert));
            AlertService.createAlert(alert).then(res => {
                this.props.history.push('/./alerts');
            })
        }
        else {
            console.log("Form is invalid!");
        }
    }

    cancel() {
        this.props.history.push('/./alerts');
    }

    changeAlertMessageHandler = (event) => {
        this.setState({ alertMessage: event.target.value });
    }

    changeAlertDateHandler = (event) => {
        this.setState({ alertDate: event.target.value });
    }

    changeAlertTypeHandler = (event) => {
        this.setState({ alertType: event.target.value });
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "alertMessage":
                isError.alertMessage =
                    value.length < 10 ? "Atleast 10 characaters required" : "";
                break;
            case "alertType":
                isError.alertType = value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "alertDate":
                isError.alertDate = regExp.test(value)
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
                            <h3 className="text-center">Add Security Alert</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Alert Message</label>
                                        <input placeholder="Alert Message" name="alertMessage"
                                            className={isError.alertMessage.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.alertMessage}

                                            onChange={this.changeAlertMessageHandler, this.formValChange} />

                                        {isError.alertMessage.length > 0 && (
                                            <span className="invalid-feedback">{isError.alertMessage}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Alert Date(yyyy-mm-dd)</label>
                                        <input placeholder="Alert Date" name="alertDate"
                                            className={isError.alertDate.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.alertDate}
                                            onChange={this.changeAlertDateHandler, this.formValChange} />
                                        {isError.alertDate.length > 0 && (
                                            <span className="invalid-feedback">{isError.alertDate}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Alert Type</label>
                                        <input placeholder="Alert Type" name="alertType"
                                            className={isError.alertType.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.alertType}
                                            onChange={this.changeAlertTypeHandler, this.formValChange} />
                                        {isError.alertType.length > 0 && (
                                            <span className="invalid-feedback">{isError.alertType}</span>
                                        )}
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveAlert}>Save</button>
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
 
export default CreateAlertComponent;