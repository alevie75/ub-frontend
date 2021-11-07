import React from "react";

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;