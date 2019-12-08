import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Login from './Login'
import Home from './Home'
import Navbar from './Navbar';
import Show from './Show';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';
import Logout from './Logout';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userToken:''
        }
    }
    gotToken = (receiveData) => {
        console.log(receiveData)
        this.setState({userToken:receiveData})
    }
    
    render() {
        console.log(this.state.userToken)
        return (
            <BrowserRouter>

                <Route path ="/login" render={props => <Login giveToken={(tokenData) => this.gotToken(tokenData)} {...props}/>}/>
                <Route path ="/home" render={props => <Home passingData={this.state.userToken}/>}/>
                <Route path ="/show/:id" component={Show}/>
                <Route path ="/create" component={Create}/>
                <Route path ="/edit/:id" component={Edit}/>
                <Route path ="/delete/:id" component={Delete}/>
                <Route path ="/logout" component={Logout}/>

           </BrowserRouter>
        );
    }
}

export default App;