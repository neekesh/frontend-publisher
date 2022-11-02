import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../logo.jpg";

export function loggedIn(){
    return (
        <Fragment>
            <button href="">Log Out</button>
        </Fragment>
    )
}
export function loggedOut(){
    return (
        <Fragment>
            <button href="">Register</button>
            < button href="">Log In</button>
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
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px",}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={logo} alt="logo" style={{width: "3rem",}}/>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                <FontAwesomeIcon icon='house' />&nbsp;&nbsp;
                <span></span>
                Home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link text-white">
                <FontAwesomeIcon icon="feather" />&nbsp;&nbsp;
                Create Post
                </a>
            </li>
            <li>
                <a href="/" className="nav-link text-white">
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
                <FontAwesomeIcon icon='bell' />&nbsp;&nbsp;
                Notifications
                </a>
            </li>
            <li>
                <a href="/" className="nav-link text-white">
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
                <FontAwesomeIcon icon="user" />&nbsp;&nbsp;&nbsp;
                Profile
                </a>
            </li>
            <li>
                <a href="/" className="nav-link text-white">&nbsp;&nbsp;
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                
                </a>
            </li>
            </ul>
            {/* <hr></hr> */}
            {/* <div className="dropdown">
            <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"></img>
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="/">New project...</a></li>
                <li><a className="dropdown-item" href="/">Settings</a></li>
                <li><a className="dropdown-item" href="/">Profile</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
            </div> */}
        </div>
    )
    }
}

export default Navbar;