import React from "react";

class Trending extends React.Component{
    render(){
        return(
            <div className="col-md-3 col-xl-4 ">
            
                <div className="input-group mt-4 mb-4">
                    <div className="form-outline">
                        <input id="search-input" type="search" className="form-control" />
                    </div>
                    <button id="search-button" type="button" className="btn btn-primary">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                                
                <h3>Trends</h3>
                <div>
                    <div>
                        <h6>Title of the poem</h6>
                    </div>
                    <div>
                        John Doe
                    </div>
                    <div>
                        !.4 Readers
                    </div>
                </div>
            </div>
        )
    }
}

export default Trending;