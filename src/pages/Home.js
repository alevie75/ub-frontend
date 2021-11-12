import React from "react";
import {Link, Navigate} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {redirect: null};
    }

    componentDidMount() {
        let redir = this.props.checkLogin()
        if ( redir == null){
            return
        }
        this.setState({redirect: redir});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let redir = this.props.checkLogin()
        if ( redir == null){
            return
        }
        this.setState({redirect: redir});
    }

    render() {
        if (this.state.redirect) {
            return (
                <Navigate replace to="/map" />
            );
        }
        return (
            <div id = "homeDiv">
                <div id="smallerHomeDiv">
                <h1>No Mo Sno</h1>
                
                    <Link to="/login">
                        <button className="ub-button"> Login </button>
                    </Link>
                    <Link to="/signup">
                        <button className="ub-button"> Signup </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;