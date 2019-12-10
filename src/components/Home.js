import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import {Link} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData:[]
        }
    }
    componentDidMount() {
        Axios.get('https://reqres.in/api/users?page=1')
        .then(response => {
            console.log(response);
            this.setState({userData:response.data.data})
        })
    }
    render() {
       // console.table(this.state.userData)
       // passing data as a token
       console.log(this.props.passingData)
        let showUsers = this.state.userData.map(eachUser => {
            return (
                 <tbody>
                     <tr>
                     <Link to={`/show/${eachUser.id}`}><th scope="row">{eachUser.id}</th></Link>

                        <td>{eachUser.first_name}</td>
                        <td>{eachUser.last_name}</td>
                        <td>{eachUser.email}</td>
                        <Link to={`/edit/${eachUser.id}`}> <td>Edit</td></Link>

                        <Link to={`/delete/${eachUser.id}`}> <td>Delete</td></Link>
                        <td><img src={eachUser.avatar}></img></td>
                     </tr>
                 </tbody>
            );
        });
        return (
            <React.Fragment>
               {/* importing Navbar */}
                <Navbar toNavbar={this.props.passingData}/>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">email</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">img</th>

                                        </tr>
                                    </thead>
                                        {showUsers}
                                </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;