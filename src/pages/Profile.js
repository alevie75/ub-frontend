import React from "react";
import {Navigate} from "react-router-dom";

class Profile extends React.Component {
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
                <p>Profile Page</p>
            </div>
        );
    }
}

export default Profile;