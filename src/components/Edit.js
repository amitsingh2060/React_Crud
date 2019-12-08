import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fullName:'',
            job:'front-End',
            userId:this.props.match.params.id
        }
    }

    inputChange = (userData) => {
        this.setState({[userData.target.name]:userData.target.value})
    }

    componentDidMount(){
        Axios.get('https://reqres.in/api/users/' + this.state.userId)
        .then(response => {
            console.log(response.data.data.first_name)
            this.setState({fullName:response.data.data.first_name, job:response.data.data.job})
        })
    }

    inputSubmit = (userSubmit) => {
       userSubmit.preventDefault();
    //    console.table(this.state)
       Axios.put('https://reqres.in/api/users/' + this.state.userId,{
             name:this.state.fullName,
             job:this.state.job
       })
       .then(response => {
           console.log(response)
       })
       this.props.history.push('/show/' + this.state.userId)
    }
    
    render() {
        // console.log(this.props.match.params.id)

        // now using state to check , we are getting data or not
        //log(this.state.userId)
        
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5 ml-5">
                        <form onSubmit={this.inputSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Enter name" name="fullName" value={this.state.fullName} onChange={this.inputChange}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Job</label>
                                    <input type="text" className="form-control"  placeholder="enter job" name="job" value={this.state.job} onChange={this.inputChange }/>
                                </div>

                                <button type="submit" className="btn btn-primary">Edit Now</button>
                        </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Edit;