import React, { Component } from 'react';
import VisitorService from '../../services/VisitorService';

const regExp1 = RegExp(
    /^[0-9]+$/
)

const regExp2 = RegExp(/^((19|2[0-9])[0-9]{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)

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
    if (isValid1 && temp1 === 4 && isValid2 && temp2 === 4) {
        return true;
    }
    return false;
};

class CreateVisitorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visitorId: '',
            visitorName: '',
            flatNo: '',
            arrivalDate: '',
            departureDate: '',
            isError:
            {
                visitorName: '',
                flatNo: '',
                arrivalDate: '',
                departureDate: ''
            }
        }
        this.changeVisitorNameHandler = this.changeVisitorNameHandler.bind(this);
        this.changeFlatNoHandler = this.changeFlatNoHandler.bind(this);
        this.changeArrivalDateHandler = this.changeArrivalDateHandler.bind(this);
        this.changeDepartureDateHandler = this.changeDepartureDateHandler.bind(this);
        this.saveVisitor = this.saveVisitor.bind(this);
    }

    saveVisitor = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {
            // console.log(this.state)
            let visitor = {
                visitorId: null, visitorName: this.state.visitorName, flatNo: this.state.flatNo,
                arrivalDate: this.state.arrivalDate, departureDate: this.state.departureDate
            };
            console.log(JSON.stringify(visitor));
            VisitorService.createVisitor(visitor).then(res => {
                this.props.history.push('/./visitors');
            })
        }
        else {
            console.log("Form is invalid!");
        }
    }

    cancel() {
        this.props.history.push('/./visitors');
    }

    changeVisitorNameHandler = (event) => {
        this.setState({ visitorName: event.target.value });
    }

    changeFlatNoHandler = (event) => {
        this.setState({ flatNo: event.target.value });
    }

    changeArrivalDateHandler = (event) => {
        this.setState({ arrivalDate: event.target.value });
    }

    changeDepartureDateHandler = (event) => {
        this.setState({ departureDate: event.target.value });
    }

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };
        switch (name) {
            case "visitorName":
                isError.visitorName =
                    value.length < 5 ? "Atleast 5 characaters required" : "";
                break;
            case "flatNo":
                isError.flatNo = regExp1.test(value) ? "":"Number is Invalid";
                break;
            case "arrivalDate":
                isError.arrivalDate = regExp2.test(value)
                    ? ""
                    : "Date is invalid";
                break;
            case "departureDate":
                isError.departureDate = regExp2.test(value)
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
                            <h3 className="text-center">Add Visitor</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Enter Visitor Name</label>
                                        <input placeholder="Visitor Name" name="visitorName"
                                            className={isError.visitorName.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.visitorName}

                                            onChange={this.changeVisitorNameHandler, this.formValChange} />

                                        {isError.visitorName.length > 0 && (
                                            <span className="invalid-feedback">{isError.visitorName}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Flat Number</label>
                                        <input placeholder="Flat No" name="flatNo"
                                            className={isError.flatNo.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.flatNo}
                                            onChange={this.changeFlatNoHandler, this.formValChange} />
                                        {isError.flatNo.length > 0 && (
                                            <span className="invalid-feedback">{isError.flatNo}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Arrival Date(yyyy-mm-dd)</label>
                                        <input placeholder="Arrival Date" name="arrivalDate"
                                            className={isError.arrivalDate.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.arrivalDate}
                                            onChange={this.changeArrivalDateHandler, this.formValChange} />
                                        {isError.arrivalDate.length > 0 && (
                                            <span className="invalid-feedback">{isError.arrivalDate}</span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Departure Date(yyyy-mm-dd)</label>
                                        <input placeholder="Departure Date" name="departureDate"
                                            className={isError.departureDate.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={this.state.departureDate}
                                            onChange={this.changeDepartureDateHandler, this.formValChange} />
                                        {isError.departureDate.length > 0 && (
                                            <span className="invalid-feedback">{isError.departureDate}</span>
                                        )}
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveVisitor}>Save</button>
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
 
export default CreateVisitorComponent;