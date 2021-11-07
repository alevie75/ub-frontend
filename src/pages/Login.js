import React from "react";

class Login extends React.Component {
    render() {
        return (
            <div id="signIn">
                <form id="signinForm">
                    <label class="signinFormlabel" htmlFor="uname"><b>Username</b></label>
                    <input class="signinFormInput" type="text" placeholder="Username" name="uname" required />

                    <br />

                    <label class="signinFormlabel" htmlFor="psw"><b>Password</b></label>
                    <input class="signinFormInput" type="password" placeholder="Password" name="psw" required />
                    <br />

                    <button id="signinFormSubmit" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;