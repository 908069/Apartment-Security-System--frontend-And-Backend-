import React, { Component } from 'react';
import HelpService from '../../services/HelpService';

class ListHelpComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            domestichelp: []
        }
        this.addHelp = this.addHelp.bind(this);
        this.editHelp = this.editHelp.bind(this);
        this.deleteHelp = this.deleteHelp.bind(this);
        this.viewHelp = this.viewHelp.bind(this);
    }

    componentDidMount(){
        HelpService.getHelp()
        .then((res) => {
            this.setState({domestichelp: res.data});
        });
    }


    addHelp(){
        this.props.history.push('/./add-help');
    }

    editHelp(helpId){
        this.props.history.push(`/./update-help/${helpId}`)
    }

    deleteHelp(helpId){
        HelpService.deleteHelp(helpId).then((res) => {
            this.setState({domestichelp: this.state.domestichelp.filter( help => help.helpId !== helpId)});
        });
    }

    viewHelp(helpId){
        this.props.history.push(`/./view-help/${helpId}`);
    }

    render() { 
        return (
            <div>
                <h2 className="text-center">Domestic Help List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addHelp}>Add Domestic Help</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Help Id</th>
                                <th>Person Name</th>
                                <th>Help Type</th>
                                <th>Help Date</th>
                                <th>Arrival Time</th>
                                <th>Departure Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.domestichelp.map(
                                    help => 
                                    <tr key= {help.id}>
                                        <td>{help.id}</td>
                                        <td>{help.personName}</td>
                                        <td>{help.helpType}</td>
                                        <td>{new Date(help.helpDate).toDateString()}</td>
                                        <td>{help.arrivalTime}</td>
                                        <td>{help.departureTime}</td>
                                        
                                        <td>
                                            <button onClick = {()=>this.editHelp(help.helpId)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteHelp(help.helpId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewHelp(help.helpId)} className = "btn btn-info">View</button>
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
 
export default ListHelpComponent;