import React from "react";
import {Link, Navigate} from "react-router-dom";

class Jobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {redirect: null};
    }

    componentDidMount() {
        let redir = this.props.checkLogin()
        if ( redir == null){
            this.setState({redirect: redir});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let redir = this.props.checkLogin()
        if ( redir == null){
            this.setState({redirect: redir});
        }
    }

    render() {
        if (this.state.redirect) {
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