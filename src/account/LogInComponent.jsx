import React from "react";
import { Link } from "react-router-dom";
import { setCookies } from "../cookies/cookies";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: "",
            checkbox: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        this.setState({
            ...this.state,
            [event.target.name]: value,
        });
    }

    handleSubmit(event){
        const headers = {
            'method': "POST",
            'headers':{
                'Content-Type': "application/json"
            },
            "body": JSON.stringify(this.state)
        }

        fetch(`${process.env.REACT_APP_API_URL}user/login`, headers)
        .then((response) => {
            return response.json()
        })
        .then((data) => {

            if (data.status === 200){
                window.location.href='/'
                setCookies(data)
                document.getElementById('#msg').classList.add("alert alert-primary")
                console.log("hello am i fomr msg",document.getElementById('#msg'))
            } else {
                alert(data.msg)
                document.getElementById('#msg').innerHTML = data.msg
            }
            
        })
        .catch((error) => {
            console.log("error", error)
            return error
        })
        event.preventDefault()
    }

    
    render(){
        return (
            <section className="vh-100 col-md-9 vw-100 mt-4">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <div>
                                <h4>Publisher</h4>
                                <p>Share your writings to the world</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample " />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={this.handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="bi bi-facebook"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="bi bi-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="bi bi-linkedin"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="text" id="username" className="form-control form-control-lg"
                                    placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange}/>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" value={this.state.password} name="password"  onChange={this.handleChange}/>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value={this.state.checkbox}
                                        onChange={this.handleChange} id="checkbox" name="checkbox"/>
                                    <label className="form-check-label" htmlFor="checkbox">
                                        Remember me
                                    </label>
                                    </div>
                                    <a href="/" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                    style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}}>Login</button>
                                    <h5 className="fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href="/"
                                        className="link-danger" to="/register">Register</Link></h5>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;