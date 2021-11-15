import React from "react";
import Cookies from 'js-cookie'
import {Navigate} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {redirect: null}
        this.login = this.login.bind(this);
    }

    async login(event) {
        console.log("logging in")
        function setFailure() {
            document.getElementById("FormStatus").innerText = "Form Submission Failed, Please Try Again";
        }

        let username = event.target.uname.value;
        let password = event.target.psw.value;
        event.preventDefault()
        const response = await fetch(this.props.basePath + "/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
            })
        })
        const responseJSON = await response.json()
        if (response.status > 200) {
            console.log("Login failure: " + response.status)
            setFailure()
            return
        }
        console.log("login successful")
        Cookies.set('token', responseJSON["token"], {expires: 1})
        this.setState({redirect: "Login Successful!"})
    }

    render() {
        if ( this.props.checkLogin() != null){
            return (
                <Navigate replace to="/map" />
            );
        }
        return (
            <div id="signIn">
                <form className="UBForm" id="signinForm" onSubmit={this.login}>
                    <h1 className="FormTitle">Login</h1>

                    <label className="signinFormlabel" htmlFor="uname"><b>Username</b></label>
                    <input className="signinFormInput" type="text" placeholder="Username" name="uname" required />

                    <br />

                    <label className="signinFormlabel" htmlFor="psw"><b>Password</b></label>
                    <input className="signinFormInput" type="password" placeholder="Password" name="psw" required />
                    <br />

                    <button id="signinFormSubmit" className="UBFormSubmit" type="submit">Login</button>
                    <div className="successState">{this.state.redirect}</div>
                    <div id="FormStatus" />
                </form>

            </div>
        );
    }
}

export default Login;