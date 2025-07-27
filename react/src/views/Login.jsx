import { Link } from "react-router-dom";

export default function Login() {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return ( 
        <form onSubmit={onSubmit} >
            <h1 className="title">
                Login into your account
            </h1>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <button className="btn btn-block">Login</button>
            <p className="message">Not Registered <Link to="/signup">
            Create an Account</Link></p>
        </form> 
    )
}