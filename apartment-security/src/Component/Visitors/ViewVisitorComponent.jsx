import React, { Component } from 'react';
import VisitorService from '../../services/VisitorService';


class ViewVisitorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visitorId: this.props.match.params.id,
            visitor: {}
        }

    }

    componentDidMount(){
        VisitorService.getVisitorById(this.state.visitorId).then( res => {
            this.setState({visitor: res.data});
        })
    }

    render() { 
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Visitor Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Visitor Name: </label>
                            <div>{this.state.visitor.visitorName}</div>
                        </div>
                        <div className = "row">
                            <label>Flat Number: </label>
                            <div>{this.state.visitor.flatNo}</div>
                        </div>
                        <div className = "row">
                            <label>Arrival Date: </label>
                            <div>{new Date(this.state.visitor.arrivalDate).toDateString()}</div>
                        </div>
                        <div className = "row">
                            <label>Departure Date: </label>
                            <div>{new Date(this.state.visitor.departureDate).toDateString()}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}
 
export default ViewVisitorComponent;