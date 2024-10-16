import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const Login = () => {
    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Login</h2>
                    </div>
                    <div className="row clearfix">
                        <div className>
                            <form>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className='forget_password'>
                                    <p><Link to={"/register"}>Register</Link></p>
                                    <p><Link to={"/forget"}>Forget Password</Link></p>
                                </div>

                                <input className="button" type="submit" defaultValue="Register" />
                                <div className='login_with_text'>
                                    <p>or Login with</p>
                                </div>
                                <div className='login_with_Social'>
                                    <div className='login_with'>
                                        <FaGooglePlusG />
                                        <h3>Google</h3>
                                    </div>
                                    <div className='login_with' style={{ backgroundColor: "#316FF6" }}>
                                        <ImFacebook />
                                        <h3>Facebook</h3>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Login;
