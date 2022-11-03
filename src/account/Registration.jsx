import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component{
    render(){
        return (
            <section className="vh-100" style={{"background-color":" #eee"}}>
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{"border-radius": "25px"}}>
                      <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form className="mx-1 mx-md-4">

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control"  placeholder="First Name" required/>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control"  placeholder="Last Name" required/>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control"  placeholder="Username" required/>
                                </div>
                              </div>
                              

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="email"  className="form-control" placeholder="Your Email" required/>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="password"  className="form-control" placeholder="password" required/>
                                </div>
                              </div>

                              <div className="form-check d-flex justify-content-center mb-5">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required/>
                                <label className="form-check-label" for="form2Example3">
                                  I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                              </div>

                              <div className="d-flex justify-content-between flex-column mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-lg mr-3">Register</button>
                                <h5 className="fw-bold mt-2 pt-1 mb-0">Already have an account? <Link href="/"
                                    className="link-success" to="/login">Login</Link></h5>
                              </div>

                            </form>
                            

                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center flex-column order-1 order-lg-2">
                            <div>
                              <h4>Publisher</h4>
                              <p>Share your writings to the World!!</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid" alt="Sample" />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
    }
}

export default Register;