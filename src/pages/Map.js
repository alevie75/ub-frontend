import React from "react";
import {Navigate} from "react-router-dom";

class UBMap extends React.Component {
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
                <p>Map Page</p>
            </div>
        );
    }
}

export default UBMap;