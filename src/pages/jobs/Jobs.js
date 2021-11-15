import React from "react";
import {Link, Navigate} from "react-router-dom";

class Jobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {redirect: null};
    }

    render() {
        if ( this.props.checkLogin() == null){
            return (
                <Navigate replace to="/login" />
            );
        }
        return (
            <div>
                <div className="UBButton">
                    <Link to="jobs/create">
                        <button>
                            Create Job
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Jobs;