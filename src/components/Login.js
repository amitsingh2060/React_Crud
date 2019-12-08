import React, { Component } from 'react';

import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password: '',
             userToken:''
        }
    }

    inputChange = (userData)=> {
       this.setState({[userData.target.name]: userData.target.value})
    }
    
    inputSubmit = (submitData) => {
        submitData.preventDefault();

        console.table(this.state);

        Axios.post('https://reqres.in/api/login',{
            email:this.state.email,
            password:this.state.password
        })
        .then(response => {
           // console.log(response)
            console.table(response.data.token)
            this.setState({userToken:response.data.token})
            this.props.giveToken(response.data.token)
            this.props.history.push('/home')
        })
       
        

    }
    render() {
       // console.log(this.state.userToken)
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5 ml-5">
                        <form onSubmit={this.inputSubmit}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.inputChange}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"  placeholder="Password" name="password" value={this.state.password} onChange={this.inputChange }/>
                                </div>

                                <button type="submit" className="btn btn-primary">Login form</button>
                        </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;



// import React from 'react'
// import Axios from 'axios';
// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             usertoken: ""

//         }
//     }
//     handleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         Axios.post('https://reqres.in/api/login', {
//             email: this.state.email,
//             password: this.state.password
//         })
//             .then(response => {
//                 // console.log(response)
//                 //  console.log(response.data.token)
//                 this.setState({ usertoken: response.data.token })
//                 this.props.userLogin(response.data.token)
//                 this.props.history.push('/home')
//                 // console.log(this.state.token)
//             })
//             .catch((err) => alert(err))
//     }

//     render() {
//         return (
//             <React.Fragment >
//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <div class="form-group">
//                             <label for="exampleInputEmail1">Email address</label>
//                             <input type="email" class="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" required />
//                         </div>
//                         <div class="form-group">
//                             <label for="exampleInputPassword1">Password</label>
//                             <input type="password" class="form-control" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" required />
//                         </div>

//                         <button type="submit" class="btn btn-primary">Login</button>
//                     </form>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
// export default Login;