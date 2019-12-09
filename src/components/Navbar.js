import React from 'react'
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home <span class="sr-only">Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/create">My token id is:{props.toNavbar}</a>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/create">Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Log Out</Link>
                            </li>
                        </ul>
                   </div>
               </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
