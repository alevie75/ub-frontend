import React from "react";
import {Navigate} from "react-router-dom";

class UBMap extends React.Component {
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
                <p>Map Page</p>
            </div>
        );
    }
}

export default UBMap;