import React from "react";
import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {redirect: null, userCreated: false}
        this.createNewUser = this.createNewUser.bind(this);
    }

    async createNewUser(event){
        console.log("trying to create user");
        function setFailure() {
            document.getElementById("FormStatus").innerText = "User Creation Failed, Please Try Again";
        }

        let username = event.target.uname.value;
        let password = event.target.psw.value;
        let fname = event.target.fname.value;
        let lname = event.target.lname.value;
        event.preventDefault()
        const response = await fetch(this.props.basePath + "/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
                'firstName': fname,
                'lastName': lname,
                'location': "",
            })
        })
        const responseJSON = await response.json()
        if (response.status > 200) {
            setFailure()
            return
        }
        this.setState({userCreated: true})
    }

    render() {
        if ( this.props.checkLogin() != null){
            return (
                <Navigate replace to="/login" />
            );
        }
        if (this.state.redirect){
            return (
                <Navigate replace to="/map" />
            );
        }
        return (
            <div id="SignUp">
                <form className="UBForm" onSubmit={this.createNewUser}>
                    <label className="FormLabel" htmlFor="uname"><b>Username</b></label>
                    <input className="FormInput" type="text" placeholder="Enter Username" name="uname" required />

                    <br />

                    <label className="FormLabel" htmlFor="psw"><b>Password</b></label>
                    <input className="FormInput" type="password" placeholder="Enter Password" name="psw" required />

                    <br />

                    <label className="FormLabel" htmlFor="fname"><b>Firstname</b></label>
                    <input className="FormInput" type="text" placeholder="Enter Firstname" name="fname" required />

                    <br />

                    <label className="FormLabel" htmlFor="lname"><b>Lastname</b></label>
                    <input className="FormInput" type="lname" placeholder="Enter Lastname" name="lname" required />

                    <br />

                    <button className="UBFormSubmit" type="submit">Register</button>
                    <div className="FormStatus" />
                </form>
            </div>
        );
    }
}

export default Register;