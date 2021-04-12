import React, { Component } from 'react';
import HelpService from '../../services/HelpService';
class ViewHelpService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            helpid: this.props.match.params.helpid,
            domestichelp: {}
        }

    }

    componentDidMount(){
        HelpService.getHelpById(this.state.helpid).then( res => {
            this.setState({domestichelp: res.data});
        })
    }

    render() { 
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Domestic Help Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>Person Name: </label>
                            <div>{this.state.domestichelp.personName}</div>
                        </div>
                        <div className = "row">
                            <label>Help Type:</label>
                            <div>{new Date(this.state.domestichelp.helpType).toDateString()}</div>
                        </div>
                        <div className = "row">
                            <label>Help Date: </label>
                            <div>{new Date(this.state.domestichelp.helpDate).toDateString()}</div>
                        </div>
                        <div className = "row">
                            <label>Arrival Time: </label>
                            <div>{new Date(this.state.domestichelp.arrivalTime).toDateString()}</div>
                        </div>
                        <div className = "row">
                            <label>Departure Time: </label>
                            <div>{this.state.domestichelp.departureTime}</div>
                        </div>

                    </div>
               </div>
            </div>
        );
    }
}
 
export default ViewHelpService;