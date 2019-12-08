import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

class Delete extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:this.props.match.params.id,
             userData:[],
             userDeleted:''
        }
    }

    componentDidMount(){
        Axios.get('https://reqres.in/api/users/' + this.state.userId)
        .then(response => {
           // console.log(response.data.data)
            this.setState({userData:response.data.data})
        })
    }

    deleteUser = () => {
        console.log('he clicked me ');
        Axios.delete('https://reqres.in/api/users/' + this.state.userId)
        .then(response => {
            console.log(response.status)
            this.setState({userDeleted:response.status})
        })
        this.props.history.push('/home/' + this.state.userId)
    }
    
    render() {

       // console.log(this.props.match.params.id)
       console.log(this.state.userData)
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
                                        <button className="btn btn-primary" onClick={this.deleteUser}>Delete</button>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Delete;