import React, { Component } from 'react'

export default class MainContent extends Component {
    state = {
        pageTitle: "Customer", 
        customerCount: 5,
        customers: [
            {
                id:1,
                name:"sam",
                phone:"0705040607",
                address:{city:"London"},
                photo:"https://picsum.photos/id/237/60/60",
            },
            {
                id:2,
                name:"sam",
                phone:"0705040607",
                address:{city:"London"},
                photo:"https://picsum.photos/id/238/60/60",
            },
            {
                id:3,
                name:"sam",
                phone:"0705040607",
                address:{city:"London"},
                photo:"https://picsum.photos/id/239/60/60",
            },
            {
                id:4,
                name:"sam",
                phone:"0705040607",
                address:{city:"London"},
                photo:"https://picsum.photos/id/236/60/60",

            }, 
        ]
    };

    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
                <span className="badge bg-secondary m-2 ">{this.state.customerCount}</span>
                <button className="btn btn-info" onClick={this.onRefreshClicked}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Photo</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((custo)=>{
                            return(
                                <tr key={custo.id}>
                                    <td>{custo.id}</td>
                                    <td>{custo.name}</td>
                                    <td><img src={custo.photo} alt="Customer" /></td>
                                    <td>{custo.phone?(custo.phone):
                                    (<div className="bg-warning p-2 text-center">No Phone</div>)}</td>
                                    <td>{custo.address.city}</td>
                                    <td>
                                        <button onClick={this.updateClicked} className="btn btn-primary m-1">Update</button>
                                        <button onClick={this.deleteClicked} className="btn btn-danger m-1">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>   
            </div>
        );
    }

    onRefreshClicked = () => {
        this.setState({
            customerCount: 2,
        });
    }

    updateClicked =() => {
        this.setState({
            customerCount: 3,
        });
    }

    deleteClicked =() => {
        this.setState({
            customerCount: 4,
        });
    }
}
