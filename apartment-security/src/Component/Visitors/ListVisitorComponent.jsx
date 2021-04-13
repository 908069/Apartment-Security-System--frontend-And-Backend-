import React, { Component } from 'react';
import VisitorService from '../../services/VisitorService';

class ListVisitorComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            visitors: []
        }
        this.addVisitor = this.addVisitor.bind(this);
        this.editVisitor = this.editVisitor.bind(this);
        this.deleteVisitor = this.deleteVisitor.bind(this);
        this.viewVisitor = this.viewVisitor.bind(this);
    }

    componentDidMount(){
        VisitorService.getVisitors()
        .then((res) => {
            this.setState({visitors: res.data});
        });
    }


    addVisitor(){
        this.props.history.push('/add-visitor');
    }

    editVisitor(id){
        this.props.history.push(`/update-visitor/${id}`)
    }

    deleteVisitor(id){
        VisitorService.deleteVisitor(id).then((res) => {
            this.setState({visitors: this.state.visitors.filter( visitor => visitor.visitorId !== id)});
        });
    }

    viewVisitor(id){
        this.props.history.push(`/view-visitor/${id}`);
    }

    render() { 
        return (
            <div>
                <h2 className="text-center">Visitors List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addVisitor}>Add Visitor</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>                                
                                <th>Visitor Id</th>
                                <th>Visitor Name</th>
                                <th>Flat Number</th>
                                <th>Arrival Date</th>
                                <th>Departure Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.visitors.map(
                                    visitor => 
                                    <tr key= {visitor.visitorId}>
                                        <td>{visitor.visitorId}</td>
                                        <td>{visitor.visitorName}</td>
                                        <td>{visitor.flatNo}</td>
                                        <td>{new Date(visitor.arrivalDate).toDateString()}</td>
                                        <td>{new Date(visitor.departureDate).toDateString()}</td>
                                        <td>
                                            <button onClick = {()=>this.editVisitor(visitor.visitorId)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.deleteVisitor(visitor.visitorId)} className = "btn btn-danger">Delete</button>
                                        </td>

                                        <td>
                                            <button  style = {{marginLeft: "10px"}} onClick = {()=>this.viewVisitor(visitor.visitorId)} className = "btn btn-info">View</button>
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
 
export default ListVisitorComponent;