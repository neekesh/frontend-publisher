import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import "./navbar.css"

export function LoggedIn(){
    return (
        <Fragment>
            <button >Log Out</button>
        </Fragment>
    )
}
export function LoggedOut(){
    return (
        <Fragment>
            <li className="nav-item">
                <Link to="/register" className="nav-link " aria-current="page">
                    <FontAwesomeIcon icon='fa-user-plus' />&nbsp;&nbsp;
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link " aria-current="page">
                    <FontAwesomeIcon icon='sign-in-alt' />&nbsp;&nbsp;
                    Login
                </Link>
            </li>
        </Fragment>
    )
}
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedin: false,
        }
    }
    // this.onloggedIn = this.onloggedIn.bind(this)
    render(){
        let log;
        if (this.state.loggedin){
           log = <loggedIn />
        }else {
            log = <LoggedOut />
        }
        const navbarStyle = {
            'width': "280px",
            "font-size": "1.5rem"
        }
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-black bg-white" style={navbarStyle}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                <img src={logo} alt="logo" style={{width: "3rem",}}/>
            </Link>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                    <FontAwesomeIcon icon='house' />&nbsp;&nbsp;
                    Home
                </Link>
            </li>
            <li>
                <Link to="/" className="nav-link text-black">
                    <FontAwesomeIcon icon="feather" />&nbsp;&nbsp;
                    Create Post
                </Link>
            </li>
            <li>
                <Link to="/" className="nav-link text-black">
                    <FontAwesomeIcon icon='bell' />&nbsp;&nbsp;
                    Notifications
                </Link>
            </li>
            <li>
                <Link to="/" className="nav-link text-black">
                    <FontAwesomeIcon icon="user" />&nbsp;&nbsp;&nbsp;
                    Profile
                </Link>

            </li>
            {log}
            <li>
                <Link to="/" className="nav-link text-black">&nbsp;&nbsp;
                </Link>
            </li>
            </ul>
            {/* <hr></hr> */}
            {/* <div className="dropdown">
            <a to="/" className="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" to="/">New project...</a></li>
                <li><a className="dropdown-item" to="/">Settings</a></li>
                <li><a className="dropdown-item" to="/">Profile</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" to="/">Sign out</a></li>
            </ul>
            </div> */}
        </div>
    )
    }
}

export default Navbar;