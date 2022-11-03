import React from "react";
import Sidebar from "./sidebarComponent";
import Trending from "./TrendingComponent";
import Content from "../content/contentComponent";
import Login from "../account/LogInComponent";
import Register from "../account/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Root extends React.Component{
    render(){
        return(
            <main className="row">
                <BrowserRouter>
                    <Sidebar />
                    <Routes>
                        <Route path="*" element={<div className="col-md-9 row"><Content/> <Trending/></div>}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                    </Routes>
                </BrowserRouter>
            </main>

        )
    }
}

export default Root;