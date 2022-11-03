import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
import "./navbar.css"

export function LoggedIn(){
    return (
        <Fragment>
            <li className="nav-item" >
                <i className="bi bi-box-arrow-left"></i>&nbsp;&nbsp;
                Log Out
            </li>
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
                <i className="bi bi-box-arrow-in-right"></i>&nbsp;&nbsp;
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
            active: {
                home: true,
                post: false,
                notify: false,
                profile: false,

            }
        }
        this.toggleActiveClass = this.toggleActiveClass.bind(this)
    }
    toggleActiveClass( id){
        let active_state = {
            home: false,
            post: false,
            notify: false,
            profile: false,
        }
        
        active_state[id] = true
        this.setState({
            active: active_state
        })
        
    }
    render(){
        let log;
        if (this.state.loggedin){
           log = <LoggedIn />
        }else {
            log = <LoggedOut />
        }
        
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-black bg-white" >
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                <img src={logo} alt="logo" style={{width: "3rem",}}/>
            </Link>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto font-weight-light">
                <li className={`nav-item ${this.state.active['home'] ? 'active' : ''}` } onClick={() => this.toggleActiveClass('home')}>
                    <Link to="/" className="nav-link" aria-current="page">
                    <i className="bi bi-house-door"></i>&nbsp;&nbsp;
                        Home
                    </Link>
                </li>
                <li  className={`nav-item ${this.state.active['post'] ? 'active' : ''}` } onClick={() => this.toggleActiveClass('post')}>
                    <Link to="/" className="nav-link text-black" >
                        <i className="bi bi-pencil-square"></i>&nbsp;&nbsp;
                        Create Post
                    </Link>
                </li>
                <li className={`nav-item ${this.state.active['notify'] ? 'active' : ''}` }
                     onClick={ () => this.toggleActiveClass('notify')}>
                    <Link to="/" className="nav-link text-black">
                        <i className="bi bi-bell"></i>&nbsp;&nbsp;
                        Notifications
                    </Link>
                </li>
                <li className={`nav-item ${this.state.active['profile'] ? 'active' : ''}` } onClick={ () => this.toggleActiveClass('profile')}>
                    <Link to="/" className="nav-link text-black">
                    <i className="bi bi-person"></i>&nbsp;&nbsp;
                        Profile
                    </Link>

                </li>
                {log}
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