import { Link } from "react-router-dom";

export default function Signup() {
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} >
                    <h1 className="title">
                        Signup for free
                    </h1>
                    <input type="text" placeholder="Full Name"></input>
                    <input type="email" placeholder="Email Address"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="password" placeholder="Password Confirmation"></input>
                    <button className="btn btn-block">Login</button>
                    <p className="message">Already Registered?
                        <Link to="/login">Sign In</Link>
                    </p>
                </form> 
            </div>
        </div>
    )
}