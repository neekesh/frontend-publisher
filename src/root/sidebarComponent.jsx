import React from "react";
import Navbar from "./navbarComponent";
// import 

class Sidebar extends React.Component{
    render(){
        return (
            <div className="col-md-3">
                <Navbar></Navbar>
            </div>
        )
    }
}

export default Sidebar;