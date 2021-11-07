import React from "react";

class Login extends React.Component {
    render() {
        return (
            <div id="signIn">
                <form id="signinForm">
                    <label className="signinFormlabel" htmlFor="uname"><b>Username</b></label>
                    <input className="signinFormInput" type="text" placeholder="Username" name="uname" required />

                    <br />

                    <label className="signinFormlabel" htmlFor="psw"><b>Password</b></label>
                    <input className="signinFormInput" type="password" placeholder="Password" name="psw" required />
                    <br />

                    <button id="signinFormSubmit" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;