import { Link } from "react-router-dom";

export default function Login() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} >
                    <input placeholder="Email"></input>
                    <input placeholder="Password"></input>
                    <button className="btn btn-block">Login</button>
                    <p className="message">Not Registered <Link to="signup">
                    Create an Account</Link></p>
                </form>
            </div>
            Login
        </div>
    )
}