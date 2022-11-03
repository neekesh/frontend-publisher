import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component{
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
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i class="bi bi-facebook"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i class="bi bi-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i class="bi bi-linkedin"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                    </div>
                                    <a href="/" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                    style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>Login</button>
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