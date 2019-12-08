import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

class Create extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fullName:'',
             job:''
        }
    }
    
    inputChange = (userInput) => {
       this.setState({[userInput.target.name]: userInput.target.value})
    }

    inputSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        // console.table(this.state);
        Axios.post('https://reqres.in/api/users',{
            name:this.state.fullName,
            job:this.state.job
        })
        .then(response => {
            // console.log(response)
            // console.table(response.data.token)
        })

    }
    render() {
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

                                <button type="submit" className="btn btn-primary">Create Now</button>
                        </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
        );
    }
}

export default Create;