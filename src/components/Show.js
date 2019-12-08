import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

class Show extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:this.props.match.params.id,
            userData:[]
        }
    }
    
    componentDidMount(){
        Axios.get('https://reqres.in/api/users/' + this.state.userId)
        .then(response => {
            console.log(response.data.data);
            this.setState({userData:response.data.data})
        })
    }
    render() {
        //checking data which we have send from the home.js
        // console.log(this.props.match.params.id);
        // now we are checkig, we got the data from state userData so...
        console.table(this.state.userData)
        return (
            <React.Fragment>
            <Navbar/>
            <div className="container mt-5 ml-auto">
                <div className="row">
                    <div className="col-6">
             
                        <div className="card">
                            <img src={this.state.userData.avatar} className="card-img-top" alt="..."/>
                                <div class="card-body">
                                     <h5 class="card-title">Full Name: {this.state.userData.first_name} {this.state.userData.last_name}</h5>
                                        <p class="card-text">Email Id:{this.state.userData.email}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Show;