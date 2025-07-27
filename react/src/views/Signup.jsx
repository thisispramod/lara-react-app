import { Link } from "react-router-dom";

export default function Signup() {
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return ( 
        <form onSubmit={onSubmit} >
            <h1 className="title">
                Signup for free
            </h1>
            <input placeholder="Full Name"></input>
            <input placeholder="Email Address"></input>
            <input placeholder="Password"></input>
            <input placeholder="Password Confirmation"></input>
            <button className="btn btn-block">Login</button>
            <p className="message">Already Registered?
                <Link to="/login">Sign In</Link>
            </p>
        </form> 
    )
}