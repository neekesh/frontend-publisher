import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../profile.png"

class Content extends React.Component{
    render(){
        const imgStyle = {
            "borderRadius": "50%",
            "height": "3rem",
            "width": "3rem",
            
        }
        return (
            <div className="container col-md-7 col-xl-7 ">
                <div className="mt-4">
                    <h3>Home</h3>
                </div>
                <div className="d-flex flex-column card mt-4" >
                    <div className="p-2">
                        <div className="mainheading">
                            <div className="row post-top-meta">
                                <div className="col-md-2">
                                    <a href="/">
                                        <img style={imgStyle} src={profile} alt="profile" />
                                    </a>
                                </div>
                                <div className="col-md-10 row">
                                    <div className="col">
                                        <a className="link-dark" href="/" >John  Doe</a><br/>
                                        <a className="link-dark" href="/" >2016-04-15</a>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <button href="/" className="btn btn-primary text-center">Follow</button>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="text-center"><br/>
                                <h3 className="posttitle">Tile of the Poem</h3>
                                <div className="article-post">
                                    <p>This is the content</p><br></br>
                                    <p>This is the content</p><br></br>
                                    <p>This is the content</p><br></br>
                                    <p>This is the content</p><br></br>
                                    <p>This is the content</p><br></br>
                                    <p>This is the content</p><br></br>
                                    <p>This is the content</p><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                        <hr/>
                    <div className="row mb-4">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon="star" />
                           1.4k like
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon="share-alt"/>
                            1,4k share
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon="comment-alt"/>
                           1.4k talk
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;