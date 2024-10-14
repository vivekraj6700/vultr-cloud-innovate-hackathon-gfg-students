import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Registration</h2>
                    </div>
                    <div className="row clearfix">
                        <div className>
                            <form>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                                            <input type="text" name="name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                                            <input type="text" name="name" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>

                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                                    <input type="password" name="password" placeholder=" Password" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone" /></span>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>

                                <div className="input_field select_option">
                                    <select>
                                        <option>Select a country</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>
                                    <div className="select_arrow" />
                                </div>
                                <div className="input_field checkbox_option">
                                    <input type="checkbox" id="cb1" />
                                    <label htmlFor="cb1">I agree with terms and conditions</label>
                                </div>
                                <div className="input_field checkbox_option">
                                    <input type="checkbox" id="cb2" />
                                    <label htmlFor="cb2">I want to receive the newsletter</label>
                                </div>
                                <div className='register_signup'>
                                    <p><Link to={"/login"}>Sign Up</Link></p>
                                </div>
                                <input className="button" type="submit" defaultValue="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register;
