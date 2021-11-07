import React from "react";

class Register extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label class="inputBox" htmlFor="uname">Username</label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label class="inputBox" htmlFor="psw">Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" required <br>/>

                    <label class="inputBox" htmlFor="fname">Firstname</label>
                    <input type="text" placeholder="Enter Firstname" name="fname" required />

                    <label class="inputBox" htmlFor="lname">Lastname</label>
                    <input type="lname" placeholder="Enter Lastname" name="lname" required />

                    <label class="inputBox">
                    <button type="submit">Register</button>

                    create submit button
                    send data to API and then take user to home

                </form>
            </div>
        );
    }
}

export default Register;