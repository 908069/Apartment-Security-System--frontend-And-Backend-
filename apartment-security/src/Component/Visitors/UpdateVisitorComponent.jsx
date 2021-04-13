import React, { Component } from 'react';
import VisitorService from '../../services/VisitorService';

class UpdateVisitorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                visitorId: this.props.match.params.id,
                visitorName:'',
                flatNo: '',
                arrivalDate: '',
                departureDate: ''
        }
        this.changeVisitorNameHandler= this.changeVisitorNameHandler.bind(this);
        this.changeFlatNoHandler = this.changeFlatNoHandler.bind(this);
        this.changeArrivalDateHandler= this.changeArrivalDateHandler.bind(this);
        this.changeDepartureDateHandler= this.changeDepartureDateHandler.bind(this);
        this.updateVisitor = this.updateVisitor.bind(this);
    }

    componentDidMount(){
        VisitorService.getVisitorById(this.state.visitorId).then((res)=>{
            let visitor =  res.data;
            this.setState({
                visitorId: visitor.visitorId,
                visitorName: visitor.visitorName,
                flatNo: visitor.flatNo,
                arrivalDate: visitor.arrivalDate,
                departureDate: visitor.departureDate
            });
        });
    }

    updateVisitor = (e)=>{
        e.preventDefault();
        let visitor ={ visitorId: this.state.visitorId, visitorName: this.state.visitorName, flatNo: this.state.flatNo,
            arrivalDate: this.state.arrivalDate, departureDate: this.state.departureDate
        };
        console.log(JSON.stringify(visitor));
        VisitorService.updateVisitor(visitor).then((res) =>{
            this.props.history.push('/visitors');
       });
    }  
    
    cancel(){
        this.props.history.push('/visitors');
    }

    changeVisitorNameHandler = (event) =>{
        this.setState({visitorName: event.target.value});
    }

    changeFlatNoHandler = (event) =>{
        this.setState({flatNo: event.target.value});
    }

    changeArrivalDateHandler = (event) =>{
        this.setState({arrivalDate: event.target.value});
    }

    changeDepartureDateHandler = (event) =>{
        this.setState({departureDate: event.target.value});
    }

    render() { 
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Visitor</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter Visitor Name</label>
                                        <input placeholder="Visitor Name" name="visitorName"
                                            className="form-control" value = {this.state.visitorName} 
                                            onChange = {this.changeVisitorNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Flat Number</label>
                                        <input placeholder="Flat Number" name="flatNo"
                                            className="form-control" value = {this.state.flatNo} 
                                            onChange = {this.changeFlatNoHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Arrival Date(yyyy-mm-dd)</label>
                                        <input placeholder="Arrival Date" name="arrivalDate"
                                            className="form-control" value = {this.state.arrivalDate} 
                                            onChange = {this.changeArrivalDateHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Departure Date(yyyy-mm-dd)</label>
                                        <input placeholder="Departure Date" name="departureDate"
                                            className="form-control" value = {this.state.departureDate} 
                                            onChange = {this.changeDepartureDateHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.updateVisitor}>Update</button>
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
 
export default UpdateVisitorComponent;